import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./latest_news.module.css";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import { Tab, Tabs, TabList } from "react-tabs";
import Meta from "../../../Meta";
import RightSidebar from "./RightSidebar";
import Reveal from "../../common/reveal/Reveal";
import featuredBlogMain from "../../../assets/Logos_and_illustration/featuredBlogMain.webp"
import Promotion from "../../../assets/Promotion.jpg"
import OfferPokerIcon from "../../../assets/OfferPokerIcon.svg"
import { ShoppingBag } from "lucide-react";
import DashboardFooter from "../../dashboard/Foooter/footer";
import { getBlogs, getSidebarBlogs } from "../../../servicefile/blogservice";
import { getPokerSiteImage } from "../../../helperFxns/colorCode";
import Loading from "../../common/Loading/Loading";

const CustomPagination = ({
  rowsPerPage,
  rowCount,
  onChangePage,
  currentPage,
}) => {
  const totalPages = Math.ceil(rowCount / rowsPerPage);
  const disabledLesser = currentPage === 1;
  const disabledGreater = currentPage === totalPages || totalPages === 0;

  const pageNumbers = [];
  const maxPagesToShow = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(
      <a
        href="#"
        key={i}
        className={`page-number ${currentPage === i ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          onChangePage(i);
        }}
      >
        {i}
      </a>
    );
  }

  return (
    <div className="custom-pagination">
      {/* Prev Button */}
      <button
        className="page-btn prev"
        onClick={() => onChangePage(currentPage - 1)}
        disabled={disabledLesser}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
          <path d="M8.07812 0.710938L1.07812 7.71094L8.07812 14.7109" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </button>

      {/* First page and dots if needed */}
      {startPage > 1 && (
        <>
          <a
            href="#"
            className={`page-number ${currentPage === 1 ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              onChangePage(1);
            }}
          >
            1
          </a>
          {startPage > 2 && <span className="dots">...</span>}
        </>
      )}

      {/* Middle page numbers */}
      {pageNumbers}

      {/* Last page and dots if needed */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="dots">...</span>}
          <a
            href="#"
            className={`page-number ${currentPage === totalPages ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              onChangePage(totalPages);
            }}
          >
            {totalPages}
          </a>
        </>
      )}

      {/* Next Button */}
      <button
        className="page-btn next"
        onClick={() => onChangePage(currentPage + 1)}
        disabled={disabledGreater}
      >
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.07812 0.710938L8.07812 7.71094L1.07812 14.7109" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

const LatestNews = ({ userData }) => {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Latest");
  const [allArticles, setAllArticles] = useState([]);
  const [currentArticles, setCurrentArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [totalRows, setTotalRows] = useState(0);
  const [topArticles, setTopArticles] = useState([]);
  const [trendingList, setTrendingList] = useState([]);
  const [offersList, setOffersList] = useState([]);
  const [guidesList, setGuidesList] = useState([]);

  const tabs = ["Latest", "Promotions", "Strategies", "News", "Blog"];

  useEffect(() => {
    getSideArticlesData();
  }, []);

  const handlePageChange = (page) => {
    setPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const filterArticles = async () => {
    let type = activeTab === "Latest" ? undefined : activeTab;
    const response = await getBlogs(type, page);
    if (response && response.blogsList) {
      let length = response.length < 20 ? 1 : Math.ceil(response.length / 20);
      setTopArticles(response.blogsList.slice(0, 4));
      setCurrentArticles(response.blogsList.slice(4));
      setTotalPage(length);
      setLoading(false);
      setTotalRows(response.length);
    }
  };
  const getSideArticlesData = async () => {
    const response = await getSidebarBlogs();
    if (response && response.trendingList && response.guidesList && response.VendorsList) {
      setTrendingList(response.trendingList);
      setOffersList(response.VendorsList);
      setGuidesList(response.guidesList);
      setLoading(false);
    }
  };

  useEffect(() => {
    filterArticles();
  }, [activeTab, page]);


  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US");
  };

  return (
    <>
      <Meta
        title="Latest Online Poker News India | Rakebackk"
        description="Check Today's Latest Poker News in India at Rakebackk."
        link="https://www.rakebackk.com/latest-news"
      />

      {/* Mobile Dashboard design */}

      {loading ? <Loading size={"sm"} /> : <div className="BlogDashboard container-fluid ">


        <ul className="nav nav-pills sticky-top  z-3 py-2">

          {tabs.map((tab) => (
            <li key={tab} className="nav-item">
              <button
                className={`nav-link ${activeTab === tab ? "active" : ""}`}
                onClick={() => {
                  setActiveTab(tab);
                  setPage(1);
                }}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>


        <section id="latest" className="latestBLog">
          <h6>{activeTab}</h6>
          <small>Discover ideas, news and many more</small>
        </section>

        <section id="news" className="latestnews">
          <h6 className=""><span className="text-danger">Top</span> Stories</h6>
          <div className="mb-3">
            {topArticles && topArticles.length > 0 && <div className="mainPost" onClick={() => { navigate(`/news/${topArticles[0].title.replace(/[\s?]/g, "-")}-${topArticles[0]._id}`) }}>
              <div className="imageContainer">
                <img
                  src={topArticles[0].imageUrl || featuredBlogMain}
                  alt="Featured blog post"
                  className="mainImage"
                />
              </div>
              <div className="mainContent">
                <span className="category">{topArticles[0].type} <span>{formatDate(topArticles[0].date)}</span></span>
                <h3 className="mainTitle">{topArticles[0].title?.length > 40
                  ? topArticles[0].title.slice(0, 40) + "..."
                  : topArticles[0].title}</h3>
                <p className="description">
                  {topArticles[0].subheading?.length > 80
                    ? topArticles[0].subheading.slice(0, 80) + "..."
                    : topArticles[0].subheading}
                </p>
              </div>
            </div>}
          </div>

          {topArticles && topArticles.length > 1 && <div className=" LatestNewsDsg" onClick={() => { navigate(`/news/${topArticles[0].title.replace(/[\s?]/g, "-")}-${topArticles[1]._id}`) }}>
            <div className="LatestNewsDsgIMg" >
              <img src={topArticles[1].imageUrl || Promotion} className="" />
            </div>
            <div className="LatestNewsDsgTxt" >
              <p className="small">{
                topArticles[1].title?.length > 40
                  ? topArticles[1].title.slice(0, 40) + "..."
                  : topArticles[1].title
              }</p>
              <p className="LatestNewsDsgTxtDec"><span>{topArticles[1].type}</span> • {formatDate(topArticles[1].date)}</p>
            </div>
          </div>}
          {topArticles && topArticles.length > 2 && <div className=" LatestNewsDsg" onClick={() => { navigate(`/news/${topArticles[0].title.replace(/[\s?]/g, "-")}-${topArticles[2]._id}`) }}>
            <div className="LatestNewsDsgIMg" >
              <img src={topArticles[2].imageUrl || Promotion} className="" />
            </div>
            <div className="LatestNewsDsgTxt">
              <p className="small">{
                topArticles[2].title?.length > 40
                  ? topArticles[2].title.slice(0, 40) + "..."
                  : topArticles[2].title
              }</p>
              <p className="LatestNewsDsgTxtDec"><span>{topArticles[2].type}</span> • {formatDate(topArticles[2].date)}</p>
            </div>
          </div>}
        </section>


        <section id="promotions" className="latestnews">
          <div className="mb-3">
            {topArticles && topArticles.length > 3 && <div className="mainPost" onClick={() => { navigate(`/news/${topArticles[3].title.replace(/[\s?]/g, "-")}-${topArticles[3]._id}`) }}>
              <div className="imageContainer">
                <img
                  src={topArticles[3].imageUrl || featuredBlogMain}
                  alt="Featured blog post"
                  className="mainImage"
                />
              </div>
              <div className="mainContent">
                <span className="category">{topArticles[3].type} <span>{formatDate(topArticles[3].date)}</span></span>
                <h3 className="mainTitle">{topArticles[3].title?.length > 40
                  ? topArticles[3].title.slice(0, 40) + "..."
                  : topArticles[3].title}</h3>
                <p className="description">
                  {topArticles[3].subheading?.length > 80
                    ? topArticles[3].subheading.slice(0, 80) + "..."
                    : topArticles[3].subheading}
                </p>
              </div>
            </div>}
          </div>

          <div className="row mb-3">
            {currentArticles && currentArticles.length > 0 && currentArticles.map((article, index) => <div className="col-6 mb-2" key={index} onClick={() => { navigate(`/news/${article.title.replace(/[\s?]/g, "-")}-${article._id}`) }}>
              <img src={article.imageUrl} className="img-fluid rounded" />
              <p className="small">{article.title?.length > 40
                ? article.title.slice(0, 40) + "..."
                : article.title}</p>
            </div>)}
          </div>
        </section>

        {/* <CustomPagination
          rowsPerPage={20}
          rowCount={totalRows}
          onChangePage={handlePageChange}
          currentPage={page}
        /> */}



        <section id="strategies" className="OffersForU">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="mb-0">Offers For You</h6>
            <a href="#" className="text-danger small seeMOre">See More</a>
          </div>
          {offersList && offersList.length > 0 && offersList.map((offer, index) => (<div className="OfferDelfrU">
            <div className=" OffersForUchd LatestNewsDsg" key={offer._id}>
              <div className="LatestNewsDsgIMg">
                <img src={getPokerSiteImage(offer.name)} className="" />
              </div>
              <div className="LatestNewsDsgTxt">
                <p className="small">{offer.tagline}</p>
                <div class="SliderFooter">
                  <button class="ClaimNow" onClick={() => navigate(`/review/${offer._id}`)}>Claim Now</button>
                  <button class="Pokerbazzi25">{offer.couponCode}<span>Promo Code <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4018_17694)"><path d="M2.45841 1.00293H6.11683C6.45371 1.00293 6.72656 1.27579 6.72656 1.61267V5.88081H6.11683V1.61267H2.45841V1.00293ZM1.54381 2.2224H4.89736C5.23423 2.2224 5.50709 2.49526 5.50709 2.83214V7.10029C5.50709 7.43716 5.23423 7.71002 4.89736 7.71002H1.54381C1.20693 7.71002 0.934073 7.43716 0.934073 7.10029V2.83214C0.934073 2.49526 1.20693 2.2224 1.54381 2.2224ZM1.54381 7.10029H4.89736V2.83214H1.54381V7.10029Z" fill="#606060"></path></g><defs><clipPath id="clip0_4018_17694"><rect width="7.31683" height="7.31683" fill="white" transform="matrix(-1 0 0 1 7.33594 0.698242)"></rect></clipPath></defs></svg></span></button>
                </div>
              </div>
            </div>
          </div>))}
        </section>

        <section id="blogs" className="OffersForU OffersForUsecnd mt-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="mb-0">Guides</h6>
            {/* <a href="#" className="text-danger small seeMOre">See More</a> */}
          </div>
          <div className="OffersForUsecnddiv">

            {guidesList && guidesList.length > 0 && guidesList.map((guide, index) => (
              <div className=" OffersForUsecnddivCard" key={guide._id} onClick={() => { navigate(`/news/${guide.title.replace(/[\s?]/g, "-")}-${guide._id}`) }}>
                <div className="LatestNewsDsgIMg">
                  <img src={guide.imageUrl} className="" />
                </div>
                <div className="cardOfferSecond">
                  <p className="small">{guide.title?.length > 40
                    ? guide.title.slice(0, 40) + "..."
                    : guide.title}</p>
                  <span className="">{guide.type}</span>
                </div>
              </div>

            ))}

          </div>

          <div className="mt-4 mb-5">
            <div className="d-grid gap-2 OfferListCard">
              <button className="btn btn-dark text-start">
                <ShoppingBag size={18} className="me-2" />
                <div className="Descptofr">
                  <p>Bet $4 Get $45 in Free Betsdcvdcddcdcdc</p>
                  <span>T&Cs Apply</span>
                </div>
                <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.21484L9 9.21484L1 17.2148" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <button className="btn btn-dark text-start">
                <ShoppingBag size={18} className="me-2" />
                <div className="Descptofr">
                  <p>Bet $4 Get $45 in Free Betsdcvdcddcdcdc</p>
                  <span>T&Cs Apply</span>
                </div>
                <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.21484L9 9.21484L1 17.2148" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <button className="btn btn-dark text-start">
                <ShoppingBag size={18} className="me-2" />
                <div className="Descptofr">
                  <p>Bet $4 Get $45 in Free Betsdcvdcddcdcdc</p>
                  <span>T&Cs Apply</span>
                </div>
                <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.21484L9 9.21484L1 17.2148" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <button className="btn  btn-primary text-start">
                <ShoppingBag size={18} className="me-2" />
                <div className="Descptofr">
                  <p>Bet $4 Get $45 in Free Betsdcvdcddcdcdc</p>
                  <span>T&Cs Apply</span>
                </div>
                <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.21484L9 9.21484L1 17.2148" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <button className="btn btn-danger text-start">
                <ShoppingBag size={18} className="me-2" />
                <div className="Descptofr">
                  <p>Bet $4 Get $45 in Free Betsdcvdcddcdcdc</p>
                  <span>T&Cs Apply</span>
                </div>
                <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.21484L9 9.21484L1 17.2148" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <div className="AddClass">

        </div>

        <DashboardFooter active={3} />

      </div>}
    </>
  );
};

export default LatestNews;
