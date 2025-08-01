import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../App";
import { addPanCard, sendAadhaarCardOtp, verifyAadhaarCardOtp, addBankDetails } from "../../../servicefile/kycservice";
import KYCPan from "../../../assets/KYC/KYCPan.svg"
import KYCAadhaar from "../../../assets/KYC/KYCAadhaar.svg"
import KYCBank from "../../../assets/KYC/KYCBank.svg"


const KycMobileMain = () => {
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
         <div className="kyc-container KYCDB">
          <h5 className="fw-bold KYCheading ">Know Your Customer</h5>
          <div className="KYCSuccessMsg">
              <svg width="74" height="73" viewBox="0 0 74 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="73" height="73" rx="36.5" fill="#28A745"/>
                <path d="M55.25 22.8125L30.1562 47.9062L18.75 36.5" stroke="white" stroke-width="6.84375" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Your Rakebackk account is KYC verified. Here are your details:
          </div>
          <div className="accordion" id="kycAccordion">

            {/* Step 1: PAN  */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePan" aria-expanded={step === "pan"} >
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
                      <i className="bi bi-check-circle-fill check-icon"></i>
                    </div>
                    <i className="bi bi-chevron-down ms-auto"></i>
                  </div>
                </button>
              </h2>
              <div id="collapsePan" className={`accordion-collapse collapse ${step === "pan" ? "show" : ""}`}>
                <div className="accordion-body">
                <div className="FormIconMObile">
                    <div className="FormIcon FormIconPAN">
                        <img src={KYCPan} />
                    </div>               
                    <div className="VerifiedPan">
                      {userKyc && userKyc.pan && userKyc.pan.verified && userKyc.pan.documentName}
                    </div> 
                    {panError && panError.length > 0 && <div className="NotMatchPan">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="#DC3545" />
                        <path d="M8.98438 8.98633L19.3547 19.3567" stroke="white" stroke-width="2.83951" stroke-linecap="round" />
                        <path d="M19.3672 8.98633L8.99682 19.3567" stroke="white" stroke-width="2.83951" stroke-linecap="round" />
                      </svg>
                      PAN details did not match
                    </div>}          
                </div>
                  
                  <div className="form-row ">
                    {step === "pan" && <div className="form-row">
                      <input type="text" className="form-control  " placeholder="Name as per PAN" value={panName} onChange={e => setPanName(e.target.value)} />
                      <input type="text" className="form-control  " placeholder="PAN" value={panNumber} onChange={e => setPanNumber(e.target.value)} />
                    </div>}
                    
                    
                  </div>
                  {step === "pan" && panError.length === 0 && <div className="KYCBTNForm">
                    <button className="formButton" onClick={handlePanVerify}>Verify</button>
                  </div>}
                  {userKyc && userKyc.pan && userKyc.pan.verified && <div className="KYCBTNForm Verified">
                    <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.4062 1.98145C24.7006 1.98145 31.4248 8.70569 31.4248 17C31.4248 25.2943 24.7006 32.0186 16.4062 32.0186C8.11194 32.0186 1.3877 25.2943 1.3877 17C1.3877 8.70569 8.11194 1.98145 16.4062 1.98145Z" fill="#28A745" stroke="white" stroke-width="2.03636" />
                      <path d="M12.9508 22.9997L8.95151 19.0244C8.51983 18.5973 8.51983 17.8778 8.92992 17.4282C9.34001 16.9786 10.0307 16.9786 10.4624 17.4057L10.4839 17.4282L13.7278 20.6166L21.8703 12.2385C22.2804 11.7889 22.9711 11.7889 23.4028 12.216C23.8345 12.6432 23.8345 13.3626 23.4244 13.8123L23.4028 13.8348L14.5048 22.9997C14.0515 23.4493 13.3825 23.4493 12.9508 22.9997Z" fill="white" />
                    </svg>
                    Verified
                  </div>}
                  {panError && panError.length > 0 && <div className="KYCBTNForm Reverify">
                    <button className="formButton" onClick={handlePanVerify}>Re-Verify</button>
                  </div>}
                </div>
              </div>
            </div>

            {/* Step 2: AADHAAR */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAadhaar" aria-expanded={step === "aadhaar"}  >
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
                    <div className="FormIconMObile">
                          <div className="FormIcon">
                            <img src={KYCAadhaar} />
                        </div>  
                        <div className="VerifiedPan">
                            2345-2324-5678
                            </div>
                            <div className="NotMatchPan">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="#DC3545" />
                                <path d="M8.98438 8.98633L19.3547 19.3567" stroke="white" stroke-width="2.83951" stroke-linecap="round" />
                                <path d="M19.3672 8.98633L8.99682 19.3567" stroke="white" stroke-width="2.83951" stroke-linecap="round" />
                            </svg>
                            Aadhar verification failed
                            </div>
                    </div>
                  
                  <div className="form-row ">
                    <div  className="form-row">
                      <div className="form-row">
                        <input type="text" className="form-control  KYCAdhar" placeholder="PRASAD RAVINDRA MANKAR" value={panName} onChange={e => setPanName(e.target.value)} />
                      </div>
                      <div class="form-group">
                        <label className="card_number">Enter AADHAAR number</label>
                          <div className="AddhaarNumberField">
                            <input id="card_number" class="form-control" required pattern="(\d{4}\s?){4}" placeholder="_ _ _ _" maxlength="4" />
                            <input id="card_number" class="form-control" required pattern="(\d{4}\s?){4}" placeholder="_ _ _ _ " maxlength="4" />
                            <input id="card_number" class="form-control" required pattern="(\d{4}\s?){4}" placeholder="_ _ _ _ " maxlength="4" />
                            <button className="formButton KYCSendOTP" onClick={handlePanVerify}>Send OTP</button>
                          </div>
                      </div>
                      <div class="form-group">
                        <label className="card_number">OTP</label>
                          <div className="AddhaarNumberField OTPNumberField">
                            <input id="card_number" class="form-control" required pattern="(\d{4}\s?){4}" placeholder="_" maxlength="1" />
                            <input id="card_number" class="form-control" required pattern="(\d{4}\s?){4}" placeholder="_ " maxlength="1" />
                            <input id="card_number" class="form-control" required pattern="(\d{4}\s?){4}" placeholder="_ " maxlength="1" />
                            <input id="card_number" class="form-control" required pattern="(\d{4}\s?){4}" placeholder="_" maxlength="1" />
                            <input id="card_number" class="form-control" required pattern="(\d{4}\s?){4}" placeholder="_ " maxlength="1" />
                            <input id="card_number" class="form-control" required pattern="(\d{4}\s?){4}" placeholder="_ " maxlength="1" />
                          </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="KYCBTNForm">
                    <button className="formButton" onClick={handlePanVerify}>Verify</button>
                    {panError && <div className="text-danger mt-2">{panError}</div>}
                  </div>
                  <div className="KYCBTNForm Verified">
                    <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.4062 1.98145C24.7006 1.98145 31.4248 8.70569 31.4248 17C31.4248 25.2943 24.7006 32.0186 16.4062 32.0186C8.11194 32.0186 1.3877 25.2943 1.3877 17C1.3877 8.70569 8.11194 1.98145 16.4062 1.98145Z" fill="#28A745" stroke="white" stroke-width="2.03636" />
                      <path d="M12.9508 22.9997L8.95151 19.0244C8.51983 18.5973 8.51983 17.8778 8.92992 17.4282C9.34001 16.9786 10.0307 16.9786 10.4624 17.4057L10.4839 17.4282L13.7278 20.6166L21.8703 12.2385C22.2804 11.7889 22.9711 11.7889 23.4028 12.216C23.8345 12.6432 23.8345 13.3626 23.4244 13.8123L23.4028 13.8348L14.5048 22.9997C14.0515 23.4493 13.3825 23.4493 12.9508 22.9997Z" fill="white" />
                    </svg>
                    Verified
                  </div>
                  <div className="KYCBTNForm Reverify">
                    <button className="formButton" onClick={handlePanVerify}>Re-Verify</button>
                    {panError && <div className="text-danger mt-2">{panError}</div>}
                  </div>
                </div>

                {/* <div className="accordion-body">
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
                </div> */}
              </div>
            </div>

            {/*  Step 3: Bank Details  */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBank" aria-expanded={step === "bank"} >
                  <div className="step-header">
                    <div className="step-info">
                      <div className="step-number">3</div>
                      <div className="step-Hed">Bank details</div>
                      {userKyc && userKyc.bank && userKyc.bank.verified && <div className="verifyIcon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="24" height="24" rx="12" fill="#28A745" />
                          <path d="M18 7.5L9.75 15.75L6 12" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>}
                    </div>

                  </div>
                </button>
              </h2>
              <div id="collapseBank" className={`accordion-collapse collapse ${step === "bank" ? "show" : ""}`}>

                <div className="accordion-body">
                     <div className="FormIconMObile">
                        <div className="FormIcon">
                            <img src={KYCBank} />
                        </div>
                         <div className="VerifiedPan">
                            234523245678
                            </div>
                            <div className="NotMatchPan">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="#DC3545" />
                                <path d="M8.98438 8.98633L19.3547 19.3567" stroke="white" stroke-width="2.83951" stroke-linecap="round" />
                                <path d="M19.3672 8.98633L8.99682 19.3567" stroke="white" stroke-width="2.83951" stroke-linecap="round" />
                            </svg>
                            Bank details did not match
                            </div>
                     </div>
                  
                  <div className="form-row ">
                    <div className="form-row">
                        <input type="text" className="form-control  KYCAdhar" placeholder="PRASAD RAVINDRA MANKAR" value={panName} onChange={e => setPanName(e.target.value)} />
                      </div>
                    <div className="form-row">
                      <input type="text" className="form-control  " placeholder="Account Number" value={panNumber} onChange={e => setPanNumber(e.target.value)} />
                      <input type="text" className="form-control  " placeholder="IFSC Code" value={panNumber} onChange={e => setPanNumber(e.target.value)} />
                    </div>
                   
                  </div>
                  <div className="KYCBTNForm">
                    <button className="formButton" onClick={handlePanVerify}>Verify</button>
                    {panError && <div className="text-danger mt-2">{panError}</div>}
                  </div>
                  <div className="KYCBTNForm Verified">
                    <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.4062 1.98145C24.7006 1.98145 31.4248 8.70569 31.4248 17C31.4248 25.2943 24.7006 32.0186 16.4062 32.0186C8.11194 32.0186 1.3877 25.2943 1.3877 17C1.3877 8.70569 8.11194 1.98145 16.4062 1.98145Z" fill="#28A745" stroke="white" stroke-width="2.03636" />
                      <path d="M12.9508 22.9997L8.95151 19.0244C8.51983 18.5973 8.51983 17.8778 8.92992 17.4282C9.34001 16.9786 10.0307 16.9786 10.4624 17.4057L10.4839 17.4282L13.7278 20.6166L21.8703 12.2385C22.2804 11.7889 22.9711 11.7889 23.4028 12.216C23.8345 12.6432 23.8345 13.3626 23.4244 13.8123L23.4028 13.8348L14.5048 22.9997C14.0515 23.4493 13.3825 23.4493 12.9508 22.9997Z" fill="white" />
                    </svg>
                    Verified
                  </div>
                  <div className="KYCBTNForm Reverify">
                    <button className="formButton" onClick={handlePanVerify}>Re-Verify</button>
                    {panError && <div className="text-danger mt-2">{panError}</div>}
                  </div>
                </div>

                {/* <div className="accordion-body">
                  <div className="form-row mb-3">
                    <input type="text" className="form-control  " placeholder="Account Number" value={accountNumber} onChange={e => setAccountNumber(e.target.value)} />
                  </div>
                  <div className="form-row mb-3">
                    <input type="text" className="form-control" placeholder="IFSC Code" value={ifscCode} onChange={e => setIfscCode(e.target.value)} />
                  </div>
                  <button className="btn btn-pink" onClick={handleBankVerify}>Verify</button>
                  {bankError && <div className="text-danger mt-2">{bankError}</div>}
                </div> */}
              </div>
            </div>

          </div>
        </div>
    );
};

export default KycMobileMain;
