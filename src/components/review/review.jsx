import { useState, useEffect } from "react";
import Navbar from "../common/navbar/navbar";
import NewFooter from "../common/footer/newFooter";
import FeaturedCardImage from "../../assets/Logos_and_illustration/FeaturedCardImage.svg"
import Promotion from "../../assets/Promotion.jpg"
import BigCashLogo from "../../assets/Review/BigCashWhite.png"

import FaqSectionHeart from "../../assets/Logos_and_illustration/FaqSectionHeart.svg"
import Plus from "../../assets/Logos_and_illustration/Plus.svg"
import Minus from "../../assets/Logos_and_illustration/Minus.svg"

import Bitcoin from "../../assets/Review/Bitcoin.svg"
import Etherium from "../../assets/Review/Etherium.svg"
import GooglePay from "../../assets/Review/GooglePay.svg"
import Lightcoin from "../../assets/Review/Lightcoin.svg"
import Mastercard from "../../assets/Review/Mastercard.svg"
import visalogo from "../../assets/Review/visalogo.svg"
import CustomerCare from "../../assets/Review/CustomerCareRed.png"
import Online from "../../assets/Review/24.svg"
import Tagging from "../../assets/Review/Tagging.png"
import TaggingReview from "../../assets/Review/TaggingReview.png"


