import React from "react";
import Sidebar from "../sidebar/sidebar";
import TransactionMain from "./transactionsMain";
const Trsnsactions = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <TransactionMain />
    </div>
  );
};

export default Trsnsactions;
