import React from "react";
import Navbar from "../components/common/navbar/navbar";
import OfferAndDeal from "../components/offerAndDeal/offerAndDeal";
import FAQ from "../components/home/FAQ/faq";
import JoinRakeback from "../components/home/joinRakeback/joinRakeback";
import Footer from "../components/common/footer/footer";
// import offerbg from "../assets/offerbannerbg.png";
import MainContainer from "../layout/mainContainer";
import Meta from "../Meta";
import Reveal from "../components/common/reveal/Reveal";
import SimpleSlider from "../components/home/offers/slider";
import NewFooter from "../components/common/footer/newFooter";
import NewsletterSubscription from "../components/home/subscribe/newsLetterSubscription";

const OfferAndDealsContainer = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Meta
        title="2025 Online Poker Rakeback Deals"
        description="Looking For the Online Poker Rakeback Deals and Poker Cashback Deals? Check Rakebackk For Best Poker Deals & Offer. Ultimate Poker Experience"
        link="https://rakebackk.com/offer_and-deals"
      />
      <Reveal>
        <div
          style={{ position: "relative" }}
          className="container-fluid RakeBackTopOffers RakebackSpace"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="title">
                  Top Rakeback <span className="titleAccent">Offers</span>
                </h1>
                <p className="subtitle">
                  Get unbeatable rakeback deals from India's most trusted poker
                  sites.
                </p>
              </div>
              <div className="col-lg-12">
                <SimpleSlider />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ position: "relative" }}
          className="container-fluid Dealsclientssay RakebackSpace"
        >
          <div className="container">
            <div className="row">
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
              {/* <MainContainer styles={{ padding: "0", paddingTop: "4rem" }}> */}
              {/* <FAQ /> */}
              {/* </MainContainer> */}
              {/* <MainContainer>
                <JoinRakeback />
              </MainContainer> */}
            </div>
          </div>
        </div>

        {/* <div
            style={{ width: "100%", backgroundColor: "#0052cc" }}
            className="flex_center"
          >
            <Footer />{" "}
          </div> */}
      </Reveal>
      <NewsletterSubscription></NewsletterSubscription>
    </div>
  );
};

export default OfferAndDealsContainer;
