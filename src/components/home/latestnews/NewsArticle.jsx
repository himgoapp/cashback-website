import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById, getBlogs, getSidebarBlogs } from "../../../servicefile/blogservice";
import styles from "./blogDetail.module.css";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import RightSidebar from "./RightSidebar";
import Meta from "../../../Meta";
import Reveal from "../../common/reveal/Reveal";
import FeaturedCardImage from '../../../assets/Logos_and_illustration/FeaturedCardImage.svg'


import PofileIcon from '../../../assets/Logos_and_illustration/ProfileIconGrey.svg'
import Loading from "../../common/Loading/Loading";
import NewsArticleHTMLData from "./LoadHTMLcontent";

const NewArticle = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [tocVisible, setTocVisible] = useState(!isMobile);
  const [currentArticles, setCurrentArticles] = useState([]);
  const [trendingList, setTrendingList] = useState([]);
  const [offersList, setOffersList] = useState([]);
  const [guidesList, setGuidesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editorsList, setEditorsList] = useState([]);
  const headingsRef = useRef([]);
  const sectionRefs = useRef({});
  const tocRef = useRef(null);

  const fetchBlog = async () => {
    if (!blogId) return;
    try {
      let id = blogId.substring(blogId.lastIndexOf("-") + 1);
      const blogData = await getBlogById(id);
      const fetchedBlog =
        blogData?.data?.product?.[0] || blogData?.product?.[0];

      if (fetchedBlog) {
        setBlog(fetchedBlog);
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  const getSideArticlesData = async () => {
    const response = await getSidebarBlogs();
    if (response && response.trendingList && response.guidesList && response.VendorsList) {
      setTrendingList(response.trendingList);
      setOffersList(response.VendorsList);
      setGuidesList(response.guidesList);
      setLoading(false);
      setEditorsList(response.editorChoiceList || []);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [blogId]);

  useEffect(() => {
    getSideArticlesData();
  }, []);

  // const fetchRelatedArticles = async () => {
  //   if (!blog || !blog.type) return;

  //   try {
  //     const response = await getBlogs(blog.type, 1);
  //     if (response && response.blogsList) {
  //       const relatedPosts = response.blogsList
  //         .filter((post) => post._id !== blog._id)
  //         .slice(0, 5);
  //       setCurrentArticles(relatedPosts);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching related articles:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchRelatedArticles();
  // }, [blog]);

  // useEffect(() => {
  //   if (blog && headingsRef.current.length > 0) {
  //     const refs = {};
  //     headingsRef.current.forEach((section) => {
  //       const element = document.getElementById(section.id);
  //       if (element) {
  //         refs[section.id] = element;
  //       }
  //     });
  //     sectionRefs.current = refs;

  //     if (headingsRef.current.length > 0 && !activeSection) {
  //       setActiveSection(headingsRef.current[0].id);
  //     }
  //   }
  // }, [blog, headingsRef.current.length]);

  // useEffect(() => {
  //   if (!blog || headingsRef.current.length === 0) return;

  //   const observerOptions = {
  //     root: null,
  //     rootMargin: "-100px 0px -70% 0px",
  //     threshold: 0,
  //   };

  //   const observerCallback = (entries) => {
  //     const visibleSections = entries
  //       .filter((entry) => entry.isIntersecting)
  //       .map((entry) => entry.target.id);

  //     if (visibleSections.length > 0) {
  //       setActiveSection(visibleSections[0]);
  //     } else if (entries.length > 0) {
  //       const scrollPosition = window.scrollY;
  //       let closestSection = null;
  //       let closestDistance = Infinity;

  //       headingsRef.current.forEach((section) => {
  //         const element = document.getElementById(section.id);
  //         if (element) {
  //           const distance = Math.abs(element.offsetTop - scrollPosition);
  //           if (distance < closestDistance) {
  //             closestDistance = distance;
  //             closestSection = section.id;
  //           }
  //         }
  //       });

  //       if (closestSection) {
  //         setActiveSection(closestSection);
  //       }
  //     }
  //   };

  //   const observer = new IntersectionObserver(
  //     observerCallback,
  //     observerOptions
  //   );

  //   headingsRef.current.forEach((section) => {
  //     const element = document.getElementById(section.id);
  //     if (element) {
  //       observer.observe(element);
  //     }
  //   });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [blog, headingsRef.current.length]);

  // useEffect(() => {
  //   updateProgressLine();
  // }, [activeSection, tocVisible]);

  // const updateProgressLine = () => {
  //   if (!activeSection || !tocVisible || !tocRef.current) return;

  //   const activeItem = tocRef.current.querySelector(`.${styles.active}`);
  //   if (!activeItem) return;

  //   const activeIndex = headingsRef.current.findIndex(
  //     (item) => item.id === activeSection
  //   );
  //   if (activeIndex === -1) return;

  //   const position = activeItem.offsetTop + activeItem.offsetHeight / 2;

  //   const tocList = tocRef.current.querySelector("ul");
  //   if (tocList) {
  //     tocList.style.setProperty("--active-section-bottom", `${position}px`);
  //   }
  // };


  // useEffect(() => {
  //   const checkScreenSize = () => {
  //     const newIsMobile = window.innerWidth < 768;
  //     setIsMobile(newIsMobile);
  //     if (!newIsMobile) {
  //       setTocVisible(true);
  //       setTimeout(updateProgressLine, 100);
  //     }
  //   };

  //   window.addEventListener("resize", checkScreenSize);
  //   return () => window.removeEventListener("resize", checkScreenSize);
  // }, [tocVisible]);


  // useEffect(() => {
  //   // Reload Twitter embeds
  //   if (window.twttr && window.twttr.widgets) {
  //     window.twttr.widgets.load();
  //   }

  //   // Reload Instagram embeds
  //   if (window.instgrm) {
  //     window.instgrm.Embeds.process();
  //   }

  //   // Facebook embeds auto-render if FB SDK is loaded
  //   if (window.FB) {
  //     window.FB.XFBML.parse();
  //   }
  // }, [blog?.content]);

  if (!blog || !blog.content) return <p></p>;
  headingsRef.current = [];







  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",  // "Mar"
      day: "numeric",  // "28"
      year: "numeric"  // "2020"
    }).replace(/^(\w+)/, "$1."); // add period after month
  }



  return (
    <div style={{ width: "100%" }}>
      <Meta
        title={blog.title}
        description={blog.subheading}
        link={`https://www.rakebackk.com/news/${blogId}`}
      />
      <div className="NewsChildpAge DesktopLatestNews">
        <div class="container">
          <div className="row">
            <div className="col-lg-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/">Home</a></li>
                  <li class="breadcrumb-item"><a href="/latest-news">{blog.type}</a></li>
                  <li class="breadcrumb-item active text-danger" aria-current="page">
                    {blog.title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className=" single-post-row">
            <div className="single-post-left">
              <h1 className="blogHedEXtra">
                {blog.title}
              </h1>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="meta-info">
                  <span>{formatDate(blog.createdAt)}</span>  <span> <img src={PofileIcon} /> {blog.author}</span>
                </div>
                <div className="social-icons">
                  <span className="">Share this</span>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.535156 8.3286C0.535156 12.343 3.45074 15.6811 7.26393 16.3581V10.5262H5.2453V8.28352H7.26393V6.48895C7.26393 4.47032 8.56461 3.34931 10.4043 3.34931C10.987 3.34931 11.6154 3.4388 12.1981 3.52829V5.59201H11.1666C10.1795 5.59201 9.95545 6.08523 9.95545 6.71369V8.28352H12.1087L11.75 10.5262H9.95545V16.3581C13.7686 15.6811 16.6842 12.3437 16.6842 8.3286C16.6842 3.86271 13.0507 0.208984 8.60969 0.208984C4.1687 0.208984 0.535156 3.86271 0.535156 8.3286Z" fill="black" fill-opacity="0.5" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <path d="M8.76868 0.333984C4.37934 0.333984 0.820312 3.89301 0.820312 8.28235C0.820312 12.6717 4.37934 16.2307 8.76868 16.2307C13.158 16.2307 16.7171 12.6717 16.7171 8.28235C16.7171 3.89301 13.158 0.333984 8.76868 0.333984ZM12.5885 6.32542C12.5938 6.40881 12.5938 6.49575 12.5938 6.58091C12.5938 9.18542 10.6103 12.1856 6.98562 12.1856C5.86788 12.1856 4.83176 11.8609 3.95885 11.302C4.11853 11.3198 4.27111 11.3269 4.43434 11.3269C5.35692 11.3269 6.20498 11.0146 6.88094 10.4859C6.01514 10.4682 5.28772 9.90042 5.03934 9.11977C5.34272 9.16413 5.61595 9.16413 5.9282 9.08429C5.4824 8.99372 5.08169 8.7516 4.79417 8.39907C4.50665 8.04653 4.35004 7.60534 4.35095 7.15042V7.12558C4.61176 7.27284 4.91869 7.36332 5.23982 7.37574C4.96986 7.19583 4.74847 6.95209 4.59528 6.66612C4.44208 6.38016 4.36181 6.06081 4.3616 5.73639C4.3616 5.36913 4.4574 5.03381 4.6295 4.74285C5.12432 5.35199 5.74179 5.85019 6.44177 6.20507C7.14175 6.55995 7.90857 6.76357 8.69239 6.80268C8.41384 5.46317 9.41449 4.37914 10.6174 4.37914C11.1851 4.37914 11.6961 4.61688 12.0563 5.0001C12.5016 4.91672 12.9274 4.74994 13.3071 4.52639C13.1598 4.98236 12.8511 5.36736 12.4413 5.61042C12.8387 5.56784 13.2219 5.45784 13.5767 5.30349C13.3088 5.69736 12.9735 6.04688 12.5885 6.32542Z" fill="black" fill-opacity="0.5" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.87359 0.925269C5.66288 0.888934 5.91453 0.880859 7.92509 0.880859C9.93565 0.880859 10.1873 0.889607 10.9759 0.925269C11.7645 0.960932 12.3028 1.08676 12.7739 1.26911C13.2671 1.4555 13.7145 1.74685 14.0846 2.12366C14.4614 2.49307 14.7521 2.93987 14.9378 3.43376C15.1208 3.90477 15.246 4.44307 15.2823 5.23034C15.3187 6.02097 15.3267 6.27263 15.3267 8.28252C15.3267 10.2931 15.318 10.5447 15.2823 11.334C15.2467 12.1213 15.1208 12.6596 14.9378 13.1306C14.7521 13.6246 14.4609 14.0721 14.0846 14.442C13.7145 14.8188 13.2671 15.1095 12.7739 15.2952C12.3028 15.4783 11.7645 15.6034 10.9773 15.6398C10.1873 15.6761 9.93565 15.6842 7.92509 15.6842C5.91453 15.6842 5.66288 15.6754 4.87359 15.6398C4.08633 15.6041 3.54802 15.4783 3.07701 15.2952C2.58306 15.1095 2.13553 14.8183 1.76557 14.442C1.38901 14.0724 1.09761 13.6251 0.911688 13.1313C0.729338 12.6603 0.604183 12.122 0.567847 11.3347C0.531512 10.5441 0.523438 10.2924 0.523438 8.28252C0.523438 6.27196 0.532185 6.0203 0.567847 5.23169C0.60351 4.44307 0.729338 3.90477 0.911688 3.43376C1.09789 2.93992 1.38951 2.49261 1.76624 2.12299C2.13568 1.74652 2.58276 1.45512 3.07634 1.26911C3.54735 1.08676 4.08565 0.961605 4.87292 0.925269H4.87359ZM10.916 2.25757C10.1355 2.2219 9.90134 2.2145 7.92509 2.2145C5.94885 2.2145 5.71469 2.2219 4.93415 2.25757C4.21215 2.29054 3.82054 2.41098 3.55946 2.51259C3.21428 2.64716 2.96733 2.80664 2.70827 3.06569C2.4627 3.3046 2.27371 3.59544 2.15517 3.91688C2.05356 4.17796 1.93312 4.56958 1.90015 5.29157C1.86448 6.07211 1.85708 6.30627 1.85708 8.28252C1.85708 10.2588 1.86448 10.4929 1.90015 11.2735C1.93312 11.9955 2.05356 12.3871 2.15517 12.6481C2.27359 12.9691 2.46267 13.2605 2.70827 13.4993C2.94714 13.7449 3.2385 13.934 3.55946 14.0524C3.82054 14.154 4.21215 14.2745 4.93415 14.3075C5.71469 14.3431 5.94818 14.3505 7.92509 14.3505C9.90201 14.3505 10.1355 14.3431 10.916 14.3075C11.638 14.2745 12.0296 14.154 12.2907 14.0524C12.6359 13.9179 12.8829 13.7584 13.1419 13.4993C13.3875 13.2605 13.5766 12.9691 13.695 12.6481C13.7966 12.3871 13.9171 11.9955 13.95 11.2735C13.9857 10.4929 13.9931 10.2588 13.9931 8.28252C13.9931 6.30627 13.9857 6.07211 13.95 5.29157C13.9171 4.56958 13.7966 4.17796 13.695 3.91688C13.5604 3.5717 13.401 3.32475 13.1419 3.06569C12.903 2.82014 12.6122 2.63116 12.2907 2.51259C12.0296 2.41098 11.638 2.29054 10.916 2.25757ZM6.9797 10.5642C7.50768 10.784 8.09559 10.8137 8.64301 10.6482C9.19043 10.4826 9.6634 10.1322 9.98114 9.6567C10.2989 9.18119 10.4417 8.61012 10.3852 8.04102C10.3286 7.47193 10.0763 6.94011 9.67121 6.5364C9.41299 6.27833 9.10075 6.08073 8.75699 5.95782C8.41323 5.83491 8.0465 5.78975 7.68319 5.82558C7.31988 5.86141 6.96904 5.97736 6.65591 6.16506C6.34279 6.35276 6.07518 6.60755 5.87235 6.91109C5.66951 7.21463 5.5365 7.55937 5.48289 7.92048C5.42928 8.28159 5.45641 8.6501 5.56231 8.99948C5.66821 9.34885 5.85026 9.6704 6.09535 9.94097C6.34044 10.2115 6.64247 10.4244 6.9797 10.5642ZM5.23493 5.59235C5.58821 5.23907 6.00761 4.95884 6.46919 4.76764C6.93077 4.57645 7.42548 4.47805 7.92509 4.47805C8.4247 4.47805 8.91942 4.57645 9.381 4.76764C9.84258 4.95884 10.262 5.23907 10.6153 5.59235C10.9685 5.94563 11.2488 6.36503 11.44 6.82661C11.6312 7.28819 11.7296 7.78291 11.7296 8.28252C11.7296 8.78212 11.6312 9.27684 11.44 9.73842C11.2488 10.2 10.9685 10.6194 10.6153 10.9727C9.90178 11.6862 8.9341 12.087 7.92509 12.087C6.91609 12.087 5.9484 11.6862 5.23493 10.9727C4.52145 10.2592 4.12063 9.29152 4.12063 8.28252C4.12063 7.27351 4.52145 6.30583 5.23493 5.59235ZM12.5733 5.04463C12.6609 4.96204 12.731 4.86274 12.7794 4.75258C12.8279 4.64243 12.8538 4.52366 12.8555 4.40333C12.8573 4.28299 12.8349 4.16353 12.7897 4.052C12.7444 3.94048 12.6772 3.83917 12.5921 3.75407C12.507 3.66897 12.4057 3.60181 12.2942 3.55657C12.1827 3.51133 12.0632 3.48892 11.9429 3.49067C11.8226 3.49243 11.7038 3.51831 11.5936 3.56678C11.4835 3.61526 11.3842 3.68534 11.3016 3.77289C11.141 3.94315 11.0531 4.16929 11.0565 4.40333C11.0599 4.63736 11.1544 4.86085 11.3199 5.02635C11.4854 5.19186 11.7089 5.28634 11.9429 5.28976C12.1769 5.29317 12.4031 5.20524 12.5733 5.04463Z" fill="black" fill-opacity="0.5" />
                    </svg>
                  </a>
                </div>
              </div>

              <img src={blog.imageUrl} alt="Spartan Poker" className="articleimageblog" />

              <div className="article-content">
                <p>
                  {blog.subheading}
                </p>

              </div>

              {/* start content from here */}
              {blog && blog.content && <NewsArticleHTMLData article={blog} />}

              {/* <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
              > */}

              {/* <h5 className="contentChildHEd">Breaking Down the Grid</h5>
                <p>
                  Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                </p>

                <p><strong>Columns:</strong> Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</p>

                <p><strong>Gutters:</strong> The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.</p>

                <img src={FeaturedCardImage} alt="Spartan Poker" className="articleimageblog" />

                <ul>
                  <p>Using a grid benefits both end users and the designers alike:</p>
                  <li>
                    Designers can quickly put together well-aligned interfaces.
                  </li>
                  <li>
                    Users can easily scan predictable grid-based interfaces.
                  </li>
                  <li>
                    A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.
                  </li>
                </ul>

                <p><strong>Always place content within columns, not gutters:</strong> Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</p>

                <div className="BlogContentImg">
                  <img src={FeaturedCardImage} alt="Spartan Poker" className="articleimageblog" />
                  <p>Content or elements should be placed within and across columns, not gutters.</p>
                </div>



                <p><strong>Columns:</strong> Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</p>

                <p><strong>Gutters:</strong> The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.</p>


                <h5 className="contentChildHEd">Conclusion</h5>
                <p>
                  Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.
                </p> */}
              {/* </div> */}


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

                  {blog.tagTypes && blog.tagTypes.length > 0 && blog.tagTypes.map((item, index) => {
                    return <span className="badge-custom" key={index}>{item}</span>
                  })}
                </div>

              </div>

            </div>

            {/* end content design here */}



            {/* sidebar and footer part */}
            <div class="single-post-right sidebar RightsidebarBlog">
              {/* <div className="SpacedicAdd"></div> */}
              <div class="card mb-3 ">
                <div class="card-header">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="23" viewBox="0 0 17 23" fill="none">
                    <path d="M16.3611 12.3306C14.6175 7.81725 8.13687 7.76501 10.5946 0.441406C5.89954 2.54133 2.18127 7.94262 5.85754 15.0782C0.658248 12.9052 2.93754 7.46205 2.93754 7.46205C2.93754 7.46205 0.101562 9.19631 0.101562 14.4409C0.500698 20.2914 5.4689 22.0883 7.25451 22.3182C9.80685 22.6421 12.5693 22.1719 14.5545 20.3646C16.7393 18.3482 17.5375 15.1304 16.3611 12.3306ZM6.61384 17.5855C8.12627 17.2199 8.90355 16.1333 9.11371 15.1723C9.46021 13.6782 8.10534 12.2157 9.0191 9.85447C9.36574 11.8081 12.4538 13.0305 12.4538 15.1618C12.5378 17.805 9.6599 20.0721 6.61384 17.5855Z" fill="#000" />
                  </svg>
                  Trending
                </div>

                <div class="sidePost col-lg-12">
                  <ul class="SidepostUL">
                    {trendingList && trendingList.length > 0 && trendingList.map((item, index) => (
                      <li key={index}>
                        <a href={`/news/${item.title.replace(/[\s?]/g, "-")}-${item._id}`}>{item.title} </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>


              <div class="card Offerscard mb-3 ">
                <div class="card-header ">
                  Offer for you
                </div>

                {offersList && offersList.length > 0 && offersList.map((offer, index) => (
                  <div class="sidePost col-lg-12" key={offer._id} >
                    <div class=" OffersForUchd LatestNewsDsg">
                      <div class="LatestNewsDsgIMg">
                        <img src={FeaturedCardImage} class="" />
                      </div>
                      <div class="LatestNewsDsgTxt">
                        <p class="small">{offer.tagline}</p>
                        <div class="SliderFooter">
                          <button class="ClaimNow" onClick={() => navigate("/offer-and-deals")}>Claim Now</button>
                          <button class="Pokerbazzi25">{offer.couponCode}
                            <span>Promo Code <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4018_17694)"><path d="M2.45841 1.00293H6.11683C6.45371 1.00293 6.72656 1.27579 6.72656 1.61267V5.88081H6.11683V1.61267H2.45841V1.00293ZM1.54381 2.2224H4.89736C5.23423 2.2224 5.50709 2.49526 5.50709 2.83214V7.10029C5.50709 7.43716 5.23423 7.71002 4.89736 7.71002H1.54381C1.20693 7.71002 0.934073 7.43716 0.934073 7.10029V2.83214C0.934073 2.49526 1.20693 2.2224 1.54381 2.2224ZM1.54381 7.10029H4.89736V2.83214H1.54381V7.10029Z" fill="#606060"></path></g><defs><clipPath id="clip0_4018_17694"><rect width="7.31683" height="7.31683" fill="white" transform="matrix(-1 0 0 1 7.33594 0.698242)"></rect></clipPath></defs></svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="SpacedicAdd SpacedicAddsBAckground"></div>

              <div class="card  mb-3 ">
                <div class="card-header">
                  Guides
                </div>

                {guidesList && guidesList.length > 0 && guidesList.map((guide, index) => (
                  <div class="sidePost col-lg-12" key={guide._id} onClick={() => { navigate(`/news/${guide.title.replace(/[\s?]/g, "-")}-${guide._id}`) }}>
                    <div class="sideImageContainer">
                      <img src={guide.imageUrl} alt="POKER HANDS " class="sideImage" />
                    </div>
                    <div class="sideContent">
                      <p class="sideDescription">{guide.title}</p>
                    </div>
                  </div>

                ))}
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

          <div className="row BlogBottomNewSectionRow" >
            <div className="col-lg-12 BlogBottomNewSection">
              <h3>Editors Choice</h3>
            </div>

            {editorsList && editorsList.length > 0 && editorsList.map((editor, index) => (
              <div class="sidePost col-lg-3" key={editor._id} onClick={() => { navigate(`/news/${editor.title.replace(/[\s?]/g, "-")}-${editor._id}`) }}>
                <div class="sideImageContainer">
                  <img src={editor.imageUrl} alt="POKER HANDS " class="sideImage" />
                </div>
                <div class="sideContent">
                  <p class="sideDescription">{editor.title?.length > 40
                    ? editor.title.slice(0, 40) + "..."
                    : editor.title}</p>
                  <div class="AutherINfo">
                    <h3>{editor.type}</h3>
                    <span>.</span>
                    <p>{formatDate(editor.createdAt)}</p>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArticle;