const Review = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedItem, setExpandedItem] = useState(1);

    // const [showModal, setShowModal] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const [activeTab, setActiveTab] = useState("review");
    const [activeSection, setActiveSection] = useState("Inthisoffer");

    // const [activeTab, setActiveTab] = useState("tagging");
    // const [activeSection, setActiveSection] = useState("HowtoTag");

    const handleScrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    useEffect(() => {
        const sections = [
            "Inthisoffer",
            "Welcome",
            "OfferDetails",
            "KeyFeatures",
            "AlternativeOffers",
            "MorePromos",
            "Registration",
            "History",
        ];

        //  const sections = [
        //     "Inthisoffer",
        //     "Welcome",
        //     "OfferDetails",
            
        // ];

        const handleScroll = () => {
            const scrollPos = window.scrollY + 100;
            let current = activeSection;
            for (let id of sections) {
                const element = document.getElementById(id);
                if (element && element.offsetTop <= scrollPos) {
                    current = id;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

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
        <div className="NewsChildpAge DesktopLatestNews dictionaryPage ReviewPAge">
            <div className="container">
                <div className="row">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Deals</a></li>
                            <li class="breadcrumb-item active text-danger" aria-current="page">
                                The poker glossary
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="ReviewHeader">

                    <div className="left">
                        <div className="logo">
                            <img src={BigCashLogo} />
                        </div>
                        <div className="offer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                                <g clip-path="url(#clip0_6480_32270)">
                                    <path d="M9.32579 11.9453C7.59625 11.9453 2.50596 11.9453 2.50596 11.9453C1.96559 11.9453 1.52344 12.3874 1.52344 12.9278V20.3021C1.52344 20.8424 1.96559 21.2845 2.50596 21.2845C2.50596 21.2845 7.70276 21.2845 9.44046 21.2845C9.6716 21.2845 9.6716 21.0362 9.6716 21.0362V12.2792C9.6716 12.2792 9.67153 11.9453 9.32579 11.9453Z" fill="white" />
                                    <path d="M18.4932 11.9453C18.4932 11.9453 13.3835 11.9453 11.6803 11.9453C11.2654 11.9453 11.3275 12.3774 11.3275 12.3774V21.0442C11.3275 21.0442 11.3242 21.2843 11.5738 21.2843C13.3036 21.2843 18.4931 21.2843 18.4931 21.2843C19.0335 21.2843 19.4756 20.8422 19.4756 20.3018V12.9278C19.4758 12.3874 19.0336 11.9453 18.4932 11.9453Z" fill="white" />
                                    <path d="M9.67166 6.14347C9.67166 6.14347 9.67166 5.81055 9.34268 5.81055C7.37269 5.81055 1.39659 5.81055 1.39659 5.81055C0.85622 5.81055 0.414062 6.2527 0.414062 6.793V9.8599C0.414062 10.4003 0.85622 10.8424 1.39659 10.8424C1.39659 10.8424 7.39946 10.8424 9.36959 10.8424C9.67166 10.8424 9.67166 10.5804 9.67166 10.5804V6.14347Z" fill="white" />
                                    <path d="M19.607 5.81055C19.607 5.81055 13.6285 5.81055 11.6356 5.81055C11.332 5.81055 11.332 6.09981 11.332 6.09981V10.5864C11.332 10.5864 11.332 10.8424 11.7011 10.8424C13.6775 10.8424 19.607 10.8424 19.607 10.8424C20.1474 10.8424 20.5896 10.4003 20.5896 9.8599V6.793C20.5896 6.2527 20.1474 5.81055 19.607 5.81055Z" fill="white" />
                                    <path d="M6.32758 5.08396C5.87805 5.08396 5.46746 5.04831 5.10741 4.97795C4.19289 4.79928 3.56433 4.45154 3.18581 3.91497C2.84666 3.43409 2.74287 2.84125 2.87723 2.15285C3.11259 0.948428 3.92145 0.285156 5.15465 0.285156C5.41564 0.285156 5.70225 0.315292 6.00661 0.374776C6.78084 0.526027 7.77109 0.969974 8.65562 1.56231C10.1563 2.56738 10.2306 3.19221 10.1558 3.57481C10.0459 4.13701 9.52046 4.53873 8.54932 4.80301C7.89321 4.98153 7.08341 5.08396 6.32758 5.08396ZM5.15473 1.85987C4.67714 1.85987 4.513 1.9933 4.42288 2.45478C4.34915 2.83209 4.44213 2.96387 4.47263 3.00718C4.60033 3.18828 4.93297 3.33931 5.40934 3.4323C5.66639 3.48255 5.98399 3.5091 6.32751 3.5091C7.08291 3.5091 7.7484 3.39464 8.18998 3.26945C8.22213 3.26036 8.27202 3.22235 8.21855 3.1905C7.64124 2.72021 6.58506 2.09222 5.70468 1.92021C5.4996 1.88027 5.3145 1.85987 5.15473 1.85987Z" fill="white" />
                                    <path d="M14.6952 5.08389C14.6952 5.08389 14.6952 5.08389 14.6951 5.08389C13.9392 5.08389 13.1295 4.98146 12.4734 4.80293C11.5022 4.53873 10.9768 4.13694 10.8669 3.57481C10.7922 3.19221 10.8663 2.56738 12.3672 1.56231C13.2516 0.969974 14.2418 0.526027 15.0162 0.374776C15.3205 0.315292 15.6072 0.285156 15.8679 0.285156C17.1014 0.285156 17.9102 0.9485 18.1454 2.15293C18.2799 2.84125 18.1761 3.43409 17.8369 3.91497C17.4584 4.45161 16.8299 4.79928 15.9152 4.97795C15.5553 5.04817 15.1447 5.08389 14.6952 5.08389ZM12.8168 3.18069C12.7656 3.21039 12.7904 3.25728 12.8169 3.26494C13.2583 3.39185 13.9308 3.5091 14.6951 3.5091C15.0387 3.5091 15.3562 3.48255 15.6133 3.4323C16.0896 3.33924 16.4224 3.18828 16.55 3.00718C16.5807 2.96387 16.6737 2.83209 16.5998 2.45478C16.5097 1.9933 16.3455 1.85987 15.8679 1.85987C15.7082 1.85987 15.5232 1.8802 15.318 1.92029C14.4375 2.09222 13.3941 2.71033 12.8168 3.18069Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_6480_32270">
                                        <rect width="21" height="21" fill="white" transform="translate(0 0.283203)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>100% Upto $3000</span></div>
                        <button className="join-btn">Join Now!</button>
                    </div>

                    <div className="middle">
                        <h3>Why Bigcash</h3>
                        <ul className="checklist">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <rect y="0.783203" width="16" height="16" rx="8" fill="#28A745" />
                                    <path d="M12 5.7832L6.5 11.2832L4 8.7832" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Admission is free. No deposit is
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <rect y="0.783203" width="16" height="16" rx="8" fill="#28A745" />
                                    <path d="M12 5.7832L6.5 11.2832L4 8.7832" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Admission is free. No deposit is
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <rect y="0.783203" width="16" height="16" rx="8" fill="#28A745" />
                                    <path d="M12 5.7832L6.5 11.2832L4 8.7832" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Admission is free. No deposit is
                            </li>
                        </ul>
                    </div>

                    <div className="right">
                        <div className="rating">
                            <strong>Overall Rating</strong>
                            <div>4.8/5 <span className="stars">★★★★★</span>
                            </div>

                        </div>
                        <div className="rating-bars">
                            <div className="rating-item">
                                <div className="RatingLabel">Bonus and promotions <span>4.5/5</span></div>
                                <input type="range" min="0" max="5" value="4.5" step="0.1" />
                            </div>
                            <div class="rating-item">
                                <div className="RatingLabel">Bonus and promotions <span>4.5/5</span></div>
                                <input type="range" min="0" max="5" value="4.5" step="0.1" />
                            </div>
                            <div class="rating-item">
                                <div className="RatingLabel">Bonus and promotions <span>4.5/5</span></div>
                                <input type="range" min="0" max="5" value="4.5" step="0.1" />
                            </div>
                            <div class="rating-item">
                                <div className="RatingLabel">Bonus and promotions <span>4.5/5</span></div>
                                <input type="range" min="0" max="5" value="4.5" step="0.1" />
                            </div>
                            <div className="rating-item">
                                <div className="RatingLabel">Bonus and promotions <span>4.5/5</span></div>
                                <input type="range" min="0" max="5" value="4.5" step="0.1" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ReviewTaggingTab">
                    <div className="sticky-top bg-white ">
                        <ul className="nav nav-tabs sticky-top bg-white TabUI">
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === "review" ? "active" : ""}`}
                                    onClick={() => setActiveTab("review")}
                                >
                                    Review
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === "tagging" ? "active" : ""}`}
                                    onClick={() => setActiveTab("tagging")}
                                >
                                    Tagging
                                </button>
                            </li>
                        </ul>

                        {activeTab === "review" && <ul className="nav nav-pills  sticky-top bg-white pt-2 pb-2 ReviewUITab">
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeSection === "Inthisoffer" ? "active" : ""}`}
                                    onClick={() => handleScrollTo("Inthisoffer")}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                                        <path d="M12.5186 8.3457L12.7432 9.03613H18.3848L14.4082 11.9248L13.8203 12.3516L14.0449 13.043L15.5625 17.7158L11.5879 14.8281L11 14.4014L10.4121 14.8281L6.43652 17.7158L7.95508 13.043L8.17969 12.3516L7.5918 11.9248L3.61523 9.03613H9.25684L9.48145 8.3457L11 3.6709L12.5186 8.3457Z" stroke="#848484" stroke-width="2" />
                                    </svg> In this offer
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeSection === "Welcome" ? "active" : ""}`}
                                    onClick={() => handleScrollTo("Welcome")}
                                >
                                    Welcome
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeSection === "OfferDetails" ? "active" : ""}`}
                                    onClick={() => handleScrollTo("OfferDetails")}
                                >
                                    Offer Details
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeSection === "KeyFeatures" ? "active" : ""}`}
                                    onClick={() => handleScrollTo("KeyFeatures")}
                                >
                                    Key Features
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeSection === "AlternativeOffers" ? "active" : ""}`}
                                    onClick={() => handleScrollTo("AlternativeOffers")}
                                >
                                    Alternative Offers
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeSection === "MorePromos" ? "active" : ""}`}
                                    onClick={() => handleScrollTo("MorePromos")}
                                >
                                    More Promos
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeSection === "Registration" ? "active" : ""}`}
                                    onClick={() => handleScrollTo("Registration")}
                                >
                                    Registration
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeSection === "History" ? "active" : ""}`}
                                    onClick={() => handleScrollTo("History")}
                                >
                                    History
                                </button>
                            </li>
                        </ul>}

                        {activeTab === "tagging" && <ul className="nav nav-pills  sticky-top bg-white pt-2 pb-2 ReviewUITab">
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeSection === "HowtoTag" ? "active" : ""}`}
                                    onClick={() => handleScrollTo("HowtoTag")}
                                >
                                    How to Tag
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeSection === "DealDetails" ? "active" : ""}`}
                                    onClick={() => handleScrollTo("DealDetails")}
                                >
                                    Deal Details
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeSection === "TaggingFAQ" ? "active" : ""}`}
                                    onClick={() => handleScrollTo("TaggingFAQ")}
                                >
                                    FAQs
                                </button>
                            </li>
                        </ul>}
                    </div>

                    {activeTab === "review" && (
                        <div className="mt-3">
                            <div className="single-post-row Dictionaryrow">
                                <div className="single-post-left">
                                    <div className="article-content">
                                        <div id="Inthisoffer" className=" " >
                                            <h2>About Big Cash</h2>
                                            <p>A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.</p>
                                            <p>Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.</p>
                                        </div>
                                        <div id="Welcome" className="">
                                            <h2>About Big Cash</h2>
                                            <p>A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.</p>
                                            <p>Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.</p>
                                        </div>
                                        <div id="OfferDetails" className="">
                                            <h4>Benefits of the Grid</h4>
                                            <div className="row ProsCons">
                                                <div class="col-md-6">
                                                    <div class="card border">
                                                        <div class="pros-title ">Pros</div>
                                                        <div className="ProConData">
                                                            <div class="list-item">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                                    <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745" />
                                                                    <path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                                <span>Admission is free. No deposit is required. Admission is free. No deposit is required.</span>
                                                            </div>
                                                            <div class="list-item">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                                    <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745" />
                                                                    <path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                                <span>Admission is free. No deposit is</span>
                                                            </div>
                                                            <div class="list-item">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                                    <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745" />
                                                                    <path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                                <span>Admission is free. No deposit is required. Admission is free. No deposit is</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="card border">
                                                        <div class="cons-title ">Cons</div>
                                                        <div className="ProConData">
                                                            <div class="list-item">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                                    <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#DC3545" />
                                                                    <path d="M12.75 4.93555L4.75 12.9355M4.75 4.93555L12.75 12.9355" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                                <span>Prize: $50</span>
                                                            </div>
                                                            <div class="list-item">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                                    <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#DC3545" />
                                                                    <path d="M12.75 4.93555L4.75 12.9355M4.75 4.93555L12.75 12.9355" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                                <span>Admission is free. No deposit is required.</span>
                                                            </div>
                                                            <div class="list-item">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                                    <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#DC3545" />
                                                                    <path d="M12.75 4.93555L4.75 12.9355M4.75 4.93555L12.75 12.9355" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                                <span>Prize: $50</span>
                                                            </div>
                                                            <div class="list-item">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                                    <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#DC3545" />
                                                                    <path d="M12.75 4.93555L4.75 12.9355M4.75 4.93555L12.75 12.9355" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                                <span>Admission is free. No deposit is required.</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="KeyFeatures" className="">
                                            <h2>The Best WPT Global Bonuses, Promo Codes, and Rewards</h2>
                                            <div><ul><li><strong>Columns</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li><li><strong>Columns</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li><li><strong>Alley-oop</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li></ul></div>
                                        </div>
                                        <div id="AlternativeOffers" className="">
                                            <h4>Alternative Offers</h4>
                                            <div><ul><li><strong>Columns</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li><li><strong>Columns</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li><li><strong>Alley-oop</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li></ul></div>
                                            <div class="table-responsive customTableResponsive">
                                                <table class="table custom-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Amount In</th>
                                                            <th>Amount Out</th>
                                                            <th>Payment Type</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Savannah Nguyen</td>
                                                            <td>$2575.00</td>
                                                            <td>$120.00</td>
                                                            <td>Card Payment</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Devon Lane</td>
                                                            <td>$2459.00</td>
                                                            <td>$375.00</td>
                                                            <td>Card Payment</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Annette Black</td>
                                                            <td>$3127.00</td>
                                                            <td>$250.00</td>
                                                            <td>Card Payment</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Ralph Edwards</td>
                                                            <td>$675.00</td>
                                                            <td>$795.00</td>
                                                            <td>Card Payment</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div id="MorePromos" className="">
                                            <h4>More Promos</h4>
                                            <div><ul><li><strong>Columns</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li><li><strong>Columns</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li><li><strong>Alley-oop</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li></ul></div>

                                        </div>
                                        <div id="Registration" className="">
                                            <h4>Registration</h4>
                                            <div><ul><li><strong>Columns</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li><li><strong>Columns</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li><li><strong>Alley-oop</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li></ul></div>

                                        </div>

                                        <div className="BorderLIne"></div>

                                        <div id="Gotaquestion" class="newsletter GotAQues GotAQuesReviewmain text-center mb-3">
                                            <div className="GotAQuesHed">
                                                <h5>Got a question?</h5>
                                                <p>We are online <img src={Online} /></p>
                                            </div>

                                            <div className="GotAQuesBtn">
                                                <button class="btn subcrb "> <img src={CustomerCare} /> Live Chat</button>
                                                <button class="btn subcrb GreenBtn">
                                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.507812 24.1612L2.19955 17.9809C1.15563 16.1718 0.607091 14.1211 0.608094 12.0182C0.611102 5.44375 5.9611 0.09375 12.5345 0.09375C15.7245 0.0947528 18.7189 1.33724 20.9712 3.59155C23.2225 5.84587 24.462 8.84227 24.461 12.0292C24.4579 18.6046 19.108 23.9546 12.5345 23.9546C10.5389 23.9536 8.57242 23.4532 6.83054 22.5026L0.507812 24.1612ZM7.12336 20.3435C8.80407 21.3413 10.4086 21.939 12.5305 21.94C17.9938 21.94 22.4443 17.4935 22.4473 12.0272C22.4493 6.54985 18.0199 2.1094 12.5385 2.10739C7.07121 2.10739 2.62374 6.55386 2.62174 12.0192C2.62074 14.2504 3.27457 15.9211 4.37265 17.669L3.37084 21.3273L7.12336 20.3435ZM18.5424 14.8642C18.4682 14.7398 18.2696 14.6656 17.9708 14.5162C17.6729 14.3668 16.2078 13.6457 15.9341 13.5465C15.6613 13.4472 15.4627 13.397 15.2632 13.6959C15.0646 13.9937 14.493 14.6656 14.3195 14.8642C14.146 15.0627 13.9716 15.0878 13.6737 14.9384C13.3759 14.7889 12.4152 14.4751 11.277 13.4592C10.3915 12.669 9.79284 11.6933 9.61935 11.3944C9.44587 11.0966 9.6013 10.9351 9.74972 10.7867C9.88409 10.6534 10.0476 10.4387 10.197 10.2643C10.3484 10.0918 10.3975 9.96743 10.4978 9.76787C10.5971 9.56931 10.548 9.39482 10.4727 9.2454C10.3975 9.09699 9.80186 7.62988 9.55417 7.0332C9.31149 6.45258 9.0658 6.53079 8.88329 6.52177L8.31169 6.51174C8.11313 6.51174 7.79023 6.58595 7.51746 6.88479C7.2447 7.18362 6.47454 7.90364 6.47454 9.37076C6.47454 10.8379 7.54253 12.2548 7.69095 12.4534C7.84037 12.652 9.79184 15.6624 12.7812 16.953C13.4922 17.2599 14.0478 17.4434 14.48 17.5808C15.194 17.8074 15.8438 17.7753 16.3572 17.6991C16.9298 17.6139 18.1202 16.9781 18.3689 16.2821C18.6176 15.5852 18.6176 14.9885 18.5424 14.8642Z" fill="#28A745" />
                                                    </svg>
                                                    Whatsapp
                                                </button>
                                            </div>
                                        </div>

                                        <div className="BorderLIne"></div>

                                        <div id="History" className="RakebackFAQ ">
                                            <h2>FAQ</h2>
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
                                        </div>

                                    </div>
                                    <div className="ShareIconBottom">
                                        <strong>Share:</strong>
                                        <div className="share-btns d-inline-flex ms-2">
                                            <button className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.32787C0 12.3052 2.88867 15.6125 6.66667 16.2832V10.5052H4.66667V8.2832H6.66667V6.5052C6.66667 4.5052 7.95533 3.39454 9.778 3.39454C10.3553 3.39454 10.978 3.4832 11.5553 3.57187V5.61654H10.5333C9.55533 5.61654 9.33333 6.1052 9.33333 6.72787V8.2832H11.4667L11.1113 10.5052H9.33333V16.2832C13.1113 15.6125 16 12.3059 16 8.32787C16 3.9032 12.4 0.283203 8 0.283203C3.6 0.283203 0 3.9032 0 8.32787Z" fill="#FF4053" />
                                            </svg></button>
                                            <button className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path d="M7.99915 0.431641C3.60981 0.431641 0.0507812 3.99067 0.0507812 8.38001C0.0507812 12.7694 3.60981 16.3284 7.99915 16.3284C12.3885 16.3284 15.9475 12.7694 15.9475 8.38001C15.9475 3.99067 12.3885 0.431641 7.99915 0.431641ZM11.819 6.42308C11.8243 6.50647 11.8243 6.5934 11.8243 6.67856C11.8243 9.28307 9.84076 12.2832 6.21609 12.2832C5.09835 12.2832 4.06222 11.9586 3.18932 11.3997C3.349 11.4174 3.50158 11.4245 3.66481 11.4245C4.58738 11.4245 5.43545 11.1123 6.11141 10.5836C5.24561 10.5658 4.51819 9.99807 4.2698 9.21743C4.57319 9.26178 4.84642 9.26178 5.15867 9.18194C4.71287 9.09137 4.31216 8.84925 4.02464 8.49672C3.73712 8.14419 3.58051 7.70299 3.58142 7.24808V7.22324C3.84222 7.3705 4.14916 7.46098 4.47029 7.4734C4.20033 7.29349 3.97894 7.04974 3.82574 6.76378C3.67255 6.47781 3.59228 6.15846 3.59206 5.83405C3.59206 5.46679 3.68787 5.13147 3.85997 4.8405C4.35479 5.44965 4.97226 5.94785 5.67224 6.30273C6.37222 6.65761 7.13904 6.86122 7.92286 6.90034C7.64431 5.56082 8.64496 4.47679 9.84786 4.47679C10.4156 4.47679 10.9266 4.71453 11.2867 5.09776C11.732 5.01437 12.1579 4.8476 12.5375 4.62405C12.3903 5.08002 12.0816 5.46502 11.6717 5.70808C12.0691 5.6655 12.4524 5.5555 12.8072 5.40115C12.5393 5.79502 12.204 6.14453 11.819 6.42308Z" fill="#FF4053" />
                                            </svg></button>
                                            <button className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.94781 0.776832C5.7371 0.740496 5.98875 0.732422 7.99931 0.732422C10.0099 0.732422 10.2615 0.741169 11.0501 0.776832C11.8388 0.812494 12.3771 0.938322 12.8481 1.12067C13.3413 1.30706 13.7888 1.59842 14.1588 1.97523C14.5356 2.34464 14.8263 2.79143 15.012 3.28532C15.1951 3.75633 15.3202 4.29464 15.3566 5.0819C15.3929 5.87254 15.401 6.12419 15.401 8.13408C15.401 10.1446 15.3922 10.3963 15.3566 11.1856C15.3209 11.9728 15.1951 12.5111 15.012 12.9822C14.8263 13.4761 14.5352 13.9237 14.1588 14.2936C13.7888 14.6704 13.3413 14.9611 12.8481 15.1468C12.3771 15.3298 11.8388 15.455 11.0515 15.4913C10.2615 15.5277 10.0099 15.5357 7.99931 15.5357C5.98875 15.5357 5.7371 15.527 4.94781 15.4913C4.16054 15.4557 3.62224 15.3298 3.15123 15.1468C2.65728 14.9611 2.20975 14.6699 1.83979 14.2936C1.46323 13.924 1.17183 13.4767 0.985907 12.9828C0.803557 12.5118 0.678402 11.9735 0.642066 11.1863C0.605731 10.3956 0.597656 10.144 0.597656 8.13408C0.597656 6.12352 0.606404 5.87186 0.642066 5.08325C0.677729 4.29464 0.803557 3.75633 0.985907 3.28532C1.17211 2.79148 1.46373 2.34417 1.84046 1.97455C2.2099 1.59808 2.65698 1.30668 3.15055 1.12067C3.62157 0.938322 4.15987 0.813167 4.94714 0.776832H4.94781ZM10.9903 2.10913C10.2097 2.07347 9.97555 2.06607 7.99931 2.06607C6.02307 2.06607 5.78891 2.07347 5.00837 2.10913C4.28637 2.1421 3.89476 2.26255 3.63368 2.36415C3.28849 2.49873 3.04155 2.6582 2.78249 2.91726C2.53692 3.15616 2.34793 3.447 2.22938 3.76845C2.12778 4.02952 2.00734 4.42114 1.97436 5.14314C1.9387 5.92367 1.9313 6.15784 1.9313 8.13408C1.9313 10.1103 1.9387 10.3445 1.97436 11.125C2.00734 11.847 2.12778 12.2386 2.22938 12.4997C2.34781 12.8207 2.53689 13.112 2.78249 13.3509C3.02136 13.5965 3.31272 13.7856 3.63368 13.904C3.89476 14.0056 4.28637 14.1261 5.00837 14.159C5.78891 14.1947 6.0224 14.2021 7.99931 14.2021C9.97623 14.2021 10.2097 14.1947 10.9903 14.159C11.7123 14.1261 12.1039 14.0056 12.3649 13.904C12.7101 13.7694 12.9571 13.61 13.2161 13.3509C13.4617 13.112 13.6508 12.8207 13.7692 12.4997C13.8708 12.2386 13.9913 11.847 14.0243 11.125C14.0599 10.3445 14.0673 10.1103 14.0673 8.13408C14.0673 6.15784 14.0599 5.92367 14.0243 5.14314C13.9913 4.42114 13.8708 4.02952 13.7692 3.76845C13.6347 3.42326 13.4752 3.17631 13.2161 2.91726C12.9772 2.6717 12.6864 2.48272 12.3649 2.36415C12.1039 2.26255 11.7123 2.1421 10.9903 2.10913ZM7.05392 10.4158C7.5819 10.6356 8.1698 10.6653 8.71723 10.4997C9.26464 10.3342 9.73762 9.98376 10.0554 9.50826C10.3731 9.03275 10.5159 8.46168 10.4594 7.89258C10.4029 7.32349 10.1505 6.79167 9.74543 6.38796C9.4872 6.1299 9.17497 5.93229 8.83121 5.80938C8.48745 5.68647 8.12072 5.64131 7.75741 5.67714C7.3941 5.71298 7.04326 5.82892 6.73013 6.01662C6.41701 6.20432 6.1494 6.45911 5.94657 6.76265C5.74373 7.06619 5.61072 7.41093 5.55711 7.77204C5.5035 8.13316 5.53063 8.50167 5.63653 8.85104C5.74243 9.20041 5.92448 9.52196 6.16957 9.79253C6.41466 10.0631 6.71669 10.276 7.05392 10.4158ZM5.30915 5.44391C5.66242 5.09063 6.08183 4.8104 6.54341 4.61921C7.00498 4.42801 7.4997 4.32961 7.99931 4.32961C8.49892 4.32961 8.99364 4.42801 9.45522 4.61921C9.9168 4.8104 10.3362 5.09063 10.6895 5.44391C11.0428 5.79719 11.323 6.21659 11.5142 6.67817C11.7054 7.13975 11.8038 7.63447 11.8038 8.13408C11.8038 8.63369 11.7054 9.12841 11.5142 9.58998C11.323 10.0516 11.0428 10.471 10.6895 10.8242C9.976 11.5377 9.00832 11.9385 7.99931 11.9385C6.9903 11.9385 6.02262 11.5377 5.30915 10.8242C4.59567 10.1108 4.19484 9.14309 4.19484 8.13408C4.19484 7.12507 4.59567 6.15739 5.30915 5.44391ZM12.6476 4.89619C12.7351 4.81361 12.8052 4.7143 12.8537 4.60414C12.9021 4.49399 12.928 4.37523 12.9298 4.25489C12.9315 4.13455 12.9091 4.01509 12.8639 3.90357C12.8186 3.79205 12.7515 3.69074 12.6664 3.60564C12.5813 3.52054 12.48 3.45338 12.3684 3.40813C12.2569 3.36289 12.1374 3.34048 12.0171 3.34223C11.8968 3.34399 11.778 3.36987 11.6679 3.41835C11.5577 3.46682 11.4584 3.53691 11.3758 3.62445C11.2152 3.79471 11.1273 4.02086 11.1307 4.25489C11.1341 4.48892 11.2286 4.71241 11.3941 4.87792C11.5596 5.04342 11.7831 5.13791 12.0171 5.14132C12.2511 5.14473 12.4773 5.0568 12.6476 4.89619Z" fill="#FF4053" />
                                            </svg></button>
                                        </div>
                                    </div>

                                    <div className="tag-container">
                                        <strong className="d-block ">Tags</strong>
                                        <div className="tagBtn">
                                            <span className="badge-custom">Design</span>
                                            <span className="badge-custom">Interface</span>
                                            <span className="badge-custom">Interface</span>
                                        </div>

                                    </div>




                                </div>

                                <div class="single-post-right sidebar RightsidebarBlog RetagRightsideba">
                                    {/* <div className="SpacedicAdd"></div> */}
                                    <div class="card mb-3 ">
                                        <div class="card-header ">
                                            General Information
                                        </div>

                                        <div class="sidePost sidePostGI col-lg-12">
                                            <div>
                                                <span>Founded in</span>
                                                <p>2026</p>
                                            </div>
                                            <div>
                                                <span>Certification</span>
                                                <ul className="SidepostUL">
                                                    <li>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"></rect><path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                    </li>
                                                    <li>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"></rect><path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                    </li>
                                                    <li>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"></rect><path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                    </li>
                                                    <li>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"></rect><path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <span>Compatibility</span>
                                                <p>Bomb Pot</p>
                                            </div>
                                            <div>
                                                <span>Wallet</span>
                                                <ul className="SidepostUL">
                                                    <li>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"></rect><path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                    </li>
                                                    <li>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"></rect><path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <span>Responsible gaming</span>
                                                <p>Bomb Pot</p>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="card  ">
                                        <div class="card-header ">
                                            Deposits / Withdrawal
                                        </div>

                                        <div class="sidePost sidePostDW col-lg-12">
                                            <ul>
                                                <li>Min. deposit: $10/€10/500RUR</li>
                                                <li>Mix. withdrawal: $10/€10/500RUR</li>
                                                <li>Instant withdrawal</li>
                                            </ul>
                                            <div className="DWCards">
                                                <button>
                                                    <img src={Bitcoin} />
                                                </button>
                                                <button>
                                                    <img src={Etherium} />
                                                </button>
                                                <button>
                                                    <img src={GooglePay} />
                                                </button>
                                                <button>
                                                    <img src={Lightcoin} />
                                                </button>
                                                <button>
                                                    <img src={Mastercard} />
                                                </button>
                                                <button>
                                                    <img src={visalogo} />
                                                </button>
                                            </div>
                                            <p>The list of available payment systems depends on your country and region of residence and may differ from the one listed on this page.</p>
                                        </div>
                                    </div>

                                    {/* <div className="SpacedicAdd SpacedicAddsBAckground"></div> */}

                                    <div class="card  mb-3 ">
                                        <div class="card-header ">
                                            Games offered
                                        </div>

                                        <div class="sidePost sidePostDW sidePostGamesoffered col-lg-12">
                                            <div className="DWCards">
                                                <button>
                                                    <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_6794_16390)">
                                                            <path d="M10.0474 8.04492C4.68604 8.04492 0.324219 12.4067 0.324219 17.7681C0.324219 23.1295 4.68604 27.4914 10.0474 27.4914C15.4088 27.4914 19.7707 23.1295 19.7707 17.7681C19.7707 12.4068 15.4088 8.04492 10.0474 8.04492ZM8.09721 24.8334C8.0266 25.0804 7.80143 25.2416 7.55663 25.2416C7.50548 25.2416 7.45348 25.2345 7.40186 25.2197C5.66468 24.7234 4.17198 23.6254 3.08507 22.0444C2.2689 20.8573 1.96558 19.8147 1.95303 19.7708C1.8677 19.4721 2.04062 19.1608 2.33936 19.0755C2.63783 18.99 2.94876 19.1628 3.0345 19.4609C3.0403 19.4807 3.31573 20.4046 4.03382 21.4384C4.98188 22.8034 6.21908 23.7117 7.71093 24.138C8.00962 24.2234 8.18259 24.5346 8.09721 24.8334ZM17.2734 15.6572C17.2218 15.672 17.1697 15.6791 17.1186 15.6791C16.8738 15.6791 16.6487 15.518 16.5781 15.2709C16.1518 13.779 15.2436 12.5418 13.8785 11.5938C12.8386 10.8716 11.91 10.5971 11.9007 10.5944C11.6028 10.5079 11.4306 10.1965 11.5165 9.89838C11.6023 9.60032 11.9128 9.42788 12.2109 9.51305C12.2547 9.52554 13.2973 9.82893 14.4845 10.6451C16.0654 11.732 17.1635 13.2248 17.6598 14.9619C17.7451 15.2606 17.5721 15.5719 17.2734 15.6572Z" fill="black" />
                                                            <path d="M12.6983 7.24954V5.47461H7.39453V7.24954C8.24355 7.03544 9.13187 6.92111 10.0465 6.92111C10.961 6.92117 11.8493 7.03544 12.6983 7.24954Z" fill="black" />
                                                            <path d="M21.5379 6.8404C21.5379 6.52975 21.2861 6.27789 20.9754 6.27789H18.7254C17.4404 6.27789 16.395 5.23248 16.395 3.9475C16.3951 2.04226 14.845 0.492188 12.9397 0.492188C11.0344 0.492188 9.48438 2.04226 9.48438 3.94755V4.3756H10.6094V3.94755C10.6094 2.66258 11.6548 1.61717 12.9397 1.61717C14.2247 1.61717 15.2701 2.66258 15.2701 3.94755C15.2701 5.85285 16.8201 7.40292 18.7254 7.40292H20.9755C21.2861 7.40292 21.5379 7.15106 21.5379 6.8404Z" fill="black" />
                                                            <path d="M21.6172 8.84961C21.3065 8.84961 21.0547 9.10147 21.0547 9.41213V11.3407C21.0547 11.6514 21.3065 11.9032 21.6172 11.9032C21.9279 11.9032 22.1797 11.6514 22.1797 11.3407V9.41213C22.1797 9.10147 21.9278 8.84961 21.6172 8.84961Z" fill="black" />
                                                            <path d="M21.6172 1.77734C21.3065 1.77734 21.0547 2.02915 21.0547 2.33986V4.26841C21.0547 4.57907 21.3065 4.83093 21.6172 4.83093C21.9279 4.83093 22.1797 4.57907 22.1797 4.26841V2.33986C22.1797 2.0292 21.9278 1.77734 21.6172 1.77734Z" fill="black" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_6794_16390">
                                                                <rect width="27" height="27" fill="white" transform="translate(0.00390625 0.492188)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    Bomb Pot
                                                </button>
                                                <button>
                                                    <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21.2664 30.9229L8.11572 31.3581C7.0531 31.3933 6.15653 30.5507 6.117 29.4799L5.3086 7.57409C5.26908 6.50329 6.10146 5.60361 7.16408 5.56843L20.3147 5.13329C21.3773 5.09811 22.274 5.94065 22.3136 7.01145L23.122 28.9173C23.1615 29.9881 22.3292 30.8879 21.2665 30.923L21.2664 30.9229Z" fill="black" stroke="black" />
                                                        <path d="M7.18795 6.24435C6.49439 6.26721 5.9511 6.8546 5.97681 7.5535L6.78521 29.4593C6.81108 30.1583 7.39626 30.7081 8.08983 30.6853L21.2405 30.2501C21.9341 30.2271 22.4773 29.6399 22.4516 28.941L21.6432 7.03517C21.6174 6.33631 21.0322 5.78633 20.3386 5.8092L7.18795 6.24435Z" fill="#F9F9F9" />
                                                        <path d="M8.9474 7.84914C8.56191 7.54995 8.23188 8.09052 8.23188 8.09052C8.23188 8.09052 7.87948 7.56149 7.5067 7.87343C7.13396 8.18551 7.37497 8.67097 7.52753 8.86663C7.68522 9.06883 8.26306 9.58032 8.26306 9.58032C8.26306 9.58032 8.81906 9.0498 8.96823 8.84233C9.11246 8.64156 9.33302 8.14829 8.9474 7.84914Z" fill="black" />
                                                        <path d="M23.1316 31.4582L10.1897 29.0315C9.1439 28.8354 8.44784 27.8195 8.63795 26.7666L12.5265 5.2289C12.7166 4.17608 13.7219 3.47917 14.7677 3.67528L27.7096 6.10197C28.7554 6.29809 29.4514 7.31407 29.2615 8.36686L25.3728 29.9046C25.1827 30.9574 24.1772 31.6544 23.1316 31.4584L23.1316 31.4582Z" fill="black" stroke="black" />
                                                        <path d="M14.6475 4.34006C13.965 4.21213 13.3087 4.66698 13.1847 5.35421L9.29606 26.892C9.17195 27.5792 9.62634 28.2424 10.309 28.3704L23.2509 30.7971C23.9336 30.9251 24.5898 30.4702 24.7139 29.7829L28.6025 8.24513C28.7267 7.558 28.2722 6.89475 27.5896 6.76672L14.6477 4.34003L14.6475 4.34006Z" fill="#F9F9F9" />
                                                        <path d="M17.1738 14.2823C17.5255 14.13 17.8619 14.1133 18.1682 14.1978C18.5074 14.2913 18.7784 14.4997 18.9811 14.7109C19.1452 14.8819 19.2747 15.0669 19.3714 15.2241C19.5167 15.1123 19.703 14.9873 19.916 14.8871C20.1801 14.7628 20.5071 14.6668 20.8573 14.7026C21.084 14.7258 21.3065 14.8027 21.5154 14.9438L21.5472 14.8888L21.8712 15.264L21.9759 15.3947C22.4675 16.0535 22.4534 16.7673 22.2462 17.3655C22.031 17.9868 21.6045 18.5054 21.294 18.7924C20.9775 19.085 20.2986 19.554 19.7256 19.9345C19.4339 20.1283 19.1605 20.3046 18.9603 20.4328C18.8602 20.4969 18.778 20.5488 18.721 20.5848C18.6926 20.6028 18.6706 20.6171 18.6554 20.6267C18.6479 20.6314 18.642 20.6349 18.6381 20.6374C18.6363 20.6385 18.6349 20.6399 18.6339 20.6406L18.632 20.6411L18.3603 20.8119L18.1662 20.5556L18.1657 20.5537C18.165 20.5527 18.1639 20.5512 18.1626 20.5495C18.1598 20.5458 18.1555 20.5406 18.1502 20.5336C18.1394 20.5191 18.1233 20.4976 18.103 20.4704C18.0623 20.416 18.0035 20.3374 17.9324 20.2411C17.7901 20.0488 17.5964 19.785 17.3916 19.4983C16.9889 18.9348 16.5189 18.2507 16.3256 17.8631C16.1361 17.4831 15.9182 16.8446 15.934 16.1866C15.9504 15.5114 16.2181 14.7899 17.0218 14.3564L17.1738 14.2823Z" fill="black" stroke="black" stroke-width="0.7" />
                                                        <path d="M16.0301 6.2789C15.7112 5.90853 15.2805 6.37137 15.2805 6.37137C15.2805 6.37137 15.0397 5.78258 14.6123 6.01311C14.185 6.24361 14.3251 6.76743 14.436 6.98967C14.5506 7.21942 15.016 7.83629 15.016 7.83629C15.016 7.83629 15.6664 7.42874 15.8536 7.25563C16.0348 7.0881 16.3488 6.64944 16.03 6.27907L16.0301 6.2789Z" fill="black" />
                                                        <path d="M23.3254 29.0884C22.8987 29.3201 22.6562 28.7321 22.6562 28.7321C22.6562 28.7321 22.2269 29.1963 21.907 28.8267C21.587 28.4572 21.8997 28.0176 22.0805 27.8497C22.2673 27.6759 22.9165 27.2665 22.9165 27.2665C22.9165 27.2665 23.3837 27.8818 23.4989 28.1113C23.6104 28.3332 23.7521 28.8566 23.3254 29.0884Z" fill="black" />
                                                    </svg>
                                                    NLH
                                                </button>
                                                <button>
                                                    <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24.3752 31.1791L11.4598 33.6877C10.4162 33.8904 9.39992 33.1991 9.19411 32.1468L4.98563 10.6179C4.77995 9.56556 5.46162 8.54444 6.50522 8.34177L19.4206 5.83317C20.4642 5.63051 21.4806 6.32176 21.6863 7.37411L25.8948 28.903C26.1005 29.9553 25.4188 30.9765 24.3752 31.1791Z" fill="black" stroke="black" />
                                                        <path d="M6.63657 9.00537C5.95546 9.13771 5.5105 9.8042 5.64468 10.4911L9.85316 32.0199C9.98749 32.7069 10.6509 33.1581 11.332 33.0257L24.2474 30.5172C24.9287 30.3848 25.3736 29.7183 25.2393 29.0315L21.0308 7.5026C20.8965 6.81576 20.2331 6.36456 19.552 6.49677L6.63657 9.00537Z" fill="#F9F9F9" />
                                                        <path d="M8.74134 10.5205C8.3248 10.2672 8.05795 10.8422 8.05795 10.8422C8.05795 10.8422 7.64846 10.3565 7.31339 10.7093C6.97832 11.062 7.27236 11.5171 7.44589 11.6942C7.62516 11.8772 8.25669 12.3195 8.25669 12.3195C8.25669 12.3195 8.74922 11.7287 8.87384 11.5055C8.99453 11.2895 9.15788 10.7739 8.74134 10.5205Z" fill="black" />
                                                        <path d="M26.0632 31.1612L12.9126 31.5964C11.85 31.6316 10.9534 30.789 10.9139 29.7182L10.1055 7.81237C10.066 6.74157 10.8983 5.84189 11.961 5.80671L25.1116 5.37157C26.1742 5.33639 27.0709 6.17893 27.1104 7.24973L27.9188 29.1555C27.9584 30.2263 27.126 31.1261 26.0634 31.1613L26.0632 31.1612Z" fill="black" stroke="black" />
                                                        <path d="M11.9848 6.48263C11.2913 6.50549 10.748 7.09288 10.7737 7.79178L11.5821 29.6976C11.608 30.3966 12.1931 30.9464 12.8867 30.9236L26.0373 30.4884C26.731 30.4654 27.2742 29.8782 27.2485 29.1793L26.4401 7.27346C26.4142 6.57459 25.829 6.02461 25.1355 6.04748L11.9848 6.48263Z" fill="#F9F9F9" />
                                                        <path d="M13.7443 8.08742C13.3588 7.78823 13.0288 8.3288 13.0288 8.3288C13.0288 8.3288 12.6764 7.79977 12.3036 8.11172C11.9308 8.4238 12.1718 8.90925 12.3244 9.10491C12.4821 9.30712 13.0599 9.8186 13.0599 9.8186C13.0599 9.8186 13.6159 9.28808 13.7651 9.08061C13.9093 8.87984 14.1299 8.38657 13.7443 8.08742Z" fill="black" />
                                                        <path d="M26.8894 32.4836L13.9475 30.0569C12.9017 29.8608 12.2057 28.8448 12.3958 27.792L16.2843 6.2543C16.4744 5.20147 17.4797 4.50456 18.5255 4.70067L31.4674 7.12736C32.5132 7.32348 33.2093 8.33946 33.0193 9.39225L29.1306 30.93C28.9405 31.9828 27.935 32.6798 26.8894 32.4838L26.8894 32.4836Z" fill="black" stroke="black" />
                                                        <path d="M18.4053 5.36545C17.7228 5.23752 17.0665 5.69237 16.9425 6.3796L13.0539 27.9174C12.9298 28.6046 13.3842 29.2677 14.0668 29.3958L27.0087 31.8225C27.6914 31.9505 28.3476 31.4955 28.4717 30.8083L32.3603 9.27052C32.4845 8.58339 32.03 7.92014 31.3474 7.79211L18.4055 5.36542L18.4053 5.36545Z" fill="#F9F9F9" />
                                                        <path d="M20.9316 15.3076C21.2833 15.1554 21.6197 15.1387 21.9261 15.2232C22.2652 15.3167 22.5362 15.5251 22.7389 15.7363C22.903 15.9073 23.0326 16.0923 23.1292 16.2495C23.2745 16.1377 23.4608 16.0127 23.6738 15.9125C23.9379 15.7882 24.2649 15.6922 24.6151 15.728C24.8419 15.7512 25.0643 15.8281 25.2732 15.9692L25.305 15.9142L25.629 16.2894L25.7337 16.4201C26.2253 17.0789 26.2112 17.7927 26.004 18.3909C25.7888 19.0122 25.3623 19.5308 25.0518 19.8178C24.7353 20.1104 24.0564 20.5793 23.4834 20.9599C23.1917 21.1537 22.9183 21.33 22.7182 21.4582C22.618 21.5223 22.5359 21.5742 22.4789 21.6102C22.4504 21.6282 22.4284 21.6425 22.4132 21.6521C22.4058 21.6568 22.3998 21.6603 22.3959 21.6628C22.3941 21.6639 22.3927 21.6653 22.3917 21.6659L22.3898 21.6664L22.1181 21.8373L21.924 21.5809L21.9235 21.5791C21.9228 21.5781 21.9217 21.5766 21.9204 21.5749C21.9176 21.5712 21.9133 21.5659 21.908 21.559C21.8972 21.5445 21.8811 21.523 21.8608 21.4958C21.8201 21.4414 21.7614 21.3628 21.6902 21.2665C21.5479 21.0742 21.3543 20.8104 21.1494 20.5237C20.7467 19.9601 20.2767 19.2761 20.0834 18.8885C19.8939 18.5084 19.676 17.87 19.6918 17.212C19.7082 16.5368 19.9759 15.8153 20.7796 15.3817L20.9316 15.3076Z" fill="black" stroke="black" stroke-width="0.7" />
                                                        <path d="M19.7879 7.30429C19.469 6.93392 19.0383 7.39676 19.0383 7.39676C19.0383 7.39676 18.7975 6.80798 18.3701 7.0385C17.9429 7.269 18.0829 7.79282 18.1938 8.01506C18.3084 8.24481 18.7738 8.86168 18.7738 8.86168C18.7738 8.86168 19.4242 8.45413 19.6114 8.28102C19.7926 8.11349 20.1066 7.67483 19.7878 7.30446L19.7879 7.30429Z" fill="black" />
                                                        <path d="M27.0832 30.1138C26.6565 30.3455 26.414 29.7575 26.414 29.7575C26.414 29.7575 25.9847 30.2217 25.6648 29.8521C25.3449 29.4826 25.6575 29.043 25.8383 28.875C26.0251 28.7013 26.6743 28.2919 26.6743 28.2919C26.6743 28.2919 27.1415 28.9072 27.2567 29.1367C27.3682 29.3586 27.5099 29.882 27.0832 30.1138Z" fill="black" />
                                                    </svg>
                                                    Super Holdem
                                                </button>
                                                <button>

                                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.999 29.2753L7.06438 31.6856C6.01923 31.8804 5.01063 31.181 4.81585 30.1266L0.833095 8.55566C0.638448 7.50125 1.33036 6.48491 2.37551 6.29018L15.3101 3.87984C16.3553 3.68511 17.364 4.3845 17.5586 5.43891L21.5414 27.0098C21.736 28.0642 21.0441 29.0806 19.999 29.2753Z" fill="black" stroke="black" />
                                                        <path d="M2.49881 6.95502C1.81668 7.08219 1.36504 7.74555 1.49202 8.43374L5.47477 30.0047C5.60189 30.693 6.2603 31.1495 6.94243 31.0223L19.877 28.612C20.5593 28.4848 21.0109 27.8214 20.8838 27.1333L16.9011 5.56234C16.774 4.87417 16.1155 4.41765 15.4334 4.54468L2.49881 6.95502Z" fill="#F9F9F9" />
                                                        <path d="M4.58495 8.48812C4.17126 8.23145 3.89858 8.80468 3.89858 8.80468C3.89858 8.80468 3.49435 8.31564 3.15579 8.66596C2.81724 9.01629 3.1064 9.47383 3.27799 9.65237C3.45528 9.83685 4.08187 10.2842 4.08187 10.2842C4.08187 10.2842 4.58028 9.69687 4.70715 9.47452C4.83002 9.25939 4.99863 8.74479 4.58495 8.48812Z" fill="black" />
                                                        <path d="M21.5848 30.1966L8.43001 30.4243C7.36707 30.4427 6.48624 29.5855 6.46628 28.5134L6.06019 6.58077C6.04038 5.50868 6.88901 4.62144 7.95194 4.60307L21.1067 4.37532C22.1697 4.35695 23.0506 5.2142 23.0704 6.28629L23.4765 28.2189C23.4964 29.291 22.6477 30.1782 21.5848 30.1966Z" fill="black" stroke="black" />
                                                        <path d="M7.96586 5.27832C7.27211 5.29038 6.71818 5.86948 6.73105 6.56919L7.13714 28.5018C7.15014 29.2016 7.72515 29.7612 8.4189 29.7491L21.5737 29.5214C22.2676 29.5093 22.8215 28.9302 22.8085 28.2305L22.4024 6.29792C22.3894 5.59819 21.8144 5.03864 21.1206 5.05057L7.96586 5.27832Z" fill="#F9F9F9" />
                                                        <path d="M9.77546 7.13699C9.40925 6.81516 9.0466 7.3351 9.0466 7.3351C9.0466 7.3351 8.72766 6.7857 8.33643 7.07491C7.9452 7.36411 8.15575 7.86333 8.29588 8.06789C8.44065 8.27927 8.98578 8.82451 8.98578 8.82451C8.98578 8.82451 9.57343 8.32814 9.73491 8.12997C9.89128 7.93825 10.1417 7.45882 9.77546 7.13699Z" fill="black" />
                                                        <path d="M23.2313 31.0412L10.2049 29.1862C9.1523 29.0363 8.41566 28.0508 8.56268 26.9894L11.5705 5.27604C11.7175 4.21464 12.6934 3.47317 13.746 3.62305L26.7724 5.4781C27.825 5.62798 28.5618 6.61343 28.4148 7.67483L25.407 29.3882C25.26 30.4496 24.284 31.1912 23.2314 31.0413L23.2313 31.0412Z" fill="black" stroke="black" />
                                                        <path d="M13.6504 4.29246C12.9634 4.19454 12.3264 4.67866 12.2303 5.37141L9.22255 27.0848C9.12665 27.7777 9.60746 28.4208 10.2945 28.5187L23.3209 30.3737C24.008 30.4715 24.6449 29.9875 24.741 29.2948L27.7487 7.5814C27.8446 6.88867 27.3638 6.24543 26.6768 6.14751L13.6504 4.29246Z" fill="#F9F9F9" />
                                                        <path d="M15.1041 6.17987C14.7764 5.81829 14.3575 6.29334 14.3575 6.29334C14.3575 6.29334 14.1023 5.71115 13.6811 5.95363C13.2598 6.19624 13.4128 6.71617 13.5291 6.93535C13.6493 7.16186 14.1295 7.76592 14.1295 7.76592C14.1295 7.76592 14.7692 7.34001 14.9521 7.16159C15.129 6.98892 15.4319 6.54144 15.1041 6.17987Z" fill="black" />
                                                        <path d="M22.5409 33.0744L10.217 28.4373C9.22114 28.0625 8.71208 26.9411 9.08212 25.9373L16.6515 5.40203C17.0216 4.39821 18.1327 3.88647 19.1285 4.2612L31.4524 8.89836C32.4483 9.27309 32.9573 10.3945 32.5874 11.3983L25.0179 31.9336C24.6478 32.9374 23.5366 33.4492 22.5409 33.0746L22.5409 33.0744Z" fill="black" stroke="black" />
                                                        <path d="M18.893 4.89463C18.2431 4.65012 17.5177 4.98409 17.2763 5.63935L9.7067 26.1746C9.46513 26.8299 9.79747 27.5619 10.4475 27.8065L22.7714 32.4437C23.4215 32.6883 24.1467 32.3542 24.3883 31.6989L31.9578 11.1636C32.1994 10.5085 31.8671 9.77641 31.217 9.53178L18.8931 4.89462L18.893 4.89463Z" fill="#F9F9F9" />
                                                        <path d="M19.6579 15.1241C20.0307 15.0353 20.3649 15.0773 20.6519 15.2136C20.9697 15.3646 21.2004 15.6169 21.3633 15.8601C21.4952 16.057 21.5907 16.2617 21.6586 16.4333C21.8211 16.3484 22.0263 16.2577 22.2534 16.196C22.5351 16.1195 22.8738 16.0817 23.2125 16.1777C23.4318 16.2399 23.6375 16.3543 23.8187 16.5295L23.8596 16.4809L24.1135 16.9067L24.1939 17.0535C24.5636 17.7877 24.4258 18.4883 24.1179 19.0414C23.798 19.6158 23.2879 20.0525 22.9324 20.2812C22.5698 20.5144 21.8199 20.8584 21.1895 21.1336C20.8685 21.2738 20.5686 21.4 20.3493 21.4914C20.2396 21.5372 20.1496 21.574 20.0872 21.5996C20.0561 21.6124 20.0319 21.6227 20.0153 21.6295C20.0072 21.6328 20.0007 21.6352 19.9964 21.637C19.9944 21.6378 19.9928 21.6389 19.9917 21.6394L19.9897 21.6395L19.6925 21.7606L19.5459 21.4745L19.5458 21.4725C19.5452 21.4715 19.5444 21.4698 19.5434 21.4678C19.5413 21.4637 19.538 21.4578 19.534 21.45C19.5258 21.4339 19.5137 21.4099 19.4984 21.3796C19.4678 21.319 19.4236 21.2313 19.3702 21.1242C19.2635 20.9101 19.1186 20.6167 18.9667 20.2988C18.668 19.6739 18.3239 18.9186 18.2008 18.5033C18.0802 18.0961 17.9764 17.4295 18.1063 16.7842C18.2396 16.1222 18.6286 15.4582 19.4954 15.1707L19.6579 15.1241Z" fill="black" stroke="black" stroke-width="0.7" />
                                                        <path d="M19.9188 7.04499C19.6691 6.62487 19.1646 7.0059 19.1646 7.0059C19.1646 7.0059 19.0297 6.38425 18.5688 6.53706C18.108 6.68985 18.155 7.23004 18.2256 7.46816C18.2985 7.71431 18.6497 8.40263 18.6497 8.40263C18.6497 8.40263 19.361 8.11421 19.5755 7.97624C19.783 7.84273 20.1684 7.46526 19.9187 7.04514L19.9188 7.04499Z" fill="black" />
                                                        <path d="M23.144 30.7731C22.6836 30.9272 22.5468 30.306 22.5468 30.306C22.5468 30.306 22.0434 30.6886 21.7925 30.2691C21.5417 29.8497 21.9259 29.4711 22.1331 29.337C22.3472 29.1984 23.0576 28.9079 23.0576 28.9079C23.0576 28.9079 23.4109 29.595 23.4846 29.841C23.5558 30.0789 23.6044 30.619 23.144 30.7731Z" fill="black" />
                                                    </svg>
                                                    PLO-4
                                                </button>
                                                <button>

                                                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.0485 27.8285L11.593 32.3764C10.7481 32.7439 9.76191 32.3555 9.39434 31.5107L1.87636 14.2274C1.5089 13.3826 1.89724 12.3962 2.74207 12.0288L13.1976 7.48081C14.0424 7.11335 15.0287 7.50169 15.3962 8.34653L22.9142 25.6298C23.2816 26.4747 22.8933 27.461 22.0485 27.8285Z" fill="black" stroke="black" />
                                                        <path d="M2.9728 12.5613C2.42142 12.8012 2.16793 13.445 2.40771 13.9964L9.92569 31.2797C10.1656 31.8312 10.8094 32.0847 11.3608 31.8448L21.8163 27.2969C22.3678 27.057 22.6213 26.4132 22.3814 25.8618L14.8634 8.57847C14.6235 8.02709 13.9797 7.7736 13.4283 8.01337L2.9728 12.5613Z" fill="#F9F9F9" />
                                                        <path d="M5.03076 13.436C4.63207 13.302 4.51229 13.8353 4.51229 13.8353C4.51229 13.8353 4.07681 13.5049 3.85848 13.8645C3.64015 14.224 3.97241 14.5506 4.15168 14.6665C4.33689 14.7863 4.95206 15.0384 4.95206 15.0384C4.95206 15.0384 5.25968 14.4491 5.32395 14.2381C5.38624 14.0339 5.42946 13.57 5.03076 13.436Z" fill="black" />
                                                        <path d="M23.8822 28.7165L12.8203 31.48C11.9265 31.7033 11.0177 31.1577 10.7944 30.2639L6.22623 11.9782C6.00297 11.0844 6.54849 10.1755 7.44231 9.95226L18.5042 7.18882C19.398 6.96555 20.3069 7.51107 20.5301 8.4049L25.0983 26.6906C25.3215 27.5844 24.776 28.4933 23.8822 28.7165Z" fill="black" stroke="black" />
                                                        <path d="M7.58328 10.5156C6.99992 10.6613 6.64383 11.2546 6.7895 11.838L11.3576 30.1236C11.5034 30.7071 12.0967 31.0632 12.68 30.9174L23.7419 28.154C24.3253 28.0082 24.6814 27.4149 24.5356 26.8316L19.9675 8.5459C19.8217 7.96253 19.2285 7.60645 18.6451 7.75211L7.58328 10.5156Z" fill="#F9F9F9" />
                                                        <path d="M9.46703 11.7189C9.09586 11.5211 8.88986 12.0274 8.88986 12.0274C8.88986 12.0274 8.51477 11.6297 8.24019 11.9484C7.96561 12.267 8.23954 12.6439 8.39725 12.7878C8.56019 12.9364 9.12545 13.2864 9.12545 13.2864C9.12545 13.2864 9.52594 12.7558 9.62409 12.5583C9.71916 12.3672 9.8382 11.9168 9.46703 11.7189Z" fill="black" />
                                                        <path d="M25.4192 29.9233L14.0645 30.9177C13.147 30.998 12.3352 30.3169 12.2549 29.3994L10.6111 10.6296C10.5308 9.71213 11.2119 8.90039 12.1294 8.82003L23.4841 7.82571C24.4016 7.74536 25.2134 8.42642 25.2938 9.34392L26.9376 28.1137C27.0179 29.0312 26.3369 29.8431 25.4194 29.9234L25.4192 29.9233Z" fill="black" stroke="black" />
                                                        <path d="M12.1794 9.39848C11.5806 9.45085 11.1361 9.98081 11.1884 10.5797L12.8322 29.3494C12.8847 29.9484 13.4145 30.3928 14.0134 30.3405L25.3681 29.3461C25.967 29.2936 26.4115 28.7638 26.3591 28.165L24.7153 9.39518C24.6629 8.79636 24.133 8.35179 23.5342 8.40416L12.1794 9.39848Z" fill="#F9F9F9" />
                                                        <path d="M13.7687 10.6953C13.4224 10.4566 13.1602 10.9363 13.1602 10.9363C13.1602 10.9363 12.8326 10.4987 12.5237 10.7841C12.2148 11.0697 12.4442 11.4751 12.5845 11.6359C12.7296 11.8021 13.2515 12.2139 13.2515 12.2139C13.2515 12.2139 13.7094 11.7322 13.8295 11.547C13.9456 11.3678 14.1151 10.9339 13.7687 10.6953Z" fill="black" />
                                                        <path d="M26.0118 32.2517L14.7142 30.7791C13.8013 30.6601 13.1555 29.8206 13.2745 28.9077L15.7088 10.2323C15.8278 9.31935 16.6673 8.67354 17.5802 8.79256L28.8778 10.2652C29.7907 10.3842 30.4365 11.2237 30.3176 12.1366L27.8832 30.812C27.7642 31.7249 26.9246 32.3708 26.0119 32.2518L26.0118 32.2517Z" fill="black" stroke="black" />
                                                        <path d="M17.5052 9.36824C16.9094 9.29061 16.3614 9.71212 16.2838 10.308L13.8494 28.9835C13.7717 29.5794 14.1933 30.1273 14.7892 30.205L26.0868 31.6777C26.6828 31.7554 27.2306 31.3338 27.3084 30.7379L29.7427 12.0624C29.8205 11.4666 29.3989 10.9186 28.8029 10.8409L17.5053 9.3682L17.5052 9.36824Z" fill="#F9F9F9" />
                                                        <path d="M24.0046 18.6171C23.0957 17.6729 21.9971 18.9746 21.9971 18.9746C21.9971 18.9746 21.2689 17.4348 20.1483 18.1143C19.0276 18.794 19.4757 20.1746 19.8043 20.7529C20.144 21.3506 21.4813 22.9323 21.4813 22.9323C21.4813 22.9323 23.1793 21.7462 23.6607 21.2555C24.1267 20.7807 24.9137 19.5611 24.0047 18.617L24.0046 18.6171Z" fill="black" />
                                                        <path d="M18.7831 10.9692C18.4914 10.6663 18.1389 11.084 18.1389 11.084C18.1389 11.084 17.9053 10.5898 17.5455 10.8079C17.1859 11.026 17.3297 11.4691 17.4352 11.6547C17.5442 11.8465 17.9733 12.3542 17.9733 12.3542C17.9733 12.3542 18.5182 11.9736 18.6727 11.8161C18.8222 11.6637 19.0748 11.2723 18.7831 10.9693L18.7831 10.9692Z" fill="black" />
                                                        <path d="M26.0746 30.2086C25.7156 30.4278 25.4805 29.9343 25.4805 29.9343C25.4805 29.9343 25.1292 30.3531 24.8366 30.051C24.544 29.7488 24.7954 29.3566 24.9445 29.2039C25.0986 29.0459 25.6424 28.6637 25.6424 28.6637C25.6424 28.6637 26.073 29.17 26.1825 29.3615C26.2886 29.5468 26.4336 29.9895 26.0746 30.2086Z" fill="black" />
                                                        <path d="M25.5861 34.9359L15.0546 30.5894C14.2036 30.2381 13.7971 29.2602 14.1483 28.4092L21.3332 11.0001C21.6845 10.1491 22.6625 9.74256 23.5135 10.0938L34.045 14.4403C34.896 14.7916 35.3025 15.7695 34.9514 16.6205L27.7664 34.0296C27.4151 34.8806 26.437 35.2871 25.5861 34.936L25.5861 34.9359Z" fill="black" stroke="black" />
                                                        <path d="M23.2924 10.6299C22.737 10.4007 22.0985 10.666 21.8694 11.2215L14.6844 28.6306C14.4551 29.1861 14.7205 29.8244 15.276 30.0537L25.8075 34.4002C26.363 34.6295 27.0013 34.3641 27.2306 33.8086L34.4156 16.3996C34.6449 15.8442 34.3795 15.2057 33.824 14.9764L23.2925 10.6299L23.2924 10.6299Z" fill="#F9F9F9" />
                                                        <path d="M23.4815 19.4262C23.8759 19.3114 24.2237 19.351 24.5142 19.5002C24.7948 19.6443 24.9925 19.8754 25.1291 20.0938C25.228 20.2519 25.3014 20.4141 25.3547 20.5553C25.4922 20.4927 25.6589 20.4294 25.8407 20.387C26.0916 20.3286 26.3946 20.3052 26.6952 20.4009C26.8767 20.4587 27.045 20.5576 27.1939 20.7004L27.243 20.647L27.4806 21.0766L27.5472 21.209C27.8532 21.8689 27.7078 22.4842 27.418 22.9603C27.1179 23.4531 26.6557 23.8184 26.3365 24.0067C26.0116 24.1984 25.3483 24.4725 24.795 24.6898C24.5124 24.8008 24.2488 24.9009 24.0558 24.9731C23.9595 25.0091 23.8805 25.0383 23.8256 25.0585C23.7982 25.0686 23.7759 25.076 23.7613 25.0814C23.7543 25.084 23.7487 25.0858 23.745 25.0871C23.7431 25.0878 23.7412 25.089 23.7402 25.0893L23.7392 25.0894L23.4389 25.199L23.3025 24.9099L23.3024 24.9079C23.3019 24.907 23.301 24.9058 23.3002 24.9041C23.2985 24.9004 23.2958 24.8949 23.2925 24.8879C23.2859 24.8738 23.2762 24.8532 23.2639 24.8268C23.2392 24.7738 23.2042 24.697 23.1612 24.6033C23.0753 24.4161 22.958 24.1592 22.8359 23.8811C22.5968 23.3368 22.3205 22.6743 22.2254 22.3093C22.132 21.9507 22.0617 21.3666 22.1965 20.8059C22.3355 20.2276 22.7029 19.6529 23.4815 19.4262Z" fill="black" stroke="black" stroke-width="0.7" />
                                                        <path d="M24.1131 12.5065C23.9097 12.1383 23.461 12.4506 23.461 12.4506C23.461 12.4506 23.3633 11.9128 22.9594 12.0303C22.5556 12.1479 22.5797 12.6131 22.6336 12.8197C22.6892 13.0332 22.9723 13.6347 22.9723 13.6347C22.9723 13.6347 23.5972 13.408 23.7872 13.2959C23.971 13.1874 24.3163 12.8747 24.1129 12.5066L24.1131 12.5065Z" fill="black" />
                                                        <path d="M26.1763 32.9784C25.7729 33.0971 25.6734 32.5597 25.6734 32.5597C25.6734 32.5597 25.2257 32.8733 25.0213 32.5057C24.8169 32.1381 25.1612 31.8243 25.3448 31.7154C25.5345 31.6027 26.1587 31.3742 26.1587 31.3742C26.1587 31.3742 26.4436 31.9747 26.4998 32.1881C26.5543 32.3945 26.5798 32.8597 26.1763 32.9784Z" fill="black" />
                                                    </svg>

                                                    PLO-5
                                                </button>
                                                <button>

                                                    <svg width="47" height="44" viewBox="0 0 47 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24.8768 27.1493L15.3521 33.4169C14.5826 33.9233 13.5443 33.7092 13.038 32.9395L2.67746 17.1951C2.17102 16.4255 2.38511 15.3873 3.15482 14.8809L12.6795 8.61335C13.4492 8.10688 14.4873 8.321 14.9937 9.09056L25.3543 24.8351C25.8607 25.6047 25.6466 26.6429 24.877 27.1494L24.8768 27.1493Z" fill="black" stroke="black" />
                                                        <path d="M3.47301 15.3662C2.97073 15.6968 2.83092 16.3743 3.1614 16.8767L13.5219 32.6212C13.8526 33.1236 14.5301 33.2633 15.0324 32.9328L24.5571 26.6653C25.0595 26.3347 25.1992 25.6571 24.8687 25.1547L14.5082 9.41011C14.1776 8.90783 13.5 8.76802 12.9976 9.09854L3.47301 15.3662Z" fill="#F9F9F9" />
                                                        <path d="M5.72704 15.8932C5.30936 15.844 5.3018 16.3906 5.3018 16.3906C5.3018 16.3906 4.80762 16.1568 4.66802 16.5535C4.52831 16.9502 4.92065 17.2015 5.11985 17.2781C5.32579 17.3572 5.97958 17.4774 5.97958 17.4774C5.97958 17.4774 6.15939 16.8374 6.17884 16.6176C6.19775 16.405 6.14468 15.9423 5.727 15.8931L5.72704 15.8932Z" fill="black" />
                                                        <path d="M25.9625 27.5316L15.507 32.0796C14.6622 32.447 13.676 32.0586 13.3084 31.2138L5.79042 13.9305C5.42296 13.0857 5.8113 12.0993 6.65614 11.7319L17.1116 7.18393C17.9565 6.81647 18.9428 7.20481 19.3103 8.04965L26.8282 25.333C27.1957 26.1778 26.8074 27.1641 25.9625 27.5316Z" fill="black" stroke="black" />
                                                        <path d="M6.88687 12.2644C6.33549 12.5043 6.082 13.1481 6.32177 13.6995L13.8398 30.9829C14.0797 31.5344 14.7235 31.7878 15.2749 31.548L25.7303 27C26.2818 26.7601 26.5353 26.1163 26.2954 25.5649L18.7774 8.28159C18.5376 7.73021 17.8938 7.47672 17.3424 7.7165L6.88687 12.2644Z" fill="#F9F9F9" />
                                                        <path d="M8.94482 13.1392C8.54613 13.0051 8.42635 13.5385 8.42635 13.5385C8.42635 13.5385 7.99087 13.208 7.77254 13.5676C7.55422 13.9271 7.88648 14.2537 8.06574 14.3696C8.25095 14.4894 8.86613 14.7415 8.86613 14.7415C8.86613 14.7415 9.17374 14.1522 9.23802 13.9412C9.30031 13.737 9.34352 13.2732 8.94482 13.1392Z" fill="black" />
                                                        <path d="M27.8002 28.4197L16.7383 31.1831C15.8445 31.4064 14.9357 30.8608 14.7123 29.967L10.1442 11.6814C9.92094 10.7875 10.4665 9.87865 11.3603 9.65538L22.4221 6.89194C23.316 6.66868 24.2249 7.21419 24.4481 8.10802L29.0162 26.3937C29.2395 27.2875 28.694 28.1964 27.8002 28.4197Z" fill="black" stroke="black" />
                                                        <path d="M11.5012 10.2187C10.9179 10.3645 10.5618 10.9577 10.7075 11.5411L15.2756 29.8267C15.4214 30.4102 16.0146 30.7663 16.598 30.6205L27.6598 27.8571C28.2433 27.7113 28.5994 27.118 28.4536 26.5347L23.8855 8.24902C23.7397 7.66566 23.1465 7.30957 22.5631 7.45524L11.5012 10.2187Z" fill="#F9F9F9" />
                                                        <path d="M13.385 11.422C13.0138 11.2242 12.8078 11.7305 12.8078 11.7305C12.8078 11.7305 12.4327 11.3328 12.1582 11.6515C11.8836 11.9702 12.1575 12.347 12.3152 12.4909C12.4782 12.6396 13.0434 12.9895 13.0434 12.9895C13.0434 12.9895 13.4439 12.459 13.5421 12.2614C13.6371 12.0703 13.7562 11.6199 13.385 11.422Z" fill="black" />
                                                        <path d="M29.3333 29.6284L17.9786 30.6227C17.0611 30.7031 16.2493 30.022 16.169 29.1045L14.5252 10.3347C14.4448 9.41721 15.1259 8.60547 16.0434 8.52511L27.3981 7.53079C28.3156 7.45043 29.1275 8.1315 29.2079 9.049L30.8516 27.8188C30.932 28.7363 30.2509 29.5481 29.3334 29.6285L29.3333 29.6284Z" fill="black" stroke="black" />
                                                        <path d="M16.0935 9.10355C15.4947 9.15592 15.0501 9.68588 15.1025 10.2847L16.7463 29.0545C16.7988 29.6534 17.3286 30.0979 17.9274 30.0455L29.2822 29.0512C29.8811 28.9987 30.3256 28.4689 30.2732 27.87L28.6294 9.10026C28.5769 8.50144 28.0471 8.05687 27.4482 8.10924L16.0935 9.10355Z" fill="#F9F9F9" />
                                                        <path d="M17.6827 10.4003C17.3364 10.1617 17.0743 10.6414 17.0743 10.6414C17.0743 10.6414 16.7467 10.2038 16.4378 10.4892C16.1288 10.7747 16.3582 11.1802 16.4986 11.341C16.6437 11.5071 17.1655 11.919 17.1655 11.919C17.1655 11.919 17.6235 11.4373 17.7436 11.2521C17.8596 11.0729 18.0291 10.639 17.6827 10.4003Z" fill="black" />
                                                        <path d="M29.9259 31.9549L18.6283 30.4822C17.7154 30.3632 17.0696 29.5237 17.1886 28.6108L19.6229 9.93538C19.7419 9.02247 20.5813 8.37667 21.4942 8.49568L32.7918 9.96834C33.7048 10.0874 34.3506 10.9268 34.2317 11.8397L31.7973 30.5152C31.6783 31.4281 30.8387 32.0739 29.9259 31.955L29.9259 31.9549Z" fill="black" stroke="black" />
                                                        <path d="M21.4193 9.07137C20.8235 8.99374 20.2754 9.41524 20.1979 10.0111L17.7635 28.6866C17.6858 29.2826 18.1073 29.8304 18.7033 29.9082L30.0009 31.3808C30.5968 31.4585 31.1447 31.0369 31.2224 30.441L33.6568 11.7655C33.7345 11.1697 33.3129 10.6217 32.717 10.544L21.4194 9.07133L21.4193 9.07137Z" fill="#F9F9F9" />
                                                        <path d="M27.9187 18.3202C27.0097 17.376 25.9112 18.6777 25.9112 18.6777C25.9112 18.6777 25.183 17.1379 24.0623 17.8175C22.9417 18.4971 23.3897 19.8777 23.7184 20.456C24.058 21.0537 25.3953 22.6355 25.3953 22.6355C25.3953 22.6355 27.0933 21.4494 27.5748 20.9586C28.0407 20.4838 28.8278 19.2642 27.9187 18.3201L27.9187 18.3202Z" fill="black" />
                                                        <path d="M22.6972 10.6723C22.4055 10.3694 22.053 10.7871 22.053 10.7871C22.053 10.7871 21.8193 10.2929 21.4596 10.511C21.1 10.7291 21.2437 11.1722 21.3492 11.3578C21.4582 11.5497 21.8873 12.0573 21.8873 12.0573C21.8873 12.0573 22.4323 11.6767 22.5868 11.5193C22.7362 11.3669 22.9889 10.9754 22.6971 10.6725L22.6972 10.6723Z" fill="black" />
                                                        <path d="M29.9887 29.9118C29.6297 30.1309 29.3945 29.6375 29.3945 29.6375C29.3945 29.6375 29.0432 30.0563 28.7506 29.7541C28.458 29.4519 28.7095 29.0598 28.8586 28.907C29.0127 28.749 29.5564 28.3668 29.5564 28.3668C29.5564 28.3668 29.9871 28.8731 30.0966 29.0647C30.2026 29.25 30.3477 29.6927 29.9887 29.9118Z" fill="black" />
                                                        <path d="M29.5002 34.641L18.9687 30.2945C18.1177 29.9432 17.7112 28.9652 18.0624 28.1142L25.2473 10.7052C25.5985 9.85417 26.5765 9.44764 27.4275 9.79888L37.959 14.1454C38.81 14.4966 39.2166 15.4746 38.8654 16.3256L31.6804 33.7347C31.3292 34.5857 30.3511 34.9922 29.5002 34.6411L29.5002 34.641Z" fill="black" stroke="black" />
                                                        <path d="M27.2065 10.335C26.6511 10.1058 26.0126 10.3711 25.7834 10.9266L18.5984 28.3357C18.3691 28.8912 18.6345 29.5295 19.1901 29.7588L29.7216 34.1053C30.2771 34.3346 30.9154 34.0692 31.1447 33.5137L38.3297 16.1046C38.559 15.5492 38.2936 14.9108 37.7381 14.6815L27.2066 10.335L27.2065 10.335Z" fill="#F9F9F9" />
                                                        <path d="M27.3956 19.1312C27.79 19.0165 28.1378 19.0561 28.4282 19.2052C28.7089 19.3494 28.9065 19.5805 29.0432 19.7989C29.1421 19.957 29.2155 20.1192 29.2688 20.2603C29.4062 20.1978 29.5729 20.1345 29.7548 20.0921C30.0056 20.0337 30.3086 20.0103 30.6092 20.106C30.7907 20.1638 30.9591 20.2626 31.108 20.4055L31.157 20.3521L31.3947 20.7816L31.4613 20.9141C31.7673 21.574 31.6219 22.1892 31.3321 22.6654C31.032 23.1582 30.5697 23.5234 30.2506 23.7117C29.9256 23.9035 29.2623 24.1776 28.709 24.3949C28.4264 24.5059 28.1629 24.606 27.9699 24.6781C27.8735 24.7141 27.7946 24.7434 27.7397 24.7635C27.7122 24.7736 27.69 24.7811 27.6754 24.7865C27.6683 24.789 27.6628 24.7908 27.659 24.7922C27.6571 24.7929 27.6553 24.7941 27.6543 24.7944L27.6533 24.7945L27.3529 24.9041L27.2165 24.6149L27.2164 24.613C27.216 24.612 27.2151 24.6108 27.2143 24.6092C27.2126 24.6055 27.2099 24.6 27.2066 24.593C27.2 24.5789 27.1902 24.5583 27.178 24.5319C27.1533 24.4788 27.1183 24.4021 27.0753 24.3084C26.9893 24.1212 26.8721 23.8642 26.7499 23.5862C26.5109 23.0419 26.2346 22.3794 26.1395 22.0144C26.0461 21.6558 25.9758 21.0717 26.1106 20.5109C26.2496 19.9327 26.6169 19.358 27.3956 19.1312Z" fill="black" stroke="black" stroke-width="0.7" />
                                                        <path d="M28.0271 12.2115C27.8237 11.8434 27.3751 12.1556 27.3751 12.1556C27.3751 12.1556 27.2773 11.6179 26.8734 11.7354C26.4696 11.853 26.4938 12.3182 26.5476 12.5248C26.6033 12.7383 26.8864 13.3397 26.8864 13.3397C26.8864 13.3397 27.5112 13.1131 27.7012 13.001C27.885 12.8925 28.2304 12.5798 28.027 12.2117L28.0271 12.2115Z" fill="black" />
                                                        <path d="M30.0904 32.6835C29.6869 32.8022 29.5875 32.2647 29.5875 32.2647C29.5875 32.2647 29.1398 32.5784 28.9354 32.2107C28.7309 31.8431 29.0753 31.5294 29.2589 31.4205C29.4486 31.3078 30.0728 31.0793 30.0728 31.0793C30.0728 31.0793 30.3577 31.6798 30.4139 31.8932C30.4683 32.0996 30.4939 32.5648 30.0904 32.6835Z" fill="black" />
                                                    </svg>
                                                    PLO-6
                                                </button>
                                                <button>

                                                    <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_6794_16529)">
                                                            <path d="M23.6412 6.45753C23.5641 6.23878 23.3574 6.09238 23.1254 6.09238C21.7654 6.09238 20.4411 6.30829 19.2131 6.72222C20.1539 4.89084 21.3172 3.71441 21.331 3.70057C21.4879 3.54438 21.5351 3.30895 21.4507 3.10431C21.3661 2.89967 21.1666 2.76618 20.9452 2.76618C19.3192 2.76618 17.7751 3.34275 16.496 4.40965C16.2764 3.6187 15.9531 2.85412 15.5568 2.19874C15.1756 1.56809 14.5985 0.816406 14.0144 0.816406C13.3849 0.816406 12.8007 1.57268 12.4214 2.20711C12.0383 2.84783 11.7262 3.60355 11.5134 4.39373C10.238 3.33712 8.70142 2.76612 7.08354 2.76612C6.86233 2.76612 6.66311 2.89956 6.5785 3.10393C6.4939 3.3083 6.54088 3.54373 6.69728 3.70013C6.71145 3.7143 7.87635 4.89232 8.81741 6.72572C7.58645 6.30949 6.25836 6.09233 4.89457 6.09233C4.66258 6.09233 4.45586 6.23867 4.37875 6.45748C4.3017 6.67628 4.37099 6.91991 4.55173 7.06533C4.55796 7.07036 5.18786 7.57988 5.99389 8.46752C7.50977 9.81641 7.77621 11.397 7.99978 11.1939C8.20283 11.4175 8.22339 10.9909 7.99978 11.1939C8.24352 11.1939 6.51463 7.4197 6.38059 7.28167C6.38059 7.28167 7.43732 11.1422 8.39763 11.5939C8.94822 11.7693 9.51823 12.4254 9.2726 12.1914C10.5877 12.8606 12.4214 11.0977 12.437 11.0977C11.3934 11.0977 10.4056 11.3405 9.5266 11.772C9.35543 11.3975 9.16167 11.0209 8.94822 10.6492C8.79789 10.3873 8.46375 10.2969 8.20163 10.4473C7.93973 10.5977 7.84939 10.932 7.99978 11.1939C8.21776 11.5735 8.41223 11.9578 8.58121 12.3381C6.90455 13.5418 5.8102 15.5077 5.8102 17.7245V22.1896C5.81009 25.8436 8.78285 28.8164 12.4369 28.8164H15.5895C19.2435 28.8164 22.2163 25.8436 22.2163 22.1896V17.7245C22.2163 15.5051 21.1195 13.5373 19.4397 12.334C20.8226 9.22395 23.4419 7.08655 23.4682 7.06533C23.6489 6.91991 23.7182 6.67628 23.6412 6.45753ZM14.0331 12.4254L17.0012 15.3935L14.0331 18.3616L11.065 15.3935L14.0331 12.4254ZM15.3461 12.1914H15.5895C16.8813 12.1914 18.071 12.6365 19.0136 13.3812L17.7747 14.6201L15.3461 12.1914ZM14.0332 19.9084L17.1053 22.9805L14.0332 26.0527L10.9611 22.9805L14.0332 19.9084ZM10.1876 22.2071L7.2195 19.239L10.2916 16.1669L13.2597 19.135L10.1876 22.2071ZM12.4369 12.1914H12.7202L10.2916 14.62L9.03518 13.3636C9.97421 12.6295 11.1553 12.1914 12.4369 12.1914ZM6.90384 17.7244C6.90384 16.3483 7.40899 15.0879 8.24352 14.1188L9.51823 15.3935L6.90384 18.0078V17.7244ZM7.57174 24.8231C7.14594 24.0396 6.90389 23.1423 6.90389 22.1896V20.4703L9.41421 22.9806L7.57174 24.8231ZM12.3679 27.718L12.3644 27.7218C10.6943 27.7002 9.20028 26.935 8.199 25.7426L10.1877 23.754L13.2598 26.8261L12.3679 27.718ZM15.5895 27.7227H13.91L17.8787 23.754L19.8457 25.721C18.83 26.9431 17.2992 27.7227 15.5895 27.7227ZM21.1226 22.1896C21.1226 23.1318 20.8856 24.0196 20.4685 24.7969L18.6521 22.9805L21.1226 20.5101V22.1896ZM19.8012 14.1404C20.6247 15.1066 21.1226 16.3584 21.1226 17.7245V18.9632L17.8787 22.2071L14.8066 19.135L17.7747 16.1669L18.459 16.8511C18.5658 16.9579 18.7057 17.0113 18.8457 17.0113C18.9856 17.0113 19.1256 16.9579 19.2324 16.8511C19.4459 16.6376 19.4459 16.2913 19.2324 16.0777L18.5481 15.3934L19.8012 14.1404Z" fill="black" />
                                                            <path d="M20.4647 17.3145C20.363 17.2129 20.222 17.1543 20.0781 17.1543C19.9342 17.1544 19.7932 17.2129 19.6915 17.3145C19.5898 17.4162 19.5312 17.5573 19.5312 17.7012C19.5312 17.845 19.5897 17.9861 19.6915 18.0878C19.7932 18.1895 19.9342 18.248 20.0781 18.248C20.222 18.248 20.363 18.1895 20.4647 18.0878C20.5664 17.9861 20.625 17.845 20.625 17.7012C20.625 17.5573 20.5665 17.4162 20.4647 17.3145Z" fill="black" />
                                                            <path d="M14.3983 15.1271C14.2966 15.0254 14.1555 14.9668 14.0117 14.9668C13.8679 14.9668 13.7268 15.0253 13.6251 15.1271C13.5234 15.2287 13.4648 15.3698 13.4648 15.5143C13.4648 15.6581 13.5233 15.7986 13.6251 15.9009C13.7268 16.0026 13.8679 16.0611 14.0117 16.0611C14.1555 16.0611 14.2961 16.0026 14.3983 15.9009C14.5 15.7986 14.5586 15.6581 14.5586 15.5143C14.5586 15.3699 14.5001 15.2294 14.3983 15.1271Z" fill="black" />
                                                            <path d="M14.3983 22.6857C14.2966 22.584 14.1555 22.5254 14.0117 22.5254C13.8679 22.5254 13.7268 22.5839 13.6251 22.6857C13.5234 22.7873 13.4648 22.9284 13.4648 23.0723C13.4648 23.2167 13.5233 23.3572 13.6251 23.4589C13.7269 23.5606 13.8679 23.6191 14.0117 23.6191C14.1555 23.6191 14.2966 23.5612 14.3983 23.4589C14.5 23.3572 14.5586 23.2161 14.5586 23.0723C14.5586 22.9284 14.5001 22.7874 14.3983 22.6857Z" fill="black" />
                                                            <path d="M10.5546 18.9337C10.4529 18.832 10.3118 18.7734 10.168 18.7734C10.0241 18.7734 9.88305 18.832 9.78133 18.9337C9.67961 19.0354 9.62109 19.1765 9.62109 19.3203C9.62109 19.4642 9.67956 19.6052 9.78133 19.707C9.8831 19.8087 10.0241 19.8672 10.168 19.8672C10.3118 19.8672 10.4529 19.8087 10.5546 19.707C10.6563 19.6052 10.7148 19.4642 10.7148 19.3203C10.7148 19.1765 10.6563 19.0354 10.5546 18.9337Z" fill="black" />
                                                            <path d="M18.2773 18.9337C18.1755 18.832 18.0344 18.7734 17.8906 18.7734C17.7468 18.7734 17.6057 18.832 17.504 18.9337C17.4023 19.0354 17.3438 19.1765 17.3438 19.3203C17.3438 19.4642 17.4023 19.6052 17.504 19.707C17.6057 19.8087 17.7468 19.8672 17.8906 19.8672C18.0345 19.8672 18.1755 19.8087 18.2773 19.707C18.379 19.6052 18.4375 19.4642 18.4375 19.3203C18.4375 19.1765 18.379 19.0354 18.2773 18.9337Z" fill="black" />
                                                            <path d="M18.2773 25.6915C18.1755 25.5898 18.0345 25.5312 17.8906 25.5312C17.7463 25.5312 17.6057 25.5898 17.5034 25.6915C17.4017 25.7932 17.3438 25.9343 17.3438 26.0781C17.3438 26.222 17.4017 26.363 17.5034 26.4648C17.6057 26.5665 17.7463 26.625 17.8906 26.625C18.0345 26.625 18.175 26.5665 18.2773 26.4648C18.3789 26.3625 18.4375 26.222 18.4375 26.0781C18.4375 25.9343 18.379 25.7932 18.2773 25.6915Z" fill="black" />
                                                            <path d="M10.5546 25.6915C10.4529 25.5898 10.3118 25.5312 10.168 25.5312C10.0235 25.5312 9.88299 25.5893 9.78078 25.6915C9.67906 25.7932 9.62109 25.9338 9.62109 26.0781C9.62109 26.222 9.67906 26.363 9.78078 26.4648C9.88299 26.5665 10.0235 26.625 10.168 26.625C10.3118 26.625 10.4529 26.5665 10.5546 26.4648C10.6563 26.363 10.7142 26.222 10.7142 26.0781C10.7142 25.9338 10.6563 25.7932 10.5546 25.6915Z" fill="black" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_6794_16529">
                                                                <rect width="28" height="28" fill="white" transform="translate(0.0078125 0.816406)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    OFC
                                                </button>
                                                <button>

                                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_6794_16556)">
                                                            <path d="M30.1786 29.7676H5.43594C4.7006 29.7676 4.04191 29.3875 3.67406 28.7507C3.30656 28.1135 3.30656 27.3532 3.67406 26.7161L16.0452 5.28844C16.4127 4.65165 17.0718 4.27148 17.8074 4.27148C18.5428 4.27148 19.2015 4.65165 19.569 5.28844L31.9405 26.7161C32.308 27.3532 32.308 28.1135 31.9405 28.7507C31.5726 29.3875 30.9139 29.7676 30.1786 29.7676ZM16.8042 5.72643L4.43302 27.154C4.2236 27.5168 4.22326 27.95 4.43267 28.3127C4.64209 28.675 5.01712 28.8916 5.43594 28.8916H30.1786C30.5974 28.8916 30.9725 28.675 31.1819 28.3127C31.3913 27.95 31.3909 27.5168 31.1815 27.154L18.8104 5.72643C18.601 5.36372 18.2259 5.14746 17.8074 5.14746C17.3886 5.14746 17.0136 5.36372 16.8042 5.72643Z" fill="black" />
                                                            <path d="M29.3027 27.6645H6.31299C6.15661 27.6645 6.01187 27.581 5.93351 27.4455C5.8555 27.31 5.8555 27.143 5.93351 27.0075L17.4283 7.09779C17.5851 6.82678 18.0306 6.82678 18.1873 7.09779L29.6821 27.0075C29.7601 27.143 29.7601 27.31 29.6821 27.4455C29.6038 27.581 29.459 27.6645 29.3027 27.6645ZM7.0716 26.7885H28.544L17.8078 8.19276L7.0716 26.7885Z" fill="black" />
                                                            <path d="M19.997 22.408L19.593 21.3459H16.1527L15.7486 22.4311C15.5909 22.8544 15.4562 23.1411 15.3446 23.2912C15.233 23.4374 15.0502 23.5105 14.7962 23.5105C14.5807 23.5105 14.3902 23.4316 14.2248 23.2738C14.0593 23.1161 13.9766 22.9371 13.9766 22.737C13.9766 22.6216 13.9958 22.5023 14.0343 22.3791C14.0728 22.256 14.1363 22.0848 14.2248 21.8654L16.3894 16.3702C16.4509 16.2124 16.524 16.0239 16.6087 15.8045C16.6972 15.5813 16.7896 15.3966 16.8858 15.2504C16.9858 15.1042 17.1147 14.9868 17.2725 14.8983C17.4341 14.8059 17.6323 14.7598 17.8671 14.7598C18.1056 14.7598 18.3038 14.8059 18.4616 14.8983C18.6232 14.9868 18.7521 15.1023 18.8483 15.2446C18.9484 15.387 19.0311 15.5409 19.0965 15.7064C19.1658 15.868 19.2524 16.0855 19.3563 16.3587L21.5671 21.8192C21.7402 22.2348 21.8268 22.5369 21.8268 22.7255C21.8268 22.9217 21.7441 23.1026 21.5786 23.2681C21.417 23.4297 21.2207 23.5105 20.9898 23.5105C20.8552 23.5105 20.7397 23.4855 20.6435 23.4355C20.5473 23.3893 20.4665 23.3258 20.4011 23.245C20.3357 23.1603 20.2645 23.0333 20.1875 22.864C20.1144 22.6908 20.0509 22.5388 19.997 22.408ZM16.6029 20.0587H19.1312L17.8555 16.5665L16.6029 20.0587Z" fill="black" />
                                                            <path d="M30.6533 27.3706L18.3463 6.07015C18.1924 5.80363 17.8076 5.80363 17.6537 6.07015L5.34673 27.3706C5.19266 27.6373 5.3851 27.9707 5.69308 27.9707H30.3069C30.6149 27.9707 30.8073 27.6373 30.6533 27.3706Z" stroke="black" stroke-width="2" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_6794_16556">
                                                                <rect width="30" height="30" fill="white" transform="translate(0.5 0.955078)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    ALL IN-FOLD
                                                </button>
                                                <button>

                                                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.5216 3.59288C22.5216 2.67697 22.1014 1.83664 21.3686 1.28721C20.6358 0.737835 19.7114 0.569871 18.8322 0.826612L13.4952 2.38492L8.1581 0.826669C7.27895 0.569928 6.35454 0.737835 5.62176 1.28726C4.88898 1.83664 4.46875 2.67703 4.46875 3.59294V10.3656H22.5216V3.59288Z" fill="black" />
                                                        <path d="M3.59473 12.5215H23.4023C25.5691 12.5215 27.3654 14.1689 27.6123 16.2891H-0.615234C-0.368348 14.1689 1.42802 12.5216 3.59473 12.5215Z" fill="black" stroke="black" />
                                                        <path d="M19.2807 18.7207C17.8004 18.7207 16.4947 19.4807 15.7318 20.6306C15.1497 20.076 14.3628 19.7343 13.4971 19.7343C12.6315 19.7343 11.8447 20.076 11.2625 20.6306C10.4996 19.4806 9.19394 18.7207 7.71361 18.7207C5.36654 18.7207 3.45703 20.6302 3.45703 22.9773C3.45703 25.3244 5.36654 27.2339 7.71361 27.2339C10.0607 27.2339 11.9702 25.3244 11.9702 22.9773C11.9702 22.1353 12.6552 21.4503 13.4971 21.4503C14.3391 21.4503 15.0241 22.1353 15.0241 22.9773C15.0241 25.3244 16.9336 27.2339 19.2807 27.2339C21.6278 27.2339 23.5373 25.3244 23.5373 22.9773C23.5373 20.6302 21.6278 18.7207 19.2807 18.7207ZM7.71373 25.5178C6.31288 25.5178 5.17314 24.3781 5.17314 22.9772C5.17314 21.5763 6.31282 20.4366 7.71373 20.4366C9.11464 20.4366 10.2543 21.5763 10.2543 22.9772C10.2543 24.3781 9.11458 25.5178 7.71373 25.5178ZM19.2807 25.5178C17.8798 25.5178 16.7401 24.3781 16.7401 22.9772C16.7401 21.5763 17.8798 20.4366 19.2807 20.4366C20.6816 20.4366 21.8213 21.5763 21.8213 22.9772C21.8213 24.3781 20.6816 25.5178 19.2807 25.5178Z" fill="black" />
                                                    </svg>
                                                    Anonymous
                                                </button>
                                                <button>

                                                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_6794_16572)">
                                                            <path d="M22.4688 25.7328H22.058C20.8638 25.6148 20.4406 24.1121 20.315 22.6445C19.7355 22.7575 19.129 22.8147 18.4965 22.8147C17.8753 22.8147 17.2788 22.7597 16.7081 22.6507C16.5872 24.1163 16.1636 25.615 14.9498 25.7328H14.5391C13.9134 25.7328 13.4062 26.2575 13.4062 26.9047V27.7945H23.6016V26.9047C23.6016 26.2575 23.0944 25.7328 22.4688 25.7328Z" fill="black" />
                                                            <path d="M23.8848 29.5527H13.123C12.6538 29.5527 12.2734 29.9462 12.2734 30.4316C12.2734 30.917 12.6538 31.3105 13.123 31.3105H23.8848C24.354 31.3105 24.7344 30.917 24.7344 30.4316C24.7344 29.9462 24.354 29.5527 23.8848 29.5527Z" fill="black" />
                                                            <path d="M8.87695 3.06836H9.61481C10.3914 6.78889 9.26607 21.0572 18.4984 21.0572C27.7308 21.0572 26.5046 6.78889 27.3421 3.06836H28.1348C28.604 3.06836 28.9844 2.67484 28.9844 2.18945C28.9844 1.70406 28.604 1.31055 28.1348 1.31055H8.87695C8.40774 1.31055 8.02734 1.70406 8.02734 2.18945C8.02734 2.67484 8.40774 3.06836 8.87695 3.06836ZM22.5439 10.4332L21.3817 12.0006L21.4341 13.9779C21.4418 14.2677 21.3108 14.5429 21.0839 14.7133C20.9368 14.8237 20.7616 14.8809 20.5847 14.8809C20.4888 14.8809 20.3923 14.864 20.2994 14.8298L18.5059 14.1679L16.7122 14.8298C16.448 14.9272 16.1547 14.8836 15.9277 14.7133C15.7008 14.5429 15.5698 14.2677 15.5775 13.9779L15.6299 12.0006L14.4677 10.4332C14.2973 10.2035 14.2473 9.90174 14.3339 9.62641C14.4204 9.35107 14.6325 9.1375 14.9009 9.05547L16.7274 8.49672L17.8043 6.86623C17.9626 6.62652 18.2251 6.48314 18.5057 6.48314C18.7864 6.48314 19.0489 6.62652 19.2072 6.86623L20.2841 8.49672L22.1106 9.05547C22.3789 9.1375 22.591 9.35107 22.6776 9.62641C22.7643 9.90174 22.7143 10.2035 22.5439 10.4332Z" fill="black" />
                                                            <path d="M19.0496 9.7465L18.5037 8.91992L17.9577 9.7465C17.8474 9.91361 17.6847 10.0361 17.4971 10.0936L16.5664 10.3782L17.1594 11.1779C17.278 11.3379 17.3399 11.5354 17.3345 11.7369L17.3078 12.7427L18.2182 12.4068C18.3105 12.3728 18.4071 12.3557 18.5036 12.3557C18.6002 12.3557 18.6968 12.3728 18.7891 12.4068L19.6994 12.7427L19.6727 11.7369C19.6674 11.5354 19.7293 11.3379 19.8479 11.1779L20.4409 10.3782L19.5101 10.0936C19.3227 10.0362 19.16 9.91361 19.0496 9.7465Z" fill="black" />
                                                            <path d="M9.3761 14.438C7.23803 12.3549 5.92244 9.48598 5.72816 6.43359H8.24952C8.24595 6.38455 8.24232 6.3351 8.23881 6.28664C8.20245 5.78561 8.16003 5.20242 8.11154 4.67578H4.85352C4.3843 4.67578 4.00391 5.0693 4.00391 5.55469V5.64522C4.00391 10.0631 6.06387 14.2463 9.5143 16.8353L10.5346 17.6009C10.3355 17.1976 10.1499 16.773 9.97949 16.3255C9.74676 15.7144 9.54755 15.0816 9.3761 14.438Z" fill="black" />
                                                            <path d="M32.1534 4.67578H28.8267C28.7716 5.24232 28.724 5.88352 28.6834 6.43359H31.2782C31.0802 9.51826 29.7376 12.4142 27.5582 14.5011C27.3842 15.1574 27.1817 15.8017 26.9437 16.4221C26.7807 16.8472 26.6035 17.2511 26.4141 17.6357L27.4829 16.8352C30.9394 14.2466 33.003 10.0607 33.003 5.63789V5.55469C33.003 5.0693 32.6226 4.67578 32.1534 4.67578Z" fill="black" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_6794_16572">
                                                                <rect width="29" height="30" fill="white" transform="translate(0.5 0.955078)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    Tournament
                                                </button>
                                                <button>

                                                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_6794_16581)">
                                                            <path d="M15.4677 6.80875V6.01902H17.2247C17.759 6.01902 18.1768 5.5774 18.1768 5.04309V3.88896C18.1767 2.45096 17.0222 1.31055 15.5842 1.31055H13.4163C11.9782 1.31055 10.8238 2.45096 10.8238 3.88896V5.04309C10.8238 5.5774 11.2415 6.01902 11.7758 6.01902H13.5328V6.80875C11.2331 6.98898 9.1099 7.80631 7.33914 9.08342L5.40789 7.13693C5.0316 6.7576 4.41895 6.75514 4.03967 7.1316C3.66033 7.50789 3.65793 8.12049 4.03434 8.49982L5.85883 10.3387C3.61932 12.5629 2.23047 15.6425 2.23047 19.0407C2.23035 25.8062 7.73459 31.3105 14.5002 31.3105C21.2659 31.3105 26.7701 25.8062 26.7701 19.0406C26.7701 12.6006 21.7829 7.30375 15.4677 6.80875ZM12.7588 4.08402V3.88896C12.7588 3.51789 13.0452 3.24549 13.4163 3.24549H15.5843C15.9554 3.24549 16.2418 3.51789 16.2418 3.88896V4.08402H12.7588ZM14.5002 29.3755C8.80152 29.3755 4.16535 24.7393 4.16535 19.0406C4.16535 13.3419 8.80152 8.70578 14.5002 8.70578C20.1989 8.70578 24.8351 13.342 24.8351 19.0407C24.8351 24.7394 20.1989 29.3755 14.5002 29.3755Z" fill="black" />
                                                            <path d="M14.4986 10.0801C9.5583 10.0801 5.53906 14.0993 5.53906 19.0395C5.53906 23.9798 9.55824 27.9991 14.4986 27.9991C19.4389 27.9991 23.4581 23.9799 23.4581 19.0396C23.4581 14.0993 19.4388 10.0801 14.4986 10.0801ZM14.4986 26.064C10.6252 26.064 7.47406 22.9128 7.47406 19.0395C7.47406 15.1662 10.6252 12.015 14.4986 12.015C18.3719 12.015 21.5231 15.1661 21.5231 19.0395C21.5231 22.9128 18.3719 26.064 14.4986 26.064Z" fill="black" />
                                                            <path d="M18.0907 15.4624C17.7134 15.0838 17.1009 15.0828 16.7224 15.4599L13.8158 18.3562C13.6337 18.5377 13.5312 18.7843 13.5312 19.0415V20.8549C13.5312 21.3892 13.9644 21.8224 14.4987 21.8224C15.0331 21.8224 15.4662 21.3892 15.4662 20.8549V19.4433L18.0882 16.8306C18.4667 16.4534 18.4678 15.8409 18.0907 15.4624Z" fill="black" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_6794_16581">
                                                                <rect width="30" height="30" fill="white" transform="translate(0 0.955078)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    Sit and Go
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="card  mb-3 ">
                                        <div class="card-header ">
                                            Support
                                        </div>

                                        <div class="sidePost Support col-lg-12">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_6794_16601)">
                                                                <circle cx="14" cy="14.4961" r="11" fill="black" />
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 0.955078C9.55219 0.955078 6.24558 2.32472 3.80761 4.76269C1.36964 7.20066 0 10.5073 0 13.9551C0 17.4029 1.36964 20.7095 3.80761 23.1475C6.24558 25.5854 9.55219 26.9551 13 26.9551C16.4478 26.9551 19.7544 25.5854 22.1924 23.1475C24.6304 20.7095 26 17.4029 26 13.9551C26 10.5073 24.6304 7.20066 22.1924 4.76269C19.7544 2.32472 16.4478 0.955078 13 0.955078ZM6.893 9.96308H19.117L13.007 14.8101L6.893 9.96308ZM6.016 10.5451L12.701 15.8421C12.7893 15.9118 12.8985 15.9498 13.011 15.9498C13.1235 15.9498 13.2327 15.9118 13.321 15.8421L19.986 10.5491V17.9471H6.016V10.5451Z" fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_6794_16601">
                                                                    <rect width="26" height="26" fill="white" transform="translate(0 0.955078)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        Email
                                                    </span>
                                                    <strong>pokerstar@admin.com</strong>
                                                </li>
                                                <li>
                                                    <span>

                                                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_6794_16619)">
                                                                <mask id="mask0_6794_16619" maskUnits="userSpaceOnUse" x="0" y="0" width="26" height="27">
                                                                    <path d="M0.0234375 26.9545V0.970703H25.9991V26.9545H0.0234375Z" fill="white" />
                                                                </mask>
                                                                <g mask="url(#mask0_6794_16619)">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.696 15.4252C16.6281 15.4079 16.5569 15.4073 16.4887 15.4235C16.4205 15.4397 16.3573 15.4722 16.3044 15.5183C15.6723 16.0582 14.7992 16.6334 14.4226 16.6927C11.897 15.4582 10.4865 13.0885 10.4333 12.6392C10.4024 12.3865 10.9813 11.4992 11.6471 10.7777C11.7312 10.6863 11.7739 10.562 11.7621 10.4381C11.5927 8.49056 9.56104 7.53506 9.47532 7.49606C9.39493 7.45829 9.30485 7.44623 9.21735 7.46153C6.87166 7.85072 6.51863 9.21572 6.50482 9.27259C6.48532 9.35222 6.48857 9.43468 6.51335 9.51187C9.3112 18.1918 15.1254 19.801 17.0364 20.3299C17.1839 20.3709 17.305 20.4034 17.3972 20.4339C17.5025 20.468 17.6167 20.4613 17.7173 20.4152C17.7758 20.3884 19.1571 19.738 19.4947 17.6157C19.5097 17.5235 19.4947 17.4277 19.452 17.3444C19.4219 17.2859 18.6996 15.9111 16.696 15.4252Z" fill="black" />
                                                                </g>
                                                                <mask id="mask1_6794_16619" maskUnits="userSpaceOnUse" x="0" y="0" width="26" height="27">
                                                                    <path d="M0.0234375 26.9545V0.970703H25.9991V26.9545H0.0234375Z" fill="white" />
                                                                </mask>
                                                                <g mask="url(#mask1_6794_16619)">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4984 17.6158C19.1608 19.738 17.7795 20.3885 17.721 20.4153C17.6204 20.4614 17.5062 20.4681 17.4009 20.434C17.3087 20.4035 17.1876 20.371 17.0402 20.33C15.1292 19.801 9.31491 18.1919 6.51706 9.51192C6.49211 9.43449 6.48916 9.35165 6.50853 9.27264C6.52234 9.21577 6.87537 7.85077 9.22106 7.46158C9.308 7.44655 9.39819 7.45792 9.47903 7.49611C9.56475 7.53511 11.5964 8.49061 11.7658 10.4382C11.7776 10.5621 11.7349 10.6864 11.6508 10.7778C10.985 11.4993 10.4061 12.3865 10.437 12.6392C10.4902 13.0885 11.9007 15.4582 14.4263 16.6928C14.8029 16.6335 15.676 16.0582 16.3081 15.5183C16.4162 15.4261 16.56 15.3891 16.6997 15.4253C18.7033 15.9112 19.4257 17.2859 19.4557 17.3444C19.4984 17.4277 19.5134 17.5236 19.4984 17.6158ZM13 0.955078C5.82034 0.955078 0 6.77542 0 13.9551C0 21.1347 5.82034 26.9551 13 26.9551C20.1797 26.9551 26 21.1347 26 13.9551C26 6.77542 20.1797 0.955078 13 0.955078Z" fill="white" />
                                                                </g>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_6794_16619">
                                                                    <rect width="26" height="26" fill="white" transform="translate(0 0.955078)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                        Phone
                                                    </span>
                                                    <strong>7627200090</strong>
                                                </li>
                                                <li>
                                                    <span>

                                                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_6794_16645)">
                                                                <circle cx="14" cy="14.4961" r="11" fill="black" />
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 0.955078C9.55219 0.955078 6.24558 2.32472 3.80761 4.76269C1.36964 7.20066 0 10.5073 0 13.9551C0 17.4029 1.36964 20.7095 3.80761 23.1475C6.24558 25.5854 9.55219 26.9551 13 26.9551C16.4478 26.9551 19.7544 25.5854 22.1924 23.1475C24.6304 20.7095 26 17.4029 26 13.9551C26 10.5073 24.6304 7.20066 22.1924 4.76269C19.7544 2.32472 16.4478 0.955078 13 0.955078ZM8.32 8.75508H18.72C19.0081 8.75508 19.24 8.987 19.24 9.27508V15.5151C19.24 15.8032 19.0081 16.0351 18.72 16.0351H14.56V18.6351L10.4 16.0351H8.32C8.25167 16.0352 8.18399 16.0219 8.12084 15.9958C8.05769 15.9697 8.00031 15.9314 7.952 15.8831C7.90368 15.8348 7.86539 15.7774 7.8393 15.7142C7.81322 15.6511 7.79986 15.5834 7.8 15.5151V9.27508C7.8 8.987 8.03192 8.75508 8.32 8.75508Z" fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_6794_16645">
                                                                    <rect width="26" height="26" fill="white" transform="translate(0 0.955078)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                        Chat Support
                                                    </span>
                                                    <strong>N.A</strong>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="card  mb-3 ">
                                        <div class="card-header ">
                                            Tagging
                                        </div>

                                        <div class="sidePost sidePostTAg col-lg-12">
                                            <h3>Linking a new account </h3>
                                            <p>After registration, link your account to aour website to receive bonuses from rakebackk</p>
                                            <div class="TagginginputField">
                                                <span class="QuestionTag">?</span>
                                                <input type="text" placeholder="Username" value="" />
                                            </div>
                                            <button className="SidePostTagBtn">Submit</button>
                                        </div>
                                    </div>

                                    <div class="newsletter GotAQues text-center mb-3">
                                        <h5>Got a question?</h5>
                                        <p>We are online <img src={Online} /></p>

                                        <div className="GotAQuesBtn">
                                            <button class="btn subcrb "> <img src={CustomerCare} /> Live Chat</button>
                                            <button class="btn subcrb GreenBtn">
                                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.507812 24.1612L2.19955 17.9809C1.15563 16.1718 0.607091 14.1211 0.608094 12.0182C0.611102 5.44375 5.9611 0.09375 12.5345 0.09375C15.7245 0.0947528 18.7189 1.33724 20.9712 3.59155C23.2225 5.84587 24.462 8.84227 24.461 12.0292C24.4579 18.6046 19.108 23.9546 12.5345 23.9546C10.5389 23.9536 8.57242 23.4532 6.83054 22.5026L0.507812 24.1612ZM7.12336 20.3435C8.80407 21.3413 10.4086 21.939 12.5305 21.94C17.9938 21.94 22.4443 17.4935 22.4473 12.0272C22.4493 6.54985 18.0199 2.1094 12.5385 2.10739C7.07121 2.10739 2.62374 6.55386 2.62174 12.0192C2.62074 14.2504 3.27457 15.9211 4.37265 17.669L3.37084 21.3273L7.12336 20.3435ZM18.5424 14.8642C18.4682 14.7398 18.2696 14.6656 17.9708 14.5162C17.6729 14.3668 16.2078 13.6457 15.9341 13.5465C15.6613 13.4472 15.4627 13.397 15.2632 13.6959C15.0646 13.9937 14.493 14.6656 14.3195 14.8642C14.146 15.0627 13.9716 15.0878 13.6737 14.9384C13.3759 14.7889 12.4152 14.4751 11.277 13.4592C10.3915 12.669 9.79284 11.6933 9.61935 11.3944C9.44587 11.0966 9.6013 10.9351 9.74972 10.7867C9.88409 10.6534 10.0476 10.4387 10.197 10.2643C10.3484 10.0918 10.3975 9.96743 10.4978 9.76787C10.5971 9.56931 10.548 9.39482 10.4727 9.2454C10.3975 9.09699 9.80186 7.62988 9.55417 7.0332C9.31149 6.45258 9.0658 6.53079 8.88329 6.52177L8.31169 6.51174C8.11313 6.51174 7.79023 6.58595 7.51746 6.88479C7.2447 7.18362 6.47454 7.90364 6.47454 9.37076C6.47454 10.8379 7.54253 12.2548 7.69095 12.4534C7.84037 12.652 9.79184 15.6624 12.7812 16.953C13.4922 17.2599 14.0478 17.4434 14.48 17.5808C15.194 17.8074 15.8438 17.7753 16.3572 17.6991C16.9298 17.6139 18.1202 16.9781 18.3689 16.2821C18.6176 15.5852 18.6176 14.9885 18.5424 14.8642Z" fill="#28A745" />
                                                </svg>
                                                Whatsapp
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    )}

                    {/* Tagging Tab */}
                    {activeTab === "tagging" && (
                        <div className="single-post-row Dictionaryrow taggingTab">
                            <div className="single-post-left">
                                <div className="article-content">
                                    <div id="HowtoTag" className=" " >
                                        <h1>How to tag</h1>
                                        <p>A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.</p>
                                        <p>Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.</p>
                                        <ul className="howToTAg ">
                                            <li>
                                                <span>1</span>
                                                <div>
                                                        <h5>Sign through our link</h5>
                                                        <p>Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <span>2</span>
                                                <div>
                                                    <h5>Use our code RBACKK</h5>
                                                    <p>Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</p>
                                                    <img src={TaggingReview} />
                                                </div>
                                            </li>
                                            <li>
                                                <span>3</span>
                                                <div>
                                                    <h5>Submit for tagging</h5>
                                                    <p>Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</p>
                                                    <img src={ Tagging} />
                                                    <div class="card "><div class="card-header ">Tagging</div><div class="sidePost sidePostTAg col-lg-12"><h3>Linking a new account </h3><p>After registration, link your account to aour website to receive bonuses from rakebackk</p><div class="TagginginputField"><span class="QuestionTag">?</span><input type="text" placeholder="Username" value="" /></div><button class="SidePostTagBtn">Submit</button></div></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="BorderLIne"></div>
                                    <div  id="DealDetails" className="">
                                        <h1>Deal Details</h1>
                                        <p><b>Gutters:</b> The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.</p>
                                        <ul className="howToTAg DealsDetails">
                                            <li>
                                                <span>
                                                    <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.56445 1.30859C1.82624 1.1777 2.13987 1.20622 2.37402 1.38184L5.46484 3.7002C5.65931 3.84613 5.77344 4.07521 5.77344 4.31836C5.77338 4.56151 5.65936 4.79063 5.46484 4.93652L2.37402 7.25488C2.13987 7.43049 1.82624 7.45804 1.56445 7.32715C1.30292 7.19626 1.13783 6.92917 1.1377 6.63672V2C1.1377 1.70731 1.30267 1.43949 1.56445 1.30859Z" fill="#FF4053" stroke="#FF4053" stroke-width="1.54545" stroke-linecap="square" stroke-linejoin="round"/>
                                                    </svg>
                                                </span>
                                                <div>
                                                    <h5>% RB offered by us</h5>
                                                    <p>e gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.</p>
                                                </div>
                                            </li>
                                            <div class="table-responsive customTableResponsive"><table class="table custom-table"><thead><tr><th>Name</th><th>Amount In</th><th>Amount Out</th><th>Payment Type</th></tr></thead><tbody><tr><td>Savannah Nguyen</td><td>$2575.00</td><td>$120.00</td><td>Card Payment</td></tr><tr><td>Devon Lane</td><td>$2459.00</td><td>$375.00</td><td>Card Payment</td></tr><tr><td>Annette Black</td><td>$3127.00</td><td>$250.00</td><td>Card Payment</td></tr><tr><td>Ralph Edwards</td><td>$675.00</td><td>$795.00</td><td>Card Payment</td></tr></tbody></table></div>
                                            <li>
                                                <span>
                                                    <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.56445 1.30859C1.82624 1.1777 2.13987 1.20622 2.37402 1.38184L5.46484 3.7002C5.65931 3.84613 5.77344 4.07521 5.77344 4.31836C5.77338 4.56151 5.65936 4.79063 5.46484 4.93652L2.37402 7.25488C2.13987 7.43049 1.82624 7.45804 1.56445 7.32715C1.30292 7.19626 1.13783 6.92917 1.1377 6.63672V2C1.1377 1.70731 1.30267 1.43949 1.56445 1.30859Z" fill="#FF4053" stroke="#FF4053" stroke-width="1.54545" stroke-linecap="square" stroke-linejoin="round"/>
                                                    </svg>
                                                </span>
                                                <div>
                                                    <h5>RB calculation method for individua sit</h5>
                                                    <p>e gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.</p>
                                                </div>
                                            </li>

                                            <ul className="DealsDetailsChild">
                                                <p>Using a grid benefits both end users and the designers alike:</p>
                                                <li><span></span> Designers can quickly put together well-aligned interfaces.</li>
                                                <li><span></span> Users can easily scan predictable grid-based interfaces.</li>
                                                <li><span></span>  A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
                                            </ul>

                                            <li>
                                                <span>
                                                    <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.56445 1.30859C1.82624 1.1777 2.13987 1.20622 2.37402 1.38184L5.46484 3.7002C5.65931 3.84613 5.77344 4.07521 5.77344 4.31836C5.77338 4.56151 5.65936 4.79063 5.46484 4.93652L2.37402 7.25488C2.13987 7.43049 1.82624 7.45804 1.56445 7.32715C1.30292 7.19626 1.13783 6.92917 1.1377 6.63672V2C1.1377 1.70731 1.30267 1.43949 1.56445 1.30859Z" fill="#FF4053" stroke="#FF4053" stroke-width="1.54545" stroke-linecap="square" stroke-linejoin="round"/>
                                                    </svg>
                                                </span>
                                                <div>
                                                    <h5>Payment frequency (monthly /weekly)</h5>
                                                    <p>e gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="BorderLIne"></div>

                                    <div id="TaggingFAQ" className="RakebackFAQ ">
                                            <h1>Frequently Asked Questions ?</h1>
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
                                        </div>


                                </div>
                                <div className="ShareIconBottom">
                                    <strong>Share:</strong>
                                    <div className="share-btns d-inline-flex ms-2">
                                        <button className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.32787C0 12.3052 2.88867 15.6125 6.66667 16.2832V10.5052H4.66667V8.2832H6.66667V6.5052C6.66667 4.5052 7.95533 3.39454 9.778 3.39454C10.3553 3.39454 10.978 3.4832 11.5553 3.57187V5.61654H10.5333C9.55533 5.61654 9.33333 6.1052 9.33333 6.72787V8.2832H11.4667L11.1113 10.5052H9.33333V16.2832C13.1113 15.6125 16 12.3059 16 8.32787C16 3.9032 12.4 0.283203 8 0.283203C3.6 0.283203 0 3.9032 0 8.32787Z" fill="#FF4053" />
                                        </svg></button>
                                        <button className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                            <path d="M7.99915 0.431641C3.60981 0.431641 0.0507812 3.99067 0.0507812 8.38001C0.0507812 12.7694 3.60981 16.3284 7.99915 16.3284C12.3885 16.3284 15.9475 12.7694 15.9475 8.38001C15.9475 3.99067 12.3885 0.431641 7.99915 0.431641ZM11.819 6.42308C11.8243 6.50647 11.8243 6.5934 11.8243 6.67856C11.8243 9.28307 9.84076 12.2832 6.21609 12.2832C5.09835 12.2832 4.06222 11.9586 3.18932 11.3997C3.349 11.4174 3.50158 11.4245 3.66481 11.4245C4.58738 11.4245 5.43545 11.1123 6.11141 10.5836C5.24561 10.5658 4.51819 9.99807 4.2698 9.21743C4.57319 9.26178 4.84642 9.26178 5.15867 9.18194C4.71287 9.09137 4.31216 8.84925 4.02464 8.49672C3.73712 8.14419 3.58051 7.70299 3.58142 7.24808V7.22324C3.84222 7.3705 4.14916 7.46098 4.47029 7.4734C4.20033 7.29349 3.97894 7.04974 3.82574 6.76378C3.67255 6.47781 3.59228 6.15846 3.59206 5.83405C3.59206 5.46679 3.68787 5.13147 3.85997 4.8405C4.35479 5.44965 4.97226 5.94785 5.67224 6.30273C6.37222 6.65761 7.13904 6.86122 7.92286 6.90034C7.64431 5.56082 8.64496 4.47679 9.84786 4.47679C10.4156 4.47679 10.9266 4.71453 11.2867 5.09776C11.732 5.01437 12.1579 4.8476 12.5375 4.62405C12.3903 5.08002 12.0816 5.46502 11.6717 5.70808C12.0691 5.6655 12.4524 5.5555 12.8072 5.40115C12.5393 5.79502 12.204 6.14453 11.819 6.42308Z" fill="#FF4053" />
                                        </svg></button>
                                        <button className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.94781 0.776832C5.7371 0.740496 5.98875 0.732422 7.99931 0.732422C10.0099 0.732422 10.2615 0.741169 11.0501 0.776832C11.8388 0.812494 12.3771 0.938322 12.8481 1.12067C13.3413 1.30706 13.7888 1.59842 14.1588 1.97523C14.5356 2.34464 14.8263 2.79143 15.012 3.28532C15.1951 3.75633 15.3202 4.29464 15.3566 5.0819C15.3929 5.87254 15.401 6.12419 15.401 8.13408C15.401 10.1446 15.3922 10.3963 15.3566 11.1856C15.3209 11.9728 15.1951 12.5111 15.012 12.9822C14.8263 13.4761 14.5352 13.9237 14.1588 14.2936C13.7888 14.6704 13.3413 14.9611 12.8481 15.1468C12.3771 15.3298 11.8388 15.455 11.0515 15.4913C10.2615 15.5277 10.0099 15.5357 7.99931 15.5357C5.98875 15.5357 5.7371 15.527 4.94781 15.4913C4.16054 15.4557 3.62224 15.3298 3.15123 15.1468C2.65728 14.9611 2.20975 14.6699 1.83979 14.2936C1.46323 13.924 1.17183 13.4767 0.985907 12.9828C0.803557 12.5118 0.678402 11.9735 0.642066 11.1863C0.605731 10.3956 0.597656 10.144 0.597656 8.13408C0.597656 6.12352 0.606404 5.87186 0.642066 5.08325C0.677729 4.29464 0.803557 3.75633 0.985907 3.28532C1.17211 2.79148 1.46373 2.34417 1.84046 1.97455C2.2099 1.59808 2.65698 1.30668 3.15055 1.12067C3.62157 0.938322 4.15987 0.813167 4.94714 0.776832H4.94781ZM10.9903 2.10913C10.2097 2.07347 9.97555 2.06607 7.99931 2.06607C6.02307 2.06607 5.78891 2.07347 5.00837 2.10913C4.28637 2.1421 3.89476 2.26255 3.63368 2.36415C3.28849 2.49873 3.04155 2.6582 2.78249 2.91726C2.53692 3.15616 2.34793 3.447 2.22938 3.76845C2.12778 4.02952 2.00734 4.42114 1.97436 5.14314C1.9387 5.92367 1.9313 6.15784 1.9313 8.13408C1.9313 10.1103 1.9387 10.3445 1.97436 11.125C2.00734 11.847 2.12778 12.2386 2.22938 12.4997C2.34781 12.8207 2.53689 13.112 2.78249 13.3509C3.02136 13.5965 3.31272 13.7856 3.63368 13.904C3.89476 14.0056 4.28637 14.1261 5.00837 14.159C5.78891 14.1947 6.0224 14.2021 7.99931 14.2021C9.97623 14.2021 10.2097 14.1947 10.9903 14.159C11.7123 14.1261 12.1039 14.0056 12.3649 13.904C12.7101 13.7694 12.9571 13.61 13.2161 13.3509C13.4617 13.112 13.6508 12.8207 13.7692 12.4997C13.8708 12.2386 13.9913 11.847 14.0243 11.125C14.0599 10.3445 14.0673 10.1103 14.0673 8.13408C14.0673 6.15784 14.0599 5.92367 14.0243 5.14314C13.9913 4.42114 13.8708 4.02952 13.7692 3.76845C13.6347 3.42326 13.4752 3.17631 13.2161 2.91726C12.9772 2.6717 12.6864 2.48272 12.3649 2.36415C12.1039 2.26255 11.7123 2.1421 10.9903 2.10913ZM7.05392 10.4158C7.5819 10.6356 8.1698 10.6653 8.71723 10.4997C9.26464 10.3342 9.73762 9.98376 10.0554 9.50826C10.3731 9.03275 10.5159 8.46168 10.4594 7.89258C10.4029 7.32349 10.1505 6.79167 9.74543 6.38796C9.4872 6.1299 9.17497 5.93229 8.83121 5.80938C8.48745 5.68647 8.12072 5.64131 7.75741 5.67714C7.3941 5.71298 7.04326 5.82892 6.73013 6.01662C6.41701 6.20432 6.1494 6.45911 5.94657 6.76265C5.74373 7.06619 5.61072 7.41093 5.55711 7.77204C5.5035 8.13316 5.53063 8.50167 5.63653 8.85104C5.74243 9.20041 5.92448 9.52196 6.16957 9.79253C6.41466 10.0631 6.71669 10.276 7.05392 10.4158ZM5.30915 5.44391C5.66242 5.09063 6.08183 4.8104 6.54341 4.61921C7.00498 4.42801 7.4997 4.32961 7.99931 4.32961C8.49892 4.32961 8.99364 4.42801 9.45522 4.61921C9.9168 4.8104 10.3362 5.09063 10.6895 5.44391C11.0428 5.79719 11.323 6.21659 11.5142 6.67817C11.7054 7.13975 11.8038 7.63447 11.8038 8.13408C11.8038 8.63369 11.7054 9.12841 11.5142 9.58998C11.323 10.0516 11.0428 10.471 10.6895 10.8242C9.976 11.5377 9.00832 11.9385 7.99931 11.9385C6.9903 11.9385 6.02262 11.5377 5.30915 10.8242C4.59567 10.1108 4.19484 9.14309 4.19484 8.13408C4.19484 7.12507 4.59567 6.15739 5.30915 5.44391ZM12.6476 4.89619C12.7351 4.81361 12.8052 4.7143 12.8537 4.60414C12.9021 4.49399 12.928 4.37523 12.9298 4.25489C12.9315 4.13455 12.9091 4.01509 12.8639 3.90357C12.8186 3.79205 12.7515 3.69074 12.6664 3.60564C12.5813 3.52054 12.48 3.45338 12.3684 3.40813C12.2569 3.36289 12.1374 3.34048 12.0171 3.34223C11.8968 3.34399 11.778 3.36987 11.6679 3.41835C11.5577 3.46682 11.4584 3.53691 11.3758 3.62445C11.2152 3.79471 11.1273 4.02086 11.1307 4.25489C11.1341 4.48892 11.2286 4.71241 11.3941 4.87792C11.5596 5.04342 11.7831 5.13791 12.0171 5.14132C12.2511 5.14473 12.4773 5.0568 12.6476 4.89619Z" fill="#FF4053" />
                                        </svg></button>
                                    </div>
                                </div>
{/* 
                                <div className="tag-container">
                                    <strong className="d-block ">Tags</strong>
                                    <div className="tagBtn">
                                        <span className="badge-custom">Design</span>
                                        <span className="badge-custom">Interface</span>
                                        <span className="badge-custom">Interface</span>
                                    </div>

                                </div> */}




                            </div>

                            <div class="single-post-right sidebar RightsidebarBlog RetagRightsideba">
                                {/* <div className="SpacedicAdd"></div> */}
                                <div class="card mb-3 ">
                                    <div class="card-header ">
                                        General Information
                                    </div>

                                    <div class="sidePost sidePostGI col-lg-12">
                                        <div>
                                            <span>Founded in</span>
                                            <p>2026</p>
                                        </div>
                                        <div>
                                            <span>Certification</span>
                                            <ul className="SidepostUL">
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"></rect><path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </li>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"></rect><path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </li>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"></rect><path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </li>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"></rect><path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <span>Compatibility</span>
                                            <p>Bomb Pot</p>
                                        </div>
                                        <div>
                                            <span>Wallet</span>
                                            <ul className="SidepostUL">
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"></rect><path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </li>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"></rect><path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <span>Responsible gaming</span>
                                            <p>Bomb Pot</p>
                                        </div>

                                    </div>

                                </div>


                                <div class="card  ">
                                    <div class="card-header ">
                                        Deposits / Withdrawal
                                    </div>

                                    <div class="sidePost sidePostDW col-lg-12">
                                        <ul>
                                            <li>Min. deposit: $10/€10/500RUR</li>
                                            <li>Mix. withdrawal: $10/€10/500RUR</li>
                                            <li>Instant withdrawal</li>
                                        </ul>
                                        <div className="DWCards">
                                            <button>
                                                <img src={Bitcoin} />
                                            </button>
                                            <button>
                                                <img src={Etherium} />
                                            </button>
                                            <button>
                                                <img src={GooglePay} />
                                            </button>
                                            <button>
                                                <img src={Lightcoin} />
                                            </button>
                                            <button>
                                                <img src={Mastercard} />
                                            </button>
                                            <button>
                                                <img src={visalogo} />
                                            </button>
                                        </div>
                                        <p>The list of available payment systems depends on your country and region of residence and may differ from the one listed on this page.</p>
                                    </div>
                                </div>

                                {/* <div className="SpacedicAdd SpacedicAddsBAckground"></div> */}

                                <div class="card  mb-3 ">
                                    <div class="card-header ">
                                        Games offered
                                    </div>

                                    <div class="sidePost sidePostDW sidePostGamesoffered col-lg-12">
                                        <div className="DWCards">
                                            <button>
                                                <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_6794_16390)">
                                                        <path d="M10.0474 8.04492C4.68604 8.04492 0.324219 12.4067 0.324219 17.7681C0.324219 23.1295 4.68604 27.4914 10.0474 27.4914C15.4088 27.4914 19.7707 23.1295 19.7707 17.7681C19.7707 12.4068 15.4088 8.04492 10.0474 8.04492ZM8.09721 24.8334C8.0266 25.0804 7.80143 25.2416 7.55663 25.2416C7.50548 25.2416 7.45348 25.2345 7.40186 25.2197C5.66468 24.7234 4.17198 23.6254 3.08507 22.0444C2.2689 20.8573 1.96558 19.8147 1.95303 19.7708C1.8677 19.4721 2.04062 19.1608 2.33936 19.0755C2.63783 18.99 2.94876 19.1628 3.0345 19.4609C3.0403 19.4807 3.31573 20.4046 4.03382 21.4384C4.98188 22.8034 6.21908 23.7117 7.71093 24.138C8.00962 24.2234 8.18259 24.5346 8.09721 24.8334ZM17.2734 15.6572C17.2218 15.672 17.1697 15.6791 17.1186 15.6791C16.8738 15.6791 16.6487 15.518 16.5781 15.2709C16.1518 13.779 15.2436 12.5418 13.8785 11.5938C12.8386 10.8716 11.91 10.5971 11.9007 10.5944C11.6028 10.5079 11.4306 10.1965 11.5165 9.89838C11.6023 9.60032 11.9128 9.42788 12.2109 9.51305C12.2547 9.52554 13.2973 9.82893 14.4845 10.6451C16.0654 11.732 17.1635 13.2248 17.6598 14.9619C17.7451 15.2606 17.5721 15.5719 17.2734 15.6572Z" fill="black" />
                                                        <path d="M12.6983 7.24954V5.47461H7.39453V7.24954C8.24355 7.03544 9.13187 6.92111 10.0465 6.92111C10.961 6.92117 11.8493 7.03544 12.6983 7.24954Z" fill="black" />
                                                        <path d="M21.5379 6.8404C21.5379 6.52975 21.2861 6.27789 20.9754 6.27789H18.7254C17.4404 6.27789 16.395 5.23248 16.395 3.9475C16.3951 2.04226 14.845 0.492188 12.9397 0.492188C11.0344 0.492188 9.48438 2.04226 9.48438 3.94755V4.3756H10.6094V3.94755C10.6094 2.66258 11.6548 1.61717 12.9397 1.61717C14.2247 1.61717 15.2701 2.66258 15.2701 3.94755C15.2701 5.85285 16.8201 7.40292 18.7254 7.40292H20.9755C21.2861 7.40292 21.5379 7.15106 21.5379 6.8404Z" fill="black" />
                                                        <path d="M21.6172 8.84961C21.3065 8.84961 21.0547 9.10147 21.0547 9.41213V11.3407C21.0547 11.6514 21.3065 11.9032 21.6172 11.9032C21.9279 11.9032 22.1797 11.6514 22.1797 11.3407V9.41213C22.1797 9.10147 21.9278 8.84961 21.6172 8.84961Z" fill="black" />
                                                        <path d="M21.6172 1.77734C21.3065 1.77734 21.0547 2.02915 21.0547 2.33986V4.26841C21.0547 4.57907 21.3065 4.83093 21.6172 4.83093C21.9279 4.83093 22.1797 4.57907 22.1797 4.26841V2.33986C22.1797 2.0292 21.9278 1.77734 21.6172 1.77734Z" fill="black" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_6794_16390">
                                                            <rect width="27" height="27" fill="white" transform="translate(0.00390625 0.492188)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                Bomb Pot
                                            </button>
                                            <button>
                                                <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21.2664 30.9229L8.11572 31.3581C7.0531 31.3933 6.15653 30.5507 6.117 29.4799L5.3086 7.57409C5.26908 6.50329 6.10146 5.60361 7.16408 5.56843L20.3147 5.13329C21.3773 5.09811 22.274 5.94065 22.3136 7.01145L23.122 28.9173C23.1615 29.9881 22.3292 30.8879 21.2665 30.923L21.2664 30.9229Z" fill="black" stroke="black" />
                                                    <path d="M7.18795 6.24435C6.49439 6.26721 5.9511 6.8546 5.97681 7.5535L6.78521 29.4593C6.81108 30.1583 7.39626 30.7081 8.08983 30.6853L21.2405 30.2501C21.9341 30.2271 22.4773 29.6399 22.4516 28.941L21.6432 7.03517C21.6174 6.33631 21.0322 5.78633 20.3386 5.8092L7.18795 6.24435Z" fill="#F9F9F9" />
                                                    <path d="M8.9474 7.84914C8.56191 7.54995 8.23188 8.09052 8.23188 8.09052C8.23188 8.09052 7.87948 7.56149 7.5067 7.87343C7.13396 8.18551 7.37497 8.67097 7.52753 8.86663C7.68522 9.06883 8.26306 9.58032 8.26306 9.58032C8.26306 9.58032 8.81906 9.0498 8.96823 8.84233C9.11246 8.64156 9.33302 8.14829 8.9474 7.84914Z" fill="black" />
                                                    <path d="M23.1316 31.4582L10.1897 29.0315C9.1439 28.8354 8.44784 27.8195 8.63795 26.7666L12.5265 5.2289C12.7166 4.17608 13.7219 3.47917 14.7677 3.67528L27.7096 6.10197C28.7554 6.29809 29.4514 7.31407 29.2615 8.36686L25.3728 29.9046C25.1827 30.9574 24.1772 31.6544 23.1316 31.4584L23.1316 31.4582Z" fill="black" stroke="black" />
                                                    <path d="M14.6475 4.34006C13.965 4.21213 13.3087 4.66698 13.1847 5.35421L9.29606 26.892C9.17195 27.5792 9.62634 28.2424 10.309 28.3704L23.2509 30.7971C23.9336 30.9251 24.5898 30.4702 24.7139 29.7829L28.6025 8.24513C28.7267 7.558 28.2722 6.89475 27.5896 6.76672L14.6477 4.34003L14.6475 4.34006Z" fill="#F9F9F9" />
                                                    <path d="M17.1738 14.2823C17.5255 14.13 17.8619 14.1133 18.1682 14.1978C18.5074 14.2913 18.7784 14.4997 18.9811 14.7109C19.1452 14.8819 19.2747 15.0669 19.3714 15.2241C19.5167 15.1123 19.703 14.9873 19.916 14.8871C20.1801 14.7628 20.5071 14.6668 20.8573 14.7026C21.084 14.7258 21.3065 14.8027 21.5154 14.9438L21.5472 14.8888L21.8712 15.264L21.9759 15.3947C22.4675 16.0535 22.4534 16.7673 22.2462 17.3655C22.031 17.9868 21.6045 18.5054 21.294 18.7924C20.9775 19.085 20.2986 19.554 19.7256 19.9345C19.4339 20.1283 19.1605 20.3046 18.9603 20.4328C18.8602 20.4969 18.778 20.5488 18.721 20.5848C18.6926 20.6028 18.6706 20.6171 18.6554 20.6267C18.6479 20.6314 18.642 20.6349 18.6381 20.6374C18.6363 20.6385 18.6349 20.6399 18.6339 20.6406L18.632 20.6411L18.3603 20.8119L18.1662 20.5556L18.1657 20.5537C18.165 20.5527 18.1639 20.5512 18.1626 20.5495C18.1598 20.5458 18.1555 20.5406 18.1502 20.5336C18.1394 20.5191 18.1233 20.4976 18.103 20.4704C18.0623 20.416 18.0035 20.3374 17.9324 20.2411C17.7901 20.0488 17.5964 19.785 17.3916 19.4983C16.9889 18.9348 16.5189 18.2507 16.3256 17.8631C16.1361 17.4831 15.9182 16.8446 15.934 16.1866C15.9504 15.5114 16.2181 14.7899 17.0218 14.3564L17.1738 14.2823Z" fill="black" stroke="black" stroke-width="0.7" />
                                                    <path d="M16.0301 6.2789C15.7112 5.90853 15.2805 6.37137 15.2805 6.37137C15.2805 6.37137 15.0397 5.78258 14.6123 6.01311C14.185 6.24361 14.3251 6.76743 14.436 6.98967C14.5506 7.21942 15.016 7.83629 15.016 7.83629C15.016 7.83629 15.6664 7.42874 15.8536 7.25563C16.0348 7.0881 16.3488 6.64944 16.03 6.27907L16.0301 6.2789Z" fill="black" />
                                                    <path d="M23.3254 29.0884C22.8987 29.3201 22.6562 28.7321 22.6562 28.7321C22.6562 28.7321 22.2269 29.1963 21.907 28.8267C21.587 28.4572 21.8997 28.0176 22.0805 27.8497C22.2673 27.6759 22.9165 27.2665 22.9165 27.2665C22.9165 27.2665 23.3837 27.8818 23.4989 28.1113C23.6104 28.3332 23.7521 28.8566 23.3254 29.0884Z" fill="black" />
                                                </svg>
                                                NLH
                                            </button>
                                            <button>
                                                <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24.3752 31.1791L11.4598 33.6877C10.4162 33.8904 9.39992 33.1991 9.19411 32.1468L4.98563 10.6179C4.77995 9.56556 5.46162 8.54444 6.50522 8.34177L19.4206 5.83317C20.4642 5.63051 21.4806 6.32176 21.6863 7.37411L25.8948 28.903C26.1005 29.9553 25.4188 30.9765 24.3752 31.1791Z" fill="black" stroke="black" />
                                                    <path d="M6.63657 9.00537C5.95546 9.13771 5.5105 9.8042 5.64468 10.4911L9.85316 32.0199C9.98749 32.7069 10.6509 33.1581 11.332 33.0257L24.2474 30.5172C24.9287 30.3848 25.3736 29.7183 25.2393 29.0315L21.0308 7.5026C20.8965 6.81576 20.2331 6.36456 19.552 6.49677L6.63657 9.00537Z" fill="#F9F9F9" />
                                                    <path d="M8.74134 10.5205C8.3248 10.2672 8.05795 10.8422 8.05795 10.8422C8.05795 10.8422 7.64846 10.3565 7.31339 10.7093C6.97832 11.062 7.27236 11.5171 7.44589 11.6942C7.62516 11.8772 8.25669 12.3195 8.25669 12.3195C8.25669 12.3195 8.74922 11.7287 8.87384 11.5055C8.99453 11.2895 9.15788 10.7739 8.74134 10.5205Z" fill="black" />
                                                    <path d="M26.0632 31.1612L12.9126 31.5964C11.85 31.6316 10.9534 30.789 10.9139 29.7182L10.1055 7.81237C10.066 6.74157 10.8983 5.84189 11.961 5.80671L25.1116 5.37157C26.1742 5.33639 27.0709 6.17893 27.1104 7.24973L27.9188 29.1555C27.9584 30.2263 27.126 31.1261 26.0634 31.1613L26.0632 31.1612Z" fill="black" stroke="black" />
                                                    <path d="M11.9848 6.48263C11.2913 6.50549 10.748 7.09288 10.7737 7.79178L11.5821 29.6976C11.608 30.3966 12.1931 30.9464 12.8867 30.9236L26.0373 30.4884C26.731 30.4654 27.2742 29.8782 27.2485 29.1793L26.4401 7.27346C26.4142 6.57459 25.829 6.02461 25.1355 6.04748L11.9848 6.48263Z" fill="#F9F9F9" />
                                                    <path d="M13.7443 8.08742C13.3588 7.78823 13.0288 8.3288 13.0288 8.3288C13.0288 8.3288 12.6764 7.79977 12.3036 8.11172C11.9308 8.4238 12.1718 8.90925 12.3244 9.10491C12.4821 9.30712 13.0599 9.8186 13.0599 9.8186C13.0599 9.8186 13.6159 9.28808 13.7651 9.08061C13.9093 8.87984 14.1299 8.38657 13.7443 8.08742Z" fill="black" />
                                                    <path d="M26.8894 32.4836L13.9475 30.0569C12.9017 29.8608 12.2057 28.8448 12.3958 27.792L16.2843 6.2543C16.4744 5.20147 17.4797 4.50456 18.5255 4.70067L31.4674 7.12736C32.5132 7.32348 33.2093 8.33946 33.0193 9.39225L29.1306 30.93C28.9405 31.9828 27.935 32.6798 26.8894 32.4838L26.8894 32.4836Z" fill="black" stroke="black" />
                                                    <path d="M18.4053 5.36545C17.7228 5.23752 17.0665 5.69237 16.9425 6.3796L13.0539 27.9174C12.9298 28.6046 13.3842 29.2677 14.0668 29.3958L27.0087 31.8225C27.6914 31.9505 28.3476 31.4955 28.4717 30.8083L32.3603 9.27052C32.4845 8.58339 32.03 7.92014 31.3474 7.79211L18.4055 5.36542L18.4053 5.36545Z" fill="#F9F9F9" />
                                                    <path d="M20.9316 15.3076C21.2833 15.1554 21.6197 15.1387 21.9261 15.2232C22.2652 15.3167 22.5362 15.5251 22.7389 15.7363C22.903 15.9073 23.0326 16.0923 23.1292 16.2495C23.2745 16.1377 23.4608 16.0127 23.6738 15.9125C23.9379 15.7882 24.2649 15.6922 24.6151 15.728C24.8419 15.7512 25.0643 15.8281 25.2732 15.9692L25.305 15.9142L25.629 16.2894L25.7337 16.4201C26.2253 17.0789 26.2112 17.7927 26.004 18.3909C25.7888 19.0122 25.3623 19.5308 25.0518 19.8178C24.7353 20.1104 24.0564 20.5793 23.4834 20.9599C23.1917 21.1537 22.9183 21.33 22.7182 21.4582C22.618 21.5223 22.5359 21.5742 22.4789 21.6102C22.4504 21.6282 22.4284 21.6425 22.4132 21.6521C22.4058 21.6568 22.3998 21.6603 22.3959 21.6628C22.3941 21.6639 22.3927 21.6653 22.3917 21.6659L22.3898 21.6664L22.1181 21.8373L21.924 21.5809L21.9235 21.5791C21.9228 21.5781 21.9217 21.5766 21.9204 21.5749C21.9176 21.5712 21.9133 21.5659 21.908 21.559C21.8972 21.5445 21.8811 21.523 21.8608 21.4958C21.8201 21.4414 21.7614 21.3628 21.6902 21.2665C21.5479 21.0742 21.3543 20.8104 21.1494 20.5237C20.7467 19.9601 20.2767 19.2761 20.0834 18.8885C19.8939 18.5084 19.676 17.87 19.6918 17.212C19.7082 16.5368 19.9759 15.8153 20.7796 15.3817L20.9316 15.3076Z" fill="black" stroke="black" stroke-width="0.7" />
                                                    <path d="M19.7879 7.30429C19.469 6.93392 19.0383 7.39676 19.0383 7.39676C19.0383 7.39676 18.7975 6.80798 18.3701 7.0385C17.9429 7.269 18.0829 7.79282 18.1938 8.01506C18.3084 8.24481 18.7738 8.86168 18.7738 8.86168C18.7738 8.86168 19.4242 8.45413 19.6114 8.28102C19.7926 8.11349 20.1066 7.67483 19.7878 7.30446L19.7879 7.30429Z" fill="black" />
                                                    <path d="M27.0832 30.1138C26.6565 30.3455 26.414 29.7575 26.414 29.7575C26.414 29.7575 25.9847 30.2217 25.6648 29.8521C25.3449 29.4826 25.6575 29.043 25.8383 28.875C26.0251 28.7013 26.6743 28.2919 26.6743 28.2919C26.6743 28.2919 27.1415 28.9072 27.2567 29.1367C27.3682 29.3586 27.5099 29.882 27.0832 30.1138Z" fill="black" />
                                                </svg>
                                                Super Holdem
                                            </button>
                                            <button>

                                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.999 29.2753L7.06438 31.6856C6.01923 31.8804 5.01063 31.181 4.81585 30.1266L0.833095 8.55566C0.638448 7.50125 1.33036 6.48491 2.37551 6.29018L15.3101 3.87984C16.3553 3.68511 17.364 4.3845 17.5586 5.43891L21.5414 27.0098C21.736 28.0642 21.0441 29.0806 19.999 29.2753Z" fill="black" stroke="black" />
                                                    <path d="M2.49881 6.95502C1.81668 7.08219 1.36504 7.74555 1.49202 8.43374L5.47477 30.0047C5.60189 30.693 6.2603 31.1495 6.94243 31.0223L19.877 28.612C20.5593 28.4848 21.0109 27.8214 20.8838 27.1333L16.9011 5.56234C16.774 4.87417 16.1155 4.41765 15.4334 4.54468L2.49881 6.95502Z" fill="#F9F9F9" />
                                                    <path d="M4.58495 8.48812C4.17126 8.23145 3.89858 8.80468 3.89858 8.80468C3.89858 8.80468 3.49435 8.31564 3.15579 8.66596C2.81724 9.01629 3.1064 9.47383 3.27799 9.65237C3.45528 9.83685 4.08187 10.2842 4.08187 10.2842C4.08187 10.2842 4.58028 9.69687 4.70715 9.47452C4.83002 9.25939 4.99863 8.74479 4.58495 8.48812Z" fill="black" />
                                                    <path d="M21.5848 30.1966L8.43001 30.4243C7.36707 30.4427 6.48624 29.5855 6.46628 28.5134L6.06019 6.58077C6.04038 5.50868 6.88901 4.62144 7.95194 4.60307L21.1067 4.37532C22.1697 4.35695 23.0506 5.2142 23.0704 6.28629L23.4765 28.2189C23.4964 29.291 22.6477 30.1782 21.5848 30.1966Z" fill="black" stroke="black" />
                                                    <path d="M7.96586 5.27832C7.27211 5.29038 6.71818 5.86948 6.73105 6.56919L7.13714 28.5018C7.15014 29.2016 7.72515 29.7612 8.4189 29.7491L21.5737 29.5214C22.2676 29.5093 22.8215 28.9302 22.8085 28.2305L22.4024 6.29792C22.3894 5.59819 21.8144 5.03864 21.1206 5.05057L7.96586 5.27832Z" fill="#F9F9F9" />
                                                    <path d="M9.77546 7.13699C9.40925 6.81516 9.0466 7.3351 9.0466 7.3351C9.0466 7.3351 8.72766 6.7857 8.33643 7.07491C7.9452 7.36411 8.15575 7.86333 8.29588 8.06789C8.44065 8.27927 8.98578 8.82451 8.98578 8.82451C8.98578 8.82451 9.57343 8.32814 9.73491 8.12997C9.89128 7.93825 10.1417 7.45882 9.77546 7.13699Z" fill="black" />
                                                    <path d="M23.2313 31.0412L10.2049 29.1862C9.1523 29.0363 8.41566 28.0508 8.56268 26.9894L11.5705 5.27604C11.7175 4.21464 12.6934 3.47317 13.746 3.62305L26.7724 5.4781C27.825 5.62798 28.5618 6.61343 28.4148 7.67483L25.407 29.3882C25.26 30.4496 24.284 31.1912 23.2314 31.0413L23.2313 31.0412Z" fill="black" stroke="black" />
                                                    <path d="M13.6504 4.29246C12.9634 4.19454 12.3264 4.67866 12.2303 5.37141L9.22255 27.0848C9.12665 27.7777 9.60746 28.4208 10.2945 28.5187L23.3209 30.3737C24.008 30.4715 24.6449 29.9875 24.741 29.2948L27.7487 7.5814C27.8446 6.88867 27.3638 6.24543 26.6768 6.14751L13.6504 4.29246Z" fill="#F9F9F9" />
                                                    <path d="M15.1041 6.17987C14.7764 5.81829 14.3575 6.29334 14.3575 6.29334C14.3575 6.29334 14.1023 5.71115 13.6811 5.95363C13.2598 6.19624 13.4128 6.71617 13.5291 6.93535C13.6493 7.16186 14.1295 7.76592 14.1295 7.76592C14.1295 7.76592 14.7692 7.34001 14.9521 7.16159C15.129 6.98892 15.4319 6.54144 15.1041 6.17987Z" fill="black" />
                                                    <path d="M22.5409 33.0744L10.217 28.4373C9.22114 28.0625 8.71208 26.9411 9.08212 25.9373L16.6515 5.40203C17.0216 4.39821 18.1327 3.88647 19.1285 4.2612L31.4524 8.89836C32.4483 9.27309 32.9573 10.3945 32.5874 11.3983L25.0179 31.9336C24.6478 32.9374 23.5366 33.4492 22.5409 33.0746L22.5409 33.0744Z" fill="black" stroke="black" />
                                                    <path d="M18.893 4.89463C18.2431 4.65012 17.5177 4.98409 17.2763 5.63935L9.7067 26.1746C9.46513 26.8299 9.79747 27.5619 10.4475 27.8065L22.7714 32.4437C23.4215 32.6883 24.1467 32.3542 24.3883 31.6989L31.9578 11.1636C32.1994 10.5085 31.8671 9.77641 31.217 9.53178L18.8931 4.89462L18.893 4.89463Z" fill="#F9F9F9" />
                                                    <path d="M19.6579 15.1241C20.0307 15.0353 20.3649 15.0773 20.6519 15.2136C20.9697 15.3646 21.2004 15.6169 21.3633 15.8601C21.4952 16.057 21.5907 16.2617 21.6586 16.4333C21.8211 16.3484 22.0263 16.2577 22.2534 16.196C22.5351 16.1195 22.8738 16.0817 23.2125 16.1777C23.4318 16.2399 23.6375 16.3543 23.8187 16.5295L23.8596 16.4809L24.1135 16.9067L24.1939 17.0535C24.5636 17.7877 24.4258 18.4883 24.1179 19.0414C23.798 19.6158 23.2879 20.0525 22.9324 20.2812C22.5698 20.5144 21.8199 20.8584 21.1895 21.1336C20.8685 21.2738 20.5686 21.4 20.3493 21.4914C20.2396 21.5372 20.1496 21.574 20.0872 21.5996C20.0561 21.6124 20.0319 21.6227 20.0153 21.6295C20.0072 21.6328 20.0007 21.6352 19.9964 21.637C19.9944 21.6378 19.9928 21.6389 19.9917 21.6394L19.9897 21.6395L19.6925 21.7606L19.5459 21.4745L19.5458 21.4725C19.5452 21.4715 19.5444 21.4698 19.5434 21.4678C19.5413 21.4637 19.538 21.4578 19.534 21.45C19.5258 21.4339 19.5137 21.4099 19.4984 21.3796C19.4678 21.319 19.4236 21.2313 19.3702 21.1242C19.2635 20.9101 19.1186 20.6167 18.9667 20.2988C18.668 19.6739 18.3239 18.9186 18.2008 18.5033C18.0802 18.0961 17.9764 17.4295 18.1063 16.7842C18.2396 16.1222 18.6286 15.4582 19.4954 15.1707L19.6579 15.1241Z" fill="black" stroke="black" stroke-width="0.7" />
                                                    <path d="M19.9188 7.04499C19.6691 6.62487 19.1646 7.0059 19.1646 7.0059C19.1646 7.0059 19.0297 6.38425 18.5688 6.53706C18.108 6.68985 18.155 7.23004 18.2256 7.46816C18.2985 7.71431 18.6497 8.40263 18.6497 8.40263C18.6497 8.40263 19.361 8.11421 19.5755 7.97624C19.783 7.84273 20.1684 7.46526 19.9187 7.04514L19.9188 7.04499Z" fill="black" />
                                                    <path d="M23.144 30.7731C22.6836 30.9272 22.5468 30.306 22.5468 30.306C22.5468 30.306 22.0434 30.6886 21.7925 30.2691C21.5417 29.8497 21.9259 29.4711 22.1331 29.337C22.3472 29.1984 23.0576 28.9079 23.0576 28.9079C23.0576 28.9079 23.4109 29.595 23.4846 29.841C23.5558 30.0789 23.6044 30.619 23.144 30.7731Z" fill="black" />
                                                </svg>
                                                PLO-4
                                            </button>
                                            <button>

                                                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.0485 27.8285L11.593 32.3764C10.7481 32.7439 9.76191 32.3555 9.39434 31.5107L1.87636 14.2274C1.5089 13.3826 1.89724 12.3962 2.74207 12.0288L13.1976 7.48081C14.0424 7.11335 15.0287 7.50169 15.3962 8.34653L22.9142 25.6298C23.2816 26.4747 22.8933 27.461 22.0485 27.8285Z" fill="black" stroke="black" />
                                                    <path d="M2.9728 12.5613C2.42142 12.8012 2.16793 13.445 2.40771 13.9964L9.92569 31.2797C10.1656 31.8312 10.8094 32.0847 11.3608 31.8448L21.8163 27.2969C22.3678 27.057 22.6213 26.4132 22.3814 25.8618L14.8634 8.57847C14.6235 8.02709 13.9797 7.7736 13.4283 8.01337L2.9728 12.5613Z" fill="#F9F9F9" />
                                                    <path d="M5.03076 13.436C4.63207 13.302 4.51229 13.8353 4.51229 13.8353C4.51229 13.8353 4.07681 13.5049 3.85848 13.8645C3.64015 14.224 3.97241 14.5506 4.15168 14.6665C4.33689 14.7863 4.95206 15.0384 4.95206 15.0384C4.95206 15.0384 5.25968 14.4491 5.32395 14.2381C5.38624 14.0339 5.42946 13.57 5.03076 13.436Z" fill="black" />
                                                    <path d="M23.8822 28.7165L12.8203 31.48C11.9265 31.7033 11.0177 31.1577 10.7944 30.2639L6.22623 11.9782C6.00297 11.0844 6.54849 10.1755 7.44231 9.95226L18.5042 7.18882C19.398 6.96555 20.3069 7.51107 20.5301 8.4049L25.0983 26.6906C25.3215 27.5844 24.776 28.4933 23.8822 28.7165Z" fill="black" stroke="black" />
                                                    <path d="M7.58328 10.5156C6.99992 10.6613 6.64383 11.2546 6.7895 11.838L11.3576 30.1236C11.5034 30.7071 12.0967 31.0632 12.68 30.9174L23.7419 28.154C24.3253 28.0082 24.6814 27.4149 24.5356 26.8316L19.9675 8.5459C19.8217 7.96253 19.2285 7.60645 18.6451 7.75211L7.58328 10.5156Z" fill="#F9F9F9" />
                                                    <path d="M9.46703 11.7189C9.09586 11.5211 8.88986 12.0274 8.88986 12.0274C8.88986 12.0274 8.51477 11.6297 8.24019 11.9484C7.96561 12.267 8.23954 12.6439 8.39725 12.7878C8.56019 12.9364 9.12545 13.2864 9.12545 13.2864C9.12545 13.2864 9.52594 12.7558 9.62409 12.5583C9.71916 12.3672 9.8382 11.9168 9.46703 11.7189Z" fill="black" />
                                                    <path d="M25.4192 29.9233L14.0645 30.9177C13.147 30.998 12.3352 30.3169 12.2549 29.3994L10.6111 10.6296C10.5308 9.71213 11.2119 8.90039 12.1294 8.82003L23.4841 7.82571C24.4016 7.74536 25.2134 8.42642 25.2938 9.34392L26.9376 28.1137C27.0179 29.0312 26.3369 29.8431 25.4194 29.9234L25.4192 29.9233Z" fill="black" stroke="black" />
                                                    <path d="M12.1794 9.39848C11.5806 9.45085 11.1361 9.98081 11.1884 10.5797L12.8322 29.3494C12.8847 29.9484 13.4145 30.3928 14.0134 30.3405L25.3681 29.3461C25.967 29.2936 26.4115 28.7638 26.3591 28.165L24.7153 9.39518C24.6629 8.79636 24.133 8.35179 23.5342 8.40416L12.1794 9.39848Z" fill="#F9F9F9" />
                                                    <path d="M13.7687 10.6953C13.4224 10.4566 13.1602 10.9363 13.1602 10.9363C13.1602 10.9363 12.8326 10.4987 12.5237 10.7841C12.2148 11.0697 12.4442 11.4751 12.5845 11.6359C12.7296 11.8021 13.2515 12.2139 13.2515 12.2139C13.2515 12.2139 13.7094 11.7322 13.8295 11.547C13.9456 11.3678 14.1151 10.9339 13.7687 10.6953Z" fill="black" />
                                                    <path d="M26.0118 32.2517L14.7142 30.7791C13.8013 30.6601 13.1555 29.8206 13.2745 28.9077L15.7088 10.2323C15.8278 9.31935 16.6673 8.67354 17.5802 8.79256L28.8778 10.2652C29.7907 10.3842 30.4365 11.2237 30.3176 12.1366L27.8832 30.812C27.7642 31.7249 26.9246 32.3708 26.0119 32.2518L26.0118 32.2517Z" fill="black" stroke="black" />
                                                    <path d="M17.5052 9.36824C16.9094 9.29061 16.3614 9.71212 16.2838 10.308L13.8494 28.9835C13.7717 29.5794 14.1933 30.1273 14.7892 30.205L26.0868 31.6777C26.6828 31.7554 27.2306 31.3338 27.3084 30.7379L29.7427 12.0624C29.8205 11.4666 29.3989 10.9186 28.8029 10.8409L17.5053 9.3682L17.5052 9.36824Z" fill="#F9F9F9" />
                                                    <path d="M24.0046 18.6171C23.0957 17.6729 21.9971 18.9746 21.9971 18.9746C21.9971 18.9746 21.2689 17.4348 20.1483 18.1143C19.0276 18.794 19.4757 20.1746 19.8043 20.7529C20.144 21.3506 21.4813 22.9323 21.4813 22.9323C21.4813 22.9323 23.1793 21.7462 23.6607 21.2555C24.1267 20.7807 24.9137 19.5611 24.0047 18.617L24.0046 18.6171Z" fill="black" />
                                                    <path d="M18.7831 10.9692C18.4914 10.6663 18.1389 11.084 18.1389 11.084C18.1389 11.084 17.9053 10.5898 17.5455 10.8079C17.1859 11.026 17.3297 11.4691 17.4352 11.6547C17.5442 11.8465 17.9733 12.3542 17.9733 12.3542C17.9733 12.3542 18.5182 11.9736 18.6727 11.8161C18.8222 11.6637 19.0748 11.2723 18.7831 10.9693L18.7831 10.9692Z" fill="black" />
                                                    <path d="M26.0746 30.2086C25.7156 30.4278 25.4805 29.9343 25.4805 29.9343C25.4805 29.9343 25.1292 30.3531 24.8366 30.051C24.544 29.7488 24.7954 29.3566 24.9445 29.2039C25.0986 29.0459 25.6424 28.6637 25.6424 28.6637C25.6424 28.6637 26.073 29.17 26.1825 29.3615C26.2886 29.5468 26.4336 29.9895 26.0746 30.2086Z" fill="black" />
                                                    <path d="M25.5861 34.9359L15.0546 30.5894C14.2036 30.2381 13.7971 29.2602 14.1483 28.4092L21.3332 11.0001C21.6845 10.1491 22.6625 9.74256 23.5135 10.0938L34.045 14.4403C34.896 14.7916 35.3025 15.7695 34.9514 16.6205L27.7664 34.0296C27.4151 34.8806 26.437 35.2871 25.5861 34.936L25.5861 34.9359Z" fill="black" stroke="black" />
                                                    <path d="M23.2924 10.6299C22.737 10.4007 22.0985 10.666 21.8694 11.2215L14.6844 28.6306C14.4551 29.1861 14.7205 29.8244 15.276 30.0537L25.8075 34.4002C26.363 34.6295 27.0013 34.3641 27.2306 33.8086L34.4156 16.3996C34.6449 15.8442 34.3795 15.2057 33.824 14.9764L23.2925 10.6299L23.2924 10.6299Z" fill="#F9F9F9" />
                                                    <path d="M23.4815 19.4262C23.8759 19.3114 24.2237 19.351 24.5142 19.5002C24.7948 19.6443 24.9925 19.8754 25.1291 20.0938C25.228 20.2519 25.3014 20.4141 25.3547 20.5553C25.4922 20.4927 25.6589 20.4294 25.8407 20.387C26.0916 20.3286 26.3946 20.3052 26.6952 20.4009C26.8767 20.4587 27.045 20.5576 27.1939 20.7004L27.243 20.647L27.4806 21.0766L27.5472 21.209C27.8532 21.8689 27.7078 22.4842 27.418 22.9603C27.1179 23.4531 26.6557 23.8184 26.3365 24.0067C26.0116 24.1984 25.3483 24.4725 24.795 24.6898C24.5124 24.8008 24.2488 24.9009 24.0558 24.9731C23.9595 25.0091 23.8805 25.0383 23.8256 25.0585C23.7982 25.0686 23.7759 25.076 23.7613 25.0814C23.7543 25.084 23.7487 25.0858 23.745 25.0871C23.7431 25.0878 23.7412 25.089 23.7402 25.0893L23.7392 25.0894L23.4389 25.199L23.3025 24.9099L23.3024 24.9079C23.3019 24.907 23.301 24.9058 23.3002 24.9041C23.2985 24.9004 23.2958 24.8949 23.2925 24.8879C23.2859 24.8738 23.2762 24.8532 23.2639 24.8268C23.2392 24.7738 23.2042 24.697 23.1612 24.6033C23.0753 24.4161 22.958 24.1592 22.8359 23.8811C22.5968 23.3368 22.3205 22.6743 22.2254 22.3093C22.132 21.9507 22.0617 21.3666 22.1965 20.8059C22.3355 20.2276 22.7029 19.6529 23.4815 19.4262Z" fill="black" stroke="black" stroke-width="0.7" />
                                                    <path d="M24.1131 12.5065C23.9097 12.1383 23.461 12.4506 23.461 12.4506C23.461 12.4506 23.3633 11.9128 22.9594 12.0303C22.5556 12.1479 22.5797 12.6131 22.6336 12.8197C22.6892 13.0332 22.9723 13.6347 22.9723 13.6347C22.9723 13.6347 23.5972 13.408 23.7872 13.2959C23.971 13.1874 24.3163 12.8747 24.1129 12.5066L24.1131 12.5065Z" fill="black" />
                                                    <path d="M26.1763 32.9784C25.7729 33.0971 25.6734 32.5597 25.6734 32.5597C25.6734 32.5597 25.2257 32.8733 25.0213 32.5057C24.8169 32.1381 25.1612 31.8243 25.3448 31.7154C25.5345 31.6027 26.1587 31.3742 26.1587 31.3742C26.1587 31.3742 26.4436 31.9747 26.4998 32.1881C26.5543 32.3945 26.5798 32.8597 26.1763 32.9784Z" fill="black" />
                                                </svg>

                                                PLO-5
                                            </button>
                                            <button>

                                                <svg width="47" height="44" viewBox="0 0 47 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24.8768 27.1493L15.3521 33.4169C14.5826 33.9233 13.5443 33.7092 13.038 32.9395L2.67746 17.1951C2.17102 16.4255 2.38511 15.3873 3.15482 14.8809L12.6795 8.61335C13.4492 8.10688 14.4873 8.321 14.9937 9.09056L25.3543 24.8351C25.8607 25.6047 25.6466 26.6429 24.877 27.1494L24.8768 27.1493Z" fill="black" stroke="black" />
                                                    <path d="M3.47301 15.3662C2.97073 15.6968 2.83092 16.3743 3.1614 16.8767L13.5219 32.6212C13.8526 33.1236 14.5301 33.2633 15.0324 32.9328L24.5571 26.6653C25.0595 26.3347 25.1992 25.6571 24.8687 25.1547L14.5082 9.41011C14.1776 8.90783 13.5 8.76802 12.9976 9.09854L3.47301 15.3662Z" fill="#F9F9F9" />
                                                    <path d="M5.72704 15.8932C5.30936 15.844 5.3018 16.3906 5.3018 16.3906C5.3018 16.3906 4.80762 16.1568 4.66802 16.5535C4.52831 16.9502 4.92065 17.2015 5.11985 17.2781C5.32579 17.3572 5.97958 17.4774 5.97958 17.4774C5.97958 17.4774 6.15939 16.8374 6.17884 16.6176C6.19775 16.405 6.14468 15.9423 5.727 15.8931L5.72704 15.8932Z" fill="black" />
                                                    <path d="M25.9625 27.5316L15.507 32.0796C14.6622 32.447 13.676 32.0586 13.3084 31.2138L5.79042 13.9305C5.42296 13.0857 5.8113 12.0993 6.65614 11.7319L17.1116 7.18393C17.9565 6.81647 18.9428 7.20481 19.3103 8.04965L26.8282 25.333C27.1957 26.1778 26.8074 27.1641 25.9625 27.5316Z" fill="black" stroke="black" />
                                                    <path d="M6.88687 12.2644C6.33549 12.5043 6.082 13.1481 6.32177 13.6995L13.8398 30.9829C14.0797 31.5344 14.7235 31.7878 15.2749 31.548L25.7303 27C26.2818 26.7601 26.5353 26.1163 26.2954 25.5649L18.7774 8.28159C18.5376 7.73021 17.8938 7.47672 17.3424 7.7165L6.88687 12.2644Z" fill="#F9F9F9" />
                                                    <path d="M8.94482 13.1392C8.54613 13.0051 8.42635 13.5385 8.42635 13.5385C8.42635 13.5385 7.99087 13.208 7.77254 13.5676C7.55422 13.9271 7.88648 14.2537 8.06574 14.3696C8.25095 14.4894 8.86613 14.7415 8.86613 14.7415C8.86613 14.7415 9.17374 14.1522 9.23802 13.9412C9.30031 13.737 9.34352 13.2732 8.94482 13.1392Z" fill="black" />
                                                    <path d="M27.8002 28.4197L16.7383 31.1831C15.8445 31.4064 14.9357 30.8608 14.7123 29.967L10.1442 11.6814C9.92094 10.7875 10.4665 9.87865 11.3603 9.65538L22.4221 6.89194C23.316 6.66868 24.2249 7.21419 24.4481 8.10802L29.0162 26.3937C29.2395 27.2875 28.694 28.1964 27.8002 28.4197Z" fill="black" stroke="black" />
                                                    <path d="M11.5012 10.2187C10.9179 10.3645 10.5618 10.9577 10.7075 11.5411L15.2756 29.8267C15.4214 30.4102 16.0146 30.7663 16.598 30.6205L27.6598 27.8571C28.2433 27.7113 28.5994 27.118 28.4536 26.5347L23.8855 8.24902C23.7397 7.66566 23.1465 7.30957 22.5631 7.45524L11.5012 10.2187Z" fill="#F9F9F9" />
                                                    <path d="M13.385 11.422C13.0138 11.2242 12.8078 11.7305 12.8078 11.7305C12.8078 11.7305 12.4327 11.3328 12.1582 11.6515C11.8836 11.9702 12.1575 12.347 12.3152 12.4909C12.4782 12.6396 13.0434 12.9895 13.0434 12.9895C13.0434 12.9895 13.4439 12.459 13.5421 12.2614C13.6371 12.0703 13.7562 11.6199 13.385 11.422Z" fill="black" />
                                                    <path d="M29.3333 29.6284L17.9786 30.6227C17.0611 30.7031 16.2493 30.022 16.169 29.1045L14.5252 10.3347C14.4448 9.41721 15.1259 8.60547 16.0434 8.52511L27.3981 7.53079C28.3156 7.45043 29.1275 8.1315 29.2079 9.049L30.8516 27.8188C30.932 28.7363 30.2509 29.5481 29.3334 29.6285L29.3333 29.6284Z" fill="black" stroke="black" />
                                                    <path d="M16.0935 9.10355C15.4947 9.15592 15.0501 9.68588 15.1025 10.2847L16.7463 29.0545C16.7988 29.6534 17.3286 30.0979 17.9274 30.0455L29.2822 29.0512C29.8811 28.9987 30.3256 28.4689 30.2732 27.87L28.6294 9.10026C28.5769 8.50144 28.0471 8.05687 27.4482 8.10924L16.0935 9.10355Z" fill="#F9F9F9" />
                                                    <path d="M17.6827 10.4003C17.3364 10.1617 17.0743 10.6414 17.0743 10.6414C17.0743 10.6414 16.7467 10.2038 16.4378 10.4892C16.1288 10.7747 16.3582 11.1802 16.4986 11.341C16.6437 11.5071 17.1655 11.919 17.1655 11.919C17.1655 11.919 17.6235 11.4373 17.7436 11.2521C17.8596 11.0729 18.0291 10.639 17.6827 10.4003Z" fill="black" />
                                                    <path d="M29.9259 31.9549L18.6283 30.4822C17.7154 30.3632 17.0696 29.5237 17.1886 28.6108L19.6229 9.93538C19.7419 9.02247 20.5813 8.37667 21.4942 8.49568L32.7918 9.96834C33.7048 10.0874 34.3506 10.9268 34.2317 11.8397L31.7973 30.5152C31.6783 31.4281 30.8387 32.0739 29.9259 31.955L29.9259 31.9549Z" fill="black" stroke="black" />
                                                    <path d="M21.4193 9.07137C20.8235 8.99374 20.2754 9.41524 20.1979 10.0111L17.7635 28.6866C17.6858 29.2826 18.1073 29.8304 18.7033 29.9082L30.0009 31.3808C30.5968 31.4585 31.1447 31.0369 31.2224 30.441L33.6568 11.7655C33.7345 11.1697 33.3129 10.6217 32.717 10.544L21.4194 9.07133L21.4193 9.07137Z" fill="#F9F9F9" />
                                                    <path d="M27.9187 18.3202C27.0097 17.376 25.9112 18.6777 25.9112 18.6777C25.9112 18.6777 25.183 17.1379 24.0623 17.8175C22.9417 18.4971 23.3897 19.8777 23.7184 20.456C24.058 21.0537 25.3953 22.6355 25.3953 22.6355C25.3953 22.6355 27.0933 21.4494 27.5748 20.9586C28.0407 20.4838 28.8278 19.2642 27.9187 18.3201L27.9187 18.3202Z" fill="black" />
                                                    <path d="M22.6972 10.6723C22.4055 10.3694 22.053 10.7871 22.053 10.7871C22.053 10.7871 21.8193 10.2929 21.4596 10.511C21.1 10.7291 21.2437 11.1722 21.3492 11.3578C21.4582 11.5497 21.8873 12.0573 21.8873 12.0573C21.8873 12.0573 22.4323 11.6767 22.5868 11.5193C22.7362 11.3669 22.9889 10.9754 22.6971 10.6725L22.6972 10.6723Z" fill="black" />
                                                    <path d="M29.9887 29.9118C29.6297 30.1309 29.3945 29.6375 29.3945 29.6375C29.3945 29.6375 29.0432 30.0563 28.7506 29.7541C28.458 29.4519 28.7095 29.0598 28.8586 28.907C29.0127 28.749 29.5564 28.3668 29.5564 28.3668C29.5564 28.3668 29.9871 28.8731 30.0966 29.0647C30.2026 29.25 30.3477 29.6927 29.9887 29.9118Z" fill="black" />
                                                    <path d="M29.5002 34.641L18.9687 30.2945C18.1177 29.9432 17.7112 28.9652 18.0624 28.1142L25.2473 10.7052C25.5985 9.85417 26.5765 9.44764 27.4275 9.79888L37.959 14.1454C38.81 14.4966 39.2166 15.4746 38.8654 16.3256L31.6804 33.7347C31.3292 34.5857 30.3511 34.9922 29.5002 34.6411L29.5002 34.641Z" fill="black" stroke="black" />
                                                    <path d="M27.2065 10.335C26.6511 10.1058 26.0126 10.3711 25.7834 10.9266L18.5984 28.3357C18.3691 28.8912 18.6345 29.5295 19.1901 29.7588L29.7216 34.1053C30.2771 34.3346 30.9154 34.0692 31.1447 33.5137L38.3297 16.1046C38.559 15.5492 38.2936 14.9108 37.7381 14.6815L27.2066 10.335L27.2065 10.335Z" fill="#F9F9F9" />
                                                    <path d="M27.3956 19.1312C27.79 19.0165 28.1378 19.0561 28.4282 19.2052C28.7089 19.3494 28.9065 19.5805 29.0432 19.7989C29.1421 19.957 29.2155 20.1192 29.2688 20.2603C29.4062 20.1978 29.5729 20.1345 29.7548 20.0921C30.0056 20.0337 30.3086 20.0103 30.6092 20.106C30.7907 20.1638 30.9591 20.2626 31.108 20.4055L31.157 20.3521L31.3947 20.7816L31.4613 20.9141C31.7673 21.574 31.6219 22.1892 31.3321 22.6654C31.032 23.1582 30.5697 23.5234 30.2506 23.7117C29.9256 23.9035 29.2623 24.1776 28.709 24.3949C28.4264 24.5059 28.1629 24.606 27.9699 24.6781C27.8735 24.7141 27.7946 24.7434 27.7397 24.7635C27.7122 24.7736 27.69 24.7811 27.6754 24.7865C27.6683 24.789 27.6628 24.7908 27.659 24.7922C27.6571 24.7929 27.6553 24.7941 27.6543 24.7944L27.6533 24.7945L27.3529 24.9041L27.2165 24.6149L27.2164 24.613C27.216 24.612 27.2151 24.6108 27.2143 24.6092C27.2126 24.6055 27.2099 24.6 27.2066 24.593C27.2 24.5789 27.1902 24.5583 27.178 24.5319C27.1533 24.4788 27.1183 24.4021 27.0753 24.3084C26.9893 24.1212 26.8721 23.8642 26.7499 23.5862C26.5109 23.0419 26.2346 22.3794 26.1395 22.0144C26.0461 21.6558 25.9758 21.0717 26.1106 20.5109C26.2496 19.9327 26.6169 19.358 27.3956 19.1312Z" fill="black" stroke="black" stroke-width="0.7" />
                                                    <path d="M28.0271 12.2115C27.8237 11.8434 27.3751 12.1556 27.3751 12.1556C27.3751 12.1556 27.2773 11.6179 26.8734 11.7354C26.4696 11.853 26.4938 12.3182 26.5476 12.5248C26.6033 12.7383 26.8864 13.3397 26.8864 13.3397C26.8864 13.3397 27.5112 13.1131 27.7012 13.001C27.885 12.8925 28.2304 12.5798 28.027 12.2117L28.0271 12.2115Z" fill="black" />
                                                    <path d="M30.0904 32.6835C29.6869 32.8022 29.5875 32.2647 29.5875 32.2647C29.5875 32.2647 29.1398 32.5784 28.9354 32.2107C28.7309 31.8431 29.0753 31.5294 29.2589 31.4205C29.4486 31.3078 30.0728 31.0793 30.0728 31.0793C30.0728 31.0793 30.3577 31.6798 30.4139 31.8932C30.4683 32.0996 30.4939 32.5648 30.0904 32.6835Z" fill="black" />
                                                </svg>
                                                PLO-6
                                            </button>
                                            <button>

                                                <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_6794_16529)">
                                                        <path d="M23.6412 6.45753C23.5641 6.23878 23.3574 6.09238 23.1254 6.09238C21.7654 6.09238 20.4411 6.30829 19.2131 6.72222C20.1539 4.89084 21.3172 3.71441 21.331 3.70057C21.4879 3.54438 21.5351 3.30895 21.4507 3.10431C21.3661 2.89967 21.1666 2.76618 20.9452 2.76618C19.3192 2.76618 17.7751 3.34275 16.496 4.40965C16.2764 3.6187 15.9531 2.85412 15.5568 2.19874C15.1756 1.56809 14.5985 0.816406 14.0144 0.816406C13.3849 0.816406 12.8007 1.57268 12.4214 2.20711C12.0383 2.84783 11.7262 3.60355 11.5134 4.39373C10.238 3.33712 8.70142 2.76612 7.08354 2.76612C6.86233 2.76612 6.66311 2.89956 6.5785 3.10393C6.4939 3.3083 6.54088 3.54373 6.69728 3.70013C6.71145 3.7143 7.87635 4.89232 8.81741 6.72572C7.58645 6.30949 6.25836 6.09233 4.89457 6.09233C4.66258 6.09233 4.45586 6.23867 4.37875 6.45748C4.3017 6.67628 4.37099 6.91991 4.55173 7.06533C4.55796 7.07036 5.18786 7.57988 5.99389 8.46752C7.50977 9.81641 7.77621 11.397 7.99978 11.1939C8.20283 11.4175 8.22339 10.9909 7.99978 11.1939C8.24352 11.1939 6.51463 7.4197 6.38059 7.28167C6.38059 7.28167 7.43732 11.1422 8.39763 11.5939C8.94822 11.7693 9.51823 12.4254 9.2726 12.1914C10.5877 12.8606 12.4214 11.0977 12.437 11.0977C11.3934 11.0977 10.4056 11.3405 9.5266 11.772C9.35543 11.3975 9.16167 11.0209 8.94822 10.6492C8.79789 10.3873 8.46375 10.2969 8.20163 10.4473C7.93973 10.5977 7.84939 10.932 7.99978 11.1939C8.21776 11.5735 8.41223 11.9578 8.58121 12.3381C6.90455 13.5418 5.8102 15.5077 5.8102 17.7245V22.1896C5.81009 25.8436 8.78285 28.8164 12.4369 28.8164H15.5895C19.2435 28.8164 22.2163 25.8436 22.2163 22.1896V17.7245C22.2163 15.5051 21.1195 13.5373 19.4397 12.334C20.8226 9.22395 23.4419 7.08655 23.4682 7.06533C23.6489 6.91991 23.7182 6.67628 23.6412 6.45753ZM14.0331 12.4254L17.0012 15.3935L14.0331 18.3616L11.065 15.3935L14.0331 12.4254ZM15.3461 12.1914H15.5895C16.8813 12.1914 18.071 12.6365 19.0136 13.3812L17.7747 14.6201L15.3461 12.1914ZM14.0332 19.9084L17.1053 22.9805L14.0332 26.0527L10.9611 22.9805L14.0332 19.9084ZM10.1876 22.2071L7.2195 19.239L10.2916 16.1669L13.2597 19.135L10.1876 22.2071ZM12.4369 12.1914H12.7202L10.2916 14.62L9.03518 13.3636C9.97421 12.6295 11.1553 12.1914 12.4369 12.1914ZM6.90384 17.7244C6.90384 16.3483 7.40899 15.0879 8.24352 14.1188L9.51823 15.3935L6.90384 18.0078V17.7244ZM7.57174 24.8231C7.14594 24.0396 6.90389 23.1423 6.90389 22.1896V20.4703L9.41421 22.9806L7.57174 24.8231ZM12.3679 27.718L12.3644 27.7218C10.6943 27.7002 9.20028 26.935 8.199 25.7426L10.1877 23.754L13.2598 26.8261L12.3679 27.718ZM15.5895 27.7227H13.91L17.8787 23.754L19.8457 25.721C18.83 26.9431 17.2992 27.7227 15.5895 27.7227ZM21.1226 22.1896C21.1226 23.1318 20.8856 24.0196 20.4685 24.7969L18.6521 22.9805L21.1226 20.5101V22.1896ZM19.8012 14.1404C20.6247 15.1066 21.1226 16.3584 21.1226 17.7245V18.9632L17.8787 22.2071L14.8066 19.135L17.7747 16.1669L18.459 16.8511C18.5658 16.9579 18.7057 17.0113 18.8457 17.0113C18.9856 17.0113 19.1256 16.9579 19.2324 16.8511C19.4459 16.6376 19.4459 16.2913 19.2324 16.0777L18.5481 15.3934L19.8012 14.1404Z" fill="black" />
                                                        <path d="M20.4647 17.3145C20.363 17.2129 20.222 17.1543 20.0781 17.1543C19.9342 17.1544 19.7932 17.2129 19.6915 17.3145C19.5898 17.4162 19.5312 17.5573 19.5312 17.7012C19.5312 17.845 19.5897 17.9861 19.6915 18.0878C19.7932 18.1895 19.9342 18.248 20.0781 18.248C20.222 18.248 20.363 18.1895 20.4647 18.0878C20.5664 17.9861 20.625 17.845 20.625 17.7012C20.625 17.5573 20.5665 17.4162 20.4647 17.3145Z" fill="black" />
                                                        <path d="M14.3983 15.1271C14.2966 15.0254 14.1555 14.9668 14.0117 14.9668C13.8679 14.9668 13.7268 15.0253 13.6251 15.1271C13.5234 15.2287 13.4648 15.3698 13.4648 15.5143C13.4648 15.6581 13.5233 15.7986 13.6251 15.9009C13.7268 16.0026 13.8679 16.0611 14.0117 16.0611C14.1555 16.0611 14.2961 16.0026 14.3983 15.9009C14.5 15.7986 14.5586 15.6581 14.5586 15.5143C14.5586 15.3699 14.5001 15.2294 14.3983 15.1271Z" fill="black" />
                                                        <path d="M14.3983 22.6857C14.2966 22.584 14.1555 22.5254 14.0117 22.5254C13.8679 22.5254 13.7268 22.5839 13.6251 22.6857C13.5234 22.7873 13.4648 22.9284 13.4648 23.0723C13.4648 23.2167 13.5233 23.3572 13.6251 23.4589C13.7269 23.5606 13.8679 23.6191 14.0117 23.6191C14.1555 23.6191 14.2966 23.5612 14.3983 23.4589C14.5 23.3572 14.5586 23.2161 14.5586 23.0723C14.5586 22.9284 14.5001 22.7874 14.3983 22.6857Z" fill="black" />
                                                        <path d="M10.5546 18.9337C10.4529 18.832 10.3118 18.7734 10.168 18.7734C10.0241 18.7734 9.88305 18.832 9.78133 18.9337C9.67961 19.0354 9.62109 19.1765 9.62109 19.3203C9.62109 19.4642 9.67956 19.6052 9.78133 19.707C9.8831 19.8087 10.0241 19.8672 10.168 19.8672C10.3118 19.8672 10.4529 19.8087 10.5546 19.707C10.6563 19.6052 10.7148 19.4642 10.7148 19.3203C10.7148 19.1765 10.6563 19.0354 10.5546 18.9337Z" fill="black" />
                                                        <path d="M18.2773 18.9337C18.1755 18.832 18.0344 18.7734 17.8906 18.7734C17.7468 18.7734 17.6057 18.832 17.504 18.9337C17.4023 19.0354 17.3438 19.1765 17.3438 19.3203C17.3438 19.4642 17.4023 19.6052 17.504 19.707C17.6057 19.8087 17.7468 19.8672 17.8906 19.8672C18.0345 19.8672 18.1755 19.8087 18.2773 19.707C18.379 19.6052 18.4375 19.4642 18.4375 19.3203C18.4375 19.1765 18.379 19.0354 18.2773 18.9337Z" fill="black" />
                                                        <path d="M18.2773 25.6915C18.1755 25.5898 18.0345 25.5312 17.8906 25.5312C17.7463 25.5312 17.6057 25.5898 17.5034 25.6915C17.4017 25.7932 17.3438 25.9343 17.3438 26.0781C17.3438 26.222 17.4017 26.363 17.5034 26.4648C17.6057 26.5665 17.7463 26.625 17.8906 26.625C18.0345 26.625 18.175 26.5665 18.2773 26.4648C18.3789 26.3625 18.4375 26.222 18.4375 26.0781C18.4375 25.9343 18.379 25.7932 18.2773 25.6915Z" fill="black" />
                                                        <path d="M10.5546 25.6915C10.4529 25.5898 10.3118 25.5312 10.168 25.5312C10.0235 25.5312 9.88299 25.5893 9.78078 25.6915C9.67906 25.7932 9.62109 25.9338 9.62109 26.0781C9.62109 26.222 9.67906 26.363 9.78078 26.4648C9.88299 26.5665 10.0235 26.625 10.168 26.625C10.3118 26.625 10.4529 26.5665 10.5546 26.4648C10.6563 26.363 10.7142 26.222 10.7142 26.0781C10.7142 25.9338 10.6563 25.7932 10.5546 25.6915Z" fill="black" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_6794_16529">
                                                            <rect width="28" height="28" fill="white" transform="translate(0.0078125 0.816406)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                OFC
                                            </button>
                                            <button>

                                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_6794_16556)">
                                                        <path d="M30.1786 29.7676H5.43594C4.7006 29.7676 4.04191 29.3875 3.67406 28.7507C3.30656 28.1135 3.30656 27.3532 3.67406 26.7161L16.0452 5.28844C16.4127 4.65165 17.0718 4.27148 17.8074 4.27148C18.5428 4.27148 19.2015 4.65165 19.569 5.28844L31.9405 26.7161C32.308 27.3532 32.308 28.1135 31.9405 28.7507C31.5726 29.3875 30.9139 29.7676 30.1786 29.7676ZM16.8042 5.72643L4.43302 27.154C4.2236 27.5168 4.22326 27.95 4.43267 28.3127C4.64209 28.675 5.01712 28.8916 5.43594 28.8916H30.1786C30.5974 28.8916 30.9725 28.675 31.1819 28.3127C31.3913 27.95 31.3909 27.5168 31.1815 27.154L18.8104 5.72643C18.601 5.36372 18.2259 5.14746 17.8074 5.14746C17.3886 5.14746 17.0136 5.36372 16.8042 5.72643Z" fill="black" />
                                                        <path d="M29.3027 27.6645H6.31299C6.15661 27.6645 6.01187 27.581 5.93351 27.4455C5.8555 27.31 5.8555 27.143 5.93351 27.0075L17.4283 7.09779C17.5851 6.82678 18.0306 6.82678 18.1873 7.09779L29.6821 27.0075C29.7601 27.143 29.7601 27.31 29.6821 27.4455C29.6038 27.581 29.459 27.6645 29.3027 27.6645ZM7.0716 26.7885H28.544L17.8078 8.19276L7.0716 26.7885Z" fill="black" />
                                                        <path d="M19.997 22.408L19.593 21.3459H16.1527L15.7486 22.4311C15.5909 22.8544 15.4562 23.1411 15.3446 23.2912C15.233 23.4374 15.0502 23.5105 14.7962 23.5105C14.5807 23.5105 14.3902 23.4316 14.2248 23.2738C14.0593 23.1161 13.9766 22.9371 13.9766 22.737C13.9766 22.6216 13.9958 22.5023 14.0343 22.3791C14.0728 22.256 14.1363 22.0848 14.2248 21.8654L16.3894 16.3702C16.4509 16.2124 16.524 16.0239 16.6087 15.8045C16.6972 15.5813 16.7896 15.3966 16.8858 15.2504C16.9858 15.1042 17.1147 14.9868 17.2725 14.8983C17.4341 14.8059 17.6323 14.7598 17.8671 14.7598C18.1056 14.7598 18.3038 14.8059 18.4616 14.8983C18.6232 14.9868 18.7521 15.1023 18.8483 15.2446C18.9484 15.387 19.0311 15.5409 19.0965 15.7064C19.1658 15.868 19.2524 16.0855 19.3563 16.3587L21.5671 21.8192C21.7402 22.2348 21.8268 22.5369 21.8268 22.7255C21.8268 22.9217 21.7441 23.1026 21.5786 23.2681C21.417 23.4297 21.2207 23.5105 20.9898 23.5105C20.8552 23.5105 20.7397 23.4855 20.6435 23.4355C20.5473 23.3893 20.4665 23.3258 20.4011 23.245C20.3357 23.1603 20.2645 23.0333 20.1875 22.864C20.1144 22.6908 20.0509 22.5388 19.997 22.408ZM16.6029 20.0587H19.1312L17.8555 16.5665L16.6029 20.0587Z" fill="black" />
                                                        <path d="M30.6533 27.3706L18.3463 6.07015C18.1924 5.80363 17.8076 5.80363 17.6537 6.07015L5.34673 27.3706C5.19266 27.6373 5.3851 27.9707 5.69308 27.9707H30.3069C30.6149 27.9707 30.8073 27.6373 30.6533 27.3706Z" stroke="black" stroke-width="2" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_6794_16556">
                                                            <rect width="30" height="30" fill="white" transform="translate(0.5 0.955078)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                ALL IN-FOLD
                                            </button>
                                            <button>

                                                <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.5216 3.59288C22.5216 2.67697 22.1014 1.83664 21.3686 1.28721C20.6358 0.737835 19.7114 0.569871 18.8322 0.826612L13.4952 2.38492L8.1581 0.826669C7.27895 0.569928 6.35454 0.737835 5.62176 1.28726C4.88898 1.83664 4.46875 2.67703 4.46875 3.59294V10.3656H22.5216V3.59288Z" fill="black" />
                                                    <path d="M3.59473 12.5215H23.4023C25.5691 12.5215 27.3654 14.1689 27.6123 16.2891H-0.615234C-0.368348 14.1689 1.42802 12.5216 3.59473 12.5215Z" fill="black" stroke="black" />
                                                    <path d="M19.2807 18.7207C17.8004 18.7207 16.4947 19.4807 15.7318 20.6306C15.1497 20.076 14.3628 19.7343 13.4971 19.7343C12.6315 19.7343 11.8447 20.076 11.2625 20.6306C10.4996 19.4806 9.19394 18.7207 7.71361 18.7207C5.36654 18.7207 3.45703 20.6302 3.45703 22.9773C3.45703 25.3244 5.36654 27.2339 7.71361 27.2339C10.0607 27.2339 11.9702 25.3244 11.9702 22.9773C11.9702 22.1353 12.6552 21.4503 13.4971 21.4503C14.3391 21.4503 15.0241 22.1353 15.0241 22.9773C15.0241 25.3244 16.9336 27.2339 19.2807 27.2339C21.6278 27.2339 23.5373 25.3244 23.5373 22.9773C23.5373 20.6302 21.6278 18.7207 19.2807 18.7207ZM7.71373 25.5178C6.31288 25.5178 5.17314 24.3781 5.17314 22.9772C5.17314 21.5763 6.31282 20.4366 7.71373 20.4366C9.11464 20.4366 10.2543 21.5763 10.2543 22.9772C10.2543 24.3781 9.11458 25.5178 7.71373 25.5178ZM19.2807 25.5178C17.8798 25.5178 16.7401 24.3781 16.7401 22.9772C16.7401 21.5763 17.8798 20.4366 19.2807 20.4366C20.6816 20.4366 21.8213 21.5763 21.8213 22.9772C21.8213 24.3781 20.6816 25.5178 19.2807 25.5178Z" fill="black" />
                                                </svg>
                                                Anonymous
                                            </button>
                                            <button>

                                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_6794_16572)">
                                                        <path d="M22.4688 25.7328H22.058C20.8638 25.6148 20.4406 24.1121 20.315 22.6445C19.7355 22.7575 19.129 22.8147 18.4965 22.8147C17.8753 22.8147 17.2788 22.7597 16.7081 22.6507C16.5872 24.1163 16.1636 25.615 14.9498 25.7328H14.5391C13.9134 25.7328 13.4062 26.2575 13.4062 26.9047V27.7945H23.6016V26.9047C23.6016 26.2575 23.0944 25.7328 22.4688 25.7328Z" fill="black" />
                                                        <path d="M23.8848 29.5527H13.123C12.6538 29.5527 12.2734 29.9462 12.2734 30.4316C12.2734 30.917 12.6538 31.3105 13.123 31.3105H23.8848C24.354 31.3105 24.7344 30.917 24.7344 30.4316C24.7344 29.9462 24.354 29.5527 23.8848 29.5527Z" fill="black" />
                                                        <path d="M8.87695 3.06836H9.61481C10.3914 6.78889 9.26607 21.0572 18.4984 21.0572C27.7308 21.0572 26.5046 6.78889 27.3421 3.06836H28.1348C28.604 3.06836 28.9844 2.67484 28.9844 2.18945C28.9844 1.70406 28.604 1.31055 28.1348 1.31055H8.87695C8.40774 1.31055 8.02734 1.70406 8.02734 2.18945C8.02734 2.67484 8.40774 3.06836 8.87695 3.06836ZM22.5439 10.4332L21.3817 12.0006L21.4341 13.9779C21.4418 14.2677 21.3108 14.5429 21.0839 14.7133C20.9368 14.8237 20.7616 14.8809 20.5847 14.8809C20.4888 14.8809 20.3923 14.864 20.2994 14.8298L18.5059 14.1679L16.7122 14.8298C16.448 14.9272 16.1547 14.8836 15.9277 14.7133C15.7008 14.5429 15.5698 14.2677 15.5775 13.9779L15.6299 12.0006L14.4677 10.4332C14.2973 10.2035 14.2473 9.90174 14.3339 9.62641C14.4204 9.35107 14.6325 9.1375 14.9009 9.05547L16.7274 8.49672L17.8043 6.86623C17.9626 6.62652 18.2251 6.48314 18.5057 6.48314C18.7864 6.48314 19.0489 6.62652 19.2072 6.86623L20.2841 8.49672L22.1106 9.05547C22.3789 9.1375 22.591 9.35107 22.6776 9.62641C22.7643 9.90174 22.7143 10.2035 22.5439 10.4332Z" fill="black" />
                                                        <path d="M19.0496 9.7465L18.5037 8.91992L17.9577 9.7465C17.8474 9.91361 17.6847 10.0361 17.4971 10.0936L16.5664 10.3782L17.1594 11.1779C17.278 11.3379 17.3399 11.5354 17.3345 11.7369L17.3078 12.7427L18.2182 12.4068C18.3105 12.3728 18.4071 12.3557 18.5036 12.3557C18.6002 12.3557 18.6968 12.3728 18.7891 12.4068L19.6994 12.7427L19.6727 11.7369C19.6674 11.5354 19.7293 11.3379 19.8479 11.1779L20.4409 10.3782L19.5101 10.0936C19.3227 10.0362 19.16 9.91361 19.0496 9.7465Z" fill="black" />
                                                        <path d="M9.3761 14.438C7.23803 12.3549 5.92244 9.48598 5.72816 6.43359H8.24952C8.24595 6.38455 8.24232 6.3351 8.23881 6.28664C8.20245 5.78561 8.16003 5.20242 8.11154 4.67578H4.85352C4.3843 4.67578 4.00391 5.0693 4.00391 5.55469V5.64522C4.00391 10.0631 6.06387 14.2463 9.5143 16.8353L10.5346 17.6009C10.3355 17.1976 10.1499 16.773 9.97949 16.3255C9.74676 15.7144 9.54755 15.0816 9.3761 14.438Z" fill="black" />
                                                        <path d="M32.1534 4.67578H28.8267C28.7716 5.24232 28.724 5.88352 28.6834 6.43359H31.2782C31.0802 9.51826 29.7376 12.4142 27.5582 14.5011C27.3842 15.1574 27.1817 15.8017 26.9437 16.4221C26.7807 16.8472 26.6035 17.2511 26.4141 17.6357L27.4829 16.8352C30.9394 14.2466 33.003 10.0607 33.003 5.63789V5.55469C33.003 5.0693 32.6226 4.67578 32.1534 4.67578Z" fill="black" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_6794_16572">
                                                            <rect width="29" height="30" fill="white" transform="translate(0.5 0.955078)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                Tournament
                                            </button>
                                            <button>

                                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_6794_16581)">
                                                        <path d="M15.4677 6.80875V6.01902H17.2247C17.759 6.01902 18.1768 5.5774 18.1768 5.04309V3.88896C18.1767 2.45096 17.0222 1.31055 15.5842 1.31055H13.4163C11.9782 1.31055 10.8238 2.45096 10.8238 3.88896V5.04309C10.8238 5.5774 11.2415 6.01902 11.7758 6.01902H13.5328V6.80875C11.2331 6.98898 9.1099 7.80631 7.33914 9.08342L5.40789 7.13693C5.0316 6.7576 4.41895 6.75514 4.03967 7.1316C3.66033 7.50789 3.65793 8.12049 4.03434 8.49982L5.85883 10.3387C3.61932 12.5629 2.23047 15.6425 2.23047 19.0407C2.23035 25.8062 7.73459 31.3105 14.5002 31.3105C21.2659 31.3105 26.7701 25.8062 26.7701 19.0406C26.7701 12.6006 21.7829 7.30375 15.4677 6.80875ZM12.7588 4.08402V3.88896C12.7588 3.51789 13.0452 3.24549 13.4163 3.24549H15.5843C15.9554 3.24549 16.2418 3.51789 16.2418 3.88896V4.08402H12.7588ZM14.5002 29.3755C8.80152 29.3755 4.16535 24.7393 4.16535 19.0406C4.16535 13.3419 8.80152 8.70578 14.5002 8.70578C20.1989 8.70578 24.8351 13.342 24.8351 19.0407C24.8351 24.7394 20.1989 29.3755 14.5002 29.3755Z" fill="black" />
                                                        <path d="M14.4986 10.0801C9.5583 10.0801 5.53906 14.0993 5.53906 19.0395C5.53906 23.9798 9.55824 27.9991 14.4986 27.9991C19.4389 27.9991 23.4581 23.9799 23.4581 19.0396C23.4581 14.0993 19.4388 10.0801 14.4986 10.0801ZM14.4986 26.064C10.6252 26.064 7.47406 22.9128 7.47406 19.0395C7.47406 15.1662 10.6252 12.015 14.4986 12.015C18.3719 12.015 21.5231 15.1661 21.5231 19.0395C21.5231 22.9128 18.3719 26.064 14.4986 26.064Z" fill="black" />
                                                        <path d="M18.0907 15.4624C17.7134 15.0838 17.1009 15.0828 16.7224 15.4599L13.8158 18.3562C13.6337 18.5377 13.5312 18.7843 13.5312 19.0415V20.8549C13.5312 21.3892 13.9644 21.8224 14.4987 21.8224C15.0331 21.8224 15.4662 21.3892 15.4662 20.8549V19.4433L18.0882 16.8306C18.4667 16.4534 18.4678 15.8409 18.0907 15.4624Z" fill="black" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_6794_16581">
                                                            <rect width="30" height="30" fill="white" transform="translate(0 0.955078)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                Sit and Go
                                            </button>
                                        </div>
                                    </div>

                                </div>

                                <div class="card  mb-3 ">
                                    <div class="card-header ">
                                        Support
                                    </div>

                                    <div class="sidePost Support col-lg-12">
                                        <ul>
                                            <li>
                                                <span>
                                                    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_6794_16601)">
                                                            <circle cx="14" cy="14.4961" r="11" fill="black" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 0.955078C9.55219 0.955078 6.24558 2.32472 3.80761 4.76269C1.36964 7.20066 0 10.5073 0 13.9551C0 17.4029 1.36964 20.7095 3.80761 23.1475C6.24558 25.5854 9.55219 26.9551 13 26.9551C16.4478 26.9551 19.7544 25.5854 22.1924 23.1475C24.6304 20.7095 26 17.4029 26 13.9551C26 10.5073 24.6304 7.20066 22.1924 4.76269C19.7544 2.32472 16.4478 0.955078 13 0.955078ZM6.893 9.96308H19.117L13.007 14.8101L6.893 9.96308ZM6.016 10.5451L12.701 15.8421C12.7893 15.9118 12.8985 15.9498 13.011 15.9498C13.1235 15.9498 13.2327 15.9118 13.321 15.8421L19.986 10.5491V17.9471H6.016V10.5451Z" fill="white" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_6794_16601">
                                                                <rect width="26" height="26" fill="white" transform="translate(0 0.955078)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    Email
                                                </span>
                                                <strong>pokerstar@admin.com</strong>
                                            </li>
                                            <li>
                                                <span>

                                                    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_6794_16619)">
                                                            <mask id="mask0_6794_16619" maskUnits="userSpaceOnUse" x="0" y="0" width="26" height="27">
                                                                <path d="M0.0234375 26.9545V0.970703H25.9991V26.9545H0.0234375Z" fill="white" />
                                                            </mask>
                                                            <g mask="url(#mask0_6794_16619)">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.696 15.4252C16.6281 15.4079 16.5569 15.4073 16.4887 15.4235C16.4205 15.4397 16.3573 15.4722 16.3044 15.5183C15.6723 16.0582 14.7992 16.6334 14.4226 16.6927C11.897 15.4582 10.4865 13.0885 10.4333 12.6392C10.4024 12.3865 10.9813 11.4992 11.6471 10.7777C11.7312 10.6863 11.7739 10.562 11.7621 10.4381C11.5927 8.49056 9.56104 7.53506 9.47532 7.49606C9.39493 7.45829 9.30485 7.44623 9.21735 7.46153C6.87166 7.85072 6.51863 9.21572 6.50482 9.27259C6.48532 9.35222 6.48857 9.43468 6.51335 9.51187C9.3112 18.1918 15.1254 19.801 17.0364 20.3299C17.1839 20.3709 17.305 20.4034 17.3972 20.4339C17.5025 20.468 17.6167 20.4613 17.7173 20.4152C17.7758 20.3884 19.1571 19.738 19.4947 17.6157C19.5097 17.5235 19.4947 17.4277 19.452 17.3444C19.4219 17.2859 18.6996 15.9111 16.696 15.4252Z" fill="black" />
                                                            </g>
                                                            <mask id="mask1_6794_16619" maskUnits="userSpaceOnUse" x="0" y="0" width="26" height="27">
                                                                <path d="M0.0234375 26.9545V0.970703H25.9991V26.9545H0.0234375Z" fill="white" />
                                                            </mask>
                                                            <g mask="url(#mask1_6794_16619)">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4984 17.6158C19.1608 19.738 17.7795 20.3885 17.721 20.4153C17.6204 20.4614 17.5062 20.4681 17.4009 20.434C17.3087 20.4035 17.1876 20.371 17.0402 20.33C15.1292 19.801 9.31491 18.1919 6.51706 9.51192C6.49211 9.43449 6.48916 9.35165 6.50853 9.27264C6.52234 9.21577 6.87537 7.85077 9.22106 7.46158C9.308 7.44655 9.39819 7.45792 9.47903 7.49611C9.56475 7.53511 11.5964 8.49061 11.7658 10.4382C11.7776 10.5621 11.7349 10.6864 11.6508 10.7778C10.985 11.4993 10.4061 12.3865 10.437 12.6392C10.4902 13.0885 11.9007 15.4582 14.4263 16.6928C14.8029 16.6335 15.676 16.0582 16.3081 15.5183C16.4162 15.4261 16.56 15.3891 16.6997 15.4253C18.7033 15.9112 19.4257 17.2859 19.4557 17.3444C19.4984 17.4277 19.5134 17.5236 19.4984 17.6158ZM13 0.955078C5.82034 0.955078 0 6.77542 0 13.9551C0 21.1347 5.82034 26.9551 13 26.9551C20.1797 26.9551 26 21.1347 26 13.9551C26 6.77542 20.1797 0.955078 13 0.955078Z" fill="white" />
                                                            </g>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_6794_16619">
                                                                <rect width="26" height="26" fill="white" transform="translate(0 0.955078)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>

                                                    Phone
                                                </span>
                                                <strong>7627200090</strong>
                                            </li>
                                            <li>
                                                <span>

                                                    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_6794_16645)">
                                                            <circle cx="14" cy="14.4961" r="11" fill="black" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 0.955078C9.55219 0.955078 6.24558 2.32472 3.80761 4.76269C1.36964 7.20066 0 10.5073 0 13.9551C0 17.4029 1.36964 20.7095 3.80761 23.1475C6.24558 25.5854 9.55219 26.9551 13 26.9551C16.4478 26.9551 19.7544 25.5854 22.1924 23.1475C24.6304 20.7095 26 17.4029 26 13.9551C26 10.5073 24.6304 7.20066 22.1924 4.76269C19.7544 2.32472 16.4478 0.955078 13 0.955078ZM8.32 8.75508H18.72C19.0081 8.75508 19.24 8.987 19.24 9.27508V15.5151C19.24 15.8032 19.0081 16.0351 18.72 16.0351H14.56V18.6351L10.4 16.0351H8.32C8.25167 16.0352 8.18399 16.0219 8.12084 15.9958C8.05769 15.9697 8.00031 15.9314 7.952 15.8831C7.90368 15.8348 7.86539 15.7774 7.8393 15.7142C7.81322 15.6511 7.79986 15.5834 7.8 15.5151V9.27508C7.8 8.987 8.03192 8.75508 8.32 8.75508Z" fill="white" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_6794_16645">
                                                                <rect width="26" height="26" fill="white" transform="translate(0 0.955078)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>

                                                    Chat Support
                                                </span>
                                                <strong>N.A</strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="card  mb-3 ">
                                    <div class="card-header ">
                                        Tagging
                                    </div>

                                    <div class="sidePost sidePostTAg col-lg-12">
                                        <h3>Linking a new account </h3>
                                        <p>After registration, link your account to aour website to receive bonuses from rakebackk</p>
                                        <div class="TagginginputField">
                                            <span class="QuestionTag">?</span>
                                            <input type="text" placeholder="Username" value="" />
                                        </div>
                                        <button className="SidePostTagBtn">Submit</button>
                                    </div>
                                </div>

                                <div class="newsletter GotAQues text-center mb-3">
                                    <h5>Got a question?</h5>
                                    <p>We are online <img src={Online} /></p>

                                    <div className="GotAQuesBtn">
                                        <button class="btn subcrb "> <img src={CustomerCare} /> Live Chat</button>
                                        <button class="btn subcrb GreenBtn">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.507812 24.1612L2.19955 17.9809C1.15563 16.1718 0.607091 14.1211 0.608094 12.0182C0.611102 5.44375 5.9611 0.09375 12.5345 0.09375C15.7245 0.0947528 18.7189 1.33724 20.9712 3.59155C23.2225 5.84587 24.462 8.84227 24.461 12.0292C24.4579 18.6046 19.108 23.9546 12.5345 23.9546C10.5389 23.9536 8.57242 23.4532 6.83054 22.5026L0.507812 24.1612ZM7.12336 20.3435C8.80407 21.3413 10.4086 21.939 12.5305 21.94C17.9938 21.94 22.4443 17.4935 22.4473 12.0272C22.4493 6.54985 18.0199 2.1094 12.5385 2.10739C7.07121 2.10739 2.62374 6.55386 2.62174 12.0192C2.62074 14.2504 3.27457 15.9211 4.37265 17.669L3.37084 21.3273L7.12336 20.3435ZM18.5424 14.8642C18.4682 14.7398 18.2696 14.6656 17.9708 14.5162C17.6729 14.3668 16.2078 13.6457 15.9341 13.5465C15.6613 13.4472 15.4627 13.397 15.2632 13.6959C15.0646 13.9937 14.493 14.6656 14.3195 14.8642C14.146 15.0627 13.9716 15.0878 13.6737 14.9384C13.3759 14.7889 12.4152 14.4751 11.277 13.4592C10.3915 12.669 9.79284 11.6933 9.61935 11.3944C9.44587 11.0966 9.6013 10.9351 9.74972 10.7867C9.88409 10.6534 10.0476 10.4387 10.197 10.2643C10.3484 10.0918 10.3975 9.96743 10.4978 9.76787C10.5971 9.56931 10.548 9.39482 10.4727 9.2454C10.3975 9.09699 9.80186 7.62988 9.55417 7.0332C9.31149 6.45258 9.0658 6.53079 8.88329 6.52177L8.31169 6.51174C8.11313 6.51174 7.79023 6.58595 7.51746 6.88479C7.2447 7.18362 6.47454 7.90364 6.47454 9.37076C6.47454 10.8379 7.54253 12.2548 7.69095 12.4534C7.84037 12.652 9.79184 15.6624 12.7812 16.953C13.4922 17.2599 14.0478 17.4434 14.48 17.5808C15.194 17.8074 15.8438 17.7753 16.3572 17.6991C16.9298 17.6139 18.1202 16.9781 18.3689 16.2821C18.6176 15.5852 18.6176 14.9885 18.5424 14.8642Z" fill="#28A745" />
                                            </svg>
                                            Whatsapp
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                </div>

                <div className="row BlogBottomNewSectionRow MobileHide" >
                    <div className="col-lg-12 BlogBottomNewSection">
                        <h3>Big Cash Recent</h3>
                    </div>
                    <div class="sidePost col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="sideImageContainer">
                            <img src={FeaturedCardImage} alt="POKER HANDS " class="sideImage" />
                        </div>
                        <div class="sideContent">
                            <p class="sideDescription">POKER HANDS </p>
                            <div class="AutherINfo">
                                <h3>NEWS</h3>
                                <span>.</span>
                                <p>Mar. 28, 2020</p>
                            </div>
                        </div>
                    </div>
                    <div class="sidePost col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="sideImageContainer">
                            <img src={FeaturedCardImage} alt="POKER HANDS " class="sideImage" />
                        </div>
                        <div class="sideContent">
                            <p class="sideDescription">POKER HANDS </p>
                            <div class="AutherINfo">
                                <h3>NEWS</h3>
                                <span>.</span>
                                <p>Mar. 28, 2020</p>
                            </div>
                        </div>
                    </div>
                    <div class="sidePost col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="sideImageContainer">
                            <img src={FeaturedCardImage} alt="POKER HANDS " class="sideImage" />
                        </div>
                        <div class="sideContent">
                            <p class="sideDescription">POKER HANDS </p>
                            <div class="AutherINfo">
                                <h3>NEWS</h3>
                                <span>.</span>
                                <p>Mar. 28, 2020</p>
                            </div>
                        </div>
                    </div>
                    <div class="sidePost col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="sideImageContainer">
                            <img src={FeaturedCardImage} alt="POKER HANDS " class="sideImage" />
                        </div>
                        <div class="sideContent">
                            <p class="sideDescription">POKER HANDS </p>
                            <div class="AutherINfo">
                                <h3>NEWS</h3>
                                <span>.</span>
                                <p>Mar. 28, 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 BLogPAgesFooterIcon MobileHide">
                    <div class="SliderFooter text-center">
                        <button class="ClaimNow">See more</button>
                    </div>
                </div>
                <section id="blogs" className="OffersForU OffersForUsecnd mt-4 pt-4  mb-4 pb-4 DesktopHide">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="mb-0">Offers For You</h6>
                        <a href="#" className="text-danger small seeMOre">See More</a>
                    </div>
                    <div className="OffersForUsecnddiv">
                        <div className=" OffersForUsecnddivCard">
                            <div className="LatestNewsDsgIMg">
                                <img src={Promotion} className="" />
                            </div>
                            <div className="cardOfferSecond">
                                <p className="small">The Pros and Cons of Remote Work</p>
                                <span className="">BLOG</span>
                            </div>
                        </div>
                        <div className=" OffersForUsecnddivCard">
                            <div className="LatestNewsDsgIMg">
                                <img src={Promotion} className="" />
                            </div>
                            <div className="cardOfferSecond">
                                <p className="small">The Pros and Cons of Remote Work</p>
                                <span className="">BLOG</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Review;
