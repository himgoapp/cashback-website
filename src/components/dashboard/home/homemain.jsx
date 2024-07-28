import React from "react";
import DashboardHomeHeader from "./dashHomeHeader";
import HomeQuickStart from "./quickStart";
import Withdraw from "./withdraw";
import OfferCard from "../../offerAndDeal/cards/card";
import { generateArray } from "../../../utils/generateArray";
// import OfferCardContainer from "../../offerAndDeal/cards/cardContainer";
const HomeMain = () => {
  return (
    <div>
      <DashboardHomeHeader />
      <HomeQuickStart />
      <Withdraw />
      <div
        style={{ paddingLeft: "2rem", paddingRight: "2rem", width: "72.5rem" }}
      >
        <div
          className="div"
          style={{
            // padding
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            // flexWrap: "wrap",
            borderRadius: "0.75rem",
            border: " 1px solid #EAECF0",
            boxShadow:
              " 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
          }}
        >
          {generateArray(3).map((c, index) => {
            return (
              <OfferCard
                fillBtn={(index + 1) % 2 === 0 ? false : true}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
