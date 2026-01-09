import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Unlock Your Business Potential</h1>
          <p>Strategic expertise for high-growth companies. We bridge the gap between vision and execution.</p>
          <div className={styles.ctaGroup}>
            <Link href="/contact" className={styles.primaryBtn}>Get Started</Link>
            <Link href="/services" className={styles.secondaryBtn}>Our Services</Link>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featureCard}>
          <h3>Strategic Planning</h3>
          <p>Comprehensive roadmaps tailored to your unique market position and goals.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Market Analysis</h3>
          <p>Deep-dive insights into competitors and trends to uncover hidden opportunities.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Growth Optimization</h3>
          <p>Data-driven strategies to maximize revenue and operational efficiency.</p>
        </div>
      </section>

      <section className={styles.aboutPreview}>
        <h2>Why MAster Marketing?</h2>
        <p>With years of experience leading customized strategies for diverse industries, Matt Aster brings a wealth of knowledge and a personal touch to every consultation. We don't just advise; we partner with you for success.</p>
        <Link href="/about" className={styles.textLink}>Learn more about our mission &rarr;</Link>
      </section>
    </main>
  );
}
