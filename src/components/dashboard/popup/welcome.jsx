import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../../App";
import { signUpFxn } from "../../../servicefile/authservice";
import styles from "./welcome.module.css";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";

const WelcomePage = () => {
  const navigate = useNavigate();
  const { mobile, setUserData, userData } = useContext(UserContext);

  const [step, setStep] = useState(1); // STEP: 1 = email, 2 = name
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = async () => {
    if (step === 1) {
      if (!email) return;
      setStep(2);
    } else if (step === 2) {
      if (!userName) return;
      if (!userData || !userData._id) return;

      setIsLoading(true);
      try {
        const data = await signUpFxn(userData.phoneNumber, email, userName);
        if (data?.user && data?.message) {
          localStorage.setItem("transactionInfo", "true");
          setUserData(data.user);
          navigate("/dashboard");
        }
      } catch (err) {
        // Handle error if needed
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else {
      navigate(-1);
    }
  };

  const handleWelcome = () =>{
   if( userData && userData.email  && userData.userName){
    navigate("/dashboard")
   }
  }


  useEffect (() =>{
    handleWelcome()
  }, [])

  // 🔑 Listen for Enter key to trigger handleContinue
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
  }, [step, email, userName, userData]);

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
              {step === 1 ? "Enter your email" : "What's your name"}
            </h1>
            <p className={styles.subtitle}>
              {step === 1
                ? "For additional security"
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
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="email">Enter email</label>
                </div>
              )}

              {step === 2 && (
                <div className={styles.inputField}>
                  <input
                  autoFocus
                    type="text"
                    id="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
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
