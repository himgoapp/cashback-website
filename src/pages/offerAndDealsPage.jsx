import React from "react";
import Navbar from "../components/common/navbar/navbar";
import OfferAndDeal from "../components/offerAndDeal/offerAndDeal";
import FAQ from "../components/home/FAQ/faq";
import JoinRakeback from "../components/home/joinRakeback/joinRakeback";
import Footer from "../components/common/footer/footer";
// import offerbg from "../assets/offerbannerbg.png";
import MainContainer from "../layout/mainContainer";
import Meta from "../Meta";
const OfferAndDealsContainer = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Meta
        title="Best Rakeback Offers & Deals | Maximize Your Rewards | Rakebackk"
        description="Discover the latest rakeback offers and exclusive deals to maximize your rewards. Get the best cashback and bonuses for poker, casino, and betting sites today!"
        link="https://www.rakebackk.com/offer_and_deals"
      />
      {/* <MainContainer> */}
      <Navbar page="offer" />
      <div style={{ position: "relative", marginTop: "4rem" }}>
        <MainContainer>
          <OfferAndDeal />
        </MainContainer>{" "}
        {/* banner background image */}
        {/* <div
          className=""
          style={{
            position: "absolute",
            top: "-4rem",
            left: 0,
            width: "100%",
          }}
        >
          <img
            src={offerbg}
            alt=""
            style={{
              width: "100%",
              height: "22rem",
              position: "absolute",
              zIndex: -1,
            }}
          />
        </div> */}
      </div>
      <MainContainer styles={{ padding: "0", paddingTop: "4rem" }}>
        <FAQ />
      </MainContainer>
      <MainContainer>
        <JoinRakeback />
      </MainContainer>

      <div
        style={{ width: "100%", backgroundColor: "#0052cc" }}
        className="flex_center"
      >
        <Footer />{" "}
      </div>
      {/* </MainContainer> */}
    </div>
  );
};

export default OfferAndDealsContainer;
