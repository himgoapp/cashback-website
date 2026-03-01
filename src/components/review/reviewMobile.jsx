import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import FeaturedCardImage from "../../assets/Logos_and_illustration/FeaturedCardImage.svg";
import Promotion from "../../assets/Promotion.jpg";

import Plus from "../../assets/Logos_and_illustration/Plus.svg";
import Minus from "../../assets/Logos_and_illustration/Minus.svg";

import Bitcoin from "../../assets/Review/Bitcoin.svg";
import Etherium from "../../assets/Review/Etherium.svg";
import GooglePay from "../../assets/Review/GooglePay.svg";
import Lightcoin from "../../assets/Review/Lightcoin.svg";
import Mastercard from "../../assets/Review/Mastercard.svg";
import visalogo from "../../assets/Review/visalogo.svg";
import CustomerCare from "../../assets/Review/CustomerCareRed.png";
import Online from "../../assets/Review/24.svg";
import TaggingReview from "../../assets/Review/TaggingReview.png";
import { useParams } from "react-router-dom";
import { getProductById } from "../../servicefile/productservice";
import { getLabel, getWalletArray, getGameIcon, getPokerSiteImage, backgroundClassHelper, extractHeadingsFromHTML, notRequired } from "../../helperFxns/reviewhelper";
import Loading from "../common/Loading/Loading";
import ReviewArticleData from "./reviewArticleData";

const taggingNavItems = ["How to Tag",];
const reviewNavItems = ["In this offer", "Offer Details"];

