import React, { useState, useEffect, useContext } from "react";
import DashboardHomeHeader from "../home/dashHomeHeader";
import KycProgress from "./kycProgress";
import PanCard from "./panCard";
import AddressDetail from "./address";
import BankAccDetails from "./bankDetails";
import KycStatus from "./kycStatus";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import DashboardMain from "../../../layout/dashboardMain";
import { userInfoFxn } from "../../../servicefile/dashboardservice";
import { UserContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import { KYCIcon } from "../../../utils/dashboardMainHeadersIcon";
import Navbtn from "../../common/button/navbtn/navbtn";

const KycMain = () => {
  const [setReload, setStepReload] = useState(false);
  const {
    userData,
    walletData,
    userKyc,
    setUserKyc,
    setTransactionInfo,
    setUserData,
  } = useContext(UserContext);

  const navigate = useNavigate();

  const validatetokenAndRedirect = () => {
    navigate("/dashboard");
  };

  const getAllUserInfo = async () => {
    if (!userData || !userData._id) return;
    const res = await userInfoFxn(userData._id);
    console.log("User info response:", res);

    if (res.success) {
      setUserData(res.userInfo.user);

      // Manual level fix for address approval
      let updatedKyc = res.userInfo.userKyc;

      // If address is approved but level is still "2", force it to "3"
      if (updatedKyc.level === "2") {
        console.log("Manually updating level from 2 to 3");
        updatedKyc = { ...updatedKyc, level: "2" };
      }

      // If bank is approved but level is still "3", force it to "4"
      if (updatedKyc.level === "3") {
        console.log("Manually updating level from 3 to 4");
        updatedKyc = { ...updatedKyc, level: "3" };
      }

      setUserKyc(updatedKyc);
      setTransactionInfo(res.userInfo.userTransactions);
    }
    setStepReload(false);
  };

  useEffect(() => {
    console.log("Current KYC state:", userKyc);
    if (setReload) {
      getAllUserInfo();
    }
  }, [setReload]);

  if (!userData || !walletData || !userKyc) return null;

  const isKycSuccessful =
    userKyc.panApproveStatus &&
    userKyc.addressApproveStatus &&
    userKyc.bankDetailsApproveStatus;

  return (
    <DashboardMainTopBottom styles={{ width: "100%" }}>
      <DashboardHomeHeader title="KYC" data={walletData} icon={KYCIcon} />
      <DashboardMain>
        {userKyc.level !== "4" && (
          <KycProgress
            activeIndex={userKyc.level ? parseInt(userKyc.level) : 1}
          />
        )}

        {userKyc.level === "4" && isKycSuccessful && (
          <KycStatus
            status="Successful"
            message="Your KYC verification has been successfully completed; you now have full access to all features."
            color="#027A48"
            colorBg="#ECFDF3"
            borderColor="#11C15B"
            retry={true}
          />
        )}

        {userKyc.level === "4" && !isKycSuccessful && (
          <KycStatus
            status="Pending"
            message="Your KYC verification is currently in progress; thank you for your patience."
            color="#B54708"
            colorBg="#FFFAEB"
            borderColor="#F79009"
          />
        )}

        {userKyc.level === "4" && !isKycSuccessful && (
          <>
            {!userKyc.panApproveStatus &&
              userKyc.panUploadStatus === "Rejected" && (
                <KycStatus
                  status="Rejected"
                  message={
                    userKyc.panRejectedMessage ||
                    "Your PAN verification was rejected."
                  }
                  color="#B42318"
                  colorBg="#FEF3F2"
                  borderColor="#FF5252"
                />
              )}
            {!userKyc.addressApproveStatus &&
              userKyc.addressUploadStatus === "Rejected" && (
                <KycStatus
                  status="Rejected"
                  message={
                    userKyc.addressRejectedMessage ||
                    "Your address verification was rejected."
                  }
                  color="#B42318"
                  colorBg="#FEF3F2"
                  borderColor="#FF5252"
                />
              )}
            {!userKyc.bankDetailsApproveStatus &&
              userKyc.bankDetailsUploadStatus === "Rejected" && (
                <KycStatus
                  status="Rejected"
                  message={
                    userKyc.bankRejectedMessage ||
                    "Your bank details verification was rejected."
                  }
                  color="#B42318"
                  colorBg="#FEF3F2"
                  borderColor="#FF5252"
                />
              )}
          </>
        )}

        {userKyc.level === "1" && userKyc.statusValue === "Rejected" && (
          <KycStatus
            status="Rejected"
            message={userKyc.rejectedMessage}
            color="#B42318"
            colorBg="#FEF3F2"
            borderColor="#FF5252"
          />
        )}

        {userKyc && userKyc.level === "1" ? (
          <PanCard setStepReload={setStepReload} userKyc={userKyc} />
        ) : userKyc && userKyc.level === "2" ? (
          <AddressDetail setStepReload={setStepReload} userKyc={userKyc} />
        ) : userKyc && userKyc.level === "3" ? (
          <BankAccDetails setStepReload={setStepReload} userKyc={userKyc} />
        ) : null}

        {userKyc.level === "4" && isKycSuccessful && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Navbtn
              text="Go to Home"
              isSuccess={false}
              style={{
                color: "white",
                padding: "10px",
                fontWeight: "bold",
                borderRadius: "6px",
              }}
              variant="filled"
              onClick={validatetokenAndRedirect}
            />
          </div>
        )}

        {userKyc.level === "4" && userKyc.statusValue === "Failed" && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Navbtn
              text="Retry KYC Form"
              isSuccess={true}
              variant="filled"
              setData={() => {
                setUserKyc({ ...userKyc, level: "1" });
              }}
            />
          </div>
        )}
      </DashboardMain>
    </DashboardMainTopBottom>
  );
};

export default KycMain;
