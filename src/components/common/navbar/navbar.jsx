import React, { useState, useEffect, useContext } from "react";
import styles from "./navbar.module.css";
import Navbtn from "../button/navbtn/navbtn";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../logo/logo";
import Logo_Red from "../../../assets/Logos_and_illustration/Logo_Red.svg";
import { UserContext } from "../../../App";
import { CrossIcon } from "../../../assets/vectors";
import Reveal from "../reveal/Reveal";

import ACRShopping from "../../../assets/ACRPoker.png";

const Navbar = ({ hide }) => {
  const { userData, setUserData } = useContext(UserContext);
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
    setUserData(null);
    window.location.href = "/";
  };

  const navItems = [
    { to: "/offer-and-deals", label: "Coupons" },
    { to: "/latest-news", label: "Deals" },
    { to: "/shopping-guides", label: "Shopping Guides" },
    { to: "/faq", label: "Earn Cashback" },
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
      <header className={` CashbackHeader ${hide ? "" : "sticky-top"} bg-white`} >
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

            <a href="/" className="navbar-brand fw-bold text-danger">
              <svg width="240" height="60" viewBox="0 0 240 70" fill="none" xmlns="http://www.w3.org/2000/svg">

                <defs>
                  <linearGradient id="earneraGrad" x1="0" y1="0" x2="60" y2="60">
                    <stop offset="0%" stop-color="#1A73E8" />
                    <stop offset="100%" stop-color="#22C55E" />
                  </linearGradient>
                </defs>

                <rect x="5" y="5" width="60" height="60" rx="16"
                  fill="url(#earneraGrad)"
                  transform="rotate(-8 35 35)" />

                <path d="M20 28 H42
           M20 36 H35
           M20 44 H42"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round" />

                <path d="M28 25
           C40 25, 46 32, 46 32
           L40 28
           M46 32
           L40 36"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none" />

                <text x="80" y="45"
                  font-family="Montserrat, sans-serif"
                  font-size="30"
                  font-weight="600"
                  fill="#1F2937">
                  Earn<tspan fill="#1A73E8">Era</tspan>
                </text>

              </svg>
            </a>
          </div>

          <div className="SearchBtn d-flex align-items-center">
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


                {/* Mega Menu Shopping Sites */}
                <li className="nav-item dropdown mega-menu">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shopping Sites
                  </a>

                  <div
                    className="dropdown-menu mega-dropdown border-0 rounded-0 shadow p-4"
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <h6 className="ShoppingSiteHed">All Shopping Sites</h6>
                        </div>
                        {/* Left column: Shopping Sites list */}
                        <div className="MegamenuData">
                          <div className="ShoppingLeft">

                            <ul className="list-unstyled">
                              {/* <li className="d-flex align-items-center">
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
                              </li> */}
                              {/* <li className="d-flex align-items-center">
                                <img
                                  src={shoppingdangal}
                                />
                                Shoppingdangal
                              </li>
                              <li className="d-flex align-items-center">
                                <img
                                  src={shoppingbazzi}
                                />
                                Shoppingbazzi
                              </li> */}
                              {/* <li className="d-flex align-items-center">
                                <img
                                  src={jungleeIcon}
                                />
                                Junglee shopping
                              </li>
                              <li className="d-flex align-items-center">
                                <img
                                  src={shoppingbazzi}
                                />
                                Shoppingbazzi
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
                                Junglee shopping
                              </li>*/}
                            </ul>
                          </div>

                          {/* Right column: Promo cards */}

                          <div className="ShoppingRight">
                            <div className="HottestDealschild">
                              <div className="deal-card ">
                                <div className="deal-image">
                                  <img src={ACRShopping} />
                                </div>
                                <div className="HottestDealsDesc">
                                  <div className="card-subtitle">Shoppingbazzi</div>
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
                                  <img src={ACRShopping} />
                                </div>
                                <div className="HottestDealsDesc">
                                  <div className="card-subtitle">Shoppingbazzi</div>
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
                                  <img src={ACRShopping} />
                                </div>
                                <div className="HottestDealsDesc">
                                  <div className="card-subtitle">Shoppingbazzi</div>
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

