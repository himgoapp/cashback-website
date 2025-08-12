import { useState, useEffect } from "react";
import Navbar from "../common/navbar/navbar";
import NewFooter from "../common/footer/newFooter";
import FeaturedCardImage from "../../assets/Logos_and_illustration/FeaturedCardImage.svg"
import Promotion from "../../assets/Promotion.jpg"
import BigCashLogo from "../../assets/Review/BigCashWhite.png"



const Review = () => {
    
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
                                <path d="M9.32579 11.9453C7.59625 11.9453 2.50596 11.9453 2.50596 11.9453C1.96559 11.9453 1.52344 12.3874 1.52344 12.9278V20.3021C1.52344 20.8424 1.96559 21.2845 2.50596 21.2845C2.50596 21.2845 7.70276 21.2845 9.44046 21.2845C9.6716 21.2845 9.6716 21.0362 9.6716 21.0362V12.2792C9.6716 12.2792 9.67153 11.9453 9.32579 11.9453Z" fill="white"/>
                                <path d="M18.4932 11.9453C18.4932 11.9453 13.3835 11.9453 11.6803 11.9453C11.2654 11.9453 11.3275 12.3774 11.3275 12.3774V21.0442C11.3275 21.0442 11.3242 21.2843 11.5738 21.2843C13.3036 21.2843 18.4931 21.2843 18.4931 21.2843C19.0335 21.2843 19.4756 20.8422 19.4756 20.3018V12.9278C19.4758 12.3874 19.0336 11.9453 18.4932 11.9453Z" fill="white"/>
                                <path d="M9.67166 6.14347C9.67166 6.14347 9.67166 5.81055 9.34268 5.81055C7.37269 5.81055 1.39659 5.81055 1.39659 5.81055C0.85622 5.81055 0.414062 6.2527 0.414062 6.793V9.8599C0.414062 10.4003 0.85622 10.8424 1.39659 10.8424C1.39659 10.8424 7.39946 10.8424 9.36959 10.8424C9.67166 10.8424 9.67166 10.5804 9.67166 10.5804V6.14347Z" fill="white"/>
                                <path d="M19.607 5.81055C19.607 5.81055 13.6285 5.81055 11.6356 5.81055C11.332 5.81055 11.332 6.09981 11.332 6.09981V10.5864C11.332 10.5864 11.332 10.8424 11.7011 10.8424C13.6775 10.8424 19.607 10.8424 19.607 10.8424C20.1474 10.8424 20.5896 10.4003 20.5896 9.8599V6.793C20.5896 6.2527 20.1474 5.81055 19.607 5.81055Z" fill="white"/>
                                <path d="M6.32758 5.08396C5.87805 5.08396 5.46746 5.04831 5.10741 4.97795C4.19289 4.79928 3.56433 4.45154 3.18581 3.91497C2.84666 3.43409 2.74287 2.84125 2.87723 2.15285C3.11259 0.948428 3.92145 0.285156 5.15465 0.285156C5.41564 0.285156 5.70225 0.315292 6.00661 0.374776C6.78084 0.526027 7.77109 0.969974 8.65562 1.56231C10.1563 2.56738 10.2306 3.19221 10.1558 3.57481C10.0459 4.13701 9.52046 4.53873 8.54932 4.80301C7.89321 4.98153 7.08341 5.08396 6.32758 5.08396ZM5.15473 1.85987C4.67714 1.85987 4.513 1.9933 4.42288 2.45478C4.34915 2.83209 4.44213 2.96387 4.47263 3.00718C4.60033 3.18828 4.93297 3.33931 5.40934 3.4323C5.66639 3.48255 5.98399 3.5091 6.32751 3.5091C7.08291 3.5091 7.7484 3.39464 8.18998 3.26945C8.22213 3.26036 8.27202 3.22235 8.21855 3.1905C7.64124 2.72021 6.58506 2.09222 5.70468 1.92021C5.4996 1.88027 5.3145 1.85987 5.15473 1.85987Z" fill="white"/>
                                <path d="M14.6952 5.08389C14.6952 5.08389 14.6952 5.08389 14.6951 5.08389C13.9392 5.08389 13.1295 4.98146 12.4734 4.80293C11.5022 4.53873 10.9768 4.13694 10.8669 3.57481C10.7922 3.19221 10.8663 2.56738 12.3672 1.56231C13.2516 0.969974 14.2418 0.526027 15.0162 0.374776C15.3205 0.315292 15.6072 0.285156 15.8679 0.285156C17.1014 0.285156 17.9102 0.9485 18.1454 2.15293C18.2799 2.84125 18.1761 3.43409 17.8369 3.91497C17.4584 4.45161 16.8299 4.79928 15.9152 4.97795C15.5553 5.04817 15.1447 5.08389 14.6952 5.08389ZM12.8168 3.18069C12.7656 3.21039 12.7904 3.25728 12.8169 3.26494C13.2583 3.39185 13.9308 3.5091 14.6951 3.5091C15.0387 3.5091 15.3562 3.48255 15.6133 3.4323C16.0896 3.33924 16.4224 3.18828 16.55 3.00718C16.5807 2.96387 16.6737 2.83209 16.5998 2.45478C16.5097 1.9933 16.3455 1.85987 15.8679 1.85987C15.7082 1.85987 15.5232 1.8802 15.318 1.92029C14.4375 2.09222 13.3941 2.71033 12.8168 3.18069Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_6480_32270">
                                <rect width="21" height="21" fill="white" transform="translate(0 0.283203)"/>
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
                                <rect y="0.783203" width="16" height="16" rx="8" fill="#28A745"/>
                                <path d="M12 5.7832L6.5 11.2832L4 8.7832" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg> 
                            Admission is free. No deposit is
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <rect y="0.783203" width="16" height="16" rx="8" fill="#28A745"/>
                                <path d="M12 5.7832L6.5 11.2832L4 8.7832" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg> 
                            Admission is free. No deposit is
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <rect y="0.783203" width="16" height="16" rx="8" fill="#28A745"/>
                                <path d="M12 5.7832L6.5 11.2832L4 8.7832" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
                            <input type="range" min="0" max="5" value="4.5" step="0.1"/>
                        </div>
                        <div class="rating-item">
                            <div className="RatingLabel">Bonus and promotions <span>4.5/5</span></div> 
                            <input type="range" min="0" max="5" value="4.5" step="0.1" />
                        </div>
                        <div class="rating-item">
                            <div className="RatingLabel">Bonus and promotions <span>4.5/5</span></div> 
                            <input type="range" min="0" max="5" value="4.5" step="0.1"  />
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
                    {activeTab === "review" && (
        <div className="mt-3">
          {/* Sub Navigation */}
          <ul className="nav nav-pills  sticky-top bg-white pt-2 pb-2 ReviewUITab">
            <li className="nav-item">
              <button
                className={`nav-link ${activeSection === "Inthisoffer" ? "active" : ""}`}
                onClick={() => handleScrollTo("Inthisoffer")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                <path d="M12.5186 8.3457L12.7432 9.03613H18.3848L14.4082 11.9248L13.8203 12.3516L14.0449 13.043L15.5625 17.7158L11.5879 14.8281L11 14.4014L10.4121 14.8281L6.43652 17.7158L7.95508 13.043L8.17969 12.3516L7.5918 11.9248L3.61523 9.03613H9.25684L9.48145 8.3457L11 3.6709L12.5186 8.3457Z" stroke="#848484" stroke-width="2"/>
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
          </ul>

          {/* Sections */}

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
                                                    <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"/>
                                                    <path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <span>Admission is free. No deposit is required. Admission is free. No deposit is required.</span>
                                            </div>
                                            <div class="list-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                    <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"/>
                                                    <path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <span>Admission is free. No deposit is</span>
                                            </div>
                                            <div class="list-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                    <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"/>
                                                    <path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                        <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#DC3545"/>
                                                        <path d="M12.75 4.93555L4.75 12.9355M4.75 4.93555L12.75 12.9355" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                    <span>Prize: $50</span>
                                                </div>
                                                <div class="list-item">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#DC3545"/>
                                                        <path d="M12.75 4.93555L4.75 12.9355M4.75 4.93555L12.75 12.9355" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>   
                                                    <span>Admission is free. No deposit is required.</span>
                                                </div>
                                                <div class="list-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#DC3545"/>
                                                        <path d="M12.75 4.93555L4.75 12.9355M4.75 4.93555L12.75 12.9355" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>   
                                                    <span>Prize: $50</span>
                                                </div>
                                                <div class="list-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#DC3545"/>
                                                        <path d="M12.75 4.93555L4.75 12.9355M4.75 4.93555L12.75 12.9355" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
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
                        <div id="History" className="">
                            <h4>History</h4>
                            <div><ul><li><strong>Columns</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li><li><strong>Columns</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li><li><strong>Alley-oop</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li></ul></div>
                        
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

                <div class="single-post-right sidebar RightsidebarBlog">
                    {/* <div className="SpacedicAdd"></div> */}
                    <div class="card mb-3 ">
                        <div class="card-header ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="23" viewBox="0 0 17 23" fill="none">
                                <path d="M16.3611 12.3306C14.6175 7.81725 8.13687 7.76501 10.5946 0.441406C5.89954 2.54133 2.18127 7.94262 5.85754 15.0782C0.658248 12.9052 2.93754 7.46205 2.93754 7.46205C2.93754 7.46205 0.101562 9.19631 0.101562 14.4409C0.500698 20.2914 5.4689 22.0883 7.25451 22.3182C9.80685 22.6421 12.5693 22.1719 14.5545 20.3646C16.7393 18.3482 17.5375 15.1304 16.3611 12.3306ZM6.61384 17.5855C8.12627 17.2199 8.90355 16.1333 9.11371 15.1723C9.46021 13.6782 8.10534 12.2157 9.0191 9.85447C9.36574 11.8081 12.4538 13.0305 12.4538 15.1618C12.5378 17.805 9.6599 20.0721 6.61384 17.5855Z" fill="#000" />
                            </svg>
                            Trending
                        </div>

                        <div class="sidePost col-lg-12">
                            <ul className="SidepostUL">
                                <li>
                                    <a href="#">Experience the Serenity of Japan's Traditional Countryside Traditional CountrysideTraditional Countryside</a>
                                </li>
                                <li>
                                    <a href="#">Experience the Serenity of Japan's Traditional Countryside Traditional </a>
                                </li>
                                <li>
                                    <a href="#">Experience the Serenity of Japan's Traditional</a>
                                </li>
                                <li>
                                    <a href="#">Experience the Serenity of Japan's Traditional Countryside Traditional CountrysideTraditional Countryside</a>
                                </li>
                            </ul>
                        </div>

                        {/* <div class="sidePost col-lg-12">
                                    <div class="sideImageContainer">
                                        <img  src={FeaturedCardImage}  alt="POKER HANDS " class="sideImage" />
                                    </div>
                                    <div class="sideContent">
                                        <p class="sideDescription">POKER HANDS </p>
                                        <div class="AutherINfo">
                                            <h3>NEWS</h3>
                                            <span>.</span>
                                            <p>Mar. 28, 2020</p>
                                        </div>
                                    </div>
                                </div> */}
                    </div>


                    <div class="card Offerscard mb-3 ">
                        <div class="card-header ">
                            Offer for you
                        </div>

                        <div class="sidePost col-lg-12">
                            <div class=" OffersForUchd LatestNewsDsg">
                                <div class="LatestNewsDsgIMg">
                                    <img src={FeaturedCardImage} class="" />
                                </div>
                                <div class="LatestNewsDsgTxt">
                                    <p class="small">Experience the Serenity of Japan's Traditional</p>
                                    <div class="SliderFooter">
                                        <button class="ClaimNow">Claim Now</button>
                                        <button class="Pokerbazzi25">Pokerbazzi25
                                            <span>Promo Code <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4018_17694)"><path d="M2.45841 1.00293H6.11683C6.45371 1.00293 6.72656 1.27579 6.72656 1.61267V5.88081H6.11683V1.61267H2.45841V1.00293ZM1.54381 2.2224H4.89736C5.23423 2.2224 5.50709 2.49526 5.50709 2.83214V7.10029C5.50709 7.43716 5.23423 7.71002 4.89736 7.71002H1.54381C1.20693 7.71002 0.934073 7.43716 0.934073 7.10029V2.83214C0.934073 2.49526 1.20693 2.2224 1.54381 2.2224ZM1.54381 7.10029H4.89736V2.83214H1.54381V7.10029Z" fill="#606060"></path></g><defs><clipPath id="clip0_4018_17694"><rect width="7.31683" height="7.31683" fill="white" transform="matrix(-1 0 0 1 7.33594 0.698242)"></rect></clipPath></defs></svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sidePost col-lg-12">
                            <div class=" OffersForUchd LatestNewsDsg">
                                <div class="LatestNewsDsgIMg">
                                    <img src={FeaturedCardImage} class="" />
                                </div>
                                <div class="LatestNewsDsgTxt">
                                    <p class="small">Experience the Serenity of Japan's Traditional</p>
                                    <div class="SliderFooter">
                                        <button class="ClaimNow">Claim Now</button>
                                        <button class="Pokerbazzi25">Pokerbazzi25
                                            <span>Promo Code <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4018_17694)"><path d="M2.45841 1.00293H6.11683C6.45371 1.00293 6.72656 1.27579 6.72656 1.61267V5.88081H6.11683V1.61267H2.45841V1.00293ZM1.54381 2.2224H4.89736C5.23423 2.2224 5.50709 2.49526 5.50709 2.83214V7.10029C5.50709 7.43716 5.23423 7.71002 4.89736 7.71002H1.54381C1.20693 7.71002 0.934073 7.43716 0.934073 7.10029V2.83214C0.934073 2.49526 1.20693 2.2224 1.54381 2.2224ZM1.54381 7.10029H4.89736V2.83214H1.54381V7.10029Z" fill="#606060"></path></g><defs><clipPath id="clip0_4018_17694"><rect width="7.31683" height="7.31683" fill="white" transform="matrix(-1 0 0 1 7.33594 0.698242)"></rect></clipPath></defs></svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sidePost col-lg-12">
                            <div class=" OffersForUchd LatestNewsDsg">
                                <div class="LatestNewsDsgIMg">
                                    <img src={FeaturedCardImage} class="" />
                                </div>
                                <div class="LatestNewsDsgTxt">
                                    <p class="small">Experience the Serenity of Japan's Traditional</p>
                                    <div class="SliderFooter">
                                        <button class="ClaimNow">Claim Now</button>
                                        <button class="Pokerbazzi25">Pokerbazzi25
                                            <span>Promo Code <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4018_17694)"><path d="M2.45841 1.00293H6.11683C6.45371 1.00293 6.72656 1.27579 6.72656 1.61267V5.88081H6.11683V1.61267H2.45841V1.00293ZM1.54381 2.2224H4.89736C5.23423 2.2224 5.50709 2.49526 5.50709 2.83214V7.10029C5.50709 7.43716 5.23423 7.71002 4.89736 7.71002H1.54381C1.20693 7.71002 0.934073 7.43716 0.934073 7.10029V2.83214C0.934073 2.49526 1.20693 2.2224 1.54381 2.2224ZM1.54381 7.10029H4.89736V2.83214H1.54381V7.10029Z" fill="#606060"></path></g><defs><clipPath id="clip0_4018_17694"><rect width="7.31683" height="7.31683" fill="white" transform="matrix(-1 0 0 1 7.33594 0.698242)"></rect></clipPath></defs></svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sidePost col-lg-12">
                            <div class=" OffersForUchd LatestNewsDsg">
                                <div class="LatestNewsDsgIMg">
                                    <img src={FeaturedCardImage} class="" />
                                </div>
                                <div class="LatestNewsDsgTxt">
                                    <p class="small">Experience the Serenity of Japan's Traditional</p>
                                    <div class="SliderFooter">
                                        <button class="ClaimNow">Claim Now</button>
                                        <button class="Pokerbazzi25">Pokerbazzi25
                                            <span>Promo Code <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4018_17694)"><path d="M2.45841 1.00293H6.11683C6.45371 1.00293 6.72656 1.27579 6.72656 1.61267V5.88081H6.11683V1.61267H2.45841V1.00293ZM1.54381 2.2224H4.89736C5.23423 2.2224 5.50709 2.49526 5.50709 2.83214V7.10029C5.50709 7.43716 5.23423 7.71002 4.89736 7.71002H1.54381C1.20693 7.71002 0.934073 7.43716 0.934073 7.10029V2.83214C0.934073 2.49526 1.20693 2.2224 1.54381 2.2224ZM1.54381 7.10029H4.89736V2.83214H1.54381V7.10029Z" fill="#606060"></path></g><defs><clipPath id="clip0_4018_17694"><rect width="7.31683" height="7.31683" fill="white" transform="matrix(-1 0 0 1 7.33594 0.698242)"></rect></clipPath></defs></svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="SpacedicAdd SpacedicAddsBAckground"></div>

                    <div class="card  mb-3 ">
                        <div class="card-header ">
                            Guides
                        </div>

                        <div class="sidePost col-lg-12">
                            <div class="sideImageContainer">
                                <img src={FeaturedCardImage} alt="POKER HANDS " class="sideImage" />
                            </div>
                            <div class="sideContent">
                                <p class="sideDescription">Experience the Serenity of Japan's Traditional</p>
                            </div>
                        </div>
                        <div class="sidePost col-lg-12">
                            <div class="sideImageContainer">
                                <img src={FeaturedCardImage} alt="POKER HANDS " class="sideImage" />
                            </div>
                            <div class="sideContent">
                                <p class="sideDescription">Experience the Serenity of Japan's Traditional</p>
                            </div>
                        </div>
                        <div class="sidePost col-lg-12">
                            <div class="sideImageContainer">
                                <img src={FeaturedCardImage} alt="POKER HANDS " class="sideImage" />
                            </div>
                            <div class="sideContent">
                                <p class="sideDescription">Experience the Serenity of Japan's Traditional</p>
                            </div>
                        </div>
                        <div class="sidePost col-lg-12">
                            <div class="sideImageContainer">
                                <img src={FeaturedCardImage} alt="POKER HANDS " class="sideImage" />
                            </div>
                            <div class="sideContent">
                                <p class="sideDescription">Experience the Serenity of Japan's Traditional</p>
                            </div>
                        </div>
                    </div>


                    <div class="newsletter text-center mb-3">
                        <h5>Join our Newsletter</h5>
                        <p>Join thousands of poker players staying ahead with tips, offers and updates.</p>
                        <form>
                            <input type="email" class="form-control" placeholder="Enter your email" />
                            <button class="btn subcrb w-100 mt-2">Subscribe</button>
                            <div class="form-check CheckboxFormCheck">
                                <input class="form-check-input" type="checkbox" id="consentCheckbox" />
                                <label class="form-check-label" for="consentCheckbox">
                                    I'm hereby consent. Join thousands of poker players staying ahead with tips, offers,
                                    and platform updates. No spam, just pure value.
                                </label>
                            </div>
                        </form>
                    </div>

                    <div class="text-center mt-5">
                        <div class=" SocialIconBlog BlogSocialIcon">
                            <small class="">Follow Us On</small>
                            <div class=""><a href="#">
                                <svg width="37" height="34" viewBox="0 0 37 34" fill="#ff4053" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.218 0.17334H34.8404L22.557 14.2125L37.0075 33.3166H25.6929L16.8309 21.7301L6.69073 33.3166H1.06487L14.2032 18.3002L0.34082 0.17334H11.9427L19.9531 10.7639L29.218 0.17334ZM27.2447 29.9513H30.3601L10.2498 3.36189H6.90659L27.2447 29.9513Z" fill="#ff4053"></path>
                                </svg>
                            </a>
                                <a href="#">
                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="#ff4053" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4666_9160)"><path d="M40.6738 20C40.6738 8.9544 31.7194 0 20.6738 0C9.62823 0 0.673828 8.9544 0.673828 20C0.673828 29.3792 7.13143 37.2496 15.8426 39.4112V26.112H11.7186V20H15.8426V17.3664C15.8426 10.5592 18.9234 7.404 25.6066 7.404C26.8738 7.404 29.0602 7.6528 29.9546 7.9008V13.4408C29.4826 13.3912 28.6626 13.3664 27.6442 13.3664C24.365 13.3664 23.0978 14.6088 23.0978 17.8384V20H29.6306L28.5082 26.112H23.0978V39.8536C33.001 38.6576 40.6746 30.2256 40.6746 20H40.6738Z" fill="#ff4053"></path><path d="M28.5074 26.1121L29.6298 20.0001H23.097V17.8385C23.097 14.6089 24.3642 13.3665 27.6434 13.3665C28.6618 13.3665 29.4818 13.3913 29.9538 13.4409V7.90085C29.0594 7.65205 26.873 7.40405 25.6058 7.40405C18.9226 7.40405 15.8418 10.5593 15.8418 17.3665V20.0001H11.7178V26.1121H15.8418V39.4113C17.389 39.7953 19.0074 40.0001 20.673 40.0001C21.493 40.0001 22.3018 39.9496 23.0962 39.8537V26.1121H28.5066H28.5074Z" fill="white"></path></g><defs><clipPath id="clip0_4666_9160"><rect width="40" height="40" fill="white" transform="translate(0.673828)"></rect></clipPath></defs>
                                    </svg>
                                </a>
                                <a href="#"><svg width="42" height="41" viewBox="0 0 42 41" fill="#ff4053" xmlns="http://www.w3.org/2000/svg"><path d="M34.0045 9.50594C34.0045 8.15072 32.9062 7.05645 31.556 7.05645C30.2058 7.05645 29.1064 8.15072 29.1064 9.50594C29.1064 10.8562 30.2058 11.9504 31.556 11.9504C32.9062 11.9504 34.0045 10.8562 34.0045 9.50594Z" fill="#ff4053"></path><path d="M37.2676 28.6262C37.1769 30.6143 36.8444 31.6944 36.5684 32.4118C36.1975 33.363 35.7552 34.0432 35.0378 34.7566C34.3284 35.47 33.6483 35.9113 32.6971 36.278C31.9797 36.5582 30.8955 36.8917 28.9075 36.9865C26.7583 37.0811 26.1214 37.1013 20.6712 37.1013C15.2261 37.1013 14.5842 37.0811 12.435 36.9865C10.447 36.8917 9.36782 36.5582 8.65035 36.278C7.69415 35.9113 7.01907 35.47 6.30568 34.7566C5.58723 34.0432 5.14491 33.363 4.77914 32.4118C4.50301 31.6944 4.16551 30.6143 4.07981 28.6262C3.97507 26.477 3.95587 25.8301 3.95587 20.391C3.95587 14.9408 3.97507 14.2989 4.07981 12.1497C4.16551 10.1617 4.50301 9.08256 4.77914 8.35904C5.14491 7.40888 5.58723 6.73275 6.30568 6.01936C7.01907 5.30702 7.69415 4.86463 8.65035 4.49388C9.36782 4.21275 10.447 3.88425 12.435 3.78955C14.5842 3.69479 15.2261 3.6706 20.6712 3.6706C26.1214 3.6706 26.7583 3.69479 28.9075 3.78955C30.8955 3.88425 31.9797 4.21275 32.6971 4.49388C33.6483 4.86463 34.3284 5.30702 35.0378 6.01936C35.7552 6.73275 36.1975 7.40888 36.5684 8.35904C36.8444 9.08256 37.1769 10.1617 37.2676 12.1497C37.3674 14.2989 37.3916 14.9408 37.3916 20.391C37.3916 25.8301 37.3674 26.477 37.2676 28.6262ZM40.9384 11.9825C40.8387 9.81001 40.496 8.32579 39.9872 7.03307C39.4693 5.69191 38.775 4.55532 37.6385 3.41873C36.5069 2.2872 35.3703 1.59293 34.0292 1.069C32.7314 0.565163 31.2522 0.218517 29.0787 0.123825C26.9053 0.0190086 26.2111 -0.000114441 20.6712 -0.000114441C15.1364 -0.000114441 14.4371 0.0190086 12.2637 0.123825C10.0953 0.218517 8.6171 0.565163 7.31327 1.069C5.97717 1.59293 4.84058 2.2872 3.70906 3.41873C2.57247 4.55532 1.8782 5.69191 1.35524 7.03307C0.851411 8.32579 0.508847 9.81001 0.40403 11.9825C0.309339 14.1559 0.285156 14.8511 0.285156 20.391C0.285156 25.9259 0.309339 26.6201 0.40403 28.7935C0.508847 30.9619 0.851411 32.4451 1.35524 33.7439C1.8782 35.08 2.57247 36.2217 3.70906 37.3532C4.84058 38.4847 5.97717 39.1841 7.31327 39.707C8.6171 40.2108 10.0953 40.5534 12.2637 40.6532C14.4371 40.7529 15.1364 40.7771 20.6712 40.7771C26.2111 40.7771 26.9053 40.7529 29.0787 40.6532C31.2522 40.5534 32.7314 40.2108 34.0292 39.707C35.3703 39.1841 36.5069 38.4847 37.6385 37.3532C38.775 36.2217 39.4693 35.08 39.9872 33.7439C40.496 32.4451 40.8387 30.9619 40.9384 28.7935C41.0382 26.6201 41.0624 25.9259 41.0624 20.391C41.0624 14.8511 41.0382 14.1559 40.9384 11.9825Z" fill="#ff4053"></path><path d="M20.6712 27.1814C16.9198 27.1814 13.8758 24.1424 13.8758 20.391C13.8758 16.6336 16.9198 13.5907 20.6712 13.5907C24.4236 13.5907 27.4716 16.6336 27.4716 20.391C27.4716 24.1424 24.4236 27.1814 20.6712 27.1814ZM20.6712 9.9149C14.8884 9.9149 10.2051 14.6083 10.2051 20.391C10.2051 26.1687 14.8884 30.8572 20.6712 30.8572C26.4539 30.8572 31.1423 26.1687 31.1423 20.391C31.1423 14.6083 26.4539 9.9149 20.6712 9.9149Z" fill="#ff4053"></path>
                                </svg>
                                </a>
                                <a href="#"><svg width="41" height="40" viewBox="0 0 41 40" fill="#ff4053" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4666_9168)"><path d="M37.1097 0H3.01528C2.23215 0 1.4811 0.311096 0.927349 0.864849C0.373596 1.4186 0.0625 2.16965 0.0625 2.95278V37.0472C0.0625 37.8303 0.373596 38.5814 0.927349 39.1352C1.4811 39.6889 2.23215 40 3.01528 40H37.1097C37.8928 40 38.6439 39.6889 39.1977 39.1352C39.7514 38.5814 40.0625 37.8303 40.0625 37.0472V2.95278C40.0625 2.16965 39.7514 1.4186 39.1977 0.864849C38.6439 0.311096 37.8928 0 37.1097 0ZM11.9847 34.075H5.97083V14.9722H11.9847V34.075ZM8.97361 12.325C8.29144 12.3212 7.62569 12.1153 7.06039 11.7335C6.49509 11.3516 6.05557 10.8109 5.7973 10.1795C5.53902 9.54808 5.47358 8.85432 5.60922 8.18576C5.74486 7.5172 6.0755 6.90379 6.55943 6.42297C7.04335 5.94214 7.65886 5.61544 8.32828 5.4841C8.9977 5.35276 9.69102 5.42266 10.3208 5.68498C10.9505 5.9473 11.4884 6.39028 11.8666 6.95802C12.2448 7.52576 12.4464 8.19282 12.4458 8.875C12.4523 9.33172 12.3667 9.78506 12.1942 10.208C12.0217 10.6309 11.7658 11.0148 11.4418 11.3368C11.1178 11.6587 10.7322 11.9121 10.3082 12.0819C9.88417 12.2517 9.43028 12.3344 8.97361 12.325ZM34.1514 34.0917H28.1403V23.6556C28.1403 20.5778 26.8319 19.6278 25.1431 19.6278C23.3597 19.6278 21.6097 20.9722 21.6097 23.7333V34.0917H15.5958V14.9861H21.3792V17.6333H21.4569C22.0375 16.4583 24.0708 14.45 27.1736 14.45C30.5292 14.45 34.1542 16.4417 34.1542 22.275L34.1514 34.0917Z" fill="#ff4053"></path></g><defs><clipPath id="clip0_4666_9168"><rect width="40" height="40" fill="white" transform="translate(0.0625)"></rect></clipPath></defs>
                                </svg>
                                </a>
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
                        <div className=" " >
                            <h2>About Big Cash</h2>
                            <p>A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.</p>
                            <p>Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.</p>
                        </div>
                        <div className="">
                            <h2>About Big Cash</h2>
                            <p>A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.</p>
                            <p>Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.</p>
                        </div>
                        <div className="">
                            <h4>Benefits of the Grid</h4>
                            <div className="row ProsCons">
                                <div class="col-md-6">
                                    <div class="card border">
                                        <div class="pros-title ">Pros</div>
                                        <div className="ProConData">
                                            <div class="list-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                    <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"/>
                                                    <path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <span>Admission is free. No deposit is required. Admission is free. No deposit is required.</span>
                                            </div>
                                            <div class="list-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                    <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"/>
                                                    <path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <span>Admission is free. No deposit is</span>
                                            </div>
                                            <div class="list-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                    <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#28A745"/>
                                                    <path d="M12.75 5.93555L7.25 11.4355L4.75 8.93555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                        <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#DC3545"/>
                                                        <path d="M12.75 4.93555L4.75 12.9355M4.75 4.93555L12.75 12.9355" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                    <span>Prize: $50</span>
                                                </div>
                                                <div class="list-item">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#DC3545"/>
                                                        <path d="M12.75 4.93555L4.75 12.9355M4.75 4.93555L12.75 12.9355" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>   
                                                    <span>Admission is free. No deposit is required.</span>
                                                </div>
                                                <div class="list-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#DC3545"/>
                                                        <path d="M12.75 4.93555L4.75 12.9355M4.75 4.93555L12.75 12.9355" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>   
                                                    <span>Prize: $50</span>
                                                </div>
                                                <div class="list-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <rect x="0.75" y="0.935547" width="16" height="16" rx="8" fill="#DC3545"/>
                                                        <path d="M12.75 4.93555L4.75 12.9355M4.75 4.93555L12.75 12.9355" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                    <span>Admission is free. No deposit is required.</span>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div  className="">
                            <h2>The Best WPT Global Bonuses, Promo Codes, and Rewards</h2>
                            <div><ul><li><strong>Columns</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li><li><strong>Columns</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li><li><strong>Alley-oop</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li></ul></div>
                        </div>
                        <div  className="">
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
                        <div  className="">
                            <h4>More Promos</h4>
                             <div><ul><li><strong>Columns</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li><li><strong>Columns</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li><li><strong>Alley-oop</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li></ul></div>
                        
                        </div>
                        <div  className="">
                            <h4>Registration</h4>
                            <div><ul><li><strong>Columns</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li><li><strong>Columns</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li><li><strong>Alley-oop</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li></ul></div>
                        
                        </div>
                        <div className="">
                            <h4>History</h4>
                            <div><ul><li><strong>Columns</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li><li><strong>Columns</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li><li><strong>Alley-oop</strong> – Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</li></ul></div>
                        
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

                <div class="single-post-right sidebar RightsidebarBlog">
                    {/* <div className="SpacedicAdd"></div> */}
                    <div class="card mb-3 ">
                        <div class="card-header ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="23" viewBox="0 0 17 23" fill="none">
                                <path d="M16.3611 12.3306C14.6175 7.81725 8.13687 7.76501 10.5946 0.441406C5.89954 2.54133 2.18127 7.94262 5.85754 15.0782C0.658248 12.9052 2.93754 7.46205 2.93754 7.46205C2.93754 7.46205 0.101562 9.19631 0.101562 14.4409C0.500698 20.2914 5.4689 22.0883 7.25451 22.3182C9.80685 22.6421 12.5693 22.1719 14.5545 20.3646C16.7393 18.3482 17.5375 15.1304 16.3611 12.3306ZM6.61384 17.5855C8.12627 17.2199 8.90355 16.1333 9.11371 15.1723C9.46021 13.6782 8.10534 12.2157 9.0191 9.85447C9.36574 11.8081 12.4538 13.0305 12.4538 15.1618C12.5378 17.805 9.6599 20.0721 6.61384 17.5855Z" fill="#000" />
                            </svg>
                            Trending
                        </div>

                        <div class="sidePost col-lg-12">
                            <ul className="SidepostUL">
                                <li>
                                    <a href="#">Experience the Serenity of Japan's Traditional Countryside Traditional CountrysideTraditional Countryside</a>
                                </li>
                                <li>
                                    <a href="#">Experience the Serenity of Japan's Traditional Countryside Traditional </a>
                                </li>
                                <li>
                                    <a href="#">Experience the Serenity of Japan's Traditional</a>
                                </li>
                                <li>
                                    <a href="#">Experience the Serenity of Japan's Traditional Countryside Traditional CountrysideTraditional Countryside</a>
                                </li>
                            </ul>
                        </div>

                        {/* <div class="sidePost col-lg-12">
                                    <div class="sideImageContainer">
                                        <img  src={FeaturedCardImage}  alt="POKER HANDS " class="sideImage" />
                                    </div>
                                    <div class="sideContent">
                                        <p class="sideDescription">POKER HANDS </p>
                                        <div class="AutherINfo">
                                            <h3>NEWS</h3>
                                            <span>.</span>
                                            <p>Mar. 28, 2020</p>
                                        </div>
                                    </div>
                                </div> */}
                    </div>


                    <div class="card Offerscard mb-3 ">
                        <div class="card-header ">
                            Offer for you
                        </div>

                        <div class="sidePost col-lg-12">
                            <div class=" OffersForUchd LatestNewsDsg">
                                <div class="LatestNewsDsgIMg">
                                    <img src={FeaturedCardImage} class="" />
                                </div>
                                <div class="LatestNewsDsgTxt">
                                    <p class="small">Experience the Serenity of Japan's Traditional</p>
                                    <div class="SliderFooter">
                                        <button class="ClaimNow">Claim Now</button>
                                        <button class="Pokerbazzi25">Pokerbazzi25
                                            <span>Promo Code <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4018_17694)"><path d="M2.45841 1.00293H6.11683C6.45371 1.00293 6.72656 1.27579 6.72656 1.61267V5.88081H6.11683V1.61267H2.45841V1.00293ZM1.54381 2.2224H4.89736C5.23423 2.2224 5.50709 2.49526 5.50709 2.83214V7.10029C5.50709 7.43716 5.23423 7.71002 4.89736 7.71002H1.54381C1.20693 7.71002 0.934073 7.43716 0.934073 7.10029V2.83214C0.934073 2.49526 1.20693 2.2224 1.54381 2.2224ZM1.54381 7.10029H4.89736V2.83214H1.54381V7.10029Z" fill="#606060"></path></g><defs><clipPath id="clip0_4018_17694"><rect width="7.31683" height="7.31683" fill="white" transform="matrix(-1 0 0 1 7.33594 0.698242)"></rect></clipPath></defs></svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sidePost col-lg-12">
                            <div class=" OffersForUchd LatestNewsDsg">
                                <div class="LatestNewsDsgIMg">
                                    <img src={FeaturedCardImage} class="" />
                                </div>
                                <div class="LatestNewsDsgTxt">
                                    <p class="small">Experience the Serenity of Japan's Traditional</p>
                                    <div class="SliderFooter">
                                        <button class="ClaimNow">Claim Now</button>
                                        <button class="Pokerbazzi25">Pokerbazzi25
                                            <span>Promo Code <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4018_17694)"><path d="M2.45841 1.00293H6.11683C6.45371 1.00293 6.72656 1.27579 6.72656 1.61267V5.88081H6.11683V1.61267H2.45841V1.00293ZM1.54381 2.2224H4.89736C5.23423 2.2224 5.50709 2.49526 5.50709 2.83214V7.10029C5.50709 7.43716 5.23423 7.71002 4.89736 7.71002H1.54381C1.20693 7.71002 0.934073 7.43716 0.934073 7.10029V2.83214C0.934073 2.49526 1.20693 2.2224 1.54381 2.2224ZM1.54381 7.10029H4.89736V2.83214H1.54381V7.10029Z" fill="#606060"></path></g><defs><clipPath id="clip0_4018_17694"><rect width="7.31683" height="7.31683" fill="white" transform="matrix(-1 0 0 1 7.33594 0.698242)"></rect></clipPath></defs></svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sidePost col-lg-12">
                            <div class=" OffersForUchd LatestNewsDsg">
                                <div class="LatestNewsDsgIMg">
                                    <img src={FeaturedCardImage} class="" />
                                </div>
                                <div class="LatestNewsDsgTxt">
                                    <p class="small">Experience the Serenity of Japan's Traditional</p>
                                    <div class="SliderFooter">
                                        <button class="ClaimNow">Claim Now</button>
                                        <button class="Pokerbazzi25">Pokerbazzi25
                                            <span>Promo Code <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4018_17694)"><path d="M2.45841 1.00293H6.11683C6.45371 1.00293 6.72656 1.27579 6.72656 1.61267V5.88081H6.11683V1.61267H2.45841V1.00293ZM1.54381 2.2224H4.89736C5.23423 2.2224 5.50709 2.49526 5.50709 2.83214V7.10029C5.50709 7.43716 5.23423 7.71002 4.89736 7.71002H1.54381C1.20693 7.71002 0.934073 7.43716 0.934073 7.10029V2.83214C0.934073 2.49526 1.20693 2.2224 1.54381 2.2224ZM1.54381 7.10029H4.89736V2.83214H1.54381V7.10029Z" fill="#606060"></path></g><defs><clipPath id="clip0_4018_17694"><rect width="7.31683" height="7.31683" fill="white" transform="matrix(-1 0 0 1 7.33594 0.698242)"></rect></clipPath></defs></svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sidePost col-lg-12">
                            <div class=" OffersForUchd LatestNewsDsg">
                                <div class="LatestNewsDsgIMg">
                                    <img src={FeaturedCardImage} class="" />
                                </div>
                                <div class="LatestNewsDsgTxt">
                                    <p class="small">Experience the Serenity of Japan's Traditional</p>
                                    <div class="SliderFooter">
                                        <button class="ClaimNow">Claim Now</button>
                                        <button class="Pokerbazzi25">Pokerbazzi25
                                            <span>Promo Code <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4018_17694)"><path d="M2.45841 1.00293H6.11683C6.45371 1.00293 6.72656 1.27579 6.72656 1.61267V5.88081H6.11683V1.61267H2.45841V1.00293ZM1.54381 2.2224H4.89736C5.23423 2.2224 5.50709 2.49526 5.50709 2.83214V7.10029C5.50709 7.43716 5.23423 7.71002 4.89736 7.71002H1.54381C1.20693 7.71002 0.934073 7.43716 0.934073 7.10029V2.83214C0.934073 2.49526 1.20693 2.2224 1.54381 2.2224ZM1.54381 7.10029H4.89736V2.83214H1.54381V7.10029Z" fill="#606060"></path></g><defs><clipPath id="clip0_4018_17694"><rect width="7.31683" height="7.31683" fill="white" transform="matrix(-1 0 0 1 7.33594 0.698242)"></rect></clipPath></defs></svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="SpacedicAdd SpacedicAddsBAckground"></div>

                    <div class="card  mb-3 ">
                        <div class="card-header ">
                            Guides
                        </div>

                        <div class="sidePost col-lg-12">
                            <div class="sideImageContainer">
                                <img src={FeaturedCardImage} alt="POKER HANDS " class="sideImage" />
                            </div>
                            <div class="sideContent">
                                <p class="sideDescription">Experience the Serenity of Japan's Traditional</p>
                            </div>
                        </div>
                        <div class="sidePost col-lg-12">
                            <div class="sideImageContainer">
                                <img src={FeaturedCardImage} alt="POKER HANDS " class="sideImage" />
                            </div>
                            <div class="sideContent">
                                <p class="sideDescription">Experience the Serenity of Japan's Traditional</p>
                            </div>
                        </div>
                        <div class="sidePost col-lg-12">
                            <div class="sideImageContainer">
                                <img src={FeaturedCardImage} alt="POKER HANDS " class="sideImage" />
                            </div>
                            <div class="sideContent">
                                <p class="sideDescription">Experience the Serenity of Japan's Traditional</p>
                            </div>
                        </div>
                        <div class="sidePost col-lg-12">
                            <div class="sideImageContainer">
                                <img src={FeaturedCardImage} alt="POKER HANDS " class="sideImage" />
                            </div>
                            <div class="sideContent">
                                <p class="sideDescription">Experience the Serenity of Japan's Traditional</p>
                            </div>
                        </div>
                    </div>


                    <div class="newsletter text-center mb-3">
                        <h5>Join our Newsletter</h5>
                        <p>Join thousands of poker players staying ahead with tips, offers and updates.</p>
                        <form>
                            <input type="email" class="form-control" placeholder="Enter your email" />
                            <button class="btn subcrb w-100 mt-2">Subscribe</button>
                            <div class="form-check CheckboxFormCheck">
                                <input class="form-check-input" type="checkbox" id="consentCheckbox" />
                                <label class="form-check-label" for="consentCheckbox">
                                    I'm hereby consent. Join thousands of poker players staying ahead with tips, offers,
                                    and platform updates. No spam, just pure value.
                                </label>
                            </div>
                        </form>
                    </div>

                    <div class="text-center mt-5">
                        <div class=" SocialIconBlog BlogSocialIcon">
                            <small class="">Follow Us On</small>
                            <div class=""><a href="#">
                                <svg width="37" height="34" viewBox="0 0 37 34" fill="#ff4053" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.218 0.17334H34.8404L22.557 14.2125L37.0075 33.3166H25.6929L16.8309 21.7301L6.69073 33.3166H1.06487L14.2032 18.3002L0.34082 0.17334H11.9427L19.9531 10.7639L29.218 0.17334ZM27.2447 29.9513H30.3601L10.2498 3.36189H6.90659L27.2447 29.9513Z" fill="#ff4053"></path>
                                </svg>
                            </a>
                                <a href="#">
                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="#ff4053" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4666_9160)"><path d="M40.6738 20C40.6738 8.9544 31.7194 0 20.6738 0C9.62823 0 0.673828 8.9544 0.673828 20C0.673828 29.3792 7.13143 37.2496 15.8426 39.4112V26.112H11.7186V20H15.8426V17.3664C15.8426 10.5592 18.9234 7.404 25.6066 7.404C26.8738 7.404 29.0602 7.6528 29.9546 7.9008V13.4408C29.4826 13.3912 28.6626 13.3664 27.6442 13.3664C24.365 13.3664 23.0978 14.6088 23.0978 17.8384V20H29.6306L28.5082 26.112H23.0978V39.8536C33.001 38.6576 40.6746 30.2256 40.6746 20H40.6738Z" fill="#ff4053"></path><path d="M28.5074 26.1121L29.6298 20.0001H23.097V17.8385C23.097 14.6089 24.3642 13.3665 27.6434 13.3665C28.6618 13.3665 29.4818 13.3913 29.9538 13.4409V7.90085C29.0594 7.65205 26.873 7.40405 25.6058 7.40405C18.9226 7.40405 15.8418 10.5593 15.8418 17.3665V20.0001H11.7178V26.1121H15.8418V39.4113C17.389 39.7953 19.0074 40.0001 20.673 40.0001C21.493 40.0001 22.3018 39.9496 23.0962 39.8537V26.1121H28.5066H28.5074Z" fill="white"></path></g><defs><clipPath id="clip0_4666_9160"><rect width="40" height="40" fill="white" transform="translate(0.673828)"></rect></clipPath></defs>
                                    </svg>
                                </a>
                                <a href="#"><svg width="42" height="41" viewBox="0 0 42 41" fill="#ff4053" xmlns="http://www.w3.org/2000/svg"><path d="M34.0045 9.50594C34.0045 8.15072 32.9062 7.05645 31.556 7.05645C30.2058 7.05645 29.1064 8.15072 29.1064 9.50594C29.1064 10.8562 30.2058 11.9504 31.556 11.9504C32.9062 11.9504 34.0045 10.8562 34.0045 9.50594Z" fill="#ff4053"></path><path d="M37.2676 28.6262C37.1769 30.6143 36.8444 31.6944 36.5684 32.4118C36.1975 33.363 35.7552 34.0432 35.0378 34.7566C34.3284 35.47 33.6483 35.9113 32.6971 36.278C31.9797 36.5582 30.8955 36.8917 28.9075 36.9865C26.7583 37.0811 26.1214 37.1013 20.6712 37.1013C15.2261 37.1013 14.5842 37.0811 12.435 36.9865C10.447 36.8917 9.36782 36.5582 8.65035 36.278C7.69415 35.9113 7.01907 35.47 6.30568 34.7566C5.58723 34.0432 5.14491 33.363 4.77914 32.4118C4.50301 31.6944 4.16551 30.6143 4.07981 28.6262C3.97507 26.477 3.95587 25.8301 3.95587 20.391C3.95587 14.9408 3.97507 14.2989 4.07981 12.1497C4.16551 10.1617 4.50301 9.08256 4.77914 8.35904C5.14491 7.40888 5.58723 6.73275 6.30568 6.01936C7.01907 5.30702 7.69415 4.86463 8.65035 4.49388C9.36782 4.21275 10.447 3.88425 12.435 3.78955C14.5842 3.69479 15.2261 3.6706 20.6712 3.6706C26.1214 3.6706 26.7583 3.69479 28.9075 3.78955C30.8955 3.88425 31.9797 4.21275 32.6971 4.49388C33.6483 4.86463 34.3284 5.30702 35.0378 6.01936C35.7552 6.73275 36.1975 7.40888 36.5684 8.35904C36.8444 9.08256 37.1769 10.1617 37.2676 12.1497C37.3674 14.2989 37.3916 14.9408 37.3916 20.391C37.3916 25.8301 37.3674 26.477 37.2676 28.6262ZM40.9384 11.9825C40.8387 9.81001 40.496 8.32579 39.9872 7.03307C39.4693 5.69191 38.775 4.55532 37.6385 3.41873C36.5069 2.2872 35.3703 1.59293 34.0292 1.069C32.7314 0.565163 31.2522 0.218517 29.0787 0.123825C26.9053 0.0190086 26.2111 -0.000114441 20.6712 -0.000114441C15.1364 -0.000114441 14.4371 0.0190086 12.2637 0.123825C10.0953 0.218517 8.6171 0.565163 7.31327 1.069C5.97717 1.59293 4.84058 2.2872 3.70906 3.41873C2.57247 4.55532 1.8782 5.69191 1.35524 7.03307C0.851411 8.32579 0.508847 9.81001 0.40403 11.9825C0.309339 14.1559 0.285156 14.8511 0.285156 20.391C0.285156 25.9259 0.309339 26.6201 0.40403 28.7935C0.508847 30.9619 0.851411 32.4451 1.35524 33.7439C1.8782 35.08 2.57247 36.2217 3.70906 37.3532C4.84058 38.4847 5.97717 39.1841 7.31327 39.707C8.6171 40.2108 10.0953 40.5534 12.2637 40.6532C14.4371 40.7529 15.1364 40.7771 20.6712 40.7771C26.2111 40.7771 26.9053 40.7529 29.0787 40.6532C31.2522 40.5534 32.7314 40.2108 34.0292 39.707C35.3703 39.1841 36.5069 38.4847 37.6385 37.3532C38.775 36.2217 39.4693 35.08 39.9872 33.7439C40.496 32.4451 40.8387 30.9619 40.9384 28.7935C41.0382 26.6201 41.0624 25.9259 41.0624 20.391C41.0624 14.8511 41.0382 14.1559 40.9384 11.9825Z" fill="#ff4053"></path><path d="M20.6712 27.1814C16.9198 27.1814 13.8758 24.1424 13.8758 20.391C13.8758 16.6336 16.9198 13.5907 20.6712 13.5907C24.4236 13.5907 27.4716 16.6336 27.4716 20.391C27.4716 24.1424 24.4236 27.1814 20.6712 27.1814ZM20.6712 9.9149C14.8884 9.9149 10.2051 14.6083 10.2051 20.391C10.2051 26.1687 14.8884 30.8572 20.6712 30.8572C26.4539 30.8572 31.1423 26.1687 31.1423 20.391C31.1423 14.6083 26.4539 9.9149 20.6712 9.9149Z" fill="#ff4053"></path>
                                </svg>
                                </a>
                                <a href="#"><svg width="41" height="40" viewBox="0 0 41 40" fill="#ff4053" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4666_9168)"><path d="M37.1097 0H3.01528C2.23215 0 1.4811 0.311096 0.927349 0.864849C0.373596 1.4186 0.0625 2.16965 0.0625 2.95278V37.0472C0.0625 37.8303 0.373596 38.5814 0.927349 39.1352C1.4811 39.6889 2.23215 40 3.01528 40H37.1097C37.8928 40 38.6439 39.6889 39.1977 39.1352C39.7514 38.5814 40.0625 37.8303 40.0625 37.0472V2.95278C40.0625 2.16965 39.7514 1.4186 39.1977 0.864849C38.6439 0.311096 37.8928 0 37.1097 0ZM11.9847 34.075H5.97083V14.9722H11.9847V34.075ZM8.97361 12.325C8.29144 12.3212 7.62569 12.1153 7.06039 11.7335C6.49509 11.3516 6.05557 10.8109 5.7973 10.1795C5.53902 9.54808 5.47358 8.85432 5.60922 8.18576C5.74486 7.5172 6.0755 6.90379 6.55943 6.42297C7.04335 5.94214 7.65886 5.61544 8.32828 5.4841C8.9977 5.35276 9.69102 5.42266 10.3208 5.68498C10.9505 5.9473 11.4884 6.39028 11.8666 6.95802C12.2448 7.52576 12.4464 8.19282 12.4458 8.875C12.4523 9.33172 12.3667 9.78506 12.1942 10.208C12.0217 10.6309 11.7658 11.0148 11.4418 11.3368C11.1178 11.6587 10.7322 11.9121 10.3082 12.0819C9.88417 12.2517 9.43028 12.3344 8.97361 12.325ZM34.1514 34.0917H28.1403V23.6556C28.1403 20.5778 26.8319 19.6278 25.1431 19.6278C23.3597 19.6278 21.6097 20.9722 21.6097 23.7333V34.0917H15.5958V14.9861H21.3792V17.6333H21.4569C22.0375 16.4583 24.0708 14.45 27.1736 14.45C30.5292 14.45 34.1542 16.4417 34.1542 22.275L34.1514 34.0917Z" fill="#ff4053"></path></g><defs><clipPath id="clip0_4666_9168"><rect width="40" height="40" fill="white" transform="translate(0.0625)"></rect></clipPath></defs>
                                </svg>
                                </a>
                            </div>
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
