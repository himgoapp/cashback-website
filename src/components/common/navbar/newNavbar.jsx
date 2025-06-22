import React, { useState } from 'react';
import styles from './newNavbar.module.css';
import logo from "../../../assets/Logos_and_illustration/Logo_Red.svg"
import Menu from "../../../assets/Logos_and_illustration/Menu.svg"
import {  useNavigate } from "react-router-dom";

const menuList = [
  { label: "Home" },
  { label: "About" },
  { label: "Features" },
  { label: "Pricing" }
];

const NewNavbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(""); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
 const handleSignInClick = () => {
    navigate("/login");
  };
  return (
    <>
      <nav className={styles.mobileNavbar}>
        <div className={styles.navbarLeft}>
          <img src={Menu} 
            // onClick={toggleMenu}
            alt="menu icon" style={{ cursor: 'pointer' }}/>
          <img src={logo} alt="Rakebackk Logo" className={styles.logo} />
        </div>
        <button className={styles.loginButton}  onClick={()=>handleSignInClick()}>Log In</button>
      </nav>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader} >
            <span onClick={toggleMenu} className={styles.closeIcon}>&times;</span>
            <img src={logo} alt="Rakebackk Logo" style={{marginRight:"60px"}} />
            <button className={styles.loginButton}>Log In</button>
          </div>
         <ul className={styles.menuItems}>
  {menuList.map((item, idx) => (
    <li
      key={item.label}
      className={activeIndex === idx ? styles.active : ""}
      onClick={() => setActiveIndex(idx)}
    >
      {item.label}
    </li>
  ))}
</ul>
          <div className={styles.menuFooter}>
            <button className={styles.loginFooter}  onClick={()=>handleSignInClick()}>Login {rightArrowIcon}</button>
            <button className={styles.getInTouchFooter}>Get in touch</button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewNavbar;

const rightArrowIcon = <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.36523 1.69421L11.3998 6.49996L6.36523 11.3057" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.3995 6.5L1.59961 6.5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
</svg>