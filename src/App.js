import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";

import { createContext, useEffect, useState } from "react";
import OfferAndDealsContainer from "./pages/offerAndDealsPage";
import DescriptionPage from "./pages/descriptionPage";
import DashboardHome from "./components/dashboard/home/home";
import PokerID from "./components/dashboard/pokerID/pokerID";
import VerifyAccount from "./components/dashboard/veryfyAccount/verifyAccount";
import KYC from "./components/dashboard/KYC/kyc";
import Trsnsactions from "./components/dashboard/myTransaction/myTransaction";
import { ProtectedRoute, NotProtectedRoute } from "./helperFxns/protectedRoute";
import LatestNews from "./components/home/latestnews/LatestNews";
import BlogDetail from "./components/home/latestnews/NewsArticle";
import FaqContainer from "./components/home/FAQ/FaqContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const UserContext = createContext();

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
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
    setMobile(window.innerWidth <= 500);
  }, []);

  return (
    <>
      <ToastContainer />
      <UserContext.Provider
        value={{
          showSidebar,
          setShowSidebar,
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
        }}
      >
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/offer_and_deals"
              element={
                <NotProtectedRoute>
                  <OfferAndDealsContainer />
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
              path="/dashboard/verify_account"
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
              path="/latest_news"
              element={
                <NotProtectedRoute>
                  <LatestNews />
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
              path="*"
              element={
                <h1 className="text-center text-danger pt-5">Not Found</h1>
              }
            />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
