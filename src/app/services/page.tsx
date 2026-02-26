import Link from 'next/link';
import styles from './services.module.css';

interface Service {
    title: string;
    description: string;
    href?: string;
}

export default function Services() {
    const services: Service[] = [
        {
            title: "Fractional CMO",
            description: "Leadership without the overhead. We step in to lead your marketing team, define strategy, and execute plans for scalable growth.",
        },
        {
            title: "Virtual SDR Development",
            description: "Build an elite virtual sales department. We source, train, and manage high-performing SDRs to fuel your revenue engine.",
        },
        {
            title: "Brand Strategy",
            description: "Redefine who you are. We help you articulate your value proposition, mission, and visual identity to resonate with your target audience.",
        },
        {
            title: "Digital Transformation",
            description: "Modernize your approach. We audit your current tech stack and processes to implement data-driven, efficient digital marketing ecosystems.",
        },
        {
            title: "Go-to-Market Planning",
            description: "Launch with confidence. Detailed roll-out plans for new products or market expansion, ensuring you hit the ground running.",
        },
    ];

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1>Our Expertise</h1>
                <p>Comprehensive solutions for complex challenges.</p>
            </header>

            <div className={styles.grid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.card}>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        {service.href && (
                            <Link href={service.href} className={styles.learnMore}>
                                Learn More &rarr;
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
}
