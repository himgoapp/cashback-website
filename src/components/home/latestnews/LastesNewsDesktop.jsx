import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./latest_news.module.css";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import { Tab, Tabs, TabList } from "react-tabs";
import { getBlogs } from "../../../servicefile/blogservice";
import Meta from "../../../Meta";
import FeaturedCardImage from '../../../assets/Logos_and_illustration/FeaturedCardImage.svg'





const LatestNewsDesktop = ({ userData }) => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Latest News");
    const [allArticles, setAllArticles] = useState([]);
    const [currentArticles, setCurrentArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 575);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 575);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleTabs = (type) => {
        setActiveTab(type);
        setPage(1);
    };

    const filterArticles = async () => {
        let type = activeTab === "Latest News" ? undefined : activeTab;
        const response = await getBlogs(type, page);
        if (response && response.blogsList) {
            let length = response.length < 10 ? 1 : Math.ceil(response.length / 9);
            setCurrentArticles(response.blogsList);
            setTotalPage(length);
            setLoading(false);
        }
    };

    useEffect(() => {
        filterArticles();
    }, [activeTab, page]);

    const typeColors = {
        Blog: "#3a63e3",
        Promotions: "#00c6bb",
        Guides: "#ff6b6b",
        Interviews: "#7c5cf5",
        "MTT Series": "#38b47e",
        "Live Poker": "#5271ff",
        "Latest News": "#e6a919",
    };

    const formatDate = (dateString) => {
        const options = {
            month: "short",
            day: "numeric",
            year: "numeric",
        };
        return new Date(dateString).toLocaleDateString("en-US", options);
    };

    return (
        <>
            <Meta
                title="Latest Online Poker News India | Rakebackk"
                description="Check Today's Latest Poker News in India at Rakebackk."
                link="https://www.rakebackk.com/latest-news"
            />

            <div className="DesktopLatestNews">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="d-flex align-items-center  HedBlog">
                                <h2 class="fw-bold">BLOGS</h2>
                                <h5 class="text-muted">Latest Blogs</h5>
                            </div>

                            <ul class="nav nav-pills mb-4" id="blogTabs" role="tablist">
                                <li class="nav-item"><button class="nav-link active" data-bs-toggle="pill" data-bs-target="#all">All</button></li>
                                <li class="nav-item"><button class="nav-link" data-bs-toggle="pill" data-bs-target="#latest">Latest</button></li>
                                <li class="nav-item"><button class="nav-link" data-bs-toggle="pill" data-bs-target="#news">News</button></li>
                                <li class="nav-item"><button class="nav-link" data-bs-toggle="pill" data-bs-target="#promotions">Promotions</button></li>
                                <li class="nav-item"><button class="nav-link" data-bs-toggle="pill" data-bs-target="#strategies">Strategies</button></li>
                                <li class="nav-item"><button class="nav-link" data-bs-toggle="pill" data-bs-target="#blogs">Blogs</button></li>
                            </ul>

                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="all">
                                    <h4 class="section-title">News</h4>
                                    <p class="sub-title">Best news for all poker players for getting ahead in the game</p>

                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <div class="card blog-card  BlogCardFullHeifht" onClick={() => { navigate("/blog/wererewr") }}>
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="card blog-card BlogCardFullHeifht" onClick={() => { navigate("/blog/wererewr") }}>
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="BorderBlog"></div>

                                        <div class="col-md-4">
                                            <div class="card blog-card">
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="card blog-card">
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="card blog-card">
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="BorderBlog"></div>

                                        <div class="col-md-4">
                                            <div class="card blog-card">
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="card blog-card">
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="card blog-card">
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="BorderBlog"></div>

                                        <div class="col-md-4">
                                            <div class="card blog-card">
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="card blog-card">
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="card blog-card">
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="BorderBlog"></div>

                                        <div class="col-md-4">
                                            <div class="card blog-card">
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="card blog-card">
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="card blog-card">
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="BorderBlog"></div>

                                        <div class="col-md-4">
                                            <div class="card blog-card">
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="card blog-card">
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="card blog-card">
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="BorderBlog"></div>

                                        <div class="col-md-4">
                                            <div class="card blog-card">
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="card blog-card">
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="card blog-card">
                                                <img src={FeaturedCardImage} class="card-img-top" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Talk it out with audioTalk it out with audio</h5>
                                                    <h6><span>STRATEGY</span> • 6/23/2025</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="custom-pagination">
                                        <button class="page-btn prev">&lt;</button>
                                        <a href="#" class="page-number active">1</a>
                                        <a href="#" class="page-number">2</a>
                                        <a href="#" class="page-number">3</a>
                                        <span class="dots">...</span>
                                        <a href="#" class="page-number">11</a>
                                        <a href="#" class="page-number">12</a>
                                        <a href="#" class="page-number">13</a>
                                        <button class="page-btn next">&gt;</button>
                                    </div>
                                </div>

                                <div class="tab-pane fade" id="latest"><p>Latest blogs content here...</p></div>
                                <div class="tab-pane fade" id="news"><p>News blogs content here...</p></div>
                                <div class="tab-pane fade" id="promotions"><p>Promotions content here...</p></div>
                                <div class="tab-pane fade" id="strategies"><p>Strategies content here...</p></div>
                                <div class="tab-pane fade" id="blogs"><p>Blogs content here...</p></div>
                            </div>
                        </div>

                        <div class="col-lg-4 sidebar RightsidebarBlog">
                            <div className="SpacedicAdd"></div>
                            <div class="card mb-3 ">
                                <div class="card-header  text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="23" viewBox="0 0 17 23" fill="none">
                                        <path d="M16.3611 12.3306C14.6175 7.81725 8.13687 7.76501 10.5946 0.441406C5.89954 2.54133 2.18127 7.94262 5.85754 15.0782C0.658248 12.9052 2.93754 7.46205 2.93754 7.46205C2.93754 7.46205 0.101562 9.19631 0.101562 14.4409C0.500698 20.2914 5.4689 22.0883 7.25451 22.3182C9.80685 22.6421 12.5693 22.1719 14.5545 20.3646C16.7393 18.3482 17.5375 15.1304 16.3611 12.3306ZM6.61384 17.5855C8.12627 17.2199 8.90355 16.1333 9.11371 15.1723C9.46021 13.6782 8.10534 12.2157 9.0191 9.85447C9.36574 11.8081 12.4538 13.0305 12.4538 15.1618C12.5378 17.805 9.6599 20.0721 6.61384 17.5855Z" fill="white" />
                                    </svg>
                                    Trending
                                </div>

                                <div class="sidePost col-lg-12">
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

                                <div class="sidePost col-lg-12">
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

                                <div class="sidePost col-lg-12">
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

                                <div class="sidePost col-lg-12">
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


                            <div class="card Offerscard mb-3 ">
                                <div class="card-header bg-dark text-white">
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
                                <div class="card-header bg-dark text-white">
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
            </div>
        </>
    );
};

export default LatestNewsDesktop;
