import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

function markdownToHtml(md: string) {
  // Very small markdown -> HTML converter for common elements used in the docs
  const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // handle code fences
  md = md.replace(/```([\s\S]*?)```/g, (_, code) => `<pre><code>${escapeHtml(code)}</code></pre>`);
  const lines = md.split(/\r?\n/);
  let out = '';
  let inList = false;
  for (let line of lines) {
    if (/^\s*-\s+/.test(line) || /^\s*\*\s+/.test(line)) {
      if (!inList) { out += '<ul>'; inList = true; }
      const item = line.replace(/^\s*[-*]\s+/, '');
      out += `<li>${processInline(item)}</li>`;
      continue;
    }
    if (inList) { out += '</ul>'; inList = false; }
    if (/^#{1}\s+/.test(line)) { out += `<h1>${processInline(line.replace(/^#\s+/, ''))}</h1>`; continue; }
    if (/^#{2}\s+/.test(line)) { out += `<h2>${processInline(line.replace(/^##\s+/, ''))}</h2>`; continue; }
    if (/^#{3}\s+/.test(line)) { out += `<h3>${processInline(line.replace(/^###\s+/, ''))}</h3>`; continue; }
    if (/^>\s+/.test(line)) { out += `<blockquote>${processInline(line.replace(/^>\s+/, ''))}</blockquote>`; continue; }
    if (/^\s*$/.test(line)) { out += '<p></p>'; continue; }
    out += `<p>${processInline(line)}</p>`;
  }
  if (inList) out += '</ul>';
  return out;

  function processInline(text: string) {
    // escape first
    let t = escapeHtml(text);
    // links [text](url)
    t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    // bold **text**
    t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // italic *text*
    t = t.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    return t;
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'docs', 'case-studies', `${slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();
  const md = fs.readFileSync(filePath, 'utf8');
  const html = markdownToHtml(md);

  return (
    <main style={{ padding: '2rem' }}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
