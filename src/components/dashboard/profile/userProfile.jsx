import { useState, useRef, useEffect, useContext } from "react";
import { UserContext } from "../../../App";
import avater1 from "../../../assets/avater1.svg";
import {
  sendEmailOtpAPI,
  verifyEmailOtpAPI,
  getUserInfo
} from "../../../servicefile/authservice";
import { userProfileEdit } from "../../../servicefile/dashboardservice";
import styles from "./userProfile.module.css";
import { Modal, Button, Form } from "react-bootstrap";
import { RakebackLogo } from "../../common/logo/logo";
import Loading from "../../common/Loading/Loading";

const UserProfile = () => {
  // Get userData from context
  const { userData, setUserData } = useContext(UserContext);
  // States for various functionalities
  const [verifyModal, setVerifyModal] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [editName, setEditName] = useState(false);
  const [userName, setUserName] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [userKyc, setUserKyc] = useState(null);
  const [activeTab, setActiveTab] = useState("personal");

  const inputRefs = useRef([]);

  // Initialize data from userData
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);

    if (userData) {
      setUserName(userData.userName || "");
      setEmail(userData.email || "");
    }
  }, [userData]);

  // Load user profile image
  useEffect(() => {
    if (userData && userData.userImg) {
      setSelectedImage(userData.userImg);
    } else {
      setSelectedImage(avater1);
    }
  }, [userData]);

  // Auto-focus first input when OTP modal opens
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

  // Function to refresh user data
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
  // Save profile changes to backend
  const handleSaveProfile = async () => {
    try {
      setLoading(true);
      const response = await userProfileEdit(
        userData._id,
        userName,
        userData.address || ""
      );

      if (response.success) {
        setUserData(prev => ({
          ...prev,
          userName: userName
        }));
        setEditName(false);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred while updating the profile");
      setLoading(false);
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
    } else {
      // toast.warn("Please enter a valid email address!");
      setLoading(false);
    }
  };

  // Verify email OTP
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
        await getUserData(); // Refresh user data to update email verification status
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

  // Spinner component
  const Spinner = ({ size }) => (
    <div className={size === "sm" ? styles.spinnerSmall : styles.spinner}></div>
  );

  return (
    <div className={styles.container}>
      {/* Premium Tabs with Indicator Animation */}
      <div className={styles.tabsContainer}>
        {/* <button
          onClick={() => setActiveTab("personal")}
          className={activeTab === "personal" ? styles.activeTab : styles.tab}
        >
          Personal Details
        </button> */}

        {/* <button
          onClick={() => setActiveTab("kyc")}
          className={activeTab === "kyc" ? styles.activeTab : styles.tab}
        >
          KYC Details
        </button> */}
      </div>

        <>
          <div className={styles.content}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Personal Information</h3>
              {/* Full Name Field */}
              <div className={styles.fieldContainer}>
                {editName ? (
                  <div className={styles.editContainer}>
                    <input
                      type="text"
                      className={styles.textInput}
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Enter your full name"
                    />
                    <div className={styles.buttonGroup}>
                      <button
                        className={styles.cancelButton}
                        onClick={() => {
                          setEditName(false);
                          setUserName(userData?.userName || "");
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className={styles.saveButton}
                        onClick={handleSaveProfile}
                        disabled={loading || !userName.trim()}
                      >
                        {loading ? <Spinner size="sm" /> : "Save"}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={styles.fieldBox}>
                    <label className={styles.floatingLabel}>Full name</label>
                    <div className={styles.fieldBoxContent}>
                      <span className={styles.fieldValue}>
                        {userData?.userName || "User"}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.fieldContainer}>
                <div className={styles.fieldBox}>
                  <label className={styles.floatingLabel}>Email</label>
                  <div className={styles.fieldBoxContent}>
                    <div className={styles.infoColumn}>
                      <div className={styles.infoRow}>
                        <span className={styles.fieldValue}>{userData?.email || "N/A"}</span>
                      </div>
                      <div className={styles.statusContainer}>
                        {userData?.emailVerifystatus ? (
                          <span className={styles.verifiedStatus}>
                            Verified
                          </span>
                        ) : (
                          <span className={styles.notVerifiedStatus}></span>
                        )}
                      </div>
                    </div>
                    {!userData?.emailVerifystatus && (
                      <button
                        className={styles.verifyButton}
                        onClick={() => {
                          sendEmailOtp(userData.email);
                          setEmail(userData.email);
                        }}
                        disabled={loading}
                      >
                        {loading ? <Spinner size="sm" /> : "Verify Email"}
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.fieldContainer}>
                <div className={styles.fieldBox}>
                  <label className={styles.floatingLabel}>Mobile Number</label>
                  <div className={styles.fieldBoxContent}>
                    <div className={styles.infoColumn}>
                      <div className={styles.infoRow}>
                        <span className={styles.fieldValue}>
                          {userData?.phoneNumber ? `+${userData.phoneNumber}` : "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>KYC Information</h3>

              <h4 className={styles.kycSectionTitle}>PAN Card Details</h4>
<div className={styles.row}>
  <div className={styles.fieldBox}>
    <label className={styles.floatingLabel}>PAN Number</label>
    
    <div className={styles.fieldBoxContent}>
      <span className={styles.fieldValue}>
        {userKyc?.panCardNo || "Not Submitted"}
      </span>
    </div>
  </div>

  {/* <div className={styles.fieldBox}>
    <label className={styles.floatingLabel}>PAN Card Status</label>
    <div className={styles.fieldBoxContent}>
      <span className={styles.fieldValue}>
        {userKyc?.panStatus || "Not Provided"}
      </span>
    </div>
  </div> */}
</div>


              <h4 className={styles.kycSectionTitle}>Address Details</h4>
              <div className={styles.row}>
                <div className={styles.fieldBox}>
                  <label className={styles.floatingLabel}>Address Proof Document</label>
                  <div className={styles.fieldValue}>
                    {userKyc?.addressProofType === "voter_id"
                      ? "Voter ID"
                      : userKyc?.addressProofType === "aadhaar_card"
                        ? "Aadhaar Card"
                        : userKyc?.addressProofType === "passport"
                          ? "Passport"
                          : "Not Provided"}
                  </div>
                </div>
                <div className={styles.fieldBox}>
                  <label className={styles.floatingLabel}>Document Number</label>
                  <div className={styles.fieldValue}>
                    {userKyc?.addressProofDocumentNumber || "Not Provided"}
                  </div>
                </div>
              </div>
              <h4 className={styles.kycSectionTitle}>Bank Details</h4>
              <div className={styles.row}>
                <div className={styles.fieldBox}>
                  <label className={styles.floatingLabel}>Bank Name</label>
                  <div className={styles.fieldValue}>
                    {userKyc?.bank_id?.bank_name || "Not Provided"}
                  </div>
                </div>
                <div className={styles.fieldBox}>
                  <label className={styles.floatingLabel}>Account Number</label>
                  <div className={styles.fieldValue}>
                    {userKyc?.bank_id?.account_number || "Not Provided"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      {/* )} */}
      <Modal
        show={verifyModal}
        onHide={handleClose}
        backdrop="static"
        centered
        size="md"
        className="fade"
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* <div style={{ 
          background: "linear-gradient(135deg, #0052cc 0%, #283593 100%)",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          height: "8px"
        }}></div> */}
        
        <Modal.Header
          closeButton
          className="border-0 pb-0 pt-4"
          style={{
            background: "#ffffff",
          }}
        >
          <Modal.Title className="w-100 text-center">
            <h2 className="fw-bold" style={{ 
              fontSize: "30px", 
              color: "#0052cc", 
              letterSpacing: "-0.5px",
              marginBottom: "5px",
              fontFamily:"Futura"
            }}>Enter OTP</h2>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{
            paddingTop: "10px",
            paddingBottom: "25px",
            background: "#ffffff"
          }}
        >
          <div className="text-center mb-4">
            <p style={{ 
              fontSize: "16px", 
              color: "#455a64",
              fontWeight: "400",
              maxWidth: "280px",
              margin: "0 auto", 
              fontFamily:'"Roboto",sans-serif'
            }}>
              Enter OTP sent to your existing email and mobile number
            </p>
          </div>

          <div className="px-4 mb-5">
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
                    className="text-center"
                    style={{
                      height: "40px",
                      width:"40px",
                      fontSize: "22px",
                      padding: "0",
                      borderRadius: "12px",
                      border: index === 0 ? "2px solid #e0e0e0" : "2px solid #e0e0e0",
                      boxShadow: otpValues[index]
                        ? "0 4px 14px rgba(57, 73, 171, 0.15), 0 0 0 2px rgba(57, 73, 171, 0.1)"
                        : "0 2px 10px rgba(0, 0, 0, 0.03)",
                      backgroundColor: "#ffffff",
                      transition: "all 0.3s ease",
                       fontFamily:'"Roboto",sans-serif'
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
            <div className="d-flex align-items-center justify-content-center">
              <p className="mb-0" style={{ fontSize: "14px", color: "#546e7a", fontFamily:'"Roboto",sans-serif' }}>
                Haven't received the OTP?
              </p>
              {countdown > 0 ? (
                <span className="ms-2" style={{ color: "#3949ab", fontSize: "14px", fontWeight: "500" , fontFamily:'Futura'}}>
                  Resend in <span className="fw-bold">{countdown}s</span>
                </span>
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
                    padding: "4px 8px",
                     fontFamily:'Futura',
                    fontSize: "14px",
                  }}
                  className="ms-2 p-0"
                  disabled={loading}
                >
                  Resend
                </Button>
              )}
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer
          className="border-0 justify-content-center p-4 pt-0 pb-5"
          style={{
            background: "#ffffff",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
          }}
        >
          <Button
            variant="primary"
            onClick={verifyEmailOtp}
            style={{
              background: otpValues.join("").length < 6 
                ? "#f5f5f5" 
                : "linear-gradient(135deg, #0052cc 0%, #0052cc 100%)",
              color: otpValues.join("").length < 6 ? "#9e9e9e" : "white",
              border: "none",
              width: "100%",
              padding: "16px",
              fontWeight: "600",
              fontSize: "17px",
              borderRadius: "14px",
              transition: "all 0.3s ease",
              boxShadow: otpValues.join("").length < 6 
                ? "none" 
                : "0 10px 20px rgba(57, 73, 171, 0.25), 0 6px 6px rgba(57, 73, 171, 0.1)",
              position: "relative",
              overflow: "hidden",
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
                Continue
              </span>
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserProfile;