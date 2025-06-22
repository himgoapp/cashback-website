import React from 'react';
import styles from './howGetStarted.module.css';
import getStartedFirst from "../../../assets/Logos_and_illustration/getStartedFirst.svg"
import getStartedSecond from "../../../assets/Logos_and_illustration/getStartedSecond.svg"
import getStartedThird from "../../../assets/Logos_and_illustration/getStartedThird.svg"

function HowGetStarted() {
    const sections = [
        {
            id: 'signup',
            number: '1',
            title: 'Sign Up',
            description: 'Get started with Flashbacks in just 3 simple steps. It\'s fast, safe, and totally transparent.',
            details: 'Create your account using your email or Google login. No fees. No hidden costs. Just access to endless Flashback deals.',
            icon: <img src={getStartedFirst} alt="Sign up icon" width={59} height={59} />,
        },
        {
            id: 'link',
            number: '2',
            title: 'Link Your Account',
            description: 'Connect your payment method securely.',
            details: 'Sign up through our exclusive link. This allows us to track your visit and ensure you receive every single back you deserve.',
            icon: <img src={getStartedSecond} alt="Sign up icon" width={83} height={71} />,
        },
        {
            id: 'rewards',
            number: '3',
            title: 'Earn Rewards/Cashback',
            description: 'Start earning on every purchase.',
            details: 'Play as usual. We track your activity and provide you Flashbacks every week. Transparent reporting and real-time support ensure peace of mind.',
            icon: <img src={getStartedThird} alt="Sign up icon" width={67} height={40} />,
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    How to Get <span className={styles.highlight}>Started</span>
                </h1>
                <p className={styles.subtitle}>
                    Get started with Flashbacks in just 3 simple steps. It's fast, safe, and totally transparent.
                </p>
            </div>

            <div className={styles.contentSections}>
                {sections.map((section, index) => (
                    <div key={section.id} className={styles.section}>
                        <div className={styles.stepHeader}>
                            <div className={styles.stepNumber}>{section.number}</div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardContent}>
                                <div className={styles.iconContainer}>
                                    {section.icon}
                                </div>
                                <h2 className={styles.stepTitle}>{section.title}</h2>
                                <p className={styles.stepDetails}>{section.details}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.cta}>
                <button className={styles.joinButton}>
                    Join Now {rightArrowIcon}
                </button>
            </div>
        </div>
    );
}

export default HowGetStarted;

const rightArrowIcon = <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.36523 1.69421L11.3998 6.49996L6.36523 11.3057" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.3995 6.5L1.59961 6.5" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
