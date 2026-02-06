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
        metric: "300%",
        label: "ROAS Increase",
        description: "For a D2C fashion brand, we overhauled the paid social strategy, implementing a full-funnel approach that tripled Return on Ad Spend within 90 days."
    },
    {
        id: 2,
        metric: "50%",
        label: "Lower CPA",
        description: "By restructuring Google Ads accounts and optimizing landing page conversion paths, we successfully reduced Acquisition Costs by half for a B2B SaaS client."
    },
    {
        id: 3,
        metric: "2x",
        label: "Revenue Growth",
        description: "Partnered with a bootstrapped startup to double their annual revenue through a mix of organic content marketing and strategic influencer partnerships."
    },
    {
        id: 4,
        metric: "10k+",
        label: "New Leads",
        description: "Generated over 10,000 qualified leads in a single quarter for a real estate firm by launching a targeted lead magnet campaign."
    },
    {
        id: 5,
        metric: "#1",
        label: "Market Share",
        description: "Helped a consumer electronics brand achieve the #1 market share position in their niche on Amazon through aggressive PPC management and listing optimization."
    },
    {
        id: 6,
        metric: "90%",
        label: "Retention Rate",
        description: "Implemented a comprehensive lifecycle marketing strategy using Klaviyo that boosted customer retention rates to 90% for a subscription box service."
    },
    {
        id: 7,
        metric: "5x",
        label: "Social Reach",
        description: "Expanded the social media footprint of a lifestyle brand by 5x through a viral video strategy and community engagement tactics."
    },
    {
        id: 8,
        metric: "200%",
        label: "Email Open Rate",
        description: "Revived a dormant email list for an e-commerce store, achieving a 200% increase in open rates through segmentation and personalized subject lines."
    },
    {
        id: 9,
        metric: "$5M+",
        label: "Ad Spend Managed",
        description: "Successfully managed and optimized over $5 million in cumulative ad spend across Meta, Google, and TikTok for a portfolio of high-growth clients."
    }
];

export default function MetricsGrid() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <div className={styles.grid}>
            {metrics.map((item) => (
                <motion.div
                    key={item.id}
                    layout
                    onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
                    className={`${styles.card} ${selectedId === item.id ? styles.expanded : ''}`}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <motion.div layout className={styles.metric}>
                        {item.metric}
                    </motion.div>
                    <motion.div layout className={styles.label}>
                        {item.label}
                    </motion.div>

                    <AnimatePresence>
                        {selectedId === item.id && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className={styles.description}
                                transition={{ duration: 0.3 }}
                            >
                                {item.description}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    );
}
