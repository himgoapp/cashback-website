import "./App.css";
import "../src/assets/Style/style.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";

import { createContext, useEffect, useState } from "react";
import OfferAndDealsContainer from "./pages/offerAndDealsPage";
import DescriptionPage from "./pages/descriptionPage";
import DashboardHome from "./components/dashboard/home/home";
import PokerID from "./components/dashboard/pokerID/pokerID";
import DealsContainer from "./components/dashboard/deals/dealspage";
import VerifyAccount from "./components/dashboard/veryfyAccount/verifyAccount";
import KYC from "./components/dashboard/KYC/kyc";
import Trsnsactions from "./components/dashboard/myTransaction/myTransaction";
import { ProtectedRoute, NotProtectedRoute } from "./helperFxns/protectedRoute";
import LatestNewsMain from "./components/home/latestnews/LatestNewsMain";
// import LatestNews from "./components/home/latestnews/LatestNews";
import BlogDetail from "./components/home/latestnews/NewsArticle";
import FaqContainer from "./components/home/FAQ/FaqContainer";
import WelcomePage from "./components/dashboard/popup/welcome";
import FullPageSignin from "./components/description/popup/signin";
import ContactUSPage from "./pages/ContactUsPage";
import RetagPage from "./pages/retagPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TermsConditions from "./components/common/footer/termsConditions";
import Profile from "./components/dashboard/profile/profile";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "slick-carousel/slick/slick.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "../src/assets/Style/responsive.css";
import MobileView from "./components/dashboard/mobileSidebar/Mobilepageview";

export const UserContext = createContext();

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);
  const [showSigninPopup, setShowSigninPopup] = useState(true);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [showCheckEmailPopup, setShowCheckEmailPopup] = useState(true);
  const [showWalletWithdraw, setShowWalletWithdraw] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [userData, setUserData] = useState(null);
  const [transactionInfo, setTransactionInfo] = useState(null);
  const [walletData, setWalletData] = useState(null);
  const [userKyc, setUserKyc] = useState(null);

  const [loginTab, setLoginTab] = useState(false);
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
   const handleResize = () => {
        setMobile(window.innerWidth <= 575);
        setShowSidebar(false)
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateWalletBalance = (newBalance) => {
    setWalletData((prev) => ({
      ...prev,
      wallet_balance: newBalance,
    }));
  };
  return (
    <>
      <ToastContainer />
      <UserContext.Provider
        value={{
          showSidebar,
          setShowSidebar,
          showMobileSideBar,
          setShowMobileSideBar,
          showSigninPopup,
          setShowSigninPopup,
          mobile,
          showWelcomePopup,
          setShowWelcomePopup,
          showCheckEmailPopup,
          setShowCheckEmailPopup,
          showWalletWithdraw,
          setShowWalletWithdraw,
          showNotifications,
          setShowNotifications,
          userData,
          setUserData,
          loginTab,
          setLoginTab,
          transactionInfo,
          setTransactionInfo,
          walletData,
          setWalletData,
          userKyc,
          setUserKyc,
          updateWalletBalance,
        }}
      >
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <NotProtectedRoute>
                  <HomePage />
                </NotProtectedRoute>
              }
            />
            <Route
              path="/welcome"
              element={
                <ProtectedRoute>
                  <WelcomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/offer-and-deals"
              element={
                <NotProtectedRoute>
                  <OfferAndDealsContainer />
                </NotProtectedRoute>
              }
            />

            <Route
              path="/contact-us"
              element={
                <NotProtectedRoute>
                  <ContactUSPage />
                </NotProtectedRoute>
              }
            />
            <Route
              path="/retag"
              element={
                <NotProtectedRoute>
                  <RetagPage />
                </NotProtectedRoute>
              }
            />

            <Route
              path="/description/:roomId"
              element={
                <ProtectedRoute>
                  <DescriptionPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardHome />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard/pokerid"
              element={
                <ProtectedRoute>
                  <PokerID />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard/deals"
              element={
                <ProtectedRoute>
                  <DealsContainer />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard/verify-account"
              element={
                <ProtectedRoute>
                  <VerifyAccount />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard/kyc"
              element={
                <ProtectedRoute>
                  <KYC />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard/mytransactions"
              element={
                <ProtectedRoute>
                  <Trsnsactions />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard/more"
              element={
                <ProtectedRoute>
                  <MobileView />
                </ProtectedRoute>
              }
            />

            <Route
              path="/latest-news"
              element={
                <NotProtectedRoute>
                  <LatestNewsMain />
                </NotProtectedRoute>
              }
            />
            <Route
              Route
              path="/news/:blogId"
              element={
                <NotProtectedRoute>
                  <BlogDetail />
                </NotProtectedRoute>
              }
            />
            <Route
              path="/faq/:category?"
              element={
                <NotProtectedRoute>
                  <FaqContainer />
                </NotProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <NotProtectedRoute>
                  <FullPageSignin />
                </NotProtectedRoute>
              }
            />
            <Route
              path="*"
              element={
                <h1 className="text-center text-danger pt-5">Not Found</h1>
              }
            />
            <Route
              path="/terms-and-conditions"
              element={
                <NotProtectedRoute>
                  <TermsConditions />
                </NotProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
