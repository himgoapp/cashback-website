import React from "react";
import styles from "./verifyInfoContainer.module.css";
import Navbtn from "../../common/button/navbtn/navbtn";

function VerifyInfoContainer() {
  return (
    <div className={styles.VerifyInfoContainer}>
      {/* email verification */}
      <div className={styles.VerifyInfoContent}>
        <div className={styles.InfoHeader}>
          <div className={styles.InfoHeaderContent}>
            <div className={styles.Icon}>{emailIcon}</div>
            <div className={styles.HeaderText}>Email</div>
          </div>
        </div>
        <div className={styles.InfoBody}>
          <div className={styles.UserInfo}>
            <div className={styles.InfoName}>
              <div className={styles.InfoNameText}>muckyourkings@gmail.com</div>
            </div>
            <div className={styles.IsVerified}>Your email is verified</div>
          </div>
          <Navbtn
            text="Verify E-mail ID"
            bg="transparent"
            color="#3968EB"
            showIcon={true}
            iconColor="#3968EB"
            style={{
              borderRadius: "2.4375rem",
              border: "2px solid #3968EB",
              display: "flex",
              justifyContent: "center",
              // width: "100%",
            }}
          />
        </div>
      </div>
      {/* phone verification */}
      <div className={styles.VerifyInfoContent}>
        <div className={styles.InfoHeader}>
          <div className={styles.InfoHeaderContent}>
            <div className={styles.Icon}>{mobileIcon}</div>
            <div className={styles.HeaderText}>Phone Number</div>
          </div>
          <div className={styles.Checkbox}>{checkbox}</div>
        </div>
        <div className={styles.InfoBody}>
          <div className={styles.UserInfo}>
            <div className={styles.InfoName}>
              <div className={styles.InfoNameText}>+91 7172892823</div>
            </div>
            <div className={styles.IsVerified}>
              Your Phone number is verified
            </div>
          </div>
          <div className={styles.InfoBadge}>
            <div className={styles.BadgeText}>Number verified</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyInfoContainer;
export const emailIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M1.33203 4.6665L6.77531 8.4768C7.21609 8.78535 7.43648 8.93962 7.67621 8.99938C7.88796 9.05216 8.10943 9.05216 8.32119 8.99938C8.56091 8.93962 8.7813 8.78535 9.22208 8.4768L14.6654 4.6665M4.53203 13.3332H11.4654C12.5855 13.3332 13.1455 13.3332 13.5733 13.1152C13.9497 12.9234 14.2556 12.6175 14.4474 12.2412C14.6654 11.8133 14.6654 11.2533 14.6654 10.1332V5.8665C14.6654 4.7464 14.6654 4.18635 14.4474 3.75852C14.2556 3.3822 13.9497 3.07624 13.5733 2.88449C13.1455 2.6665 12.5855 2.6665 11.4654 2.6665H4.53203C3.41193 2.6665 2.85187 2.6665 2.42405 2.88449C2.04773 3.07624 1.74176 3.3822 1.55002 3.75852C1.33203 4.18635 1.33203 4.7464 1.33203 5.8665V10.1332C1.33203 11.2533 1.33203 11.8133 1.55002 12.2412C1.74176 12.6175 2.04773 12.9234 2.42405 13.1152C2.85187 13.3332 3.41193 13.3332 4.53203 13.3332Z"
      stroke="#175CD3"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const mobileIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M7.9987 11.6668H8.00536M5.46536 14.6668H10.532C11.2788 14.6668 11.6521 14.6668 11.9374 14.5215C12.1882 14.3937 12.3922 14.1897 12.52 13.9388C12.6654 13.6536 12.6654 13.2802 12.6654 12.5335V3.46683C12.6654 2.72009 12.6654 2.34672 12.52 2.06151C12.3922 1.81063 12.1882 1.60665 11.9374 1.47882C11.6521 1.3335 11.2788 1.3335 10.532 1.3335H5.46536C4.71863 1.3335 4.34526 1.3335 4.06004 1.47882C3.80916 1.60665 3.60519 1.81063 3.47736 2.06151C3.33203 2.34672 3.33203 2.72009 3.33203 3.46683V12.5335C3.33203 13.2802 3.33203 13.6536 3.47736 13.9388C3.60519 14.1897 3.80916 14.3937 4.06004 14.5215C4.34526 14.6668 4.71863 14.6668 5.46536 14.6668ZM8.33203 11.6668C8.33203 11.8509 8.18279 12.0002 7.9987 12.0002C7.8146 12.0002 7.66536 11.8509 7.66536 11.6668C7.66536 11.4827 7.8146 11.3335 7.9987 11.3335C8.18279 11.3335 8.33203 11.4827 8.33203 11.6668Z"
      stroke="#175CD3"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const checkbox = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
  >
    <path
      d="M8.33268 2.5L3.74935 7.08333L1.66602 5"
      stroke="white"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
