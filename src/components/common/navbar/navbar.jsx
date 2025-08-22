import React, { useState, useEffect, useContext } from "react";
import styles from "./navbar.module.css";
import Navbtn from "../button/navbtn/navbtn";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../logo/logo";
import Logo_Red from "../../../assets/Logos_and_illustration/Logo_Red.svg";
import { UserContext } from "../../../App";
import { CrossIcon } from "../../../assets/vectors";
import Reveal from "../reveal/Reveal";

import BigCash from "../../../assets/WebsiteIcon/BigCash.svg";
import jungleeIcon from "../../../assets/WebsiteIcon/jungleeIcon.svg";
import pokerbazzi from "../../../assets/WebsiteIcon/pokerbazzi.svg";
import pokerdangal from "../../../assets/WebsiteIcon/pokerdangal.svg";
import spartan from "../../../assets/WebsiteIcon/spartan.svg";
import ACRPoker from "../../../assets/ACRPoker.png";

const Navbar = ({ hide }) => {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSignInClick = () => {
    navigate("/login");
  };

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  const onLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const navItems = [
    { to: "/offer-and-deals", label: "Hot Deals" },
    { to: "/latest-news", label: "News" },
    { to: "/poker-guides", label: "Poker Guides" },
    { to: "/strategies", label: "Strategies" },
    { to: "/faq", label: "FAQs" },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);




  return (
    <>
      <header className={` RakebackHeader ${hide ? "" : "sticky-top"} bg-white`} >
        {/* Top header row */}
        <div className="container py-2 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            {/* Navbar toggler (mobile) */}
            <button
              className={showMenu ? "navbar-toggler me-2 d-lg-none activetoggle" : "navbar-toggler me-2 d-lg-none"}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              onClick={() => setShowMenu(!showMenu)}
            >
              <span className="navbar-toggler-icon"></span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L15 15" stroke="black" stroke-width="2" stroke-linecap="round" />
                <path d="M15 1L1 15" stroke="black" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>

            {/* Logo */}
            <a href="/" className="navbar-brand fw-bold text-danger">
              <svg width="184" height="36" viewBox="0 0 184 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6337 18.9312C26.4791 17.1596 26.9157 15.2207 26.9111 13.2577C26.9111 5.95107 20.97 0 13.6534 0C6.33681 0 0.38674 5.95107 0.38674 13.2577C0.384727 15.2246 0.824335 17.1669 1.67313 18.9412C0.585289 20.3354 -0.00380032 22.054 1.84499e-05 23.8223C0.00187767 25.9532 0.849861 27.9961 2.35753 29.5018C3.8652 31.0076 5.90914 31.8531 8.03998 31.8523C9.35643 31.8523 11.1578 31.4155 12.2478 30.8504C12.2168 30.9506 12.1777 31.0588 12.1386 31.167C12.1262 31.2084 12.1095 31.2484 12.0885 31.2862C11.9086 31.7335 11.69 32.1643 11.4353 32.5736C11.4052 32.6337 11.3662 32.6918 11.3261 32.762C10.5814 33.9944 9.6305 35.0896 8.51486 36H18.792C17.6808 35.0848 16.7303 33.9904 15.9798 32.762C15.9407 32.6918 15.9006 32.6337 15.8716 32.5736C15.6169 32.1641 15.3981 31.7333 15.2173 31.2862C15.205 31.2448 15.1882 31.2048 15.1672 31.167C15.1292 31.0588 15.0891 30.9496 15.059 30.8504C16.1611 31.4145 17.9644 31.8523 19.2769 31.8523C20.7779 31.8563 22.2498 31.4387 23.5251 30.6471C24.8004 29.8555 25.8277 28.7217 26.4902 27.3749C27.1527 26.028 27.4236 24.5222 27.2722 23.0288C27.1208 21.5355 26.5531 20.1147 25.6337 18.9282V18.9312ZM17.702 1.10906C20.2623 1.96584 22.4871 3.60833 24.0598 5.8028L20.9109 8.06C19.8149 6.52749 18.2625 5.38052 16.4757 4.7829L17.702 1.10906ZM9.80126 1.04093L10.9594 4.73381C9.0699 5.33493 6.47507 7.93978 6.47507 7.93978L3.36929 5.63549C4.97641 3.46533 7.22722 1.8575 9.80126 1.04093ZM15.0691 26.0004C15.0161 25.9989 14.9632 26.0019 14.9108 26.0094C14.7266 26.0331 14.5413 26.0465 14.3557 26.0495C14.2937 26.0586 14.231 26.0623 14.1684 26.0605C13.9891 26.0695 13.8217 26.0795 13.6534 26.0795C13.4851 26.0795 13.3258 26.0695 13.1585 26.0605C13.0889 26.0623 13.0192 26.0586 12.9501 26.0495C12.7682 26.0465 12.5865 26.0331 12.4061 26.0094C12.336 26.0004 12.2679 26.0004 12.2057 25.9904C11.83 25.9503 11.4523 25.8902 11.0877 25.822C11.0819 25.8173 11.075 25.8142 11.0676 25.813C10.8672 25.773 10.6809 25.7329 10.4825 25.6838C10.4558 25.6757 10.4296 25.6657 10.4044 25.6537C4.91015 24.2121 0.841584 19.2027 0.841584 13.2577V13.1294L4.73283 13.1695V13.2376C4.73084 14.1871 4.88484 15.1303 5.18868 16.0298C11.3662 11.3461 13.6534 5.25778 13.6534 5.25778C13.6534 5.25778 15.9407 11.3461 22.1182 16.0298C22.4113 15.1515 22.5648 14.2327 22.573 13.3068L26.4643 13.3468C26.4162 19.892 21.4339 25.2871 15.0691 26.0004Z" fill="#FF4053" />
                <path d="M42.4903 26H38.2651V10.415H44.7992C46.0306 10.415 47.1389 10.6074 48.124 10.9923C49.1091 11.3771 49.8865 11.9543 50.456 12.7239C51.0255 13.4782 51.3103 14.4325 51.3103 15.5869C51.3103 16.4489 51.1179 17.2262 50.733 17.9189C50.3636 18.5962 49.8403 19.1349 49.163 19.5351C48.5011 19.9353 47.7161 20.1354 46.8079 20.1354L45.6535 19.3273C46.5771 19.3273 47.3005 19.4351 47.8239 19.6506C48.3626 19.8661 48.809 20.2201 49.163 20.7127C49.517 21.2052 49.9018 21.8748 50.3174 22.7214L51.9106 26H47.2697L45.8151 23.0677C45.6458 22.7137 45.4534 22.4289 45.2379 22.2134C45.0224 21.9979 44.7607 21.844 44.4529 21.7517C44.145 21.6593 43.7602 21.6131 43.2984 21.6131H42.1671V17.8266H44.7992C45.2148 17.8266 45.5842 17.7573 45.9075 17.6188C46.2307 17.4648 46.477 17.257 46.6463 16.9954C46.831 16.7183 46.9234 16.395 46.9234 16.0256C46.9234 15.6254 46.831 15.3022 46.6463 15.0559C46.477 14.8096 46.2307 14.6326 45.9075 14.5249C45.5996 14.4017 45.2456 14.3401 44.8454 14.3401H42.5365L42.4903 26ZM65.6932 23.3679H56.7578V19.5582H65.6932V23.3679ZM53.179 26L57.1965 12.8855C57.4889 11.9312 57.9969 11.2231 58.7203 10.7614C59.4438 10.2996 60.2057 10.0687 61.0061 10.0687C61.8219 10.0687 62.5839 10.2996 63.2919 10.7614C64.0154 11.2231 64.5233 11.9312 64.8158 12.8855L68.8332 26H64.4695L61.2139 14.1323C61.1678 13.9784 61.1062 13.9015 61.0292 13.9015C60.9523 13.9015 60.8907 13.9784 60.8445 14.1323L57.5428 26H53.179ZM86.0808 26H80.8858L77.8612 21.5208C77.4763 20.9358 77.1762 20.374 76.9607 19.8353C76.7452 19.2811 76.6374 18.7424 76.6374 18.2191C76.6374 17.6803 76.7375 17.1416 76.9376 16.6028C77.1377 16.0487 77.4456 15.4869 77.8612 14.9174L81.1398 10.415H85.9422L81.9017 16.0256C81.5785 16.472 81.3322 16.8491 81.1629 17.157C81.0089 17.4648 80.932 17.765 80.932 18.0574C80.932 18.3499 81.0089 18.6501 81.1629 18.9579C81.3322 19.2658 81.5785 19.6506 81.9017 20.1123L86.0808 26ZM75.2983 26H71.0269V10.415H75.2983V26ZM78.4846 16.2796V20.2047H73.9361V16.2796H78.4846ZM99.7306 26H91.6264C90.3181 26 89.3714 25.6768 88.7865 25.0303C88.217 24.3838 87.9322 23.5141 87.9322 22.4212V13.9938C87.9322 12.9009 88.217 12.0313 88.7865 11.3848C89.3714 10.7383 90.3181 10.415 91.6264 10.415H99.6152V14.2247H92.2037V22.1903H99.7306V26ZM99.0841 20.1123H91.2801L90.7029 16.3027H99.0841V20.1123ZM109.263 26H102.729V10.415H109.263C111.233 10.415 112.773 10.8152 113.881 11.6157C114.989 12.4161 115.543 13.4859 115.543 14.825C115.543 15.6716 115.335 16.3873 114.92 16.9723C114.504 17.5572 113.942 18.0036 113.234 18.3114C112.526 18.6039 111.718 18.7501 110.81 18.7501V17.942C111.672 17.942 112.472 18.042 113.211 18.2422C113.95 18.4423 114.543 18.8117 114.989 19.3504C115.435 19.8738 115.659 20.6203 115.659 21.59C115.659 22.3135 115.505 22.9523 115.197 23.5064C114.889 24.0605 114.45 24.5223 113.881 24.8917C113.327 25.2612 112.657 25.5382 111.872 25.7229C111.087 25.9076 110.217 26 109.263 26ZM107 20.0431V22.5367H109.494C109.802 22.5367 110.071 22.5136 110.302 22.4674C110.533 22.4212 110.725 22.352 110.879 22.2596C111.049 22.1519 111.172 22.021 111.249 21.8671C111.341 21.7132 111.387 21.5208 111.387 21.2899C111.387 20.7973 111.218 20.4664 110.879 20.2971C110.556 20.1277 110.094 20.0431 109.494 20.0431H107ZM107 13.8784V16.5798H109.494C110.094 16.5798 110.541 16.4566 110.833 16.2103C111.126 15.9641 111.272 15.6177 111.272 15.1713C111.272 14.7711 111.126 14.4556 110.833 14.2247C110.556 13.9938 110.11 13.8784 109.494 13.8784H107ZM129.684 23.3679H120.748V19.5582H129.684V23.3679ZM117.169 26L121.187 12.8855C121.479 11.9312 121.987 11.2231 122.711 10.7614C123.434 10.2996 124.196 10.0687 124.996 10.0687C125.812 10.0687 126.574 10.2996 127.282 10.7614C128.006 11.2231 128.514 11.9312 128.806 12.8855L132.824 26H128.46L125.204 14.1323C125.158 13.9784 125.097 13.9015 125.02 13.9015C124.943 13.9015 124.881 13.9784 124.835 14.1323L121.533 26H117.169ZM141.631 26.3463C140.462 26.3463 139.376 26.1385 138.376 25.7229C137.391 25.3073 136.521 24.7301 135.767 23.9913C135.028 23.2524 134.451 22.3904 134.035 21.4053C133.62 20.4202 133.412 19.3581 133.412 18.2191C133.412 17.08 133.62 16.0179 134.035 15.0328C134.451 14.0477 135.028 13.1857 135.767 12.4469C136.521 11.708 137.391 11.1308 138.376 10.7152C139.376 10.2996 140.462 10.0918 141.631 10.0918C142.555 10.0918 143.448 10.2534 144.31 10.5767C145.187 10.8845 145.972 11.3386 146.665 11.9389C147.357 12.5392 147.889 13.2704 148.258 14.1323L144.772 16.0718C144.448 15.4869 144.04 15.0174 143.548 14.6634C143.055 14.3094 142.355 14.1323 141.447 14.1323C140.893 14.1323 140.392 14.2324 139.946 14.4325C139.5 14.6326 139.115 14.9174 138.792 15.2868C138.468 15.6408 138.222 16.0718 138.053 16.5798C137.883 17.0723 137.799 17.6188 137.799 18.2191C137.799 18.8194 137.883 19.3735 138.053 19.8815C138.222 20.374 138.461 20.805 138.768 21.1744C139.092 21.5285 139.476 21.8055 139.923 22.0056C140.385 22.2057 140.893 22.3058 141.447 22.3058C142.355 22.3058 143.063 22.1288 143.571 21.7747C144.079 21.4053 144.479 20.9358 144.772 20.3663L148.258 22.3058C147.889 23.1524 147.357 23.8835 146.665 24.4992C145.972 25.0995 145.187 25.5613 144.31 25.8846C143.448 26.1924 142.555 26.3463 141.631 26.3463ZM165.268 26H160.073L157.049 21.5208C156.664 20.9358 156.364 20.374 156.148 19.8353C155.933 19.2811 155.825 18.7424 155.825 18.2191C155.825 17.6803 155.925 17.1416 156.125 16.6028C156.325 16.0487 156.633 15.4869 157.049 14.9174L160.327 10.415H165.13L161.089 16.0256C160.766 16.472 160.52 16.8491 160.35 17.157C160.196 17.4648 160.119 17.765 160.119 18.0574C160.119 18.3499 160.196 18.6501 160.35 18.9579C160.52 19.2658 160.766 19.6506 161.089 20.1123L165.268 26ZM154.486 26H150.214V10.415H154.486V26ZM157.672 16.2796V20.2047H153.124V16.2796H157.672ZM182.405 26H177.21L174.185 21.5208C173.8 20.9358 173.5 20.374 173.284 19.8353C173.069 19.2811 172.961 18.7424 172.961 18.2191C172.961 17.6803 173.061 17.1416 173.261 16.6028C173.461 16.0487 173.769 15.4869 174.185 14.9174L177.463 10.415H182.266L178.225 16.0256C177.902 16.472 177.656 16.8491 177.487 17.157C177.333 17.4648 177.256 17.765 177.256 18.0574C177.256 18.3499 177.333 18.6501 177.487 18.9579C177.656 19.2658 177.902 19.6506 178.225 20.1123L182.405 26ZM171.622 26H167.351V10.415H171.622V26ZM174.808 16.2796V20.2047H170.26V16.2796H174.808Z" fill="#FF4053" />
              </svg>
            </a>
          </div>

          <div className="SearchBtn d-flex align-items-center">
            {/* Desktop Search Bar */}
            {showSearchBar && (
              <form
                className={`search-bar ${showSearchBar ? "show" : ""}`}
                id="desktopSearchBar"
              >
                <input type="search" placeholder="Search news, guides and reviews" />
                <button type="submit">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 19C15.9183 19 19.5 15.4183 19.5 11C19.5 6.58172 15.9183 3 11.5 3C7.08172 3 3.5 6.58172 3.5 11C3.5 15.4183 7.08172 19 11.5 19Z" stroke="black" stroke-opacity="0.9" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.5023 21.0004L17.1523 16.6504" stroke="black" stroke-opacity="0.9" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </button>
              </form>
            )}

            {/* Search icon (desktop) */}
            {!showSearchBar && (
              <button
                id="searchToggleDesktop"
                className="btn btn-link p-0 d-none d-lg-block"
                onClick={() => {
                  setShowSearchBar(true);
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 19C15.9183 19 19.5 15.4183 19.5 11C19.5 6.58172 15.9183 3 11.5 3C7.08172 3 3.5 6.58172 3.5 11C3.5 15.4183 7.08172 19 11.5 19Z" stroke="black" stroke-opacity="0.9" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.5023 21.0004L17.1523 16.6504" stroke="black" stroke-opacity="0.9" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path></svg>

              </button>
            )}

            {/* Login / Signup buttons */}
            <div className="d-flex LoginBtn">
              {userData ? (
                // <button className="btn signin_button " onClick={handleDashboardClick}>
                //   Dashboard
                // </button>
                <div class="dropdown NavBarProfileIcon">
                  <button class="btn btn-light rounded-circle p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false" >

                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.875 17.9173C5.56686 14.0505 12.3934 13.8684 16.125 17.9173M12.9506 6.04232C12.9506 8.22843 11.1758 10.0007 8.98654 10.0007C6.79743 10.0007 5.02262 8.22843 5.02262 6.04232C5.02262 3.85619 6.79743 2.08398 8.98654 2.08398C11.1758 2.08398 12.9506 3.85619 12.9506 6.04232Z" stroke="white" stroke-width="2.375" stroke-linecap="round" />
                    </svg>

                  </button>

                  <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="/dashboard/profile">Profile</a></li>
                    <li><a class="dropdown-item" href="/dashboard">Dashboard</a></li>
                    <li> <button
                      className="dropdown-item"
                      onClick={onLogout}
                    >
                      Logout
                    </button></li>
                  </ul>
                </div>

              ) : (
                <>
                  <button className="btn signin_button " onClick={handleSignInClick}>
                    Login
                  </button>
                  <button className="btn signin_button" onClick={handleSignInClick}>
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Navbar row */}
        <nav className="navbar navbar-expand-lg navbar-light p-0 ">
          <div className="container">
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >

              {isMobile && <form className="search-bar mt-3 mx-auto" id="searchBarMobile">
                <input type="search" placeholder="Search news, guides and reviews" />
                <button type="submit">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 19C15.9183 19 19.5 15.4183 19.5 11C19.5 6.58172 15.9183 3 11.5 3C7.08172 3 3.5 6.58172 3.5 11C3.5 15.4183 7.08172 19 11.5 19Z" stroke="black" stroke-opacity="0.9" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21.5023 21.0004L17.1523 16.6504" stroke="black" stroke-opacity="0.9" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </form>}
              <ul className="navbar-nav">
                {navItems.map((item, index) => (
                  <li key={index} className="nav-item">
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}


                {/* Mega Menu Poker Sites */}
                <li className="nav-item dropdown mega-menu">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Poker Sites
                  </a>

                  <div
                    className="dropdown-menu mega-dropdown border-0 rounded-0 shadow p-4"
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <h6 className="PokerSiteHed">All Poker Sites</h6>
                        </div>
                        {/* Left column: Poker Sites list */}
                        <div className="MegamenuData">
                          <div className="PokerLeft">

                            <ul className="list-unstyled">
                              <li className="d-flex align-items-center">
                                <img
                                  src={BigCash}
                                />
                                Bigcash
                              </li>
                              <li className="d-flex align-items-center">
                                <img
                                  src={spartan}
                                />
                                Spartan
                              </li>
                              <li className="d-flex align-items-center">
                                <img
                                  src={pokerdangal}
                                />
                                Pokerdangal
                              </li>
                              <li className="d-flex align-items-center">
                                <img
                                  src={pokerbazzi}
                                />
                                Pokerbazzi
                              </li>
                              <li className="d-flex align-items-center">
                                <img
                                  src={jungleeIcon}
                                />
                                Junglee poker
                              </li>
                              <li className="d-flex align-items-center">
                                <img
                                  src={pokerbazzi}
                                />
                                Pokerbazzi
                              </li>
                              <li className="d-flex align-items-center">
                                <img
                                  src={spartan}
                                />
                                Spartan
                              </li>
                              <li className="d-flex align-items-center">
                                <img
                                  src={jungleeIcon}
                                />
                                Junglee poker
                              </li>
                            </ul>
                          </div>

                          {/* Right column: Promo cards */}

                          <div className="PokerRight">
                            <div className="HottestDealschild">
                              <div className="deal-card ">
                                <div className="deal-image">
                                  <img src={ACRPoker} />
                                </div>
                                <div className="HottestDealsDesc">
                                  <div className="card-subtitle">Pokerbazzi</div>
                                  <div className="card-title">
                                    Experience the Serenity of Ja...
                                  </div>
                                  <button className="deal-button mt-2 w-100">
                                    Claim Now!
                                  </button>
                                </div>
                              </div>
                              <div className="deal-card ">
                                <div className="deal-image">
                                  <img src={ACRPoker} />
                                </div>
                                <div className="HottestDealsDesc">
                                  <div className="card-subtitle">Pokerbazzi</div>
                                  <div className="card-title">
                                    Experience the Serenity of Ja...
                                  </div>
                                  <button className="deal-button mt-2 w-100">
                                    Claim Now!
                                  </button>
                                </div>
                              </div>
                              <div className="deal-card ">
                                <div className="deal-image">
                                  <img src={ACRPoker} />
                                </div>
                                <div className="HottestDealsDesc">
                                  <div className="card-subtitle">Pokerbazzi</div>
                                  <div className="card-title">
                                    Experience the Serenity of Ja...
                                  </div>
                                  <button className="deal-button mt-2 w-100">
                                    Claim Now!
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <style jsx>{`
    .mega-menu .dropdown-menu {
      position: fixed !important;
      top: 104px; /* just below navbar */
      left: 0;
      right: 0;
      width: 100%;
      border: none;
      border-radius: 0;
      margin-top: 0;
      z-index: 1050;
      box-shadow: 0px 7px 20px #f1f1f1;
    }

    /* Hide bootstrap arrow */
    .navbar .dropdown-toggle::after {
      display: none;
    }

    /* Custom arrow */
    .navbar .dropdown-toggle::before {
      content: "▼";
      font-size: 0.7rem;
      margin-left: 6px;
      transition: transform 0.2s ease;
        display:none;
    }

    .navbar .dropdown-toggle[aria-expanded="true"]::before {
      content: "▲";
      display:none;
    }
  `}</style>
      </header>
    </>
  );
};

export default Navbar;

