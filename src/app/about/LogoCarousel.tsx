"use client";

import { motion } from 'framer-motion';
import styles from './LogoCarousel.module.css';

// Using the 5 known logo files
const logos = [
    '/logo_1.png',
    '/logo_2.png',
    '/logo_3.png',
    '/logo_4.png',
    '/logo_5.png',
];

// Duplicate list for seamless loop
const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

export default function LogoCarousel() {
    return (
        <section className={styles.carouselSection}>
            <h3 className={styles.title}>Trusted By Industry Leaders</h3>

            <div className={styles.scroller}>
                <motion.div
                    className={styles.inner}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div key={`${index}`} className={styles.logoContainer}>
                            <img
                                src={logo}
                                alt={`Client Logo ${index + 1}`}
                                className={styles.logoImage}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
