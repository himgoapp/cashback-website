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
  getUserInfo,
} from "../../../servicefile/authservice";
const WelcomePage = () => {
  const navigate = useNavigate();
  const { mobile, setUserData, userData } = useContext(UserContext);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [errorName, setErrorName] = useState("");

  const handleContinue = async () => {
    if (!email && !userName) {
      setErrorName("Please enter a valid name");
      setError("Please enter a valid email");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    if (!userName) {
      setErrorName("Please enter a valid name");
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
  };

  const handleBack = () => {
    navigate(-1);
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
  }, [email, userName, userData]);

  return (
    <>
      <div className="MobileViewLogin">
        <div className={styles.navbarWrapper}>
          <Navbar page="welcome" />
        </div>
        <div className={styles.fullPageContainer}>
          <div className={styles.authCard}>
            <div className={styles.formSection}>
              <h1 className={styles.title}>Let’s Get Started</h1>
              <p className={styles.subtitle}>Enter valid details</p>

              <div className={styles.form}>
                <div className={styles.inputField}>
                  <input
                    autoFocus
                    type="text"
                    id="text"
                    placeholder="Full Name"
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                      if (errorName) setErrorName("");
                    }}
                    className={`${styles.email_label} ${
                      errorName ? styles.invalidInput : ""
                    }`}
                    required
                  />
                  {errorName && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "16px",
                      }}
                    >
                      {" "}
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
                      {errorName}
                    </p>
                  )}
                  <input
                    autoFocus
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    className={`${styles.email_label} ${
                      error ? styles.invalidInput : ""
                    }`}
                    required
                  />

                  {error && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "16px",
                        margin: "32px 0",
                      }}
                    >
                      {" "}
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
                  className={styles.primaryButton}
                  onClick={handleContinue}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className={styles.loadingSpinner}></div>
                  ) : (
                    "Proceed"
                  )}
                </button>
                <p
                  style={{ fontsize: "12px", color: "#000" }}
                  className="text-center m-0 OTPBottomText"
                >
                  By signing up, I agree to Rakebackk’s T&Cs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
