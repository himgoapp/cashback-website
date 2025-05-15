import { useState, useRef, useEffect, useContext } from "react";
import { UserContext } from "../../../App";
import avater1 from "../../../assets/avater1.svg";
import {
  sendEmailOtpAPI,
  verifyEmailOtpAPI,
  getUserInfo
} from "../../../servicefile/authservice";
import { userProfileEdit } from "../../../servicefile/dashboardservice";
import { Modal, Form } from "react-bootstrap";
import { CheckCircle, AlertCircle } from "lucide-react";
import styles from "./userProfile.module.css";

const UserProfile = () => {
  const { userData, setUserData } = useContext(UserContext);
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
    }
    else if (e.key === "Backspace" && index > 0 && otpValues[index] === "") {
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
<div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.headerSection}>
          {!userData?.emailVerifystatus && (
            <div className={styles.alertBox}>
              <div className={styles.alertIcon}>
                <AlertCircle size={20} />
              </div>
              <div className={styles.alertContent}>
                <p className={styles.alertTitle}>Verify your email</p>
                <p className={styles.alertText}>Please verify your email address to unlock all features.
                   <button
                className={styles.alertButton}
                onClick={() => {
                  sendEmailOtp(userData.email);
                  setEmail(userData.email);
                }}
                disabled={loading}
              >
                {loading ? <Spinner size="sm" /> : "Verify email"}
              </button>
              </p>
              </div>
              {/* <button
                className={styles.alertButton}
                onClick={() => {
                  sendEmailOtp(userData.email);
                  setEmail(userData.email);
                }}
                disabled={loading}
              >
                {loading ? <Spinner size="sm" /> : "Verify email"}
              </button> */}
            </div>
          )}
        </div>

        <div className={styles.columnsContainer}>
          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>Personal Information</h2>
            <div className={styles.formGroup}>
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Email</label>
                <div className={styles.fieldBox}>
                  <div className={styles.fieldContent}>
                    <span className={styles.fieldText}>{userData?.email || "N/A"}</span>
                   
                  </div>
                </div>
              </div>

              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Full Name</label>
                <div className={styles.fieldBox}>
                  <span className={styles.fieldText}>{userData?.userName || "User"}</span>
                </div>
              </div>

              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Mobile Number</label>
                <div className={styles.fieldBox}>
                  <div className={styles.fieldContent}>
                    <span className={styles.fieldText}>
                      {userData?.phoneNumber ? `+${userData.phoneNumber}` : "N/A"}
                    </span>
                    {userData?.phoneNumberVerified && (
                      <span className={styles.badgeGreen}>
                        <CheckCircle size={12} className={styles.checkIcon} /> Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>KYC Information</h2>
            <div className={styles.kycContainer}>
              <div className={styles.kycSection}>
                <h3 className={styles.kycSectionHeading}>PAN DETAILS</h3>
                <div className={styles.kycDetailItem}>
                  <div className={styles.kycDetailLabel}>PAN Number</div>
                  <div className={styles.kycDetailValue}>
                    {userKyc?.panCardNo || "Not Provided"}
                  </div>
                </div>
                <div className={styles.kycDivider}></div>
              </div>

              <div className={styles.kycSection}>
                <h3 className={styles.kycSectionHeading}>Address Details</h3>
                <div className={styles.kycDetailRow}>
                  <div className={styles.kycDetailItem}>
                    <div className={styles.kycDetailLabel}>Address Proof Document</div>
                    <div className={styles.kycDetailValue}>
                      {userKyc?.addressProofType === "voter_id"
                        ? "Voter ID"
                        : userKyc?.addressProofType === "aadhaar_card"
                          ? "Aadhaar Card"
                          : userKyc?.addressProofType === "passport"
                            ? "Passport"
                            : "Not Provided"}
                    </div>
                  </div>
                  <div className={styles.kycDetailItem}>
                    <div className={styles.kycDetailLabel}>Document Number</div>
                    <div className={styles.kycDetailValue}>
                      {userKyc?.addressProofDocumentNumber || "Not Provided"}
                    </div>
                  </div>
                </div>
                <div className={styles.kycDivider}></div>
              </div>

              <div className={styles.kycSection}>
                <h3 className={styles.kycSectionHeading}>Bank Details</h3>
                <div className={styles.kycDetailRow}>
                  <div className={styles.kycDetailItem}>
                    <div className={styles.kycDetailLabel}>Bank Name</div>
                    <div className={styles.kycDetailValue}>
                      {userKyc?.bank_id?.bank_name || "Not Provided"}
                    </div>
                  </div>
                  <div className={styles.kycDetailItem}>
                    <div className={styles.kycDetailLabel}>Account Number</div>
                    <div className={styles.kycDetailValue}>
                      {userKyc?.bank_id?.account_number || "Not Provided"}
                    </div>
                  </div>
                </div>
                <div className={styles.kycDivider}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={verifyModal}
        onHide={handleClose}
        backdrop="static"
        centered
     
      >
        <Modal.Header
          closeButton
          className={styles.modalHeader}
        >
          <Modal.Title className={styles.modalTitle}>
            <h2 className={styles.modalHeading}>ENTER OTP</h2>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body
          className={styles.modalBody}
        >
          <div className={styles.modalText}>
            <p className={styles.otpMessage}>
              Enter the 6-digit code we emailed you.
            </p>
          </div>

          <div className={styles.otpContainer}>
            <div className={styles.otpInputGroup}>
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div key={index} className={styles.otpInputWrapper}>
                  <Form.Control
                    ref={(el) => (inputRefs.current[index] = el)}
                    className={styles.otpInput}
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

          <div className={styles.resendSection}>
            <div className={styles.resendContainer}>
              <p className={styles.resendText}>
                Haven't received the OTP?
              </p>
              {countdown > 0 ? (
                <span className={styles.countdownText}>
                  Resend in <span className={styles.countdownNumber}>{countdown}s</span>
                </span>
              ) : (
                <button
                  onClick={() => {
                    sendEmailOtp(email);
                  }}
                  className={styles.resendButton}
                  disabled={loading}
                >
                  Resend
                </button>
              )}
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer
          className={styles.modalFooter}
        >
          <button
            onClick={verifyEmailOtp}
            className={`${styles.submitButton} ${otpValues.join("").length < 6 ? styles.buttonDisabled : ""
              }`}
            disabled={otpValues.join("").length < 6 || loading}
          >
            {loading ? (
              <span className={styles.loadingContainer}>
                <Spinner size="sm" />
                <span className={styles.loadingText}>Verifying...</span>
              </span>
            ) : (
              <span>Continue</span>
            )}
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserProfile;