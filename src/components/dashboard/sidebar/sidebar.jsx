import React, { useState, useContext, useEffect, useRef } from "react";
import styles from "./sidebar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
import { 
  PokerIcon, 
  TransactionsIcon, 
  KYCIcon, 
  HomeIcon, 
  closeIcon, 
  logo 
} from "../../../utils/sideBarIcon";
import logout from "../../../assets/logout.svg";

const Sidebar = ({ active }) => {
  const { showSidebar, setShowSidebar, userData } = useContext(UserContext);
  const [data, setData] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); 

  useEffect(() => {
    setData(userData && userData.phoneNumber ? userData : {});

    if (window.innerWidth < 768) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true); 
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowSidebar(true); 
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [userData, setShowSidebar]);

  const onLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div
      className={styles.SidebarNavigation}
      style={{ display: showSidebar || !isMobile ? "inline-flex" : "none" }} 
    >
      <div className={styles.Content}>
        <div className={styles.Nav}>
          <Link to="/" className={styles.LogoContainer}>
            {logo}
          </Link>
          <div className={styles.Navigation}>
            {[
              { icon: HomeIcon, text: "Home", link: "/dashboard" },
              { icon: PokerIcon, text: "Poker IDs", link: "/dashboard/pokerid" },
              { icon: KYCIcon, text: "KYC", link: "/dashboard/kyc" },
              { icon: TransactionsIcon, text: "My Transactions", link: "/dashboard/mytransactions" },
            ].map((nav, index) => {
              return (
                <Link
                  key={index}
                  to={nav.link}
                  className={`${styles.NavItemBase} ${active === index ? styles.active : ""}`}
                  onClick={() => isMobile && setShowSidebar(false)} // Close only on mobile
                >
                  <div className={styles.ItemContent}>
                    <div className={styles.BarChart01}>
                      <div className={styles.Icon}>{nav.icon}</div>
                    </div>
                    <div className={styles.Text}>{nav.text}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className={styles.Footer}>
          <div className={styles.AvatarLabelGroup}>
            <div className={styles.TextAndSupportingText}>
              {data?.userName || "Not filled!"}
              <button className={styles.Button} onClick={onLogout}>
                <img src={logout} className={styles.logout_icon} alt="Logout" />
              </button>
            </div>
          </div>
        </div>

        {isMobile && (
          <div className={styles.CloseSidebar} onClick={() => setShowSidebar(false)}>
            {closeIcon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
