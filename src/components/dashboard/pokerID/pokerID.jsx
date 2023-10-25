import React from "react";
import Sidebar from "../sidebar/sidebar";
import PokerIDMain from "./pokerIDMain";
const PokerID = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <PokerIDMain />
    </div>
  );
};

export default PokerID;
