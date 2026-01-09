import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <h3>MAster Marketing</h3>
                        <p>Strategic Consulting for the Modern Age.</p>
                    </div>
                    <div className={styles.links}>
                        <h4>Connect</h4>
                        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="mailto:contact@mastermarketing.com">Email</a>
                    </div>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} MAster Marketing and Strategy. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
