import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Virtual SDR Development | MAster Marketing',
    description: 'Scale your sales outreach with a custom-built, managed Virtual Sales Department.',
};

export default function VirtualSDR() {
    return (
        <main className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroBackground}></div>
                <div className={styles.heroContent}>
                    <h1>Virtual SDR Development</h1>
                    <p>Building your elite Virtual Sales Department. We don't just find talent; we build a high-performance engine for your revenue growth.</p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.contentSection}>
                    <div className={styles.textContent}>
                        <h2>Why a Virtual Sales Department?</h2>
                        <p>Traditional sales hiring is slow, expensive, and risky. Our Virtual SDR (Sales Development Representative) service provides a turnkey solution to scale your top-funnel activity without the administrative burden.</p>
                        <p>We specialized in identifying high-potential talent in emerging markets, training them on your specific product and value prop, and managing their daily output to ensure consistent pipeline generation.</p>
                    </div>
                    <div className={`${styles.card} glass-panel`}>
                        <span className={styles.icon}>🎯</span>
                        <h3>Focused Outreach</h3>
                        <p>Dedicated professionals who live and breathe your outreach strategy every single day.</p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <span className={styles.icon}>💡</span>
                        <h3>Strategy First</h3>
                        <p>We help you define your Ideal Customer Profile (ICP) and craft messaging that actually cuts through the noise.</p>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.icon}>🛠️</span>
                        <h3>SDR Recruitment</h3>
                        <p>We handle the heavy lifting of sourcing and vetting top-tier international talent suited for your culture.</p>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.icon}>📈</span>
                        <h3>Performance Management</h3>
                        <p>Direct oversight and ongoing coaching to ensure KPIs are met and exceeded month over month.</p>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <h2>Ready to scale your outreach?</h2>
                <p>Let's discuss how a virtual sales department can transform your pipeline.</p>
                <Link href="/contact" className={styles.primaryBtn}>Book a Strategy Session</Link>
            </section>
        </main>
    );
}
