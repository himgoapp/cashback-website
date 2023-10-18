import React from "react";
import styles from "./navbar.module.css";
import Navbtn from "../button/navbtn/navbtn";
import { Link } from "react-router-dom";
import Logo from "../logo/logo";
const Navbar = ({ page }) => {
  return (
    <div className={styles.navbar_container}>
      <Logo />
      <div className={styles.navbar_link_container}>
        {page === "home" && homePageMenu}
        {page === "offer" && offersAndDealsPageMenu}
        <div className={styles.btn_link_container}>
          <div className={styles.signup_btn}>
            {/* Sign Up Button Content */}
            <Navbtn
              text="Sign up"
              bg="transparent"
              color="black"
              style={{
                borderRadius: "2.4375rem",
                border: "2px solid var(--black-800, #212121)",
              }}
            />
          </div>
          <div className={styles.login_btn}>
            {" "}
            <Navbtn text="Log in" bg="#3968EB" color="white" showIcon={false} />
          </div>
        </div>
      </div>
      {/* for mobile screen */}
      <div className={styles.burger_menu}>
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const homePageMenu = (
  <div className={styles.menu_container}>
    <div className={styles.aboutus}>
      <span>About Us</span>{" "}
    </div>
    <div className={styles.faq}>
      <span>FAQs</span>{" "}
    </div>
  </div>
);

const offersAndDealsPageMenu = (
  <div className={styles.menu_container}>
    <div className={styles.aboutus}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <span>Home</span>
      </Link>
    </div>
    <div className={styles.faq}>
      <Link to="/offer_and_deals" style={{ textDecoration: "none" }}>
        <span style={{ color: "#3968EB" }}>Offers & deals</span>
      </Link>
    </div>
  </div>
);
