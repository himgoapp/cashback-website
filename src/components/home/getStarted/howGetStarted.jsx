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
            details: 'Create your Cashbackk account using your email or Google login. No fees. No hidden',
            icon: <img src={getStartedFirst} alt="Sign up icon" style={{width:"70px",height:"70px"}} />,
        },
        {
            id: 'link',
            number: '2',
            title: 'Link Your Account',
            description: 'Connect your payment method securely.',
            details: 'Create your Cashbackk account using your email or Google login. No fees. No hidden',
            icon: <img src={getStartedSecond} alt="Link account icon" style={{width:"78.03",height:"67.51"}} />,
        },
        {
            id: 'rewards',
            number: '3',
            title: 'Get Rewards/Cashback',
            description: 'Start earning on every purchase.',
            details: 'Create your Cashbackk account using your email or Google login. No fees. No hidden',
            icon: <img src={getStartedThird} alt="Rewards icon" style={{width:"67.29",height:"70px"}} />,
        }
    ];

    return (
         <>
            <div className="container-fluid CashbackGetStarted">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center GetStartedhead">
                                <h1 className="title">
                                     How to Get <span className="highlight">Started</span>
                                </h1>
                                <p className="subtitle">
                                         Get started with Flashbacks in just 3 simple steps. It's fast, safe, and totally transparent.
                                </p>    
                        </div>
                        <div className="col-lg-12">
                            <div class="row">
                                {sections.map((section, index) => (
                                    <div key={section.id} className="GetStartedCard col-lg-4">
                                        <div className="card">
                                            <div className="stepNumber">{section.number}</div>
                                            <div className="cardContent">
                                                <div className="iconContainer">
                                                    {section.icon}
                                                </div>
                                                <h2 className="stepTitle">{section.title}</h2>
                                                <p className="stepDetails">{section.details}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <button className="joinButton">
                                Join Now {rightArrowIcon}
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* <div className={styles.container}>
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
                            <div className={styles.card}>
                                <div className={styles.stepNumber}>{section.number}</div>
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
            </div>*/}
       </>
    );
}

export default HowGetStarted;

const rightArrowIcon = <svg width="14" height="14" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.36523 1.69421L11.3998 6.49996L6.36523 11.3057" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.3995 6.5L1.59961 6.5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
</svg>;