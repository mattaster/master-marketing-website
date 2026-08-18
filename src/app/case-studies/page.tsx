import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export const metadata = {
  title: 'Case Studies'
};

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
    return { slug: name, title };
  });

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Case Studies</h1>
      {items.length === 0 ? (
        <p>No case studies found.</p>
      ) : (
        <ul>
          {items.map(i => (
            <li key={i.slug}>
              <Link href={`/case-studies/${i.slug}`}>{i.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
