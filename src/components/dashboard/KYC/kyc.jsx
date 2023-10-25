import React from "react";
import Sidebar from "../sidebar/sidebar";
import KycMain from "./kycMain";
const KYC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <KycMain />
    </div>
  );
};

export default KYC;
