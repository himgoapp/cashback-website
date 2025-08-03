import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
import avater1 from "../../../assets/avater1.svg";
import {
  sendEmailOtpAPI,
  verifyEmailOtpAPI,
  getUserInfo,
} from "../../../servicefile/authservice";
import { userProfileEdit } from "../../../servicefile/dashboardservice";
import { Modal, Form } from "react-bootstrap";
import { CheckCircle, AlertCircle } from "lucide-react";
import styles from "./userProfile.module.css";

const UserProfile = () => {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const [verifyModal, setVerifyModal] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [editName, setEditName] = useState(false);
  const [userName, setUserName] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [userKyc, setUserKyc] = useState(null);

  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);

    if (userData) {
      setUserName(userData?.userName || "");
      setEmail(userData?.email || "");
    }
  }, [userData]);

  useEffect(() => {
    if (userData && userData.userImg) {
      setSelectedImage(userData.userImg);
    } else {
      setSelectedImage(avater1);
    }
  }, [userData]);

  useEffect(() => {
    if (verifyModal && inputRefs.current[0]) {
      setTimeout(() => {
        inputRefs.current[0].focus();
      }, 300);
    }
  }, [verifyModal]);

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

  const getUserData = async () => {
    try {
      setLoading(true);
      const res = await getUserInfo();
      if (res.success) {
        setUserData(res.userInfo.user);
      } else {
        alert(res.message || "Failed to get user info");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("An error occurred while fetching user data");
      setLoading(false);
    }
  };

  const getUserKycData = async () => {
    try {
      setLoading(true);
      const res = await getUserInfo();
      if (res.success) {
        setUserKyc(res.userInfo.userKyc);
      } else {
        alert(res.message || "Failed to get user info");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("An error occurred while fetching user data");
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserKycData();
  }, []);

  const sendEmailOtp = async (emailToVerify) => {
    setLoading(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailToVerify && emailRegex.test(emailToVerify)) {
      let data = await sendEmailOtpAPI(emailToVerify);
      setVerifyModal(true);
      setCountdown(60);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  console.log(userKyc, "119---")

  const verifyEmailOtp = async () => {
    try {
      setLoading(true);
      const combinedOtp = otpValues.join("");

      if (combinedOtp.length !== 6) {
        setLoading(false);
        return;
      }

      const data = await verifyEmailOtpAPI(email, combinedOtp);

      if (data && data.message === "Email verified!") {
        setOtpValues(["", "", "", "", "", ""]);
        setVerifyModal(false);
        await getUserData();
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setVerifyModal(false);
    setOtpValues(["", "", "", "", "", ""]);
  };

  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      if (value !== "" && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1].focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (e.key === "Backspace" && index > 0 && otpValues[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

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

      const focusIndex = Math.min(numericData.length, 5);
      inputRefs.current[focusIndex].focus();
    }
  };

  const Spinner = ({ size }) => (
    <div className={size === "sm" ? styles.spinnerSmall : styles.spinner}></div>
  );

  return (
    <>
      {/* Desktop version */}
      <div className={styles.desktopProfile}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <div className={styles.SectionHeading}>Profile</div>
            <div className={styles.columnsContainer}>
              <div className={styles.column}>
                <h2 className={styles.sectionTitle}>Personal Information</h2>
                <div className={styles.formGroup}>

                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>Name</label>
                    <div className={styles.fieldBox}>
                      <span className={styles.fieldText}>
                        {userKyc?.userName || userData?.userName || "User"}
                      </span>
                    </div>
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>Email</label>
                    <div className={styles.fieldBox}>
                      <div className={styles.fieldContent}>
                        <span className={styles.fieldText}>
                          {userData?.email || "N/A"}
                        </span>
                        {/* <div className="ProfilePAgeformrow" >
                          <input type="email" className="form-control" placeholder="Enter email"  />
                        </div> */}
                        {userData?.emailVerifystatus ? (
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.25455 21L5.44091 17.8L2.00455 17L2.33864 13.3L0 10.5L2.33864 7.7L2.00455 4L5.44091 3.2L7.25455 0L10.5 1.45L13.7455 0L15.5591 3.2L18.9955 4L18.6614 7.7L21 10.5L18.6614 13.3L18.9955 17L15.5591 17.8L13.7455 21L10.5 19.55L7.25455 21ZM9.49773 14.05L14.8909 8.4L13.5545 6.95L9.49773 11.2L7.44545 9.1L6.10909 10.5L9.49773 14.05Z"
                              fill="#41D4A8"
                            />
                          </svg>
                        ) : (
                          <>
                            <button className={styles.EditProfileButton}>
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.59928 13.8679H6.27294C6.38696 13.8685 6.5 13.8467 6.60556 13.8036C6.71113 13.7604 6.80714 13.6969 6.8881 13.6166L12.8838 7.61226L15.3444 5.20359C15.4256 5.12304 15.4901 5.02722 15.5341 4.92163C15.5781 4.81605 15.6007 4.70281 15.6007 4.58843C15.6007 4.47405 15.5781 4.3608 15.5341 4.25522C15.4901 4.14964 15.4256 4.05381 15.3444 3.97326L11.6708 0.256288C11.5902 0.175079 11.4944 0.110622 11.3888 0.0666343C11.2832 0.0226469 11.17 0 11.0556 0C10.9412 0 10.828 0.0226469 10.7224 0.0666343C10.6168 0.110622 10.521 0.175079 10.4405 0.256288L7.99713 2.70828L1.98412 8.71262C1.90382 8.79358 1.84029 8.8896 1.79717 8.99516C1.75405 9.10072 1.7322 9.21376 1.73286 9.32779V13.0014C1.73286 13.2312 1.82414 13.4516 1.98663 13.6141C2.14911 13.7766 2.36949 13.8679 2.59928 13.8679ZM11.0556 2.09311L13.5076 4.5451L12.2773 5.77543L9.82529 3.32344L11.0556 2.09311ZM3.46571 9.68302L8.60363 4.5451L11.0556 6.9971L5.9177 12.135H3.46571V9.68302ZM16.4621 15.6007H0.866428C0.636637 15.6007 0.416257 15.692 0.253771 15.8545C0.0912841 16.017 0 16.2374 0 16.4671C0 16.6969 0.0912841 16.9173 0.253771 17.0798C0.416257 17.2423 0.636637 17.3336 0.866428 17.3336H16.4621C16.6919 17.3336 16.9123 17.2423 17.0748 17.0798C17.2373 16.9173 17.3286 16.6969 17.3286 16.4671C17.3286 16.2374 17.2373 16.017 17.0748 15.8545C16.9123 15.692 16.6919 15.6007 16.4621 15.6007Z"
                                  fill="#FF4053"
                                />
                              </svg>
                            </button>
                            <button
                              className={styles.VerifyNowButton}
                              onClick={() => {
                                sendEmailOtp(userData.email);
                                setEmail(userData.email);
                              }}
                            >
                              Verify Now
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>



                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>Mobile Number</label>
                    <div className={styles.fieldBox}>
                      <div className={styles.fieldContent}>
                        <span className={styles.fieldText}>
                          {userData?.phoneNumber
                            ? `+${userData.phoneNumber}`
                            : "N/A"}
                        </span>
                        {userData?.phoneNumberVerified && (
                          <span className={styles.badgeGreen}>
                            <CheckCircle size={12} className={styles.checkIcon} />{" "}
                            Verified
                          </span>
                        )}

                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                          <path d="M7.25455 21L5.44091 17.8L2.00455 17L2.33864 13.3L0 10.5L2.33864 7.7L2.00455 4L5.44091 3.2L7.25455 0L10.5 1.45L13.7455 0L15.5591 3.2L18.9955 4L18.6614 7.7L21 10.5L18.6614 13.3L18.9955 17L15.5591 17.8L13.7455 21L10.5 19.55L7.25455 21ZM9.49773 14.05L14.8909 8.4L13.5545 6.95L9.49773 11.2L7.44545 9.1L6.10909 10.5L9.49773 14.05Z" fill="#41D4A8" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.column}>
                <h2 className={styles.sectionTitle}>KYC Information</h2>

                <div className={styles.kycContainer}>

                  <div className={styles.kycSection}>
                    <div className={styles.kycDetailItem}>
                      <div className={styles.kycDetailLabel}>PAN</div>
                      <div className={styles.kycDetailValue}>
                        {userKyc && userKyc.pan && userKyc.pan.verified ? (
                          <>
                            {userKyc.pan.documentName}
                            <svg
                              width="21"
                              height="21"
                              viewBox="0 0 21 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="profileKycVerified"
                            >
                              <path
                                d="M7.25455 21L5.44091 17.8L2.00455 17L2.33864 13.3L0 10.5L2.33864 7.7L2.00455 4L5.44091 3.2L7.25455 0L10.5 1.45L13.7455 0L15.5591 3.2L18.9955 4L18.6614 7.7L21 10.5L18.6614 13.3L18.9955 17L15.5591 17.8L13.7455 21L10.5 19.55L7.25455 21ZM9.49773 14.05L14.8909 8.4L13.5545 6.95L9.49773 11.2L7.44545 9.1L6.10909 10.5L9.49773 14.05Z"
                                fill="#41D4A8"
                              />
                            </svg>
                          </>
                        ) : (
                          <button
                            className={styles.VerifyNowButton}
                            onClick={() => {
                              navigate("/dashboard/kyc");
                            }}
                          >
                            Verify Now
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={styles.kycSection}>
                    <div className={styles.kycDetailRow}>
                      <div className={styles.kycDetailItem}>
                        <div className={styles.kycDetailLabel}>Aadhaar</div>
                        <div className={styles.kycDetailValue}>
                          {userKyc && userKyc.aadhaar && userKyc.aadhaar.verified ? (
                            <>
                              {userKyc.aadhaar.documentName}
                              <svg
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="profileKycVerified"
                              >
                                <path
                                  d="M7.25455 21L5.44091 17.8L2.00455 17L2.33864 13.3L0 10.5L2.33864 7.7L2.00455 4L5.44091 3.2L7.25455 0L10.5 1.45L13.7455 0L15.5591 3.2L18.9955 4L18.6614 7.7L21 10.5L18.6614 13.3L18.9955 17L15.5591 17.8L13.7455 21L10.5 19.55L7.25455 21ZM9.49773 14.05L14.8909 8.4L13.5545 6.95L9.49773 11.2L7.44545 9.1L6.10909 10.5L9.49773 14.05Z"
                                  fill="#41D4A8"
                                />
                              </svg>
                            </>
                          ) : (
                            <button
                              className={styles.VerifyNowButton}
                              onClick={() => {
                                navigate("/dashboard/kyc");
                              }}
                            >
                              Verify Now
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.kycSection}>
                    <div className={styles.kycDetailRow}>
                      <div className={styles.kycDetailItem}>
                        <div className={styles.kycDetailLabel}>Account Number</div>
                        <div className={styles.kycDetailValue}>
                          {userKyc &&
                            userKyc.bank && userKyc.bank.verified ? (
                            <>
                              {userKyc.bank.documentName}
                              < svg
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="profileKycVerified"
                              >
                                <path
                                  d="M7.25455 21L5.44091 17.8L2.00455 17L2.33864 13.3L0 10.5L2.33864 7.7L2.00455 4L5.44091 3.2L7.25455 0L10.5 1.45L13.7455 0L15.5591 3.2L18.9955 4L18.6614 7.7L21 10.5L18.6614 13.3L18.9955 17L15.5591 17.8L13.7455 21L10.5 19.55L7.25455 21ZM9.49773 14.05L14.8909 8.4L13.5545 6.95L9.49773 11.2L7.44545 9.1L6.10909 10.5L9.49773 14.05Z"
                                  fill="#41D4A8"
                                />
                              </svg>
                            </>

                          )
                            : (
                              <button
                                className={styles.VerifyNowButton}
                                onClick={() => {
                                  navigate("/dashboard/kyc");
                                }}
                              >
                                Verify Now
                              </button>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <Modal className="modalPRofile" show={verifyModal} onHide={handleClose} backdrop="static" centered>

            <button
              onClick={handleClose}
              className="closeButton"
              aria-label="Close"
            >
              X
            </button>

            <Modal.Body>
              <div className={styles.ProfileOtpModal}>
                <div className={styles.formSection}>
                  <h1 className={styles.title}>Verify OTP</h1>
                  <p className={styles.subtitle}>
                    Enter the 6-digit OTP sent to your email
                  </p>

                  <div className={styles.otpContainer}>
                    {[0, 1, 2, 3, 4, 5].map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={1}
                        value={otpValues[index]}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={index === 0 ? handlePaste : null}
                        className={styles.otpInput}
                        style={{ fontWeight: "400" }}
                      />
                    ))}
                  </div>

                  <button
                    className={styles.primaryButton}
                    onClick={verifyEmailOtp}
                    disabled={otpValues.join("").length < 6 || loading}
                  >
                    {loading ? (
                      <span className={styles.loadingSpinner}></span>
                    ) : (
                      "Proceed"
                    )}
                  </button>

                  <p
                    style={{ fontSize: "12px", color: "#606060" }}
                    className="text-center m-0"
                  >
                    I agree to receive critical messages such as OTP, booking details on WhatsApp.
                  </p>
                </div>
              </div>
            </Modal.Body>
          </Modal>

          {/* <Modal show={verifyModal} onHide={handleClose} backdrop="static" centered>
            <Modal.Body>
              <div className={styles.formSection}>
                <h1 className={styles.title}>Verify OTP</h1>
                <p className={styles.subtitle}>
                  Enter the 6-digit OTP sent to your email
                </p>

                <div className={styles.otpContainer}>
                  {[0, 1, 2, 3, 4, 5].map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      value={otpValues[index]}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={index === 0 ? handlePaste : null}
                      className={styles.otpInput}
                      // autoFocus={index === 0 && showOtpPart}
                      style={{ fontWeight: "400" }}
                    />
                  ))}
                </div>
                <button
                  className={styles.primaryButton}
                  onClick={verifyEmailOtp}
                  disabled={otpValues.join("").length < 6 || loading}
                >
                  {loading ? (
                    <span className={styles.loadingSpinner}></span>
                  ) : (
                    "Proceed"
                  )}
                </button>
                <p
                  style={{ fontsize: "12px", color: "#606060" }}
                  className="text-center m-0"
                >
                  I agree to receive critical messages such as OTP, booking details
                  on WhatsApp.
                </p>
              </div>
            </Modal.Body>
          </Modal> */}
        </div>
      </div>
      {/* Mobile version */}
      <div className={styles.mobileProfile}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* <div className={styles.SectionHeading}>Profile</div> */}
            <div className={styles.columnsContainer}>
              <div className={styles.column}>
                <h2 className={styles.sectionTitle}>Personal Details</h2>
                <div className={styles.formGroup}>

                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>Name</label>
                    <div className={styles.fieldBox}>
                      <span className={styles.fieldText}>
                        {userKyc?.userName || userData?.userName || "User"}
                      </span>
                    </div>
                  </div>


                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>Email</label>
                    <div className={styles.fieldBox}>
                      <div className={styles.fieldContent}>
                        <span className={styles.fieldText}>
                          {userData?.email || "N/A"}
                          {userData?.emailVerifystatus ? (
                            <svg
                              width="21"
                              height="21"
                              viewBox="0 0 21 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.25455 21L5.44091 17.8L2.00455 17L2.33864 13.3L0 10.5L2.33864 7.7L2.00455 4L5.44091 3.2L7.25455 0L10.5 1.45L13.7455 0L15.5591 3.2L18.9955 4L18.6614 7.7L21 10.5L18.6614 13.3L18.9955 17L15.5591 17.8L13.7455 21L10.5 19.55L7.25455 21ZM9.49773 14.05L14.8909 8.4L13.5545 6.95L9.49773 11.2L7.44545 9.1L6.10909 10.5L9.49773 14.05Z"
                                fill="#41D4A8"
                              />
                            </svg>
                          ) : (
                            <>
                              <button className={styles.EditProfileButton}>
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.59928 13.8679H6.27294C6.38696 13.8685 6.5 13.8467 6.60556 13.8036C6.71113 13.7604 6.80714 13.6969 6.8881 13.6166L12.8838 7.61226L15.3444 5.20359C15.4256 5.12304 15.4901 5.02722 15.5341 4.92163C15.5781 4.81605 15.6007 4.70281 15.6007 4.58843C15.6007 4.47405 15.5781 4.3608 15.5341 4.25522C15.4901 4.14964 15.4256 4.05381 15.3444 3.97326L11.6708 0.256288C11.5902 0.175079 11.4944 0.110622 11.3888 0.0666343C11.2832 0.0226469 11.17 0 11.0556 0C10.9412 0 10.828 0.0226469 10.7224 0.0666343C10.6168 0.110622 10.521 0.175079 10.4405 0.256288L7.99713 2.70828L1.98412 8.71262C1.90382 8.79358 1.84029 8.8896 1.79717 8.99516C1.75405 9.10072 1.7322 9.21376 1.73286 9.32779V13.0014C1.73286 13.2312 1.82414 13.4516 1.98663 13.6141C2.14911 13.7766 2.36949 13.8679 2.59928 13.8679ZM11.0556 2.09311L13.5076 4.5451L12.2773 5.77543L9.82529 3.32344L11.0556 2.09311ZM3.46571 9.68302L8.60363 4.5451L11.0556 6.9971L5.9177 12.135H3.46571V9.68302ZM16.4621 15.6007H0.866428C0.636637 15.6007 0.416257 15.692 0.253771 15.8545C0.0912841 16.017 0 16.2374 0 16.4671C0 16.6969 0.0912841 16.9173 0.253771 17.0798C0.416257 17.2423 0.636637 17.3336 0.866428 17.3336H16.4621C16.6919 17.3336 16.9123 17.2423 17.0748 17.0798C17.2373 16.9173 17.3286 16.6969 17.3286 16.4671C17.3286 16.2374 17.2373 16.017 17.0748 15.8545C16.9123 15.692 16.6919 15.6007 16.4621 15.6007Z"
                                    fill="#FF4053"
                                  />
                                </svg>
                              </button>
                              <button
                                className={styles.VerifyNowButton}
                                onClick={() => {
                                  sendEmailOtp(userData.email);
                                  setEmail(userData.email);
                                }}
                              >
                                Verify Now
                              </button>
                            </>
                          )}
                        </span>
                      </div>
                    </div>


                  </div>


                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>Mobile Number</label>
                    <div className={styles.fieldBox}>
                      <div className={styles.fieldContent}>
                        <span className={styles.fieldText}>
                          <>
                            {userData?.phoneNumber
                              ? `+${userData.phoneNumber}`
                              : "N/A"}
                            < svg
                              width="21"
                              height="21"
                              viewBox="0 0 21 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.25455 21L5.44091 17.8L2.00455 17L2.33864 13.3L0 10.5L2.33864 7.7L2.00455 4L5.44091 3.2L7.25455 0L10.5 1.45L13.7455 0L15.5591 3.2L18.9955 4L18.6614 7.7L21 10.5L18.6614 13.3L18.9955 17L15.5591 17.8L13.7455 21L10.5 19.55L7.25455 21ZM9.49773 14.05L14.8909 8.4L13.5545 6.95L9.49773 11.2L7.44545 9.1L6.10909 10.5L9.49773 14.05Z"
                                fill="#41D4A8"
                              />
                            </svg>
                          </>
                          {userData?.phoneNumberVerified && (
                            <span className={styles.badgeGreen}>
                              <CheckCircle size={12} className={styles.checkIcon} />{" "}
                              Verified
                            </span>
                          )}
                        </span>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.column}>
                <h2 className={styles.sectionTitle}>KYC Information</h2>
                <div className={styles.kycContainer}>
                  <div className={styles.kycSection}>
                    <div className={userKyc && userKyc.pan && userKyc.pan.verified ? styles.kycMobileviewDetails : styles.kycDetailItem}>
                      <div className={styles.kycDetailLabel}>PAN</div>
                      <div className={styles.kycDetailValue}>
                        {userKyc && userKyc.pan && userKyc.pan.verified ? (
                          <>
                            {userKyc.pan.documentName}
                            <svg
                              width="21"
                              height="21"
                              viewBox="0 0 21 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.25455 21L5.44091 17.8L2.00455 17L2.33864 13.3L0 10.5L2.33864 7.7L2.00455 4L5.44091 3.2L7.25455 0L10.5 1.45L13.7455 0L15.5591 3.2L18.9955 4L18.6614 7.7L21 10.5L18.6614 13.3L18.9955 17L15.5591 17.8L13.7455 21L10.5 19.55L7.25455 21ZM9.49773 14.05L14.8909 8.4L13.5545 6.95L9.49773 11.2L7.44545 9.1L6.10909 10.5L9.49773 14.05Z"
                                fill="#41D4A8"
                              />
                            </svg>
                          </>
                        ) : (
                          <button
                            className={styles.VerifyNowButton}
                            onClick={() => {
                              navigate("/dashboard/kyc");
                            }}
                          >
                            Verify Now
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={styles.kycSection}>
                    <div className={styles.kycDetailRow}>
                      <div className={userKyc && userKyc.aadhaar && userKyc.aadhaar.verified ? styles.kycMobileviewDetails : styles.kycDetailItem}>
                        <div className={styles.kycDetailLabel}>Aadhaar</div>
                        <div className={styles.kycDetailValue}>
                          {userKyc && userKyc.aadhaar && userKyc.aadhaar.verified ? (

                            <>
                              {userKyc.aadhaar.documentName}
                              < svg
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.25455 21L5.44091 17.8L2.00455 17L2.33864 13.3L0 10.5L2.33864 7.7L2.00455 4L5.44091 3.2L7.25455 0L10.5 1.45L13.7455 0L15.5591 3.2L18.9955 4L18.6614 7.7L21 10.5L18.6614 13.3L18.9955 17L15.5591 17.8L13.7455 21L10.5 19.55L7.25455 21ZM9.49773 14.05L14.8909 8.4L13.5545 6.95L9.49773 11.2L7.44545 9.1L6.10909 10.5L9.49773 14.05Z"
                                  fill="#41D4A8"
                                />
                              </svg>
                            </>
                          ) : (
                            <button
                              className={styles.VerifyNowButton}
                              onClick={() => {
                                navigate("/dashboard/kyc");
                              }}
                            >
                              Verify Now
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.kycSection}>
                    <div className={styles.kycDetailRow}>
                      <div className={userKyc && userKyc.bank && userKyc.bank.verified ? styles.kycMobileviewDetails : styles.kycDetailItem}>
                        <div className={styles.kycDetailLabel}>Account Number</div>
                        <div className={styles.kycDetailValue}>
                          {userKyc &&
                            userKyc.bank && userKyc.bank.verified ? (
                            <>
                              {userKyc.bank.documentName}
                              < svg
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.25455 21L5.44091 17.8L2.00455 17L2.33864 13.3L0 10.5L2.33864 7.7L2.00455 4L5.44091 3.2L7.25455 0L10.5 1.45L13.7455 0L15.5591 3.2L18.9955 4L18.6614 7.7L21 10.5L18.6614 13.3L18.9955 17L15.5591 17.8L13.7455 21L10.5 19.55L7.25455 21ZM9.49773 14.05L14.8909 8.4L13.5545 6.95L9.49773 11.2L7.44545 9.1L6.10909 10.5L9.49773 14.05Z"
                                  fill="#41D4A8"
                                />
                              </svg>
                            </>)
                            : (
                              <button
                                className={styles.VerifyNowButton}
                                onClick={() => {
                                  navigate("/dashboard/kyc");
                                }}
                              >
                                Verify Now
                              </button>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* <Modal show={verifyModal} onHide={handleClose} backdrop="static" centered>
  
             <button 
                onClick={handleClose} 
                className={styles.closeButton}
                aria-label="Close"
              >
              X
              </button>

              <Modal.Body>
                <div className={styles.formSection}>
                  <h1 className={styles.title}>Verify OTP</h1>
                  <p className={styles.subtitle}>
                    Enter the 6-digit OTP sent to your email
                  </p>

                  <div className={styles.otpContainer}>
                    {[0, 1, 2, 3, 4, 5].map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={1}
                        value={otpValues[index]}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={index === 0 ? handlePaste : null}
                        className={styles.otpInput}
                        style={{ fontWeight: "400" }}
                      />
                    ))}
                  </div>

                  <button
                    className={styles.primaryButton}
                    onClick={verifyEmailOtp}
                    disabled={otpValues.join("").length < 6 || loading}
                  >
                    {loading ? (
                      <span className={styles.loadingSpinner}></span>
                    ) : (
                      "Proceed"
                    )}
                  </button>

                  <p
                    style={{ fontSize: "12px", color: "#606060" }}
                    className="text-center m-0"
                  >
                    I agree to receive critical messages such as OTP, booking details
                    on WhatsApp.
                  </p>
                </div>
              </Modal.Body>
            </Modal> */}

          {/* <Modal show={verifyModal} onHide={handleClose} backdrop="static" centered>


            <Modal.Body>
              <div className={styles.formSection}>
                <h1 className={styles.title}>Verify OTP</h1>
                <p className={styles.subtitle}>
                  Enter the 6-digit OTP sent to your email
                </p>

                <div className={styles.otpContainer}>
                  {[0, 1, 2, 3, 4, 5].map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      value={otpValues[index]}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={index === 0 ? handlePaste : null}
                      className={styles.otpInput}
                      // autoFocus={index === 0 && showOtpPart}
                      style={{ fontWeight: "400" }}
                    />
                  ))}
                </div>


                <button
                  className={styles.primaryButton}
                  onClick={verifyEmailOtp}
                  disabled={otpValues.join("").length < 6 || loading}
                >
                  {loading ? (
                    <span className={styles.loadingSpinner}></span>
                  ) : (
                    "Proceed"
                  )}
                </button>
                <p
                  style={{ fontsize: "12px", color: "#606060" }}
                  className="text-center m-0"
                >
                  I agree to receive critical messages such as OTP, booking details
                  on WhatsApp.
                </p>
              </div>
            </Modal.Body>
          </Modal> */}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
