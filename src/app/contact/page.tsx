import Script from 'next/script';
import styles from './contact.module.css';

export default function Contact() {
    return (
        <main className={styles.container}>
            <div className={styles.wrapper}>
                <section className={styles.info}>
                    <h1>Get in Touch</h1>
                    <p>Ready to elevate your business? Let's start the conversation.</p>

                    <div className={styles.details}>
                        <div className={styles.detailItem}>
                            <h3>Email</h3>
                            <a href="mailto:contact@mastermarketing.com">contact@mastermarketing.com</a>
                        </div>
                        <div className={styles.detailItem}>
                            <h3>Phone</h3>
                            <p>(555) 123-4567</p>
                        </div>
                        <div className={styles.detailItem}>
                            <h3>Office</h3>
                            <p>New York, NY</p>
                        </div>
                    </div>
                </section>

                <section className={styles.formSection}>
                    <Script src="https://js-na2.hsforms.net/forms/embed/243314838.js" strategy="afterInteractive" />
                    <div className="hs-form-frame" data-region="na2" data-form-id="88278fd8-097e-4749-b4d3-d5286be31440" data-portal-id="243314838"></div>
                </section>
            </div>
        </main>
    );
}
