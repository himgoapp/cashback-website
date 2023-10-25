// import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "./components/common/navbar/navbar";
// import Banner from "./components/home/banner/banner";
// import AboutUs from "./components/home/aboutus/aboutUs";
// import Deals from "./components/home/deals/deals";
// import Getstarted from "./components/home/getStarted/getstarted.jsx";
// import Featured from "./components/home/featured/featured";
// import FAQ from "./components/home/FAQ/faq";
// import JoinRakeback from "./components/home/joinRakeback/joinRakeback";
// import Footer from "./components/common/footer/footer";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Banner />
//       <AboutUs />
//       <Deals />
//       <Getstarted />
//       <Featured />
//       <FAQ />
//       <JoinRakeback />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";

import { createContext, useState } from "react";
import OfferAndDealsContainer from "./pages/offerAndDealsPage";
import DescriptionPage from "./pages/descriptionPage";
import DashboardHome from "./components/dashboard/home/home";
import PokerID from "./components/dashboard/pokerID/pokerID";
import VerifyAccount from "./components/dashboard/veryfyAccount/verifyAccount";

export const UserContext = createContext();
function App() {
  return (
    <>
      <UserContext.Provider value={{}}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/offer_and_deals"
              element={<OfferAndDealsContainer />}
            />
            <Route path="/description" element={<DescriptionPage />} />
            <Route path="/dashboard/home" element={<DashboardHome />} />
            <Route path="/dashboard/pokerID" element={<PokerID />} />
            <Route
              path="/dashboard/verify-account"
              element={<VerifyAccount />}
            />
            {/* <Route path="brands" element={<BrandsPage />} />
            <Route path="item/:id" element={<ItemDetail />} />
            <Route path="products/:name" element={<AllProductsPage />} /> */}

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
