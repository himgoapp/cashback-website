import React, { useState, useContext, useEffect, useRef } from "react";
import styles from "./sidebar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
import Navbtn from "../../common/button/navbtn/navbtn";
import { LogoutIcon } from "../../../assets/vectors";
import {
  PokerIcon,
  TransactionsIcon,
  verifyIcon,
  logo,
  HomeIcon,
  closeIcon,
  KYCIcon,
  barIcon,
  CameraIcon,
} from "../../../utils/sideBarIcon";
const Sidebar = ({ active }) => {
  const { showSidebar, setShowSidebar, mobile, userData, setUserData } =
    useContext(UserContext);
  const [data, setData] = useState({});
  const imageRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let currentValue = userData && userData.phoneNumber ? userData : {};
    setData(currentValue);
  }, [userData]);

  const onLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div
      className={styles.SidebarNavigation}
      style={showSidebar ? { display: "inline-flex" } : { display: "none" }}
    >
      <div className={styles.Content}>
        <div className={styles.Nav}>
          <Link to="/" className={styles.LogoContainer}>
            {logo}
          </Link>
          <div className={styles.Navigation}>
            {[
              { icon: HomeIcon, text: "Home", link: "/dashboard" },
              {
                icon: PokerIcon,
                text: "Poker IDs",
                link: "/dashboard/pokerid",
              },
              // {
              // 	icon: verifyIcon,
              // 	text: "Verify Account",
              // 	link: "/dashboard/verify-account",
              // },
              { icon: KYCIcon, text: "KYC", link: "/dashboard/kyc" },
              {
                icon: TransactionsIcon,
                text: "My Transactions",
                link: "/dashboard/mytransactions",
              },
              // {
              // 	icon: verifyIcon,
              // 	text: "Profile",
              // 	link: "/dashboard/verify-account",
              // },
            ].map((nav, index) => {
              return (
                <Link
                  to={nav.link}
                  className={`${styles.NavItemBase} ${
                    active === index && styles.active
                  }`}
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
            {/* <div
							className={styles.ImageUploadContainer}
							onClick={() => {
								imageRef.current.click();
							}}
						>
							<CameraIcon />
							<input
								type='file'
								name='image'
								id='image'
								ref={imageRef}
								style={{ display: "none" }}
								accept='.jpg, .jpeg, .png, .svg'
							/>
						</div> */}

            <div className={styles.TextAndSupportingText}>
              {data && data.userName ? data.userName : "Not filled!"}
			  <button className={styles.Button}  onClick={() => onLogout()}>
              <LogoutIcon
              
              />
			  </button>
            </div>

            {/* <button className={styles.Button} onClick={() => onLogout()}>
							Log out
							<LogoutIcon />
						</button> */}
          </div>
        </div>
        <div
          className={styles.CloseSidebar}
          onClick={() => setShowSidebar(false)}
        >
          {closeIcon}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
