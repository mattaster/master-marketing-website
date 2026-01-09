import styles from './services.module.css';

export default function Services() {
    const services = [
        {
            title: "Fractional CMO",
            description: "Leadership without the overhead. We step in to lead your marketing team, define strategy, and execute plans for scalable growth.",
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
                    </div>
                ))}
            </div>
        </main>
    );
}
