import React from "react";
import DashboardHomeHeader from "../home/dashHomeHeader";
import NewPoker from "./newPoker";
import PokerCard from "./pokerCard/pokerCard";
import PokerCardsContainer from "./pokerCard/PokerCardsContainer";

const PokerIDMain = () => {
  return (
    <div>
      <DashboardHomeHeader />
      <NewPoker />
      <PokerCardsContainer />
    </div>
  );
};

export default PokerIDMain;
