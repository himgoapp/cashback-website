import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginOtp, loginVerify } from "../../../servicefile/authservice";
import { UserContext } from "../../../App";
import styles from "./signin.module.css";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
const FullPageSignin = () => {
  const { setUserData, setShowWelcomePopup } = useContext(UserContext);
  const navigate = useNavigate();
  const [showOtpPart, setShowOtpPart] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const otpInputRefs = useRef([]);

  if (otpInputRefs.current.length !== 6) {
    otpInputRefs.current = Array(6).fill().map((_, i) => otpInputRefs.current[i] || React.createRef());
  }

  useEffect(() => {
    if (showOtpPart && otpInputRefs.current[0]) {
      otpInputRefs.current[0].current.focus();
    }
  }, [showOtpPart]);

  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleOtpChange = (e, index) => {
    if (e.target.value.length <= 1 && /^[0-9]*$/.test(e.target.value)) {
      const newOtp = [...otp];
      newOtp[index] = e.target.value;
      setOtp(newOtp);

      // Auto-focus next input
      if (e.target.value !== "" && index < 5) {
        otpInputRefs.current[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        otpInputRefs.current[index - 1].current.focus();
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      verifyOtp();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 6).replace(/[^0-9]/g, "");

    if (pasteData) {
      const newOtp = [...otp];
      for (let i = 0; i < pasteData.length; i++) {
        if (i < 6) {
          newOtp[i] = pasteData[i];
        }
      }
      setOtp(newOtp);

      // Focus the appropriate field after paste
      if (pasteData.length < 6) {
        otpInputRefs.current[pasteData.length].current.focus();
      } else {
        otpInputRefs.current[5].current.focus();
      }
    }
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    sendOtp();
  };

  const sendOtp = async () => {
    if (phoneNumber && phoneNumber.length === 10) {
      setLoading(true);
      try {
        let data = await loginOtp(phoneNumber);

        if (data && data.message === "Otp Sent!" && data.data && data.data.type === "success") {
          setShowOtpPart(true);
          setResendTimer(30);
        } else {
          // Handle error case
          console.error("Failed to send OTP");
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
      } finally {
        setLoading(false);
      }
    } else {
      // Validation error handling could be added here
      console.warn("Please enter a valid 10-digit phone number");
    }
  };

  const verifyOtp = async () => {
    const otpString = otp.join("");
    if (otpString && otpString.length === 6) {
      setLoading(true);
      try {
        let data = await loginVerify(phoneNumber, otpString);
        if (data && data.message === "Otp verified!" && data.user) {
          localStorage.setItem("token", data.token);
          setUserData(data.user);
          if (data.user && data.user.email) {
            navigate("/dashboard");
          } else {
            setShowWelcomePopup(true);
            navigate("/welcome");
          }
        } else {
          // Handle verification error
          console.error("OTP verification failed");
        }
      } catch (error) {
        console.error("Error verifying OTP:", error);
      } finally {
        setLoading(false);
      }
    } else {
      // Validation error handling
      console.warn("Please enter a valid 6-digit OTP");
    }
  };

  const editNumber = () => {
    setShowOtpPart(false);
    setOtp(["", "", "", "", "", ""]);
  };
  const handleChange = (e) => {
    const value = e.target.value;

    // Allow only digits
    if (/^\d*$/.test(value)) {
      // Check first digit
      if (value.length === 1 && !/^[6-9]$/.test(value)) {
        setError("Enter your valid number");
        return;
      }

      setPhoneNumber(value);

      // Validate after 10 digits
      if (value.length === 10 && !/^[6-9]\d{9}$/.test(value)) {
        setError("Enter your valid number");
      } else {
        setError("");
      }
    }
  };
  return (
    <>
      <Navbar page="login" />
      <div className={styles.fullPageContainer}>
        <div className={styles.authCard}>
          <div className={styles.backButtonContainer}>
            <button
              className={styles.backButton}
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {!showOtpPart ? (
            <div className={styles.formSection}>
              <h1 className={styles.title}>Login or signup</h1>
              <p className={styles.subtitle}>We will send an OTP to verify</p>

              <form onSubmit={handlePhoneSubmit} className={styles.form}>
                <div className={styles.inputField}>
                  <input
                    autoFocus
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={10}
                    value={phoneNumber}
                    onChange={handleChange}
                    required
                    style={{ fontFamily: '"Roboto", sans-serif' }}
                    className={`${styles.number_label} ${error ? styles.invalidInput : ""}`}
                  />
                  <label style={{ fontFamily: '"Roboto", sans-serif' }}
                    className={`${styles.number_label} ${error ? styles.invalidInputLabel : ""}`}>
                    Enter mobile number
                  </label>
                  {error && <p style={{ color: "red", fontSize: "14px", marginTop: "5px", fontFamily: '"Roboto",sans-serif' }}>{error}</p>}
                </div>


                <button
                  type="submit"
                  className={styles.primaryButton}
                  disabled={loading || !phoneNumber || phoneNumber.length !== 10}
                >
                  {loading ? (
                    <span className={styles.loadingSpinner}></span>
                  ) : (
                    "Continue"
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className={styles.formSection}>
              <h1 className={styles.title}>Enter OTP</h1>
              <p className={styles.subtitle}>
                OTP sent to {phoneNumber.slice(0, 2)}•••••{phoneNumber.slice(-2)}
                <button
                  className={styles.editButton}
                  onClick={editNumber}
                >
                  Edit Number
                </button>
              </p>

              <div className={styles.otpContainer}>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={otpInputRefs.current[index]}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={index === 0 ? handlePaste : null}
                    className={styles.otpInput}
                    autoFocus={index === 0 && showOtpPart}
                    style={{ fontFamily: '"Roboto",sans-serif', fontWeight: "400" }}
                  />
                ))}
              </div>

              <div className={styles.resendContainer}>
                <p>
                  Haven't received the OTP?{' '}
                  {resendTimer > 0 ? (
                    <span style={{ fontFamily: '"Roboto",sans-serif', fontWeight: "400" }}>Resend in <span className={styles.timer} style={{ fontFamily: '"Roboto",sans-serif' }}>{resendTimer}s</span></span>
                  ) : (
                    <button
                      className={styles.resendButton}
                      onClick={sendOtp}
                    >
                      Resend
                    </button>
                  )}
                </p>
              </div>

              <button
                className={styles.primaryButton}
                onClick={verifyOtp}
                disabled={loading || otp.join("").length !== 6}
              >
                {loading ? (
                  <span className={styles.loadingSpinner}></span>
                ) : (
                  "Verify OTP"
                )}
              </button>
            </div>
          )}
        </div>
      </div>
      <div
        style={{ width: "100%", backgroundColor: "#0052cc" }}
        className="flex_center"
      >
        <Footer />
      </div>
    </>
  );
};

export default FullPageSignin;