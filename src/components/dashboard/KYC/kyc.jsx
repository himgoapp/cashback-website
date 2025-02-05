import React from "react";
import Sidebar from "../sidebar/sidebar";
import KycMain from "./kycMain";
const KYC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
      <Sidebar active={2} />
      <KycMain />
    </div>
  );
};

export default KYC;
