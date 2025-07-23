import React, { useState } from 'react';
import { Search } from 'lucide-react';
import styles from './newFaqSection.module.css';
import FaqSectionHeart from "../../../assets/Logos_and_illustration/FaqSectionHeart.svg"
import Plus from "../../../assets/Logos_and_illustration/Plus.svg"
import Minus from "../../../assets/Logos_and_illustration/Minus.svg"

const FaqSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedItem, setExpandedItem] = useState(1);

    const faqData = [
        {
            id: 1,
            question: "How to create a account?",
            answer: "Open the Tradebase app to get started and follow the steps. Tradebase doesn't charge a fee to create or maintain your Tradebase account."
        },
        {
            id: 2,
            question: "How to create a account?",
            answer: "Open the Tradebase app to get started and follow the steps. Tradebase doesn't charge a fee to create or maintain your Tradebase account."
        },
        {
            id: 3,
            question: "How to add a payment method by this app?",
            answer: "You can add payment methods through the app settings. Navigate to Payment Methods and follow the secure setup process."
        },
        {
            id: 4,
            question: "How to add a payment method by this app?",
            answer: "You can add payment methods through the app settings. Navigate to Payment Methods and follow the secure setup process."
        }
    ];

    const toggleExpanded = (id) => {
        setExpandedItem(prev => (prev === id ? null : id));
    };

    const filteredFAQs = faqData.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
        <div className="container-fluid RakebackFAQ RakebackSpace">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 text-left GetStartedhead">
                        <h1 className="title">
                            Frequently Asked <span className="highlight">Questions</span> 
                        </h1>
                        <p className="subtitle">
                            How can we help you? 
                        </p>    
                        <div className="moreQuestionsActions">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="actionButton"
                            >
                                <span className="actionIcon">
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                        <path fill="#25D366" d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.35A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Z" />
                                        <path fill="#fff" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.148-.669-1.612-.916-2.21-.242-.58-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.098 3.205 5.077 4.37.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347Z" />
                                    </svg>
                                </span>
                                Chat with Us
                                <svg className='arrowIcon' width="10" height="10" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.36523 1.69421L11.3998 6.49996L6.36523 11.3057" stroke="#848484" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.3995 6.5L1.59961 6.5" stroke="#848484" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path></svg>

                            </a>
                            <a
                                className="actionButton"
                            >
                                <span className="actionIcon">
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                        <rect width="20" height="16" x="2" y="4" fill="#fff" stroke="#848484" strokeWidth="1.5" rx="4" />
                                        <path stroke="#848484" strokeWidth="1.5" d="m4 6 8 7 8-7" />
                                    </svg>
                                </span>
                                Drop a Mail
                                <svg className='arrowIcon'  width="10" height="10" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.36523 1.69421L11.3998 6.49996L6.36523 11.3057" stroke="#848484" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.3995 6.5L1.59961 6.5" stroke="#848484" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div className='col-lg-7'>
                         <div className="faqList">
                            {filteredFAQs.map((faq) => (
                                <div
                                    key={faq.id}
                                    className={expandedItem === faq.id ? "faqItemActive" : 'faqItem'}
                                >
                                    <div className="faqQuestion" onClick={() => toggleExpanded(faq.id)}>
                                        <span className="questionText">{faq.question}</span>
                                        <button className="toggleButton">
                                            <img
                                                src={expandedItem === faq.id ? Minus : Plus}
                                                className="toggleIcon"
                                            />
                                        </button>
                                    </div>


                                    {expandedItem === faq.id && (
                                        <div className="faqAnswer">
                                            <p className="answerText">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div> 
                        <div className="moreQuestionsContainer">
                            <button className="moreQuestionsButton">
                                More Questions?
                            </button>
                        </div>
                        <div className="moreQuestionsActions moreQuestionsActionsMObile ">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="actionButton"
                            >
                                <span className="actionIcon">
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                        <path fill="#25D366" d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.35A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Z" />
                                        <path fill="#fff" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.148-.669-1.612-.916-2.21-.242-.58-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.098 3.205 5.077 4.37.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347Z" />
                                    </svg>
                                </span>
                                Chat with Us
                                <svg className='arrowIcon' width="10" height="10" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.36523 1.69421L11.3998 6.49996L6.36523 11.3057" stroke="#848484" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.3995 6.5L1.59961 6.5" stroke="#848484" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path></svg>

                            </a>
                            <a
                                className="actionButton"
                            >
                                <span className="actionIcon">
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                        <rect width="20" height="16" x="2" y="4" fill="#fff" stroke="#848484" strokeWidth="1.5" rx="4" />
                                        <path stroke="#848484" strokeWidth="1.5" d="m4 6 8 7 8-7" />
                                    </svg>
                                </span>
                                Drop a Mail
                                <svg className='arrowIcon'  width="10" height="10" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.36523 1.69421L11.3998 6.49996L6.36523 11.3057" stroke="#848484" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.3995 6.5L1.59961 6.5" stroke="#848484" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </a>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        
                {/* <div className={styles.faqContainer}>
                    <div className={styles.bgDecoration}>
                        <img src={FaqSectionHeart} width={94} height={99} />
                    </div>
                    <div className={styles.faqContent}>
                        <div className={styles.headerSection}>
                            <h1 className={styles.mainTitle}>
                                Frequently Asked <span className={styles.redText}>Questions</span>
                            </h1>
                            <p className={styles.subtitle}>How can we help you?</p>
                        </div>

                        <div className={styles.searchContainer}>
                            <div className={styles.searchWrapper}>
                                <Search className={styles.searchIcon} size={20} />
                                <input
                                    type="text"
                                    placeholder="Enter your keyword"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className={styles.searchInput}
                                />
                            </div>
                        </div> 

                        <div className={styles.faqList}>
                            {filteredFAQs.map((faq) => (
                                <div
                                    key={faq.id}
                                    className={`${styles.faqItem} ${expandedItem === faq.id ? styles.faqItemActive : ''}`}
                                >
                                    <div className={styles.faqQuestion} onClick={() => toggleExpanded(faq.id)}>
                                        <span className={styles.questionText}>{faq.question}</span>
                                        <button className={styles.toggleButton}>
                                            <img
                                                src={expandedItem === faq.id ? Minus : Plus}
                                                className={styles.toggleIcon}
                                            />
                                        </button>
                                    </div>


                                    {expandedItem === faq.id && (
                                        <div className={styles.faqAnswer}>
                                            <p className={styles.answerText}>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className={styles.moreQuestionsContainer}>
                            <button className={styles.moreQuestionsButton}>
                                More Questions?
                            </button>
                        </div>
                        <div className={styles.moreQuestionsActions}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.actionButton}
                            >
                                <span className={styles.actionIcon}>
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                        <path fill="#25D366" d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.35A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Z" />
                                        <path fill="#fff" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.148-.669-1.612-.916-2.21-.242-.58-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.098 3.205 5.077 4.37.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347Z" />
                                    </svg>
                                </span>
                                Chat with Us{rightArrowIcon}
                            </a>
                            <a
                                className={styles.actionButton}
                            >
                                <span className={styles.actionIcon}>
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                        <rect width="20" height="16" x="2" y="4" fill="#fff" stroke="#ff4053" strokeWidth="1.5" rx="4" />
                                        <path stroke="#ff4053" strokeWidth="1.5" d="m4 6 8 7 8-7" />
                                    </svg>
                                </span>
                                Drop a Mail{rightArrowIcon}
                            </a>
                        </div>
                    </div>
                </div> */}
        </>
    );
};

export default FaqSection;
const rightArrowIcon = <svg width="10" height="10" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.36523 1.69421L11.3998 6.49996L6.36523 11.3057" stroke="#ff4053" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M11.3995 6.5L1.59961 6.5" stroke="#ff4053" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
</svg>
