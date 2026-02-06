"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/" className={styles.logoLink}>
                        <Image
                            src="/small-logo-icon.png"
                            alt="MAster Marketing Logo"
                            width={40}
                            height={40}
                            className={styles.logoImage}
                            unoptimized
                        />
                        <span>MAster Marketing</span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileToggle}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    aria-expanded={isMenuOpen}
                >
                    <span className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`}></span>
                    <span className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`}></span>
                    <span className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`}></span>
                </button>

                {/* Navigation */}
                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link href="/" className={styles.link} onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link href="/services" className={styles.link} onClick={() => setIsMenuOpen(false)}>Services</Link>
                    <Link href="/about" className={styles.link} onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link href="/contact" className={styles.link} onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </nav>
            </div>
        </header>
    );
}
