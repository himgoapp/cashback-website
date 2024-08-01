import React, { useContext } from "react";
import styles from "./notification.module.css"; // Replace 'YourStyles' with your CSS module file name
import { UserContext } from "../../../App";

function Notifications() {
  const {
    // showWalletWithdraw,
    // setShowWalletWithdraw,
    // mobile,
    // showNotifications,
    setShowNotifications,
  } = useContext(UserContext);

  return (
    <div className={styles.NotificationsContainer}>
      <div className={styles.NotificationsHeader}>
        <div className={styles.NotificationsHeaderContent}>
          <div
            className={styles.HeaderContentWrap}
            onClick={() => setShowNotifications(false)}
          >
            <div className={styles.backArrow}>{backArrow}</div>
            <div className={styles.HeaderText}>Notifications</div>
            <div className={styles.MarkRead}>Mark all as Read</div>
          </div>
        </div>
      </div>
      <div className={styles.NotificationsContent}>
        <div className={styles.ItemLists}>
          {/*  */}
          {notificationItems.map((noti) => {
            return (
              <div className={styles.ItemContentContainer}>
                <div className={styles.ItemContentWrap}>
                  <div className={styles.IconAndText}>
                    <div className={styles.FeaturedIcon}>{noti.icon}</div>
                    <div className={styles.NotificationItemText}>
                      {noti.text()} {/*  */}
                    </div>
                  </div>
                  {!noti.read && (
                    <div className={styles.DotIcon}>{dotIcon}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Notifications;
const backArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M15 18L9 12L15 6"
      stroke="#667085"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const dotIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <circle cx="6" cy="6" r="5" fill="#3968EB" />
  </svg>
);
const piggyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <path
      d="M2.49997 6.5C2.49997 7.32419 2.83233 8.07076 3.37034 8.61298C3.42222 8.66527 3.44817 8.69142 3.46348 8.71656C3.47809 8.74056 3.4866 8.76121 3.49313 8.78853C3.49997 8.81717 3.49997 8.84975 3.49997 8.91491V10.1C3.49997 10.24 3.49997 10.31 3.52721 10.3635C3.55118 10.4105 3.58943 10.4488 3.63647 10.4728C3.68995 10.5 3.75995 10.5 3.89997 10.5H4.84997C4.98998 10.5 5.05999 10.5 5.11346 10.4728C5.1605 10.4488 5.19875 10.4105 5.22272 10.3635C5.24997 10.31 5.24997 10.24 5.24997 10.1V9.9C5.24997 9.75999 5.24997 9.68998 5.27721 9.6365C5.30118 9.58946 5.33943 9.55122 5.38647 9.52725C5.43995 9.5 5.50995 9.5 5.64997 9.5H6.34997C6.48998 9.5 6.55999 9.5 6.61346 9.52725C6.6605 9.55122 6.69875 9.58946 6.72272 9.6365C6.74997 9.68998 6.74997 9.75999 6.74997 9.9V10.1C6.74997 10.24 6.74997 10.31 6.77721 10.3635C6.80118 10.4105 6.83943 10.4488 6.88647 10.4728C6.93995 10.5 7.00995 10.5 7.14997 10.5H8.1C8.24001 10.5 8.31002 10.5 8.3635 10.4728C8.41054 10.4488 8.44878 10.4105 8.47275 10.3635C8.5 10.31 8.5 10.24 8.5 10.1V9.61217C8.5 9.51113 8.5 9.46062 8.51438 9.42007C8.52817 9.3812 8.54553 9.35399 8.57498 9.32512C8.6057 9.295 8.65775 9.27084 8.76184 9.22251C9.25295 8.99451 9.67202 8.63753 9.97556 8.19508C10.0289 8.11728 10.0556 8.07838 10.0841 8.05539C10.1114 8.03342 10.1358 8.02054 10.1694 8.0105C10.2044 8 10.2461 8 10.3294 8H10.6C10.74 8 10.81 8 10.8635 7.97275C10.9105 7.94878 10.9488 7.91054 10.9728 7.8635C11 7.81002 11 7.74001 11 7.6V5.89287C11 5.75958 11 5.69293 10.9752 5.64152C10.9507 5.5905 10.9095 5.54934 10.8585 5.52476C10.8071 5.5 10.7404 5.5 10.6071 5.5C10.5106 5.5 10.4624 5.5 10.4235 5.4869C10.3816 5.47278 10.3523 5.45399 10.3219 5.42189C10.2937 5.39211 10.2707 5.34232 10.2246 5.24274C10.0769 4.92311 9.87458 4.63389 9.62963 4.38702C9.57774 4.33473 9.5518 4.30858 9.53648 4.28344C9.52187 4.25945 9.51337 4.23879 9.50684 4.21147C9.5 4.18284 9.5 4.15025 9.5 4.08509V3.53029C9.5 3.35027 9.5 3.26026 9.46251 3.19975C9.42967 3.14675 9.37821 3.10794 9.31823 3.09092C9.24976 3.0715 9.16321 3.09622 8.99011 3.14568L7.80383 3.48461C7.78367 3.49037 7.77359 3.49325 7.76335 3.49527C7.75424 3.49707 7.74505 3.49836 7.7358 3.49913C7.7254 3.5 7.71491 3.5 7.69394 3.5H7.47952M2.49997 6.5C2.49997 5.34797 3.14932 4.3476 4.10198 3.84495M2.49997 6.5H2C1.44772 6.5 1 6.05228 1 5.5C1 5.12986 1.2011 4.80669 1.5 4.63378M7.5 3.25C7.5 4.2165 6.7165 5 5.75 5C4.7835 5 4 4.2165 4 3.25C4 2.2835 4.7835 1.5 5.75 1.5C6.7165 1.5 7.5 2.2835 7.5 3.25Z"
      stroke="#175CD3"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const coinIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M6 6L8 4M8 4L6 2M8 4H6C3.79086 4 2 5.79086 2 8M18 18L16 20M16 20L18 22M16 20H18C20.2091 20 22 18.2091 22 16M13.4172 13.4172C14.1994 13.7908 15.0753 14 16 14C19.3137 14 22 11.3137 22 8C22 4.68629 19.3137 2 16 2C12.6863 2 10 4.68629 10 8C10 8.92472 10.2092 9.80057 10.5828 10.5828M14 16C14 19.3137 11.3137 22 8 22C4.68629 22 2 19.3137 2 16C2 12.6863 4.68629 10 8 10C11.3137 10 14 12.6863 14 16Z"
      stroke="#175CD3"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const creditIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M22 10H2M11 14H6M2 8.2L2 15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.0799 19 5.2 19L18.8 19C19.9201 19 20.4802 19 20.908 18.782C21.2843 18.5903 21.5903 18.2843 21.782 17.908C22 17.4802 22 16.9201 22 15.8V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5L5.2 5C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.0799 2 8.2Z"
      stroke="#175CD3"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const notificationIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M11 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V13M13 17H7M15 13H7M20.1213 3.87868C21.2929 5.05025 21.2929 6.94975 20.1213 8.12132C18.9497 9.29289 17.0503 9.29289 15.8787 8.12132C14.7071 6.94975 14.7071 5.05025 15.8787 3.87868C17.0503 2.70711 18.9497 2.70711 20.1213 3.87868Z"
      stroke="#175CD3"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const notificationItems = [
  {
    icon: piggyIcon,
    read: false,
    text: () => (
      <>
        <span>Congratulations!</span>You've earned a $50 rakeback. It has been
        credited to your account
      </>
    ),
  },
  {
    icon: coinIcon,
    read: true,
    text: () => (
      <>
        Your <span>rakeback of $20</span> is pending and will be credited to
        your account soon.
      </>
    ),
  },
  {
    read: true,
    icon: coinIcon,
    text: () => (
      <>
        Your <span>rakeback of $20</span> is pending and will be credited to
        your account soon.
      </>
    ),
  },
  {
    read: false,
    icon: creditIcon,
    text: () => (
      <>
        <span>New Rakeback Offer!</span> Earn up to 20% rakeback on your next
        game.
      </>
    ),
  },
  {
    read: true,
    icon: notificationIcon,
    text: () => (
      <>
        Your<span> earned $25 rakeback will expire in 3 days. </span>Make sure
        to claim it
      </>
    ),
  },
];
