import fs from 'fs';
import path from 'path';

function markdownToHtml(md: string) {
  const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
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
    let t = escapeHtml(text);
    t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    t = t.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    return t;
  }
}

export default function KnowledgebasePage() {
  const filePath = path.join(process.cwd(), 'docs', 'aeo-knowledgebase.md');
  let md = '';
  try {
    md = fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    md = '# Knowledgebase not found';
  }
  const html = markdownToHtml(md);
  return (
    <main>
      <div className="doc-content">
        <a className="doc-back" href="/">← Home</a>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </main>
  );
}
