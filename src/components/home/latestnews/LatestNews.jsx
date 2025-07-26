import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./latest_news.module.css";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import { Tab, Tabs, TabList } from "react-tabs";
import { getBlogs } from "../../../servicefile/blogservice";
import Meta from "../../../Meta";
import RightSidebar from "./RightSidebar";
import Reveal from "../../common/reveal/Reveal";
import featuredBlogMain from "../../../assets/Logos_and_illustration/featuredBlogMain.webp"
import Promotion from "../../../assets/Promotion.jpg"

import OfferPokerIcon from "../../../assets/OfferPokerIcon.svg"
import DashboardFooter from "../../dashboard/Foooter/footer";
 




const LatestNews = ({ userData }) => {
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
      <Navbar page="home" />

      {/* Mobile Dashboard design */}

      <div className="BlogDashboard container-fluid ">

     
          <ul className="nav nav-pills sticky-top  z-3 py-2">
            <li className="nav-item">
              <a className="nav-link active" href="#latest">Latest</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#news">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#promotions">Promotions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#strategies">Strategies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blogs">Blogs</a>
            </li>
          </ul>

          
          <section id="latest" className="latestBLog">
              <h6>Latest</h6>
              <small>Discover ideas, news and many more</small>
          </section>

          <section id="news"  className="latestnews">
            <h6 className=""><span className="text-danger">Top</span> Stories</h6>
            <div className="mb-3">
                <div className="mainPost">
                    <div className="imageContainer">
                        <img
                            src={featuredBlogMain}
                            alt="Featured blog post"
                            className="mainImage"
                        />
                    </div>
                    <div className="mainContent">
                        <span className="category">News <span>6/23/2025</span></span>
                        <h3 className="mainTitle">Talk it out with audio, Talk it out in with audio, Talk it out with audio...</h3>
                        <p className="description">
                            Use audio to have live conversations with other collaborators directly in your Figma & FigJam files. ...
                        </p>
                    </div>
                </div>
            </div>

              <div className=" LatestNewsDsg">
                <div  className="LatestNewsDsgIMg">
                    <img src={Promotion} className="" />
                </div>
                <div  className="LatestNewsDsgTxt">
                    <p className="small">Experience the Serenity of Japan's Traditional Country...</p>
                    <p className="LatestNewsDsgTxtDec"><span>NEWS</span> • May 1, 2023</p>
                </div> 
              </div>
             <div className=" LatestNewsDsg">
                <div  className="LatestNewsDsgIMg">
                    <img src={Promotion} className="" />
                </div>
                <div  className="LatestNewsDsgTxt">
                    <p className="small">Experience the Serenity of Japan's Traditional Country...</p>
                    <p className="LatestNewsDsgTxtDec"><span>NEWS</span> • May 1, 2023</p>
                </div> 
              </div>
          </section>


          <section id="promotions"  className="latestnews">
            <div className="mb-3">
                <div className="mainPost">
                    <div className="imageContainer">
                        <img
                            src={featuredBlogMain}
                            alt="Featured blog post"
                            className="mainImage"
                        />
                    </div>
                    <div className="mainContent">
                        <span className="category">PROMOTION <span>6/23/2025</span></span>
                        <h3 className="mainTitle">Talk it out with audio, Talk it out in with audio, Talk it out with audio...</h3>
                        <p className="description">
                            Use audio to have live conversations with other collaborators directly in your Figma & FigJam files. ...
                        </p>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
              <div className="col-6 mb-2">
                <img src={Promotion} className="img-fluid rounded" />
                <p className="small">Experience the Serenity of Japan's Traditional Country.</p>
              </div>
              <div className="col-6 mb-2">
                <img src={Promotion} className="img-fluid rounded" />
                <p className="small">Experience the Serenity of Japan's Traditional Country.</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6 mb-2">
                <img src={Promotion} className="img-fluid rounded" />
                <p className="small">Experience the Serenity of Japan's Traditional Country.</p>
              </div>
              <div className="col-6 mb-2">
                <img src={Promotion} className="img-fluid rounded" />
                <p className="small">Experience the Serenity of Japan's Traditional Country.</p>
              </div>
            </div>
          </section>

          

          <section id="strategies" className="OffersForU">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="mb-0">Offers For You</h6>
              <a href="#" className="text-danger small seeMOre">See More</a>
            </div>
            <div className="OfferDelfrU">
             <div className=" OffersForUchd LatestNewsDsg">
                <div  className="LatestNewsDsgIMg">
                    <img src={Promotion} className="" />
                </div>
                <div  className="LatestNewsDsgTxt">
                    <p className="small">Experience the Serenity of Japan's Traditional Country...</p>
                      <div class="SliderFooter">
                        <button class="ClaimNow">Claim Now</button>
                        <button class="Pokerbazzi25">Pokerbazzi25<span>Promo Code <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4018_17694)"><path d="M2.45841 1.00293H6.11683C6.45371 1.00293 6.72656 1.27579 6.72656 1.61267V5.88081H6.11683V1.61267H2.45841V1.00293ZM1.54381 2.2224H4.89736C5.23423 2.2224 5.50709 2.49526 5.50709 2.83214V7.10029C5.50709 7.43716 5.23423 7.71002 4.89736 7.71002H1.54381C1.20693 7.71002 0.934073 7.43716 0.934073 7.10029V2.83214C0.934073 2.49526 1.20693 2.2224 1.54381 2.2224ZM1.54381 7.10029H4.89736V2.83214H1.54381V7.10029Z" fill="#606060"></path></g><defs><clipPath id="clip0_4018_17694"><rect width="7.31683" height="7.31683" fill="white" transform="matrix(-1 0 0 1 7.33594 0.698242)"></rect></clipPath></defs></svg></span></button>
                      </div>              
                </div> 
              </div>
              <div className=" OffersForUchd LatestNewsDsg">
                <div  className="LatestNewsDsgIMg">
                    <img src={Promotion} className="" />
                </div>
                <div  className="LatestNewsDsgTxt">
                    <p className="small">Experience the Serenity of Japan's Traditional Country...</p>
                      <div class="SliderFooter">
                        <button class="ClaimNow">Claim Now</button>
                        <button class="Pokerbazzi25">Pokerbazzi25<span>Promo Code <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4018_17694)"><path d="M2.45841 1.00293H6.11683C6.45371 1.00293 6.72656 1.27579 6.72656 1.61267V5.88081H6.11683V1.61267H2.45841V1.00293ZM1.54381 2.2224H4.89736C5.23423 2.2224 5.50709 2.49526 5.50709 2.83214V7.10029C5.50709 7.43716 5.23423 7.71002 4.89736 7.71002H1.54381C1.20693 7.71002 0.934073 7.43716 0.934073 7.10029V2.83214C0.934073 2.49526 1.20693 2.2224 1.54381 2.2224ZM1.54381 7.10029H4.89736V2.83214H1.54381V7.10029Z" fill="#606060"></path></g><defs><clipPath id="clip0_4018_17694"><rect width="7.31683" height="7.31683" fill="white" transform="matrix(-1 0 0 1 7.33594 0.698242)"></rect></clipPath></defs></svg></span></button>
                      </div>              
                </div> 
              </div>
              <div className=" OffersForUchd LatestNewsDsg">
                <div  className="LatestNewsDsgIMg">
                    <img src={Promotion} className="" />
                </div>
                <div  className="LatestNewsDsgTxt">
                    <p className="small">Experience the Serenity of Japan's Traditional Country...</p>
                      <div class="SliderFooter">
                        <button class="ClaimNow">Claim Now</button>
                        <button class="Pokerbazzi25">Pokerbazzi25<span>Promo Code <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4018_17694)"><path d="M2.45841 1.00293H6.11683C6.45371 1.00293 6.72656 1.27579 6.72656 1.61267V5.88081H6.11683V1.61267H2.45841V1.00293ZM1.54381 2.2224H4.89736C5.23423 2.2224 5.50709 2.49526 5.50709 2.83214V7.10029C5.50709 7.43716 5.23423 7.71002 4.89736 7.71002H1.54381C1.20693 7.71002 0.934073 7.43716 0.934073 7.10029V2.83214C0.934073 2.49526 1.20693 2.2224 1.54381 2.2224ZM1.54381 7.10029H4.89736V2.83214H1.54381V7.10029Z" fill="#606060"></path></g><defs><clipPath id="clip0_4018_17694"><rect width="7.31683" height="7.31683" fill="white" transform="matrix(-1 0 0 1 7.33594 0.698242)"></rect></clipPath></defs></svg></span></button>
                      </div>              
                </div> 
              </div>
            </div>
          </section>

          <section id="blogs" className="OffersForU OffersForUsecnd mt-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="mb-0">Offers For You</h6>
              <a href="#" className="text-danger small seeMOre">See More</a>
            </div>
            <div className="OffersForUsecnddiv">
                <div className=" OffersForUsecnddivCard">
                  <div  className="LatestNewsDsgIMg">
                    <img src={Promotion} className="" />
                  </div>
                  <div className="cardOfferSecond">
                    <p className="small">The Pros and Cons of Remote Work</p>
                    <span className="">BLOG</span>
                  </div>
                </div>
                <div className=" OffersForUsecnddivCard">
                  <div  className="LatestNewsDsgIMg">
                    <img src={Promotion} className="" />
                  </div>
                  <div className="cardOfferSecond">
                    <p className="small">The Pros and Cons of Remote Work</p>
                    <span className="">BLOG</span>
                  </div>                  
                </div>
            </div>

            <div className="mt-4 mb-5">
              <div className="d-grid gap-2 OfferListCard">
                <button className="btn btn-dark text-start"> 
                    <img src={OfferPokerIcon} /> 
                      <div className="Descptofr">
                        <p>Bet $4 Get $45 in Free Betsdcvdcddcdcdc</p> 
                        <span>T&Cs Apply</span>
                      </div>
                      <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.21484L9 9.21484L1 17.2148" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                       </svg>
                  </button>
                  <button className="btn btn-dark text-start"> 
                    <img src={OfferPokerIcon} /> 
                      <div className="Descptofr">
                        <p>Bet $4 Get $45 in Free Betsdcvdcddcdcdc</p> 
                        <span>T&Cs Apply</span>
                      </div>
                      <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.21484L9 9.21484L1 17.2148" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                       </svg>
                  </button>
                  <button className="btn btn-dark text-start"> 
                    <img src={OfferPokerIcon} /> 
                      <div className="Descptofr">
                        <p>Bet $4 Get $45 in Free Betsdcvdcddcdcdc</p> 
                        <span>T&Cs Apply</span>
                      </div>
                      <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.21484L9 9.21484L1 17.2148" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                       </svg>
                  </button>
                  <button className="btn  btn-primary text-start"> 
                    <img src={OfferPokerIcon} /> 
                      <div className="Descptofr">
                        <p>Bet $4 Get $45 in Free Betsdcvdcddcdcdc</p> 
                        <span>T&Cs Apply</span>
                      </div>
                      <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.21484L9 9.21484L1 17.2148" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                       </svg>
                  </button>
                  <button className="btn btn-danger text-start"> 
                    <img src={OfferPokerIcon} /> 
                      <div className="Descptofr">
                        <p>Bet $4 Get $45 in Free Betsdcvdcddcdcdc</p> 
                        <span>T&Cs Apply</span>
                      </div>
                      <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.21484L9 9.21484L1 17.2148" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                       </svg>
                  </button>
              </div>
            </div>
          </section>

          <div className="AddClass">

          </div>

      { isMobile &&   <DashboardFooter/>}
          
    </div>



      {/* Mobile Dashboard design */}

      {/* <Reveal>
        <div className={styles.latest_news}>
          <div className={styles.header_container}>Online Poker News</div>

          <Tabs>
            <div className={styles.tabs_container}>
              <TabList className={styles.tabList}>
                {["Latest News", "Live Poker", "Blog", "MTT Series", "Promotions", "Interviews", "Guides"].map((tab) => (
                  <Tab
                    key={tab}
                    className={activeTab === tab ? styles.active : styles.tab}
                    onClick={() => handleTabs(tab)}
                  >
                    {tab}
                  </Tab>
                ))}
              </TabList>
            </div>

            <div className={styles.news_section}>
              <div className={styles.content_layout}>
                <div className={styles.news_grid}>
                  {loading ? (
                    <div className={styles.loader}>
                      <p>Loading premium content...</p>
                    </div>
                  ) : currentArticles.length > 0 ? (
                    currentArticles.map((article) => {
                      let blogId = `${article.title}-${article._id}`;
                      blogId = blogId.replace(/[\s?]/g, "-");

                      return (
                        <Link
                          to={`/news/${blogId}`}
                          key={article._id}
                          className={styles.card_link}
                        >
                          <div className={styles.news_card}>
                            <div className={styles.image_wrapper}>
                              <img
                                src={article.imageUrl}
                                alt={article.title}
                                className={styles.news_image}
                              />
                            </div>
                            <div className={styles.cardContent}>
                              <div className={styles.cardMetaTop}>
                                <span
                                  className={styles.type}
                                  style={{ 
                                    backgroundColor: typeColors[article.type] || typeColors["Latest News"],
                                  }}
                                >
                                  {article.type || "Latest"}
                                </span>
                                <span className={styles.date}>
                                  📅 {formatDate(article.date)}
                                </span>
                              </div>
                              <h3 className={styles.heading_card}>
                                {article.title}
                              </h3>
                              <p className={styles.news_description}>
                                {article.subheading}
                              </p>
                              <div className={styles.cardMeta}>
                                <span className={styles.writer}>
                                  ✍️ {article.author || "Poker Expert"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })
                  ) : (
                    <p className={styles.no_content}>No articles available for this category.</p>
                  )}
                </div>

                <div className={styles.rightSidebar}>
                  {/* <RightSidebar /> */}
      {/* <div className={styles.important_post}>
                    <h2 className={styles.important_post_heading}>Important Posts</h2>
                    <ul className={styles.post_list}>
                      {currentArticles.length > 0
                        ? currentArticles.slice(0, 4).map((post) => {
                          const blogId = `${post.title.replace(/[\s?]/g, "-")}-${post._id}`;
                          return (
                            <li key={post._id} className={styles.post_item}>
                              <Link to={`/news/${blogId}`} className={styles.card_link}>
                                <div className={styles.post_content}>
                                  <img src={post.imageUrl} alt={post.title} className={styles.post_image} />
                                  <div className={styles.text_content}>
                                    <p className={styles.post_title}>{post.title}</p>
                                    <p className={styles.post_meta}>
                                      📅 {formatDate(post.date)}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          );
                        })
                        : <p>No important posts available.</p>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </div>

        <div
          className="flex_center"
          style={{ width: "100%", backgroundColor: "#0052cc" }}
        >
          <Footer />
        </div> */}
      {/* </Reveal>  */}
    </>
  );
};

export default LatestNews;
