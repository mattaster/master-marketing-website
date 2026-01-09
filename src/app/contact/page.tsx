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
                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={5} required></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>Send Message</button>
                    </form>
                </section>
            </div>
        </main>
    );
}
