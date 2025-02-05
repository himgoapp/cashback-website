import React from "react";
import Sidebar from "../sidebar/sidebar";
import MyTransactionMain from "./myTransactionMain";

const MyTransaction = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
      <Sidebar active={3} />
      <MyTransactionMain />
    </div>
  );
};

export default MyTransaction;
