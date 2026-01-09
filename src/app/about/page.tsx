import styles from './about.module.css';

export default function About() {
    return (
        <main className={styles.container}>
            <section className={styles.hero}>
                <h1>About Matt Aster</h1>
                <p className={styles.subtitle}>Strategist. Marketer. Growth Leader.</p>
            </section>

            <section className={styles.content}>
                <div className={styles.bio}>
                    <p>
                        Matt Aster is a results-oriented executive with a proven track record of driving growth for businesses across various sectors. With a deep expertise in both marketing strategy and operational execution, Matt helps companies navigate the complexities of modern business landscapes.
                    </p>
                    <p>
                        MAster Marketing was founded on the principle that true growth comes from a holistic understanding of the market, the customer, and the product. We don't just deliver campaigns; we deliver sustainable business strategies.
                    </p>
                </div>

                <div className={styles.mission}>
                    <h2>Our Mission</h2>
                    <p>To empower businesses to achieve their full potential through clear, actionable strategy and world-class marketing execution.</p>
                </div>
            </section>
        </main>
    );
}
