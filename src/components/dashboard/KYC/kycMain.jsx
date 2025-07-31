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
  const [bankName, setBankName] = useState("");
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
        userName: bankName,
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
          <h5 className="fw-bold KYCheading ">Know Your Customer</h5>

          <div className="accordion" id="kycAccordion">

            {/* Step 1: PAN  */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePan" aria-expanded={step === "pan"} disabled={step !== "pan"}>
                  <div className="step-header">
                    <div className="step-info">
                      <div className="step-number">1</div>
                      <div className="step-Hed">PAN</div>
                      {userKyc && userKyc.pan && userKyc.pan.verified && <div className="verifyIcon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="24" height="24" rx="12" fill="#28A745" />
                          <path d="M18 7.5L9.75 15.75L6 12" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>}
                      {/* <div className="RejectIcon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="24" height="24" rx="12" fill="#FF0000" fill-opacity="0.99" />
                          <path d="M16 8L8 16M8 8L16 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div> */}
                      <i className="bi bi-check-circle-fill check-icon"></i>
                    </div>
                    <i className="bi bi-chevron-down ms-auto"></i>
                  </div>
                </button>
              </h2>
              <div id="collapsePan" className={`accordion-collapse collapse ${step === "pan" ? "show" : ""}`}>
                <div className="accordion-body">
                  <div className="form-row mb-3">
                    <input type="text" className="form-control  " placeholder="Name as per PAN" value={panName} onChange={e => setPanName(e.target.value)} />
                    <input type="text" className="form-control  " placeholder="PAN" value={panNumber} onChange={e => setPanNumber(e.target.value)} />
                  </div>
                  <button className="btn btn-pink" onClick={handlePanVerify}>Verify</button>
                  {panError && <div className="text-danger mt-2">{panError}</div>}
                </div>
              </div>
            </div>

            {/* Step 2: AADHAAR */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAadhaar" aria-expanded={step === "aadhaar"} disabled={step !== "aadhaar"} >
                  <div className="step-header">
                    <div className="step-info">
                      <div className="step-number">2</div>
                      <div className="step-Hed">AADHAAR</div>
                      {userKyc && userKyc.aadhaar && userKyc.aadhaar.verified && <div className="verifyIcon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="24" height="24" rx="12" fill="#28A745" />
                          <path d="M18 7.5L9.75 15.75L6 12" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>}
                    </div>
                    <i className="bi bi-chevron-down ms-auto"></i>
                  </div>
                </button>
              </h2>
              <div id="collapseAadhaar" className={`accordion-collapse collapse ${step === "aadhaar" ? "show" : ""}`}>
                <div className="accordion-body">
                  <div className="form-row mb-3">
                    <input type="text" className="form-control  " placeholder="AADHAAR Number" value={aadhaarNumber} onChange={e => setAadhaarNumber(e.target.value)} />
                  </div>
                  {!aadhaarRequestId ? (
                    <button className="btn btn-pink" onClick={handleSendAadhaarOtp}>Send OTP</button>
                  ) : (
                    <>
                      <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Enter OTP"
                        value={aadhaarOtp}
                        inputMode="numeric"
                        maxLength={6}
                        pattern="\d{6}"
                        onChange={(e) => {
                          const val = e.target.value;
                          if (/^\d{0,6}$/.test(val)) setAadhaarOtp(val);
                        }} />
                      <button className="btn btn-pink mt-2" onClick={handleVerifyAadhaarOtp}>Verify OTP</button>
                    </>
                  )}
                  {aadhaarError && <div className="text-danger mt-2">{aadhaarError}</div>}
                </div>
              </div>
            </div>

            {/*  Step 3: Bank Details  */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBank" aria-expanded={step === "bank"} disabled={step !== "bank"}>
                  <div className="step-header">
                    <div className="step-info">
                      <div className="step-number">3</div>
                      <div className="step-Hed">Bank details</div>
                    </div>
                    <i className="bi bi-chevron-down ms-auto"></i>
                  </div>
                </button>
              </h2>
              <div id="collapseBank" className={`accordion-collapse collapse ${step === "bank" ? "show" : ""}`}>
                <div className="accordion-body">
                  <div className="form-row mb-3">
                    <input type="text" className="form-control  " placeholder="Full Name" value={bankName} onChange={e => setBankName(e.target.value)} />
                    <input type="text" className="form-control  " placeholder="Account Number" value={accountNumber} onChange={e => setAccountNumber(e.target.value)} />
                  </div>
                  <div className="form-row mb-3">
                    <input type="text" className="form-control" placeholder="IFSC Code" value={ifscCode} onChange={e => setIfscCode(e.target.value)} />
                  </div>
                  <button className="btn btn-pink" onClick={handleBankVerify}>Verify</button>
                  {bankError && <div className="text-danger mt-2">{bankError}</div>}
                </div>
              </div>
            </div>

          </div>
        </div>
      </DashboardMain>
    </DashboardMainTopBottom>
  );
};

export default KycMain;
