import React, { useState, useContext } from "react";
import styles from "./navbar.module.css";
import Navbtn from "../button/navbtn/navbtn";
import { Link } from "react-router-dom";
import Logo from "../logo/logo";
// import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
import PopupSignin from "../../description/popup/signin";
import { CrossIcon } from "../../../assets/vectors";
import Reveal from "../reveal/Reveal";

const Navbar = ({ page }) => {
  const { loginTab, setLoginTab, userData } = useContext(UserContext);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <Reveal>
      <div className={styles.container_max}>
        <div className={styles.navbar_container}>
          <a href="/">
            <Logo />
          </a>
          <div className={styles.navbar_link_container}>
            {page === "home" && homePageMenu}
            {page === "offer" && offersAndDealsPageMenu}
            {userData ? (
              dashboardMenu
            ) : (
              <div className={styles.btn_link_container}>
                {/* <Navbtn
									text='Sign up'
									variant={"outlined"}
									size={"small"}
									onClick={() => {
										setLoginTab(true);
									}}
								/> */}
                <Navbtn
                  text="SignUp/Login"
                  variant={"outlined"}
                  size={"small"}
                  showIcon={false}
                  onClick={() => {
                    setLoginTab(true);
                  }}
                />
              </div>
            )}
          </div>
          {/* for mobile screen */}

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
                  stroke="#667085"
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>
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
                {page === "offer" && offersAndDealsPageMenu}
                {userData ? (
                  dashboardMenu
                ) : (
                  <div className={styles.btn_link_container}>
                    <Navbtn
                      text="SignUp/Login"
                      variant={"outlined"}
                      size={"small"}
                      showIcon={false}
                      onClick={() => {
                        setLoginTab(true);
                        setShowMenu(false);
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {loginTab && <PopupSignin />}
    </Reveal>
  );
};

export default Navbar;

const homePageMenu = (
  <div className={styles.menu_container}>
    <Link to="/offer_and_deals" className="secondary_link">
      Deals
    </Link>
    <a href="/latest-news" className={"secondary_link"}>
      Latest/News
    </a>
    <a href="/#" className={"secondary_link"}>
      Promotions
    </a>
    <a href="/#about-us" className={"secondary_link"}>
      About Us
    </a>
    <a href="/faq_container" className={"secondary_link"}>
      FAQs
    </a>
  </div>
);

const dashboardMenu = (
  <div className={styles.menu_container}>
    <Link to="/dashboard" className="secondary_link">
      Dashboard
    </Link>
  </div>
);

const offersAndDealsPageMenu = (
  <div className={styles.menu_container}>
    <Link to="/offer_and_deals" className="secondary_link">
      Deals
    </Link>
    <a href="/latest-news" className={"secondary_link"}>
      Latest/News
    </a>
    <a href="/#" className={"secondary_link"}>
      Promotions
    </a>
    <a href="/faq_container" className={"secondary_link"}>
      FAQs
    </a>
  </div>
);
