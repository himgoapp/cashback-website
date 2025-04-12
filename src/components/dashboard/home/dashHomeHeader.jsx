import React, { useContext, useState, useEffect, useRef } from "react";
import styles from "./dashHomeHeader.module.css";
import bellIcon from "../../../assets/header_nav_btn2.png";
import profileicon from "../../../assets/profileicon.svg";
import avater1 from "../../../assets/avater1.svg";
import { UserContext } from "../../../App";
import Navbtn from "../../common/button/navbtn/navbtn";
import { Modal, Button, Form } from "react-bootstrap";
import {
  sendEmailOtpAPI,
  loginVerify,
  verifyEmailOtpAPI,
  getUserInfo,
} from "../../../servicefile/authservice";
import { toast } from "react-toastify";
import { RakebackLogo } from "../../common/logo/logo";
import Loading from "../../common/Loading/Loading";
import { useNavigate } from "react-router-dom";
import {
  PokerIcon,
  TransactionsIcon,
  KYCIcon,
  HomeIcon,
  closeIcon,
  logo,
} from "../../../utils/sideBarIcon";
import editIcon from "../../../assets/editIcon.png";
import {
  userProfileEdit,
  addProfileImage,
} from "../../../servicefile/dashboardservice";

const DashboardHomeHeader = ({ title, icon }) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAccountSettings, setShowAccountSettings] = useState(false);
  const [verifyModal, setVerifyModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const { setShowSidebar, showNotifications, setShowNotifications } =
    useContext(UserContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [editName, setEditName] = useState(false);
  const [userName, setUserName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const inputRefs = useRef([]);
  const dropdownRef = useRef(null);

  const handleMyTransactionClick = () => {
    navigate("/dashboard/mytransactions");
  };

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);

    if (userData) {
      setUserName(userData.userName || "");
      setEmail(userData.email || "");
    }

    // Handle outside click to close dropdown
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userData]);

  // Auto-focus first input when modal opens
  useEffect(() => {
    if (verifyModal && inputRefs.current[0]) {
      setTimeout(() => {
        inputRefs.current[0].focus();
      }, 300);
    }
  }, [verifyModal]);

  // Countdown timer for resend button
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [countdown]);

  const handleOtpChange = (index, value) => {
    // Only accept digits
    if (/^\d*$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      // Auto-focus to next input if current input is filled
      if (value !== "" && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const onLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleKeyDown = (index, e) => {
    // Navigate between inputs with arrow keys
    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1].focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
    // Move to previous input on backspace if current is empty
    else if (e.key === "Backspace" && index > 0 && otpValues[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (userData && userData.userImg) {
      setSelectedImage(userData.userImg);
    } else {
      setSelectedImage(avater1);
    }
  }, [userData]);

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    const numericData = pastedData.replace(/[^\d]/g, "").substring(0, 6);

    if (numericData) {
      const newOtpValues = [...otpValues];
      for (let i = 0; i < numericData.length; i++) {
        if (i < 6) {
          newOtpValues[i] = numericData[i];
        }
      }
      setOtpValues(newOtpValues);

      // Focus on the appropriate input after paste
      const focusIndex = Math.min(numericData.length, 5);
      inputRefs.current[focusIndex].focus();
    }
  };

  const getUserData = async () => {
    const res = await getUserInfo();
    if (res.success) {
      setUserData(res.userInfo.user);
      setLoading(false);
    }
  };

  const handleClose = () => {
    setVerifyModal(false);
    setOtpValues(["", "", "", "", "", ""]);
  };

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleAccountSettings = () => {
    setShowAccountSettings(true);
    setShowDropdown(false);
  };

  const handleCloseAccountSettings = () => {
    setShowAccountSettings(false);
  };

  const handleSaveProfile = async () => {
    try {
      const response = await userProfileEdit(
        userData._id,
        userName,
        userData.address || ""
      );

      if (response.success) {
        // toast.success("Profile updated successfully!");
        setUserData((prev) => ({
          ...prev,
          userName: userName,
        }));
        setEditName(false);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      // toast.error("An error occurred while updating the profile.");
    }
  };

  const sendEmailOtp = async (emailToVerify) => {
    setLoading(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailToVerify && emailRegex.test(emailToVerify)) {
      let data = await sendEmailOtpAPI(emailToVerify);
      setVerifyModal(true);
      setCountdown(60); // Start 60-second countdown for resend button
      setLoading(false);
      setShowAccountSettings(false);
    } else {
      // toast.warn("Please enter a valid email address!");
      setLoading(false);
    }
  };

  const verifyEmailOtp = async () => {
    setLoading(true);
    const combinedOtp = otpValues.join("");
    if (combinedOtp.length !== 6) {
      setLoading(false);
      return;
    }

    try {
      const data = await verifyEmailOtpAPI(email, combinedOtp);
      if (data?.message === "Email verified!") {
        setOtpValues(["", "", "", "", "", ""]);
        setVerifyModal(false);
        getUserData();
        // toast.success("Email verified successfully!");
      } else {
        // toast.error("OTP verification failed.");
      }
    } catch (error) {
      // toast.error("An error occurred during verification.");
    }
    setLoading(false);
  };

  return (
    <div className={styles.HomeHeader}>
      <div className={styles.HeaderContainer}>
        <div className={styles.HeaderContent}>
          <div className={styles.HeaderContentWrapper}>
            <div className={styles.HeaderTexts}>
              <div className={styles.HeaderHead}>
                <span>{icon}</span>
                <span className={styles.header_text_gap}>{title}</span>
              </div>
            </div>
            <div className={styles.MenuAndLogo}>
              <div className={styles.Menu} onClick={() => setShowSidebar(true)}>
                {menuIcon}
              </div>
              <div className={styles.Logo}>{logoIcon}</div>
            </div>
            <div className={styles.HeaderActions}>
              <div className={styles.HeaderNavBtn} ref={dropdownRef}>
                <div onClick={handleProfileClick}>
                  <img
                    src={avater1}
                    alt="Profile"
                    className="rounded-circle"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Profile Dropdown */}
                {showDropdown && (
                  <div className={styles.dropdown}>
                    <div className={styles.content}>
                      <div className={styles.userInfo}>
                        <p className={styles.greeting}>Hello,</p>
                        <h5 className={styles.userName}>
                          {userData?.userName || "User"}
                        </h5>
                      </div>

                      {/* <div className={styles.stat}>
                        <span
                          className="material-icons"
                          style={{ fontSize: "22px", color: "#3b82f6" }}
                        >
                          bar_chart
                        </span>
                        <p>Total Rakeback</p>
                        <h6></h6>
                      </div> */}

                      <hr className={styles.separator} />

                      {/* Menu Items */}
                      <div className={styles.menu}>
                        {/* Account Settings */}
                        <div
                          className={styles.menuItem}
                          onClick={handleAccountSettings}
                        >
                          <span className="material-icons">account_circle</span>
                          <span>Account Settings</span>
                        </div>

                        {/* Cashback & Rewards Section */}
                        <div className={styles.menuSection}>
                          {/* <p className={styles.menuSectionTitle}>Cashback & Rewards</p>
         <div className={styles.menuItem}>
           <span className="material-icons">currency_rupee</span>
           <span>My Earnings</span>
         </div>
         <div className={styles.menuItem}>
           <span className="material-icons">payment</span>
           <span>Payments</span>
         </div> */}
                          <div
                            className={styles.menuItem}
                            onClick={() => handleMyTransactionClick()}
                          >
                            <span className="material-icons">history</span>
                            <span>Payments History</span>
                          </div>
                        </div>
                        <div
                          className={styles.logout}
                          onClick={() => onLogout()}
                        >
                          <span className="material-icons">exit_to_app</span>
                          <span>Logout</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Account Settings Modal */}
      <Modal
        show={showAccountSettings}
        onHide={handleCloseAccountSettings}
        backdrop="static"
        centered
        animation={false}
        dialogClassName={styles.premiumModal}
      >
        <Modal.Header
          closeButton
          className="border-0"
          style={{
            background: "linear-gradient(90deg, #0052cc 0%, #007bff 100%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <Modal.Title
            className="w-100 fw-bold"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Profile
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className="position-relative">
              <img
                src={avater1}
                alt="Profile"
                className="rounded-circle"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  border: "3px solid #0052cc",
                  boxShadow: "0 4px 12px rgba(0, 82, 204, 0.4)",
                }}
              />
            </div>
          </div>

          <Form className="mt-2">
            <div className="d-flex justify-content-center mb-3">
              {editMode ? (
                <Form.Control
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-50 text-center"
                />
              ) : (
                <span
                  className="text-center fw-semibold fs-5"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  {userName}
                </span>
              )}
            </div>

            <div className={styles.customDivider} />

            {/* Email Section */}
            <div className="d-flex justify-content-between align-items-center mb-2">
              <Form.Label
                className="fw-bold"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Email
              </Form.Label>
              <div className="text-end">
                <div className="d-flex align-items-center justify-content-end gap-2">
                  <span style={{ fontFamily: "Roboto, sans-serif" }}>
                    {userData?.email || "N/A"}
                  </span>
                  {userData?.emailVerifystatus && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="8" cy="8" r="7" fill="#28a745" />
                      <path
                        d="M5.5 8L7 9.5L10.5 6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <div
                  className={
                    userData?.emailVerifystatus
                      ? "text-success d-flex align-items-center justify-content-end"
                      : "text-danger"
                  }
                  style={{ fontSize: "12px", fontFamily: "Roboto, sans-serif" }}
                >
                  {userData?.emailVerifystatus ? "Verified" : "Not verified"}
                </div>

                {!userData?.emailVerifystatus && (
                  <Button
                    size="sm"
                    variant="primary"
                    className="rounded-pill px-3 mt-1"
                    style={{
                      fontWeight: "bold",
                      fontFamily: "Roboto, sans-serif",
                      background:
                        "linear-gradient(90deg, #0052cc 0%, #007bff 100%)",
                      border: "none",
                      boxShadow: "0 2px 4px rgba(0, 82, 204, 0.3)",
                    }}
                    onClick={() => {
                      sendEmailOtp(userData.email);
                      setEmail(userData.email);
                    }}
                  >
                    {loading ? (
                      <Loading size="sm" animation="border" />
                    ) : (
                      "Verify Email"
                    )}
                  </Button>
                )}
              </div>
            </div>

            <div className={styles.customDivider} />

            {/* Phone */}
            <div className="d-flex justify-content-between align-items-center mb-2">
              <Form.Label
                className="fw-bold"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Mobile Number
              </Form.Label>
              <div className="text-end">
                <div className="d-flex align-items-center justify-content-end gap-2">
                  <span style={{ fontFamily: "Roboto, sans-serif" }}>
                    {userData?.phoneNumber ? `+${userData.phoneNumber}` : "N/A"}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="7" fill="#28a745" />
                    <path
                      d="M5.5 8L7 9.5L10.5 6"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div
                  className="text-success d-flex align-items-center justify-content-end"
                  style={{ fontSize: "12px", fontFamily: "Roboto, sans-serif" }}
                >
                  Verified
                </div>
              </div>
            </div>

            <div className={styles.customDivider} />
          </Form>
        </Modal.Body>
      </Modal>

      {/* Premium Email Verification OTP Modal */}
      <Modal
        show={verifyModal}
        onHide={handleClose}
        backdrop="static"
        centered
        size="md"
        className="fade"
      >
        <Modal.Header
          closeButton
          className="border-0 pb-0"
          style={{
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}
        >
          <Modal.Title className="w-100 text-center d-flex justify-content-center align-items-center">
            <RakebackLogo />
          </Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{
            paddingTop: "10px",
            paddingBottom: "30px",
          }}
        >
          <div className="text-center mb-4 position-relative">
            <div className="position-relative d-inline-block">
              <div
                style={{
                  position: "absolute",
                  width: "70px",
                  height: "60px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(90deg, rgba(0,82,204,0.1) 0%, rgba(0,123,255,0.1) 100%)",
                  top: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 0,
                }}
              ></div>
              <span
                className="material-icons"
                style={{
                  fontSize: "36px",
                  color: "#0052cc",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                mark_email_read
              </span>
            </div>
            <h3
              className="mt-3 mb-2 fw-bold"
              style={{ color: "#0A2540", fontSize: "24px" }}
            >
              Verify Your Email
            </h3>
            <p className="text-muted mb-1" style={{ fontSize: "14px" }}>
              We've sent a verification code to
            </p>
            <p className="fw-bold mb-0" style={{ color: "#0052cc" }}>
              {email}
            </p>
          </div>

          <div className="px-3 mb-4">
            <div
              className="d-flex justify-content-between gap-2"
              style={{
                maxWidth: "320px",
                margin: "0 auto",
              }}
            >
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className="position-relative"
                  style={{ flex: "1" }}
                >
                  <Form.Control
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="text-center fw-bold"
                    style={{
                      height: "54px",
                      fontSize: "20px",
                      padding: "0",
                      borderRadius: "8px",
                      border: "1px solid #d0d5dd",
                      boxShadow: otpValues[index]
                        ? "0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px rgba(0, 82, 204, 0.1)"
                        : "0 1px 2px rgba(16, 24, 40, 0.05)",
                      backgroundColor: "#fff",
                      transition: "all 0.2s ease",
                    }}
                    value={otpValues[index]}
                    maxLength={1}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : null}
                    autoComplete="off"
                    inputMode="numeric"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-4">
            <p className="text-muted mb-1" style={{ fontSize: "14px" }}>
              Didn't receive code?
            </p>
            {countdown > 0 ? (
              <p style={{ color: "#0052cc", fontSize: "14px" }}>
                Resend code in <span className="fw-bold">{countdown}s</span>
              </p>
            ) : (
              <Button
                variant="link"
                onClick={() => {
                  sendEmailOtp(email);
                }}
                style={{
                  color: "#0052cc",
                  textDecoration: "none",
                  fontWeight: "600",
                  padding: "4px 12px",
                  fontSize: "14px",
                  transition: "all 0.2s ease",
                }}
                className="rounded-pill"
                disabled={loading}
              >
                Resend Code
              </Button>
            )}
          </div>
        </Modal.Body>

        <Modal.Footer
          className="border-0 justify-content-center p-4"
          style={{
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
          }}
        >
          <Button
            variant="primary"
            onClick={verifyEmailOtp}
            style={{
              background: "linear-gradient(90deg, #0052cc 0%, #007bff 100%)",
              color: "white",
              border: "none",
              width: "100%",
              padding: "12px",
              fontWeight: "600",
              fontSize: "16px",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0, 82, 204, 0.3)",
              transition: "all 0.2s ease",
            }}
            disabled={otpValues.join("").length < 6 || loading}
            className="position-relative"
          >
            {loading ? (
              <span className="d-flex align-items-center justify-content-center">
                <Loading size="sm" animation="border" />
                <span className="ms-2">Verifying...</span>
              </span>
            ) : (
              <span className="d-flex align-items-center justify-content-center">
                Verify Email
                <span
                  className="material-icons ms-2"
                  style={{ fontSize: "18px" }}
                >
                  arrow_forward
                </span>
              </span>
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DashboardHomeHeader;
const userIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 20 20"
    fill="none"
  >
    <g clipPath="url(#clip0_24_3723)">
      <path
        d="M4.43008 16.1985C4.93702 15.0042 6.12061 14.1665 7.49984 14.1665H12.4998C13.8791 14.1665 15.0626 15.0042 15.5696 16.1985M13.3332 7.9165C13.3332 9.75745 11.8408 11.2498 9.99984 11.2498C8.15889 11.2498 6.6665 9.75745 6.6665 7.9165C6.6665 6.07555 8.15889 4.58317 9.99984 4.58317C11.8408 4.58317 13.3332 6.07555 13.3332 7.9165ZM18.3332 9.99984C18.3332 14.6022 14.6022 18.3332 9.99984 18.3332C5.39746 18.3332 1.6665 14.6022 1.6665 9.99984C1.6665 5.39746 5.39746 1.6665 9.99984 1.6665C14.6022 1.6665 18.3332 5.39746 18.3332 9.99984Z"
        stroke="#101828"
        strokeWidth="1.66667"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_24_3723">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const logoIcon = (
  <div className={styles.logo}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="220"
      height="40"
      viewBox="0 0 150 46"
      fill="none"
    >
      <text
        x="40"
        y="30"
        className={styles.logo_fonts}
        font-size="20"
        fill="black"
        font-weight="bold"
        letter-spacing="0.5px"
      >
        Rakebackk
      </text>
      {/* <path
      d="M49.8129 16.5347H44.7276C43.6425 16.529 42.5996 16.9545 41.8279 17.7177C41.0563 18.4809 40.619 19.5194 40.6123 20.605C40.6123 22.1847 41.5747 23.5839 43.1435 24.3114L40.8373 28.589C40.7858 28.6804 40.7587 28.7836 40.7587 28.8886C40.7587 28.9935 40.7858 29.0967 40.8373 29.1881C40.8903 29.275 40.9651 29.3463 41.0544 29.395C41.1437 29.4437 41.2442 29.468 41.3459 29.4654H43.2109C43.3148 29.4689 43.4176 29.443 43.5075 29.3908C43.5974 29.3387 43.6708 29.2623 43.7194 29.1703L46.0078 24.5913H47.5843V28.8765C47.5881 29.0295 47.6505 29.1753 47.7586 29.2837C47.8667 29.3921 48.0123 29.4549 48.1653 29.459H49.7989C49.9531 29.4587 50.1009 29.3972 50.2098 29.288C50.3187 29.1788 50.3799 29.0308 50.3799 28.8765V17.1173C50.38 16.9654 50.3207 16.8195 50.2148 16.7107C50.1089 16.6018 49.9647 16.5387 49.8129 16.5347ZM47.5792 22.2025H44.931C44.1084 22.2025 43.4156 21.4852 43.4156 20.6342C43.4255 20.2388 43.5896 19.8629 43.8727 19.5867C44.1558 19.3106 44.5356 19.1561 44.931 19.1562H47.5792V22.2025Z"
      fill="white"
transform="scale(-1,1) translate(-92,0)"  
  />
    <path
      d="M64.2051 28.6742L58.9616 16.8602C58.9193 16.7608 58.8491 16.6767 58.76 16.6187C58.6709 16.5607 58.567 16.5316 58.4617 16.5349H58.291C58.1849 16.5334 58.0807 16.5641 57.9914 16.623C57.9021 16.6819 57.8316 16.7666 57.7886 16.8665L52.4914 28.6717C52.4556 28.7503 52.4369 28.836 52.4365 28.9228C52.4359 29.0259 52.4638 29.127 52.517 29.2142C52.5693 29.2943 52.6405 29.3593 52.7239 29.4033C52.8073 29.4472 52.9002 29.4686 52.9938 29.4654H54.4766C54.6293 29.4678 54.779 29.422 54.9055 29.3339C55.032 29.2458 55.1292 29.1199 55.1839 28.9731L55.9546 27.2149H60.7469L61.5212 28.9731C61.6431 29.2243 61.8126 29.4578 62.2248 29.4578H63.7076C63.8013 29.4612 63.8942 29.4399 63.9776 29.3959C64.061 29.352 64.1322 29.2868 64.1844 29.2067C64.2304 29.1266 64.2564 29.0361 64.26 28.9431C64.2636 28.8502 64.2448 28.7578 64.2051 28.6742ZM56.9959 24.7961L58.3373 21.7079L59.6982 24.7961H56.9959Z"
      fill="white"
    />
    <path
      d="M71.0688 22.6467L75.6074 17.5791C75.6899 17.4879 75.744 17.3751 75.7634 17.2541C75.7827 17.1332 75.7664 17.0093 75.7165 16.8973C75.6654 16.7873 75.5831 16.6944 75.4797 16.6301C75.3763 16.5657 75.2562 16.5326 75.1341 16.5348H73.3381C73.2368 16.5341 73.1367 16.5567 73.0456 16.6008C72.9546 16.645 72.8751 16.7094 72.8134 16.7892L68.734 21.3594V17.2064C68.732 17.0291 68.6602 16.8596 68.5339 16.7341C68.4076 16.6086 68.2368 16.5371 68.058 16.5348H66.4801C66.3909 16.5337 66.3023 16.5504 66.2197 16.5838C66.137 16.6172 66.062 16.6666 65.9989 16.7292C65.9358 16.7918 65.8859 16.8662 65.8522 16.9482C65.8186 17.0301 65.8017 17.1179 65.8028 17.2064V28.7891C65.8017 28.8776 65.8186 28.9653 65.8522 29.0473C65.8859 29.1292 65.9358 29.2037 65.9989 29.2663C66.062 29.3288 66.137 29.3782 66.2197 29.4116C66.3023 29.445 66.3909 29.4617 66.4801 29.4607H68.0567C68.2355 29.4584 68.4063 29.3868 68.5326 29.2613C68.6589 29.1358 68.7308 28.9664 68.7328 28.7891V24.0611L72.9571 29.2304C73.0196 29.3089 73.1003 29.3712 73.1923 29.412C73.2844 29.4527 73.385 29.4708 73.4856 29.4645H75.4381C75.5585 29.467 75.6771 29.4353 75.7799 29.3731C75.8826 29.3109 75.9653 29.2208 76.018 29.1134C76.0713 29.0064 76.0932 28.8867 76.0812 28.7679C76.0692 28.6492 76.0237 28.5362 75.95 28.4418L71.0688 22.6467Z"
      fill="white"
    />
    <path
      d="M85.2803 16.5347H78.1977C78.0465 16.535 77.9015 16.5965 77.7945 16.7057C77.6875 16.815 77.6273 16.963 77.627 17.1175V28.8829C77.6273 29.0374 77.6875 29.1854 77.7945 29.2946C77.9015 29.4038 78.0465 29.4654 78.1977 29.4657H85.2828C85.4339 29.4654 85.5788 29.4038 85.6856 29.2945C85.7923 29.1853 85.8523 29.0372 85.8523 28.8829V27.4259C85.8523 27.2716 85.7923 27.1235 85.6856 27.0142C85.5788 26.905 85.4339 26.8434 85.2828 26.8431H80.3662V24.2218H84.4291C84.5802 24.2218 84.7252 24.1605 84.8322 24.0515C84.9392 23.9425 84.9995 23.7946 84.9998 23.6402V22.1654C84.9961 22.0121 84.9347 21.8661 84.8285 21.7576C84.7223 21.6491 84.5793 21.5865 84.4291 21.5826H80.3662V19.1573H85.2803C85.4314 19.1569 85.5763 19.0954 85.6831 18.9861C85.7898 18.8769 85.8498 18.7288 85.8498 18.5745V17.1175C85.8498 16.9631 85.7898 16.8151 85.6831 16.7058C85.5763 16.5966 85.4314 16.535 85.2803 16.5347Z"
      fill="white"
    />
    <path
      d="M95.2205 22.8551C95.9764 22.3283 96.8189 21.3281 96.8189 20.0684C96.8189 18.0858 95.1155 16.5347 92.9414 16.5347H88.9886C88.8387 16.535 88.6949 16.5965 88.5889 16.7057C88.4829 16.815 88.4232 16.963 88.4229 17.1175V28.8829C88.4232 29.0374 88.4829 29.1854 88.5889 29.2946C88.6949 29.4038 88.8387 29.4654 88.9886 29.4657H93.1638C95.4428 29.4657 97.1623 27.8853 97.1623 25.7907C97.1635 24.2409 96.0938 23.2941 95.2205 22.8551ZM91.1244 19.1382H92.7302C93.4713 19.1382 93.9766 19.6472 93.9766 20.4107C93.9766 21.1945 93.4516 21.7646 92.7302 21.7646H91.1244V19.1382ZM92.9772 26.8787H91.1244V24.2065H92.7685C93.5096 24.2065 94.2903 24.7295 94.2903 25.5095C94.295 25.6894 94.2643 25.8683 94.2001 26.0356C94.1359 26.2029 94.0395 26.3551 93.9167 26.483C93.794 26.6109 93.6473 26.7119 93.4857 26.7799C93.324 26.8479 93.1506 26.8815 92.976 26.8787H92.9772Z"
      fill="white"
    />
    <path
      d="M109.952 28.6742L104.711 16.8603C104.669 16.7606 104.599 16.6763 104.51 16.6183C104.421 16.5603 104.317 16.5313 104.211 16.535H104.042C103.936 16.5333 103.832 16.5639 103.742 16.6228C103.653 16.6818 103.583 16.7666 103.54 16.8665L98.2453 28.6717C98.21 28.7505 98.1913 28.8361 98.1904 28.9228C98.1904 29.0258 98.2182 29.1267 98.2709 29.2142C98.323 29.2943 98.3942 29.3595 98.4776 29.4034C98.5609 29.4474 98.6538 29.4687 98.7474 29.4654H100.227C100.38 29.4682 100.53 29.4224 100.657 29.3344C100.784 29.2463 100.881 29.1202 100.936 28.9731L101.708 27.2149H106.494L107.271 28.9731C107.393 29.2242 107.562 29.4578 107.975 29.4578H109.455C109.548 29.4624 109.641 29.4418 109.724 29.3979C109.807 29.3541 109.878 29.2885 109.928 29.2078C109.979 29.1271 110.009 29.0341 110.014 28.938C110.019 28.842 109.999 28.7462 109.957 28.6604L109.952 28.6742ZM102.746 24.7961L104.087 21.7079L105.45 24.7961H102.746Z"
      fill="white"
    />
    <path
      d="M120.566 25.8077C120.464 25.7111 120.327 25.6556 120.184 25.6524C120.042 25.6492 119.903 25.6985 119.796 25.7904C119.08 26.3847 118.172 26.7148 117.232 26.723C115.138 26.723 113.498 25.0733 113.498 22.9653C113.498 20.8387 115.13 19.1728 117.214 19.1728C118.157 19.181 119.067 19.5185 119.777 20.124C119.83 20.1797 119.895 20.2239 119.967 20.2537C120.039 20.2836 120.117 20.2985 120.195 20.2974C120.268 20.2952 120.339 20.2784 120.404 20.2481C120.47 20.2179 120.529 20.1748 120.576 20.1215L121.656 19.0341C121.714 18.9798 121.76 18.9143 121.79 18.8419C121.82 18.7694 121.834 18.6916 121.832 18.6134C121.829 18.5352 121.81 18.4584 121.775 18.3879C121.74 18.3175 121.691 18.2549 121.629 18.2042C120.308 17.0487 118.932 16.5347 117.167 16.5347C115.406 16.5347 113.718 17.2158 112.473 18.4283C111.228 19.6408 110.528 21.2852 110.528 22.9999C110.528 24.7146 111.228 26.3591 112.473 27.5716C113.718 28.784 115.406 29.4652 117.167 29.4652C117.997 29.4755 118.82 29.3265 119.591 29.0267C120.361 28.7268 121.064 28.282 121.657 27.7176C121.716 27.6587 121.763 27.5889 121.794 27.5124C121.825 27.4358 121.84 27.354 121.838 27.2717C121.837 27.2051 121.822 27.1395 121.794 27.0786C121.767 27.0177 121.727 26.9629 121.677 26.9175L120.566 25.8077Z"
      fill="white"
    />
    <path
      d="M133.535 28.4415L128.903 22.6485L133.216 17.5794C133.294 17.4882 133.345 17.3753 133.364 17.2543C133.382 17.1334 133.367 17.0094 133.319 16.8974C133.271 16.7874 133.193 16.6945 133.094 16.6301C132.996 16.5657 132.882 16.5326 132.766 16.5348H131.059C130.963 16.5341 130.868 16.5567 130.781 16.6009C130.695 16.645 130.619 16.7095 130.561 16.7892L126.679 21.3545V17.2066C126.677 17.0292 126.609 16.8597 126.489 16.7342C126.369 16.6086 126.206 16.5371 126.036 16.5348H124.538C124.453 16.5337 124.369 16.5504 124.291 16.5838C124.212 16.6172 124.141 16.6667 124.081 16.7293C124.021 16.7918 123.974 16.8663 123.942 16.9483C123.91 17.0302 123.894 17.1181 123.895 17.2066V28.7927C123.894 28.8812 123.91 28.969 123.942 29.051C123.974 29.1329 124.021 29.2074 124.081 29.27C124.141 29.3326 124.212 29.382 124.291 29.4154C124.369 29.4488 124.453 29.4655 124.538 29.4645H126.036C126.206 29.4622 126.369 29.3906 126.489 29.2651C126.609 29.1395 126.677 28.97 126.679 28.7927V24.0633L130.693 29.2304C130.753 29.3089 130.829 29.3712 130.917 29.4119C131.004 29.4527 131.1 29.4708 131.196 29.4645H133.047C133.162 29.467 133.275 29.4353 133.372 29.3731C133.47 29.3108 133.548 29.2207 133.598 29.1133C133.649 29.0064 133.67 28.8867 133.659 28.7679C133.648 28.6491 133.605 28.536 133.535 28.4415Z"
      fill="white"
    />
    <path
      d="M145.876 28.4414L141.239 22.6484L145.549 17.5794C145.628 17.4883 145.68 17.3755 145.698 17.2545C145.717 17.1335 145.701 17.0095 145.654 16.8974C145.605 16.7874 145.527 16.6945 145.429 16.6302C145.33 16.5658 145.216 16.5326 145.1 16.5348H143.394C143.298 16.534 143.202 16.5565 143.116 16.6007C143.029 16.6449 142.954 16.7094 142.895 16.7892L139.016 21.3544V17.2066C139.013 17.0291 138.945 16.8596 138.825 16.7341C138.705 16.6086 138.542 16.5371 138.372 16.5348H136.875C136.79 16.5339 136.706 16.5507 136.628 16.5842C136.549 16.6177 136.478 16.6671 136.418 16.7297C136.358 16.7923 136.311 16.8667 136.279 16.9486C136.247 17.0305 136.231 17.1182 136.232 17.2066V28.7926C136.231 28.881 136.247 28.9687 136.279 29.0506C136.311 29.1325 136.358 29.2069 136.418 29.2695C136.478 29.332 136.549 29.3815 136.628 29.415C136.706 29.4484 136.79 29.4653 136.875 29.4644H138.372C138.542 29.4621 138.705 29.3906 138.825 29.2651C138.945 29.1396 139.013 28.9701 139.016 28.7926V24.0633L143.028 29.2303C143.087 29.3089 143.164 29.3714 143.252 29.4122C143.339 29.453 143.435 29.4709 143.53 29.4644H145.385C145.499 29.4669 145.612 29.4351 145.709 29.3729C145.806 29.3106 145.885 29.2205 145.934 29.1132C145.986 29.0068 146.008 28.8874 145.998 28.7686C145.987 28.6498 145.945 28.5364 145.876 28.4414Z"
      fill="white"
    /> */}
      <path
        d="M31.8434 24.164C32.8936 21.9495 33.4358 19.5258 33.4302 17.0721C33.4302 7.93884 26.0499 0.5 16.9609 0.5C7.87188 0.5 0.480426 7.93884 0.480426 17.0721C0.477925 19.5307 1.02403 21.9586 2.07844 24.1766C0.727073 25.9193 -0.00472093 28.0675 2.29193e-05 30.2779C0.00233253 32.9415 1.05574 35.4951 2.92863 37.3773C4.80153 39.2595 7.3406 40.3163 9.98763 40.3153C11.623 40.3153 13.8607 39.7693 15.2148 39.063C15.1762 39.1883 15.1277 39.3235 15.0791 39.4588C15.0638 39.5105 15.0429 39.5605 15.0169 39.6078C14.7934 40.1669 14.5219 40.7053 14.2054 41.217C14.1681 41.2922 14.1196 41.3648 14.0698 41.4525C13.1447 42.993 11.9634 44.3621 10.5775 45.5H23.3443C21.9639 44.356 20.7831 42.988 19.8508 41.4525C19.8022 41.3648 19.7525 41.2922 19.7164 41.217C19.4001 40.7051 19.1282 40.1667 18.9037 39.6078C18.8883 39.556 18.8674 39.506 18.8414 39.4588C18.7941 39.3235 18.7444 39.187 18.707 39.063C20.076 39.7681 22.3162 40.3153 23.9466 40.3153C25.8112 40.3203 27.6397 39.7984 29.2239 38.8089C30.8081 37.8194 32.0844 36.4022 32.9073 34.7186C33.7303 33.035 34.0669 31.1527 33.8788 29.286C33.6907 27.4194 32.9854 25.6434 31.8434 24.1603V24.164ZM21.9902 1.88633C25.1707 2.9573 27.9345 5.01042 29.8882 7.7535L25.9765 10.575C24.6149 8.65936 22.6865 7.22565 20.4668 6.47863L21.9902 1.88633ZM12.1756 1.80117L13.6143 6.41726C11.267 7.16866 8.04362 10.4247 8.04362 10.4247L4.18548 7.54436C6.18192 4.83166 8.97798 2.82187 12.1756 1.80117ZM18.7195 33.0005C18.6537 32.9986 18.5879 33.0023 18.5228 33.0117C18.2941 33.0413 18.0639 33.0581 17.8333 33.0618C17.7563 33.0733 17.6784 33.0779 17.6006 33.0756C17.3778 33.0869 17.17 33.0994 16.9609 33.0994C16.7518 33.0994 16.5539 33.0869 16.3461 33.0756C16.2596 33.0779 16.173 33.0733 16.0872 33.0618C15.8612 33.0581 15.6356 33.0413 15.4114 33.0117C15.3243 33.0005 15.2397 33.0005 15.1625 32.988C14.6958 32.9379 14.2266 32.8627 13.7736 32.7776C13.7665 32.7716 13.7579 32.7677 13.7487 32.7663C13.4998 32.7162 13.2683 32.6661 13.0219 32.6047C12.9886 32.5947 12.9562 32.5821 12.9248 32.5672C6.09962 30.7651 1.04545 24.5034 1.04545 17.0721V16.9118L5.87933 16.9619V17.047C5.87686 18.2338 6.06817 19.4129 6.44561 20.5373C14.1196 14.6826 16.9609 7.07223 16.9609 7.07223C16.9609 7.07223 19.8022 14.6826 27.4762 20.5373C27.8403 19.4394 28.031 18.2908 28.0412 17.1335L32.8751 17.1835C32.8154 25.365 26.6262 32.1088 18.7195 33.0005Z"
        fill="#0052cc"
      />
    </svg>
  </div>
);

const menuIcon = (
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
      strokeLinejoin="round"
    />
  </svg>
);
