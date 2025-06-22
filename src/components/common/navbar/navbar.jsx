import React, { useState, useContext } from "react";
import styles from "./navbar.module.css";
import Navbtn from "../button/navbtn/navbtn";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../logo/logo";
import Logo_Red from "../../../assets/Logos_and_illustration/Logo_Red.svg";
import { UserContext } from "../../../App";
import { CrossIcon } from "../../../assets/vectors";
import Reveal from "../reveal/Reveal";

const Navbar = ({ page }) => {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleSignInClick = () => {
    navigate("/login");
  };

  return (
    <>
      <div className={styles.container_max}>
        <div className={styles.navbar_container}>
            <button
            className={styles.burger_menu}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
          <a href="/" className={styles.logo_container_pc}>
            <Logo />
          {/* <img src={Logo_Red}/> */}
          </a>
          <div className={styles.navbar_link_container}>
            {page === "home" && homePageMenu}
            {page === "login" && homePageMenu}
            {page === "offer" && offersAndDealsPageMenu}
            {page === "welcome" && homePageMenu}
            {userData ? (
              dashboardMenu
            ) : (
              <div className={styles.btn_link_container}>
                <button
                  className={styles.signin_button}
                  onClick={()=>handleSignInClick()}
                >
                  SignUp/Login
                </button>
              </div>
            )}
            
          </div>

        
          {showMenu && (
            <div className={styles.link_mobile_container}>
              <div className={styles.link_mobile_header}>
                <Logo />
                <button
                  aria-label="Close menu"
                  onClick={() => setShowMenu(false)}
                >
                  <CrossIcon />
                </button>
              </div>
              <div>
                {page === "home" && homePageMenu}
                {page === "login" && homePageMenu}
                {page === "welcome" && homePageMenu}
                {page === "offer" && offersAndDealsPageMenu}
                {userData ? (
                  dashboardMenu
                ) : (
                  <div className={styles.btn_link_container}>
                    <button
                      className={styles.signin_button}
                      onClick={()=>handleSignInClick()}
                    >
                      SignUp/Login
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

const homePageMenu = (
  <div className={styles.menu_container}>
    <Link to="/offer-and-deals" className={styles.secondary_link}>
      Deals
    </Link>
    <a href="/latest-news" className={styles.secondary_link}>
      Latest News
    </a>
    <a href="/#" className={styles.secondary_link}>
      Promotions
    </a>
    <a href="/#about_us" className={styles.secondary_link}>
      About Us
    </a>
    <a href="/faq" className={styles.secondary_link}>
      FAQs
    </a>
  </div>
);

const dashboardMenu = (
  <div className={styles.menu_container}>
    <Link to="/dashboard" className={styles.secondary_link}>
      Dashboard
    </Link>
  </div>
);

const offersAndDealsPageMenu = (
  <div className={styles.menu_container}>
    <Link to="/offer-and-deals" className={styles.secondary_link}>
      Deals
    </Link>
    <a href="/latest-news" className={styles.secondary_link}>
      Latest News
    </a>
    <a href="/#" className={styles.secondary_link}>
      Promotions
    </a>
    <a href="/faq" className={styles.secondary_link}>
      FAQs
    </a>
  </div>
);