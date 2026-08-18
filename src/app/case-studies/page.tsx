import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export const metadata = {
  title: 'Case Studies'
};

function extractExcerpt(md: string) {
  const lines = md.split(/\r?\n/);
  let para = '';
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) {
      if (para) break;
      continue;
    }
    if (line.startsWith('#')) continue;
    para += (para ? ' ' : '') + line.replace(/\[(.*?)\]\([^)]*\)/g, '$1');
    // stop if paragraph becomes long
    if (para.length > 240) break;
  }
  if (!para) return '';
  return para.length > 220 ? para.slice(0, 220).trim() + '…' : para;
}

export default function CaseStudiesPage() {
  const docsDir = path.join(process.cwd(), 'docs', 'case-studies');
  let files: string[] = [];
  try {
    files = fs.readdirSync(docsDir).filter(f => f.endsWith('.md'));
  } catch (e) {
    files = [];
  }

  const items = files.map(f => {
    const name = f.replace(/\.md$/, '');
    const title = name.replace(/[-_]/g, ' ');
    let excerpt = '';
    try {
      const md = fs.readFileSync(path.join(docsDir, f), 'utf8');
      excerpt = extractExcerpt(md);
    } catch (e) {
      excerpt = '';
    }
    return { slug: name, title, excerpt };
  });

  return (
    <main>
      <div className="doc-content">
        <h1>Case Studies</h1>
        {items.length === 0 ? (
          <p>No case studies found.</p>
        ) : (
          <div className="case-grid">
            {items.map(i => (
              <article key={i.slug} className="case-card">
                <h3><Link href={`/case-studies/${i.slug}`}>{i.title}</Link></h3>
                {i.excerpt && <p className="excerpt">{i.excerpt}</p>}
                <Link href={`/case-studies/${i.slug}`} className="read-more">Read case study →</Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
