"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './MetricsGrid.module.css';

interface MetricItem {
    id: number;
    metric: string;
    label: string;
    description: string;
}

const metrics: MetricItem[] = [
    {
        id: 1,
        metric: "$7M+",
        label: "Pipeline Revenue Generated",
        description: "Consulted for a national professional services and financial consulting firm to architect a multi-product GTM strategy, delivering a measurable $7M impact through integrated campaign execution."
    },
    {
        id: 2,
        metric: "24%",
        label: "Increase in Sales Pipeline",
        description: "Partnered with a leading business and technology solutions provider to bridge the gap between marketing operations and sales, implementing a lead-to-revenue framework that boosted pipeline contribution by 24%."
    },
    {
        id: 3,
        metric: "25%",
        label: "Reduction in CPA",
        description: "Advised a global e-commerce logistics and shipping carrier on performance marketing optimization, achieving a 25% reduction in acquisition costs through a comprehensive content and digital spend audit."
    },
    {
        id: 4,
        metric: "254%",
        label: "Improvement in Marketing ROI",
        description: "Engineered a high-performance growth engine for a digital-first specialty insurance provider, achieving a 254% lift in ROI via data-driven budget reallocation and a scalable direct-to-consumer (DTC) framework."
    },
    {
        id: 5,
        metric: "70%",
        label: "Increase in Inbound Inquiries",
        description: "Developed a brand authority program for a national technology marketing division, launching executive-led webinars and whitepaper series that increased qualified inquiries by 70%."
    },
    {
        id: 6,
        metric: "37%",
        label: "Boost in Customer Engagement",
        description: "Collaborated with a technology-driven business services firm to unify fragmented product narratives across business units, resulting in a 37% lift in engagement among key target personas."
    },
    {
        id: 7,
        metric: "20%",
        label: "Quarterly Revenue Growth",
        description: "Steered the North American demand generation strategy for a high-growth logistics tech company, implementing a scalable acquisition model that sustained consistent 20% quarter-over-quarter revenue gains."
    },
    {
        id: 8,
        metric: "27%",
        label: "Increase in MQLs",
        description: "Led a marketing department transformation for a financial services firm specializing in alternative assets, overhauling lead scoring and persona targeting to increase MQL volume by 27%."
    },
    {
        id: 9,
        metric: "30%",
        label: "Growth in Organic Web Traffic",
        description: "Executed a digital transformation and technical SEO roadmap for an innovative fintech platform, accelerating a website relaunch by five months to drive a 30% increase in organic traffic."
    }
];

export default function MetricsGrid() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    // Group metrics into rows of 3
    const rows = [];
    for (let i = 0; i < metrics.length; i += 3) {
        rows.push(metrics.slice(i, i + 3));
    }

    return (
        <div className={styles.container}>
            {rows.map((rowItems, rowIndex) => (
                <div key={rowIndex} className={styles.row}>
                    {rowItems.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
                            className={`${styles.card} ${selectedId === item.id ? styles.expanded : ''}`}
                            transition={{ layout: { duration: 0.4, type: "spring", stiffness: 200, damping: 25 } }}
                        >
                            <motion.div layout="position" className={styles.contentWrapper}>
                                <motion.div layout="position" className={styles.metric}>
                                    {item.metric}
                                </motion.div>
                                <motion.div layout="position" className={styles.label}>
                                    {item.label}
                                </motion.div>

                                <AnimatePresence mode="wait">
                                    {selectedId === item.id && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className={styles.description}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                        >
                                            {item.description}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            ))}
        </div>
    );
}
