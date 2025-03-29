import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainContainer from "../layout/mainContainer";
import Navbar from "../components/common/navbar/navbar";
import Footer from "../components/common/footer/footer";
import offerbg from "../assets/offerbannerbg.png";
import DescriptionContentWrapper from "../components/description/descriptionContentWrapper";
import OfferAndRegistration from "../components/description/offerAndRegistration";
import BonusesAndReview from "../components/description/bonuses_and_review";
// import PopupSignin from "../components/description/popup/signin";
import { UserContext } from "../App";
import ContentDeposit from "../components/description/ContentDeposit";
import CaskBackStep from "../components/description/CashBackStep";
import CashBackTimeMachine from "../components/description/CashBackTimeMachine";
import RakeBackStructure from "../components/description/RakeBackStructure";
import { getProductById } from "../servicefile/productservice";
import Meta from "../Meta";
const DescriptionPage = () => {
  const { showSigninPopup } = useContext(UserContext);
  const { roomId } = useParams();
  const [currentItem, setCurrentItem] = useState([]);
  // let currentItem = localStorage.getItem("currentProductValue")
  //   ? JSON.parse(localStorage.getItem("currentProductValue"))
  //   : {};
  const fetchProduct = async () => {
    if (!roomId) return;
    try {
      let id = roomId.substring(roomId.lastIndexOf("_") + 1);
      console.log("Fetching Room ID:", id);

      const roomData = await getProductById(id);
      console.log("API Response:", roomData);

      const fetchedProduct =
        roomData?.data?.product?.[0] || roomData?.product?.[0];

      if (fetchedProduct) {
        setCurrentItem(fetchedProduct);
      } else {
        console.warn("No room found in response.");
      }
    } catch (error) {
      console.error("Error fetching room:", error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [roomId]);
  return (
    <>    <Meta
    title={currentItem.name}
    description={currentItem.smallDescription}
    link={`https://www.rakebackk.com/news/${roomId}`}
    />
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* <MainContainer> */}

        <Navbar page="offer" />
        <div style={{ position: "relative", marginTop: "4rem" }}>
          <MainContainer>
            {/* DescriptionContentWrapper */}
            <DescriptionContentWrapper>
              <OfferAndRegistration currentItem={currentItem} />
              <BonusesAndReview />
              <ContentDeposit />
              <CaskBackStep />
              <CashBackTimeMachine />
              <RakeBackStructure />
            </DescriptionContentWrapper>
          </MainContainer>
          {/* banner background image */}
          <div
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
          </div>{" "}
        </div>
        {/* simple div for height adn footer */}
        <div
          style={{
            width: "100%",
            backgroundColor: "#0052cc",
            marginTop: "10rem",
          }}
          className="flex_center"
        >
          <Footer />
        </div>

        {/* {showSigninPopup && <PopupSignin />} */}
      </div>
    </>
  );
};

export default DescriptionPage;
