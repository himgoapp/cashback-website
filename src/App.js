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
import BlogMain from "./components/home/latestnews/articlesstructure/blogMain";
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
import DictionaryPage from "./components/dictionary/dictionary";
import PublicLayout from "./helperFxns/PubliclayOut";
// import Review from "./components/review/review";
import ReviewMain from "./components/review/reviewmain";

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
  const [mobile, setMobile] = useState(false);
  const [hideNav, setHideNav] = useState(false);

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
          hideNav,
          setHideNav
        }}
      >
        <Router>
          <Routes>

            {/* Public Routes */}
            <Route element={<NotProtectedRoute><PublicLayout /></NotProtectedRoute>}>
              <Route path="/" element={<HomePage />} />
              <Route path="/offer-and-deals" element={<OfferAndDealsContainer />} />
              <Route path="/dictionary" element={<DictionaryPage />} />
              <Route path="/contact-us" element={<ContactUSPage />} />
              <Route path="/retag" element={<RetagPage />} />
              <Route path="/latest-news" element={<LatestNewsMain />} />
              <Route path="/news/:blogId" element={<BlogDetail />} />
              <Route path="/blog/:blogId" element={<BlogMain />} />
              <Route path="/faq?" element={<FaqContainer />} />
              <Route path="/login" element={<FullPageSignin />} />
              {/* <Route path="/terms-and-conditions" element={<TermsConditions />} /> */}
              <Route path="*" element={<h1 className="text-center text-danger pt-5">Not Found</h1>} />
            </Route>


            <Route element={<ProtectedRoute><PublicLayout /></ProtectedRoute>}>
              <Route path="/review/:roomId" element={<ReviewMain />} />
            </Route>


            <Route
              path="/welcome"
              element={
                <ProtectedRoute>
                  <WelcomePage />
                </ProtectedRoute>
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



          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
