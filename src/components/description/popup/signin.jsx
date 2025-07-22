import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginOtp, loginVerify } from "../../../servicefile/authservice";
import { UserContext } from "../../../App";
import styles from "./signin.module.css";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import Layer1 from "../../../assets/Logos_and_illustration/Layer_1.svg";
import Layer2 from "../../../assets/Logos_and_illustration/Layer_02.svg";
import chipBannerRight from "../../../assets/Logos_and_illustration/chipHeroBannerRight.svg";
import chipBannerLeft from "../../../assets/Logos_and_illustration/coinrightbanner.svg";
import starRightHeroBanner from "../../../assets/Logos_and_illustration/StarRightHeroBanner.svg";
import pokerCardheroBanner from "../../../assets/Logos_and_illustration/pokerCardheroBanner.svg";
import starTopHeroBanner from "../../../assets/Logos_and_illustration/starTopHeroBanner.svg";

import heroSectionBanner from "../../../assets/Logos_and_illustration/heroSectionBanner.svg";

import Logo from "../../../assets/Logos_and_illustration/Logo_Red.svg";

import { color } from "framer-motion";
const FullPageSignin = () => {
  const { setUserData, setShowWelcomePopup } = useContext(UserContext);
  const navigate = useNavigate();
  const [showOtpPart, setShowOtpPart] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [hideImage, setHideImage] = useState(false);
  const otpInputRefs = useRef([]);

  if (otpInputRefs.current.length !== 6) {
    otpInputRefs.current = Array(6)
      .fill()
      .map((_, i) => otpInputRefs.current[i] || React.createRef());
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
    const pasteData = e.clipboardData
      .getData("text")
      .slice(0, 6)
      .replace(/[^0-9]/g, "");

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

        if (
          data &&
          data.message === "Otp Sent!" &&
          data.data &&
          data.data.type === "success"
        ) {
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
        setError("Please enter a valid number");
        return;
      }

      setPhoneNumber(value);

      // Validate after 10 digits
      if (value.length === 10 && !/^[6-9]\d{9}$/.test(value)) {
        setError("Please enter a valid number");
      } else {
        setError("");
      }
    }
  };
  return (
    <>
      <div className="MobileViewLogin">
        <Navbar page="login" />
        <div className={styles.fullPageContainer}>
          <div className={styles.authCard}>
            {/* <div className={styles.backButtonContainer}>
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
          </div> */}

            {!showOtpPart ? (
              <div className={styles.formSection}>
                {!hideImage && (
                  <div className="videoContainer">
                    <img src={chipBannerLeft} alt="chip" className="chipIcon" />
                    <img
                      src={chipBannerRight}
                      alt="chip right"
                      className="chipBannerRight"
                    />
                    <img
                      src={pokerCardheroBanner}
                      alt="star right"
                      className="pokerCardheroBanner"
                    />
                    <img
                      src={starTopHeroBanner}
                      alt="star right"
                      className="starTopHeroBanner"
                    />
                    <img
                      src={heroSectionBanner}
                      className="BannerIcon BannerIcon"
                      alt="hero banner"
                    />
                  </div>
                )}
                <img src={Logo} class="LogoIcon" alt="hero banner"></img>
                <h1 className={styles.title}>Login or signup</h1>
                <p className={styles.subtitle}>We will send an OTP to verify</p>
                <p className={styles.MobileSubtitle}>
                  Make Poker More Profitable
                </p>
                <form onSubmit={handlePhoneSubmit} className={styles.form}>
                  <div className={styles.inputField}>
                    <span className={styles.CountryCode}>+91</span>
                    <input
                      // autoFocus
                      type="tel"
                      inputMode="numeric"
                      placeholder="Enter mobile number"
                      pattern="[0-9]*"
                      maxLength={10}
                      value={phoneNumber}
                      onChange={handleChange}
                      onFocus={() => setHideImage(true)}
                      // onBlur={() => setHideImage(false)}
                      required
                      className={`${styles.number_label} ${
                        error ? styles.invalidInput : ""
                      }`}
                    />
                    {/* <label style={{ fontFamily: '"Roboto", sans-serif' }}
                    className={`${styles.number_label} ${error ? styles.invalidInputLabel : ""}`}>
                    Enter mobile number
                  </label> */}
                    {error && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "16px",
                          margin: "32px 0",
                        }}
                      >
                        <svg
                          style={{ marginRight: "9px" }}
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.64258 0.283691C11.863 0.283955 15.2842 3.70582 15.2842 7.92627C15.2842 12.1467 11.863 15.5686 7.64258 15.5688C3.42197 15.5688 0 12.1469 0 7.92627C0 3.70566 3.42197 0.283691 7.64258 0.283691ZM6.72559 10.6167V12.2671H8.43652V10.6167H6.72559ZM6.84766 3.34131V9.479H8.31445V3.34131H6.84766Z"
                            fill="#FF4053"
                          />
                        </svg>{" "}
                        {error}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={styles.primaryButton}
                    disabled={
                      loading || !phoneNumber || phoneNumber.length !== 10
                    }
                  >
                    {loading ? (
                      <span className={styles.loadingSpinner}></span>
                    ) : (
                      "Continue"
                    )}
                  </button>
                  <p className={styles.enterMobiletext}>
                    Please enter 10 digit mobile number
                  </p>
                </form>
              </div>
            ) : (
              <div className={`${styles.formSection} ${styles.formSectionOTP}`}>
                <h1 className={styles.title}>Verify OTP</h1>
                <p className={styles.subtitle}>
                  One Time Password (OTP) has been sent to{" "}
                  {phoneNumber.slice(0, 2)}•••••{phoneNumber.slice(-2)}
                  <button className={styles.editButton} onClick={editNumber}>
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
                      style={{ fontWeight: "400" }}
                    />
                  ))}
                </div>

                <div className={styles.resendContainer}>
                  <p>
                    {" "}
                    {resendTimer > 0 ? (
                      // <span style={{   fontWeight: "400" }}>Resend in <span className={styles.timer} style={{  }}>{resendTimer}s</span></span>
                      <span style={{ fontWeight: "400" }}>
                        Resend OTP in{" "}
                        <span className={styles.timer} style={{}}>
                          {resendTimer}s
                        </span>
                      </span>
                    ) : (
                      <button className={styles.resendButton} onClick={sendOtp}>
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
                    "Proceed"
                  )}
                </button>
                <p
                  style={{ fontsize: "12px", color: "#606060" }}
                  className="text-center m-0"
                >
                  I agree to receive critical messages such as OTP, booking
                  details on WhatsApp.
                </p>
              </div>
            )}
          </div>
        </div>
        {/* <div
        style={{ width: "100%", backgroundColor: "#0052cc" }}
        className="flex_center"
      >
        <Footer />
      </div> */}
      </div>
    </>
  );
};

export default FullPageSignin;
