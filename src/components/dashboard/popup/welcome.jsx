import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../../App";
import { signUpFxn } from "../../../servicefile/authservice";
import styles from "./welcome.module.css";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import {
  sendEmailOtpAPI,
  verifyEmailOtpAPI,
  getUserInfo
} from "../../../servicefile/authservice";
const WelcomePage = () => {
  const navigate = useNavigate();
  const { mobile, setUserData, userData } = useContext(UserContext);

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("")
  const inputRefs = useRef(Array(6).fill(null));
  

  const getUserData = async () => {
    try {
      setIsLoading(true);
      const res = await getUserInfo();
      if (res.success) {
        setUserData(res.userInfo.user);
      } else {
        alert(res.message || "Failed to get user info");
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("An error occurred while fetching user data");
      setIsLoading(false);
    }
  };
  const sendEmailOtp = async (emailToVerify) => {
    setIsLoading(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailToVerify && emailRegex.test(emailToVerify)) {
      let data = await sendEmailOtpAPI(emailToVerify);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  const handleContinue = async () => {
    if (step === 1) {
      if (!email) {
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address");
        return;
      }

      await sendEmailOtp(email);
      setStep(2);
    } else if (step === 2) {
      const combinedOtp = otpValues.join("");

      if (!combinedOtp || combinedOtp.length !== 6) {
        return;
      }

      try {
        setIsLoading(true);
        const data = await verifyEmailOtpAPI(email, combinedOtp);

        if (data && data.message === "Email verified!") {
          setOtpValues(["", "", "", "", "", ""]);
          setStep(3);
          await getUserData();
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    } else if (step === 3) {
      if (!userName) {
        return;
      }
      if (!userData || !userData._id) {
        return;
      }

      setIsLoading(true);
      try {
        const data = await signUpFxn(userData.phoneNumber, email, userName);
        if (data?.user && data?.message) {
          localStorage.setItem("transactionInfo", "true");
          setUserData(data.user);
          navigate("/dashboard");
        }
      } catch (err) {
        toast.error("Signup failed. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleBack = () => {
    if (step === 3) {
      setStep(2);
    } else if (step === 2) {
      setStep(1);
    } else {
      navigate(-1);
    }
  };

  const handleWelcome = () => {
    if (userData && userData.email && userData.userName) {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    handleWelcome();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleContinue();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [step, email, otpValues, userName, userData]);

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

  return (
    <>
      <div className={styles.navbarWrapper}>
        <Navbar page="welcome" />
      </div>

      <div className={styles.fullPageContainer}>
        <div className={styles.authCard}>
          <div className={styles.backButtonContainer}>
            <button onClick={handleBack} className={styles.backButton}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className={styles.formSection}>
            <h1 className={styles.title}>
              {step === 1
                ? "Enter your email"
                : step === 2
                  ? "Enter the OTP"
                  : "What's your name"}
            </h1>
            <p className={styles.subtitle}>
              {step === 1
                ? "For additional security"
                : step === 2
                  ? "Enter the 6-digit code we emailed you."
                  : "Please enter your full name"}
            </p>

            <div className={styles.form}>
              {step === 1 && (
                <div className={styles.inputField}>
                  <input
                    autoFocus
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(""); 
                    }}

                   className={`${styles.email_label} ${error ? styles.invalidInput : ""}`}
                    required
                  />
                  <label htmlFor="email" className={`${styles.email_label} ${error ? styles.invalidInputLabel : ""}`}>Enter email</label>
                  {error && <p style={{ color: "red", fontSize: "14px", marginTop: "5px", fontFamily: '"Roboto",sans-serif' }}>{error}</p>}
                </div>
              )}

              {step === 2 && (
                <div className={styles.otpContainer}>
                  {otpValues.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={index === 0 ? handlePaste : null}
                      className={styles.otpInput}
                      autoFocus={index === 0}
                      style={{ fontFamily: '"Roboto",sans-serif', fontWeight: "400" }}
                    />
                  ))}
                </div>
              )}

              {step === 3 && (
                <div className={styles.inputField}>
                  <input
                    autoFocus
                    type="text"
                    id="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    style={{ fontFamily: '"Roboto", sans-serif' }}
                  />
                  <label htmlFor="name">Enter Name</label>
                </div>
              )}

              <button
                className={styles.primaryButton}
                onClick={handleContinue}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className={styles.loadingSpinner}></div>
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerWrapper}>
        <div style={{ backgroundColor: "#0052cc", width: "100%" }}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
