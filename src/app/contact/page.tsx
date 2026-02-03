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
                            <h3>Office</h3>
                            <p>Cleveland, OH & Northern Ireland</p>
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