const ReviewMobile = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { setHideNav } = useContext(UserContext);
    const [expandedItem, setExpandedItem] = useState(1);
    const { roomId } = useParams();
    const [currentItem, setCurrentItem] = useState([]);

    const [reviewNavHeaders, setReviewNavHeaders] = useState(reviewNavItems);
    const [taggingNavHeaders, setTaggingNavHeaders] = useState(taggingNavItems);

    const [activeTab, setActiveTab] = useState("review");
    const [activeSection, setActiveSection] = useState("Inthisoffer");

    const [taggingActiveSection, setTaggingActiveSection] = useState("HowtoTag");

    const [loading, setLoading] = useState(true);

    const fetchProduct = async () => {
        if (!roomId) return;
        try {
            let id = roomId.substring(roomId.lastIndexOf("-") + 1);
            console.log("Fetching Room ID:", id);

            const roomData = await getProductById(id);
            console.log("API Response:", roomData);

            const fetchedProduct =
                roomData?.data?.product?.[0] || roomData?.product?.[0];

            if (fetchedProduct) {
                setCurrentItem(fetchedProduct);
                setLoading(false);
            } else {
                console.warn("No room found in response.");
            }
            setLoading(false);
        } catch (error) {
            console.error("Error fetching room:", error);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setHideNav(window.scrollY > 585);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [setHideNav]);

    useEffect(() => {
        fetchProduct();
    }, [roomId]);


    const handleScrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        setActiveSection(id);
    };

    const handleScrollToTag = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        setTaggingActiveSection(id);
    };

    useEffect(() => {
        if (currentItem?.detailedDescription) {
            const extractedHeadings = extractHeadingsFromHTML(currentItem.detailedDescription);
            setReviewNavHeaders([...reviewNavItems, ...extractedHeadings]);
        }
    }, [currentItem?.detailedDescription]);

    useEffect(() => {
        if (currentItem?.taggingDetails) {
            const extractedHeadings = extractHeadingsFromHTML(currentItem.taggingDetails);
            let data = [...taggingNavHeaders, ...extractedHeadings]
            const uniqueArr = data.filter((item, index) => data.indexOf(item) === index);
            setTaggingNavHeaders(uniqueArr);
        }
    }, [currentItem?.taggingDetails]);

    useEffect(() => {
        const sections = reviewNavHeaders.map(header => header.replace(/\s+/g, ""));

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


    }, [reviewNavHeaders, activeSection]);

    useEffect(() => {
        const sections = taggingNavHeaders.map(header => header.replace(/\s+/g, ""));

        const handleScroll = () => {
            const scrollPos = window.scrollY + 100;
            let current = taggingActiveSection;
            for (let id of sections) {
                const element = document.getElementById(id);
                if (element && element.offsetTop <= scrollPos) {
                    current = id;
                }
            }
            setTaggingActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);


    }, [taggingNavHeaders, taggingActiveSection]);

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
        <div className="NewsChildpAge DesktopLatestNews dictionaryPage ReviewPAge MobileReviewPAge">
            <div className="container">
                <div className="row">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item"><a href="/offer-and-deals">Deals</a></li>
                            <li class="breadcrumb-item active text-danger" aria-current="page">
                                {currentItem?.name || "Review"}
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className={backgroundClassHelper(currentItem?.name)}>

                    <div className="left">
                        <div className="logo">
                            <img src={getPokerSiteImage(currentItem?.name)} alt={currentItem?.name || 'store logo'} />
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
                        <h3>Why {currentItem?.name}</h3>
                        <ul className="checklist">
                            {currentItem && currentItem.features && currentItem.features.length > 0 && currentItem.features.map((item, index) => (
                                <li key={index}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                        <rect y="0.783203" width="16" height="16" rx="8" fill="#28A745" />
                                        <path d="M12 5.7832L6.5 11.2832L4 8.7832" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="right">
                        <div className="rating">
                            <strong>Overall Rating</strong>
                            <div>{currentItem?.rating?.editorRating}/5 <span className="stars">★★★★★</span>
                            </div>

                        </div>
                        <div className="rating-bars">
                            {currentItem && currentItem.rating && Object.entries(currentItem.rating)
                                .filter(([key]) => !notRequired.includes(key)) // remove _id
                                .map(([key, value]) => (
                                    <div className="rating-item" key={key}>
                                        <div className="RatingLabel">
                                            {getLabel(key)} <span>{value}/5</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="0"
                                            max="5"
                                            value={value}
                                            step="0.1"
                                            readOnly
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="ReviewTaggingTab">
                    <div class="single-post-right sidebar RightsidebarBlog RetagRightsideba">
                        {/* <div className="SpacedicAdd"></div> */}
                        <div class="card ">
                            <div class="card-header ">
                                General Information
                            </div>
                            <div class="sidePost sidePostGI col-lg-12">
                                <div>
                                    <span>Founded in</span>
                                    <p>{currentItem?.generalInformation?.foundedIn}</p>
                                </div>
                                <div>
                                    <span>Certification</span>
                                    <ul className="SidepostUL">
                                        {currentItem?.generalInformation?.certification?.map((cert, index) =>
                                            <li key={index}>
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"></rect><path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> */}
                                                {cert}
                                            </li>)}
                                    </ul>
                                </div>
                                <div>
                                    <span>Compatibility</span>
                                    <p>{currentItem?.generalInformation?.compatibility}</p>
                                </div>
                                <div>
                                    <span>Wallet</span>
                                    <ul className="SidepostUL">

                                        {getWalletArray(currentItem?.generalInformation?.wallet).map((wallet, index) => (
                                            <li key={index}>
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                                                                <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"></rect>
                                                                                                <path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                                            </svg> */}
                                                {wallet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* <div>
                                                                            <span>Responsible gaming</span>
                                                                            <p>Bomb Pot</p>
                                                                        </div> */}

                            </div>

                            {/* <div class="sidePost sidePostGI col-lg-12">
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

                            </div> */}

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
                                                        <img src={Bitcoin} alt="Bitcoin" />
                                    </button>
                                    <button>
                                        <img src={Etherium} alt="Etherium" />
                                    </button>
                                    <button>
                                        <img src={GooglePay} alt="Google Pay" />
                                    </button>
                                    <button>
                                        <img src={Lightcoin} alt="Litecoin" />
                                    </button>
                                    <button>
                                        <img src={Mastercard} alt="Mastercard" />
                                    </button>
                                    <button>
                                        <img src={visalogo} alt="Visa" />
                                    </button>
                                </div>
                                <p>The list of available payment systems depends on your country and region of residence and may differ from the one listed on this page.</p>
                            </div>
                        </div>

                        {/* <div className="SpacedicAdd SpacedicAddsBAckground"></div> */}

                        <div class="card   ">
                            <div class="card-header ">
                                Games offered
                            </div>

                            <div class="sidePost sidePostDW sidePostGamesoffered col-lg-12">
                                <div className="DWCards">
                                    {currentItem && currentItem.games && currentItem.games.length > 0 && currentItem.games.map((game) => (
                                        <button key={game._id}>
                                            {getGameIcon(game.name)}
                                            {game.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <div class="card   ">
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
                                        <strong>{currentItem?.support?.email}</strong>
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
                                        <strong>{currentItem?.support?.phone || "N.A"}</strong>
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
                                        <strong>{currentItem?.support?.chat || "N.A"}</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="card   ">
                            <div class="card-header ">
                                Tagging
                            </div>

                            <div class="sidePost sidePostTAg col-lg-12">
                                <h3>Linking a new account </h3>
                                <p>After registration, link your account to aour website to receive bonuses from cashback</p>
                                <div class="TagginginputField">
                                    <span class="QuestionTag">?</span>
                                    <input type="text" placeholder="Username" value="" />
                                </div>
                                <button className="SidePostTagBtn">Submit</button>
                            </div>
                        </div>

                        <div class="newsletter GotAQues text-center mb-3">
                            <h5>Got a question?</h5>
                            <p>We are online <img src={Online} alt="Online" /></p>

                            <div className="GotAQuesBtn">
                                <button class="btn subcrb "> <img src={CustomerCare} alt="Customer care" /> Live Chat</button>
                                <button class="btn subcrb GreenBtn">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.507812 24.1612L2.19955 17.9809C1.15563 16.1718 0.607091 14.1211 0.608094 12.0182C0.611102 5.44375 5.9611 0.09375 12.5345 0.09375C15.7245 0.0947528 18.7189 1.33724 20.9712 3.59155C23.2225 5.84587 24.462 8.84227 24.461 12.0292C24.4579 18.6046 19.108 23.9546 12.5345 23.9546C10.5389 23.9536 8.57242 23.4532 6.83054 22.5026L0.507812 24.1612ZM7.12336 20.3435C8.80407 21.3413 10.4086 21.939 12.5305 21.94C17.9938 21.94 22.4443 17.4935 22.4473 12.0272C22.4493 6.54985 18.0199 2.1094 12.5385 2.10739C7.07121 2.10739 2.62374 6.55386 2.62174 12.0192C2.62074 14.2504 3.27457 15.9211 4.37265 17.669L3.37084 21.3273L7.12336 20.3435ZM18.5424 14.8642C18.4682 14.7398 18.2696 14.6656 17.9708 14.5162C17.6729 14.3668 16.2078 13.6457 15.9341 13.5465C15.6613 13.4472 15.4627 13.397 15.2632 13.6959C15.0646 13.9937 14.493 14.6656 14.3195 14.8642C14.146 15.0627 13.9716 15.0878 13.6737 14.9384C13.3759 14.7889 12.4152 14.4751 11.277 13.4592C10.3915 12.669 9.79284 11.6933 9.61935 11.3944C9.44587 11.0966 9.6013 10.9351 9.74972 10.7867C9.88409 10.6534 10.0476 10.4387 10.197 10.2643C10.3484 10.0918 10.3975 9.96743 10.4978 9.76787C10.5971 9.56931 10.548 9.39482 10.4727 9.2454C10.3975 9.09699 9.80186 7.62988 9.55417 7.0332C9.31149 6.45258 9.0658 6.53079 8.88329 6.52177L8.31169 6.51174C8.11313 6.51174 7.79023 6.58595 7.51746 6.88479C7.2447 7.18362 6.47454 7.90364 6.47454 9.37076C6.47454 10.8379 7.54253 12.2548 7.69095 12.4534C7.84037 12.652 9.79184 15.6624 12.7812 16.953C13.4922 17.2599 14.0478 17.4434 14.48 17.5808C15.194 17.8074 15.8438 17.7753 16.3572 17.6991C16.9298 17.6139 18.1202 16.9781 18.3689 16.2821C18.6176 15.5852 18.6176 14.9885 18.5424 14.8642Z" fill="#28A745" />
                                    </svg>
                                    Whatsapp
                                </button>
                            </div>
                        </div>

                    </div>

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
                            {reviewNavHeaders.map((header) => (
                                <li key={header} className="nav-item">
                                    <button
                                        className={`nav-link ${activeSection === header.replace(/\s+/g, "") ? "active" : ""}`}
                                        onClick={() => handleScrollTo(header.replace(/\s+/g, ""))}
                                    >
                                        {header.replace(/\s+/g, "") === "Inthisoffer" && <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                                            <path d="M12.5186 8.3457L12.7432 9.03613H18.3848L14.4082 11.9248L13.8203 12.3516L14.0449 13.043L15.5625 17.7158L11.5879 14.8281L11 14.4014L10.4121 14.8281L6.43652 17.7158L7.95508 13.043L8.17969 12.3516L7.5918 11.9248L3.61523 9.03613H9.25684L9.48145 8.3457L11 3.6709L12.5186 8.3457Z" stroke="#848484" stroke-width="2" />
                                        </svg>}
                                        {header}
                                    </button>
                                </li>
                            ))}
                        </ul>}
                        {activeTab === "tagging" && <ul className="nav nav-pills  sticky-top bg-white pt-2 pb-2 ReviewUITab">
                            {taggingNavHeaders.map((header) => (
                                <li key={header} className="nav-item">
                                    <button
                                        className={`nav-link ${taggingActiveSection === header.replace(/\s+/g, "") ? "active" : ""}`}
                                        onClick={() => handleScrollToTag(header.replace(/\s+/g, ""))}
                                    >
                                        {header}
                                    </button>
                                </li>
                            ))}
                        </ul>}
                    </div>




                    {activeTab === "review" && (
                        <div className="mt-3">

                            <div className="single-post-row Dictionaryrow">
                                <div className="single-post-left">
                                    <div className="article-content">
                                        <div id="Inthisoffer" className=" " >
                                            <h2>About {currentItem?.name}</h2>
                                            <p>{currentItem?.smallDescription}</p>
                                        </div>

                                        <div id="OfferDetails" className="">
                                            <h4>Benefits of the Grid</h4>
                                            <div className="row ProsCons">
                                                <div class="col-md-6">
                                                    <div class="card border ProsCard">
                                                        <div class="pros-title ">Pros</div>
                                                        <div className="ProConData">
                                                            {currentItem && currentItem.pros && currentItem.pros.length > 0 && currentItem.pros.map((item, index) => (
                                                                <div class="list-item" key={index}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                                        <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745" />
                                                                        <path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                                    <span>{item}</span>
                                                                </div>
                                                            ))}
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="card border">
                                                        <div class="cons-title ">Cons</div>
                                                        <div className="ProConData">
                                                            {currentItem && currentItem.cons && currentItem.cons.length > 0 && currentItem.cons.map((item, index) => (
                                                                <div class="list-item" key={index}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                                        <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#DC3545" />
                                                                        <path d="M12.75 4.93555L4.75 12.9355M4.75 4.93555L12.75 12.9355" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                                    <span>{item}</span>
                                                                </div>
                                                            ))}
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ReviewArticleData article={currentItem?.detailedDescription} />

                                        <div class="newsletter GotAQues text-center mb-3">
                                            <h5>Got a question?</h5>
                                            <p>We are online <img src={Online} alt="Online" /></p>

                                            <div className="GotAQuesBtn">
                                                <button class="btn subcrb "> <img src={CustomerCare} alt="Customer care" /> Live Chat</button>
                                                <button class="btn subcrb GreenBtn">
                                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.507812 24.1612L2.19955 17.9809C1.15563 16.1718 0.607091 14.1211 0.608094 12.0182C0.611102 5.44375 5.9611 0.09375 12.5345 0.09375C15.7245 0.0947528 18.7189 1.33724 20.9712 3.59155C23.2225 5.84587 24.462 8.84227 24.461 12.0292C24.4579 18.6046 19.108 23.9546 12.5345 23.9546C10.5389 23.9536 8.57242 23.4532 6.83054 22.5026L0.507812 24.1612ZM7.12336 20.3435C8.80407 21.3413 10.4086 21.939 12.5305 21.94C17.9938 21.94 22.4443 17.4935 22.4473 12.0272C22.4493 6.54985 18.0199 2.1094 12.5385 2.10739C7.07121 2.10739 2.62374 6.55386 2.62174 12.0192C2.62074 14.2504 3.27457 15.9211 4.37265 17.669L3.37084 21.3273L7.12336 20.3435ZM18.5424 14.8642C18.4682 14.7398 18.2696 14.6656 17.9708 14.5162C17.6729 14.3668 16.2078 13.6457 15.9341 13.5465C15.6613 13.4472 15.4627 13.397 15.2632 13.6959C15.0646 13.9937 14.493 14.6656 14.3195 14.8642C14.146 15.0627 13.9716 15.0878 13.6737 14.9384C13.3759 14.7889 12.4152 14.4751 11.277 13.4592C10.3915 12.669 9.79284 11.6933 9.61935 11.3944C9.44587 11.0966 9.6013 10.9351 9.74972 10.7867C9.88409 10.6534 10.0476 10.4387 10.197 10.2643C10.3484 10.0918 10.3975 9.96743 10.4978 9.76787C10.5971 9.56931 10.548 9.39482 10.4727 9.2454C10.3975 9.09699 9.80186 7.62988 9.55417 7.0332C9.31149 6.45258 9.0658 6.53079 8.88329 6.52177L8.31169 6.51174C8.11313 6.51174 7.79023 6.58595 7.51746 6.88479C7.2447 7.18362 6.47454 7.90364 6.47454 9.37076C6.47454 10.8379 7.54253 12.2548 7.69095 12.4534C7.84037 12.652 9.79184 15.6624 12.7812 16.953C13.4922 17.2599 14.0478 17.4434 14.48 17.5808C15.194 17.8074 15.8438 17.7753 16.3572 17.6991C16.9298 17.6139 18.1202 16.9781 18.3689 16.2821C18.6176 15.5852 18.6176 14.9885 18.5424 14.8642Z" fill="#28A745" />
                                                    </svg>
                                                    Whatsapp
                                                </button>
                                            </div>
                                        </div>

                                        <div id="History" className="RakebackFAQ ">
                                            <h2>FAQ</h2>
                                            <div className="faqList">
                                                {currentItem && currentItem.faqs && currentItem.faqs.length > 0 && currentItem.faqs.map((faq) => (
                                                    <div
                                                        key={faq._id}
                                                        className={expandedItem === faq._id ? "faqItemActive" : 'faqItem'}
                                                    >
                                                        <div className="faqQuestion" onClick={() => toggleExpanded(faq._id)}>
                                                            <span className="questionText">{faq.question}</span>
                                                            <button className="toggleButton">
                                                                <img
                                                                    src={expandedItem === faq._id ? Minus : Plus}
                                                                    alt=""
                                                                    className="toggleIcon"
                                                                />
                                                            </button>
                                                        </div>


                                                        {expandedItem === faq._id && (
                                                            <div className="faqAnswer">
                                                                <p className="answerText">{faq.answer}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
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
                                                    <img src={TaggingReview} alt="Tagging review" />
                                                </div>
                                            </li>
                                            <li>
                                                <span>3</span>
                                                <div>
                                                    <h5>Submit for tagging</h5>
                                                    <p>Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</p>
                                                    {/* <img src={ Tagging} /> */}
                                                    <div class="card "><div class="card-header ">Tagging</div><div class="sidePost sidePostTAg col-lg-12"><h3>Linking a new account </h3><p>After registration, link your account to aour website to receive bonuses from cashback</p><div class="TagginginputField"><span class="QuestionTag">?</span><input type="text" placeholder="Username" value="" /></div><button class="SidePostTagBtn">Submit</button></div></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="BorderLIne"></div>
                                    <ReviewArticleData article={currentItem?.taggingDetails} />

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
                                                                alt=""
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
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.32787C0 12.3052 2.88867 15.6125 6.66667 16.2832V10.5052H4.66667V8.2832H6.66667V6.5052C6.66667 4.5052 7.95533 3.39454 9.778 3.39454C10.3553 3.39454 10.978 3.4832 11.5553 3.57187V5.61654H10.5333C9.55533 5.61654 9.33333 6.1052 9.33333 6.72787V8.2832H11.4667L11.1113 10.5052H9.33333V16.2832C13.1113 15.6125 16 12.3059 16 8.32787C16 3.9032 12.4 0.283203 8 0.283203C3.6 0.283203 0 3.9032 0 8.32787Z" fill="#FF7A1A" />
                                        </svg></button>
                                        <button className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                            <path d="M7.99915 0.431641C3.60981 0.431641 0.0507812 3.99067 0.0507812 8.38001C0.0507812 12.7694 3.60981 16.3284 7.99915 16.3284C12.3885 16.3284 15.9475 12.7694 15.9475 8.38001C15.9475 3.99067 12.3885 0.431641 7.99915 0.431641ZM11.819 6.42308C11.8243 6.50647 11.8243 6.5934 11.8243 6.67856C11.8243 9.28307 9.84076 12.2832 6.21609 12.2832C5.09835 12.2832 4.06222 11.9586 3.18932 11.3997C3.349 11.4174 3.50158 11.4245 3.66481 11.4245C4.58738 11.4245 5.43545 11.1123 6.11141 10.5836C5.24561 10.5658 4.51819 9.99807 4.2698 9.21743C4.57319 9.26178 4.84642 9.26178 5.15867 9.18194C4.71287 9.09137 4.31216 8.84925 4.02464 8.49672C3.73712 8.14419 3.58051 7.70299 3.58142 7.24808V7.22324C3.84222 7.3705 4.14916 7.46098 4.47029 7.4734C4.20033 7.29349 3.97894 7.04974 3.82574 6.76378C3.67255 6.47781 3.59228 6.15846 3.59206 5.83405C3.59206 5.46679 3.68787 5.13147 3.85997 4.8405C4.35479 5.44965 4.97226 5.94785 5.67224 6.30273C6.37222 6.65761 7.13904 6.86122 7.92286 6.90034C7.64431 5.56082 8.64496 4.47679 9.84786 4.47679C10.4156 4.47679 10.9266 4.71453 11.2867 5.09776C11.732 5.01437 12.1579 4.8476 12.5375 4.62405C12.3903 5.08002 12.0816 5.46502 11.6717 5.70808C12.0691 5.6655 12.4524 5.5555 12.8072 5.40115C12.5393 5.79502 12.204 6.14453 11.819 6.42308Z" fill="#FF7A1A" />
                                        </svg></button>
                                        <button className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.94781 0.776832C5.7371 0.740496 5.98875 0.732422 7.99931 0.732422C10.0099 0.732422 10.2615 0.741169 11.0501 0.776832C11.8388 0.812494 12.3771 0.938322 12.8481 1.12067C13.3413 1.30706 13.7888 1.59842 14.1588 1.97523C14.5356 2.34464 14.8263 2.79143 15.012 3.28532C15.1951 3.75633 15.3202 4.29464 15.3566 5.0819C15.3929 5.87254 15.401 6.12419 15.401 8.13408C15.401 10.1446 15.3922 10.3963 15.3566 11.1856C15.3209 11.9728 15.1951 12.5111 15.012 12.9822C14.8263 13.4761 14.5352 13.9237 14.1588 14.2936C13.7888 14.6704 13.3413 14.9611 12.8481 15.1468C12.3771 15.3298 11.8388 15.455 11.0515 15.4913C10.2615 15.5277 10.0099 15.5357 7.99931 15.5357C5.98875 15.5357 5.7371 15.527 4.94781 15.4913C4.16054 15.4557 3.62224 15.3298 3.15123 15.1468C2.65728 14.9611 2.20975 14.6699 1.83979 14.2936C1.46323 13.924 1.17183 13.4767 0.985907 12.9828C0.803557 12.5118 0.678402 11.9735 0.642066 11.1863C0.605731 10.3956 0.597656 10.144 0.597656 8.13408C0.597656 6.12352 0.606404 5.87186 0.642066 5.08325C0.677729 4.29464 0.803557 3.75633 0.985907 3.28532C1.17211 2.79148 1.46373 2.34417 1.84046 1.97455C2.2099 1.59808 2.65698 1.30668 3.15055 1.12067C3.62157 0.938322 4.15987 0.813167 4.94714 0.776832H4.94781ZM10.9903 2.10913C10.2097 2.07347 9.97555 2.06607 7.99931 2.06607C6.02307 2.06607 5.78891 2.07347 5.00837 2.10913C4.28637 2.1421 3.89476 2.26255 3.63368 2.36415C3.28849 2.49873 3.04155 2.6582 2.78249 2.91726C2.53692 3.15616 2.34793 3.447 2.22938 3.76845C2.12778 4.02952 2.00734 4.42114 1.97436 5.14314C1.9387 5.92367 1.9313 6.15784 1.9313 8.13408C1.9313 10.1103 1.9387 10.3445 1.97436 11.125C2.00734 11.847 2.12778 12.2386 2.22938 12.4997C2.34781 12.8207 2.53689 13.112 2.78249 13.3509C3.02136 13.5965 3.31272 13.7856 3.63368 13.904C3.89476 14.0056 4.28637 14.1261 5.00837 14.159C5.78891 14.1947 6.0224 14.2021 7.99931 14.2021C9.97623 14.2021 10.2097 14.1947 10.9903 14.159C11.7123 14.1261 12.1039 14.0056 12.3649 13.904C12.7101 13.7694 12.9571 13.61 13.2161 13.3509C13.4617 13.112 13.6508 12.8207 13.7692 12.4997C13.8708 12.2386 13.9913 11.847 14.0243 11.125C14.0599 10.3445 14.0673 10.1103 14.0673 8.13408C14.0673 6.15784 14.0599 5.92367 14.0243 5.14314C13.9913 4.42114 13.8708 4.02952 13.7692 3.76845C13.6347 3.42326 13.4752 3.17631 13.2161 2.91726C12.9772 2.6717 12.6864 2.48272 12.3649 2.36415C12.1039 2.26255 11.7123 2.1421 10.9903 2.10913ZM7.05392 10.4158C7.5819 10.6356 8.1698 10.6653 8.71723 10.4997C9.26464 10.3342 9.73762 9.98376 10.0554 9.50826C10.3731 9.03275 10.5159 8.46168 10.4594 7.89258C10.4029 7.32349 10.1505 6.79167 9.74543 6.38796C9.4872 6.1299 9.17497 5.93229 8.83121 5.80938C8.48745 5.68647 8.12072 5.64131 7.75741 5.67714C7.3941 5.71298 7.04326 5.82892 6.73013 6.01662C6.41701 6.20432 6.1494 6.45911 5.94657 6.76265C5.74373 7.06619 5.61072 7.41093 5.55711 7.77204C5.5035 8.13316 5.53063 8.50167 5.63653 8.85104C5.74243 9.20041 5.92448 9.52196 6.16957 9.79253C6.41466 10.0631 6.71669 10.276 7.05392 10.4158ZM5.30915 5.44391C5.66242 5.09063 6.08183 4.8104 6.54341 4.61921C7.00498 4.42801 7.4997 4.32961 7.99931 4.32961C8.49892 4.32961 8.99364 4.42801 9.45522 4.61921C9.9168 4.8104 10.3362 5.09063 10.6895 5.44391C11.0428 5.79719 11.323 6.21659 11.5142 6.67817C11.7054 7.13975 11.8038 7.63447 11.8038 8.13408C11.8038 8.63369 11.7054 9.12841 11.5142 9.58998C11.323 10.0516 11.0428 10.471 10.6895 10.8242C9.976 11.5377 9.00832 11.9385 7.99931 11.9385C6.9903 11.9385 6.02262 11.5377 5.30915 10.8242C4.59567 10.1108 4.19484 9.14309 4.19484 8.13408C4.19484 7.12507 4.59567 6.15739 5.30915 5.44391ZM12.6476 4.89619C12.7351 4.81361 12.8052 4.7143 12.8537 4.60414C12.9021 4.49399 12.928 4.37523 12.9298 4.25489C12.9315 4.13455 12.9091 4.01509 12.8639 3.90357C12.8186 3.79205 12.7515 3.69074 12.6664 3.60564C12.5813 3.52054 12.48 3.45338 12.3684 3.40813C12.2569 3.36289 12.1374 3.34048 12.0171 3.34223C11.8968 3.34399 11.778 3.36987 11.6679 3.41835C11.5577 3.46682 11.4584 3.53691 11.3758 3.62445C11.2152 3.79471 11.1273 4.02086 11.1307 4.25489C11.1341 4.48892 11.2286 4.71241 11.3941 4.87792C11.5596 5.04342 11.7831 5.13791 12.0171 5.14132C12.2511 5.14473 12.4773 5.0568 12.6476 4.89619Z" fill="#FF7A1A" />
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


                        </div>
                    )}
                </div>

                <div className="row BlogBottomNewSectionRow MobileHide" >
                    <div className="col-lg-12 BlogBottomNewSection">
                        <h3>Big Cash Recent</h3>
                    </div>
                    <div class="sidePost col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="sideImageContainer">
                            <img src={FeaturedCardImage} alt="Shopping hands" class="sideImage" />
                        </div>
                        <div class="sideContent">
                            <p class="sideDescription">SHOPPING HANDS </p>
                            <div class="AutherINfo">
                                <h3>NEWS</h3>
                                <span>.</span>
                                <p>Mar. 28, 2020</p>
                            </div>
                        </div>
                    </div>
                    <div class="sidePost col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="sideImageContainer">
                            <img src={FeaturedCardImage} alt="Shopping hands" class="sideImage" />
                        </div>
                        <div class="sideContent">
                            <p class="sideDescription">SHOPPING HANDS </p>
                            <div class="AutherINfo">
                                <h3>NEWS</h3>
                                <span>.</span>
                                <p>Mar. 28, 2020</p>
                            </div>
                        </div>
                    </div>
                    <div class="sidePost col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="sideImageContainer">
                            <img src={FeaturedCardImage} alt="Shopping hands" class="sideImage" />
                        </div>
                        <div class="sideContent">
                            <p class="sideDescription">SHOPPING HANDS </p>
                            <div class="AutherINfo">
                                <h3>NEWS</h3>
                                <span>.</span>
                                <p>Mar. 28, 2020</p>
                            </div>
                        </div>
                    </div>
                    <div class="sidePost col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="sideImageContainer">
                            <img src={FeaturedCardImage} alt="Shopping hands" class="sideImage" />
                        </div>
                        <div class="sideContent">
                            <p class="sideDescription">SHOPPING HANDS </p>
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
                                <img src={Promotion} alt="Promotion" className="" />
                            </div>
                            <div className="cardOfferSecond">
                                <p className="small">The Pros and Cons of Remote Work</p>
                                <span className="">BLOG</span>
                            </div>
                        </div>
                        <div className=" OffersForUsecnddivCard">
                            <div className="LatestNewsDsgIMg">
                                <img src={Promotion} alt="Promotion" className="" />
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

export default ReviewMobile;
