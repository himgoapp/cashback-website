import React, { useState, useEffect, useContext } from "react";
import DashboardHomeHeader from "../home/dashHomeHeader";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import DashboardMain from "../../../layout/dashboardMain";
import { UserContext } from "../../../App";
import { KYCIcon } from "../../../utils/dashboardMainHeadersIcon";
import { addPanCard, sendAadhaarCardOtp, verifyAadhaarCardOtp, addBankDetails } from "../../../servicefile/kycservice";


const KycMain = () => {
  const {
    userData,
    walletData,
    userKyc,
    setUserKyc,
  } = useContext(UserContext);

  const [step, setStep] = useState("pan");

  // PAN inputs
  const [panName, setPanName] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [panError, setPanError] = useState("");

  // Aadhaar inputs
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [aadhaarOtp, setAadhaarOtp] = useState("");
  const [aadhaarRequestId, setAadhaarRequestId] = useState(null);
  const [aadhaarError, setAadhaarError] = useState("");

  // Bank inputs
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [bankError, setBankError] = useState("");

  useEffect(() => {
    if (userKyc?.pan?.verified) {
      setStep(userKyc?.aadhaar?.verified ? (userKyc?.bank?.verified ? "done" : "bank") : "aadhaar");
    } else {
      setStep("pan");
    }
  }, [userKyc]);

  const handlePanVerify = async () => {
    setPanError("");
    try {
      const payload = {
        userId: userData._id,
        documentName: panNumber,
        userName: panName,
      };
      const res = await addPanCard(payload);

      if (res.status === false) {
        setPanError(res.message);
      } else {
        setUserKyc(prev => ({ ...prev, pan: { verified: true, ...res } }));
        setStep("aadhaar");
      }
    } catch (err) {
      setPanError("PAN verification failed. Please check your details.");
    }
  };

  const handleSendAadhaarOtp = async () => {
    setAadhaarError("");
    try {
      const payload = {
        userId: userData._id,
        aadhaarNumber,
      };
      const res = await sendAadhaarCardOtp(payload);
      if (res.status === false) {
        setAadhaarError(res.message);
      } else {
        setAadhaarRequestId(res.requestId);
      }
    } catch (err) {
      setAadhaarError("Failed to send OTP. Please check your Aadhaar number.");
    }
  };

  const handleVerifyAadhaarOtp = async () => {
    try {
      const payload = {
        userId: userData._id,
        requestId: aadhaarRequestId,
        otp: aadhaarOtp,
      };
      let res = await verifyAadhaarCardOtp(payload);
      if (res.status === false) {
        setAadhaarError(res.message);
      } else {
        setUserKyc(prev => ({ ...prev, aadhaar: { verified: true } }));
        setStep("bank");
      }
    } catch (err) {
      setAadhaarError("Invalid OTP. Please try again.");
    }
  };

  const handleBankVerify = async () => {
    setBankError("");
    try {
      const payload = {
        userId: userData._id,
        accountNumber,
        userName: userKyc.userName,
        ifsc: ifscCode,
      };
      let res = await addBankDetails(payload);
      if (res.status == false) {
        setBankError(res.message)
      } else {
        setUserKyc(prev => ({ ...prev, bank: { verified: true } }));
        setStep("done");
      }
    } catch (err) {
      setBankError("Bank verification failed. Please check your details.");
    }
  };


  return (
    <DashboardMainTopBottom styles={{ width: "100%" }}>
      <DashboardHomeHeader title="KYC" data={walletData} icon={KYCIcon} />
      <DashboardMain>
        <div className="kyc-container KYCDB">
          KYC Desktop
        </div>
      </DashboardMain>
    </DashboardMainTopBottom>
  );
};

export default KycMain;
