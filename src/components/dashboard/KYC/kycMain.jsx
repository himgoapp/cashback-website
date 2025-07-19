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

      let updatedKyc = res.userInfo.userKyc;

      if (updatedKyc.level === "2") {
        console.log("Manually updating level from 2 to 3");
        updatedKyc = { ...updatedKyc, level: "2" };
      }

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
          <div className="kyc-container KYCDB">
              <h5 className="fw-bold KYCheading ">Know Your Customer</h5>

              <div className="accordion" id="kycAccordion">

                {/* Step 1: PAN  */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePan" aria-expanded="true">
                      <div className="step-header">
                        <div className="step-info">
                          <div className="step-number">1</div>
                          <div className="step-Hed">PAN</div>
                          <div className="verifyIcon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="24" height="24" rx="12" fill="#28A745"/>
                              <path d="M18 7.5L9.75 15.75L6 12" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                          <div className="RejectIcon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="24" height="24" rx="12" fill="#FF0000" fill-opacity="0.99"/>
                              <path d="M16 8L8 16M8 8L16 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                          </div>
                          <i className="bi bi-check-circle-fill check-icon"></i>
                        </div>
                        <i className="bi bi-chevron-down ms-auto"></i>
                      </div>
                    </button>
                  </h2>
                  <div id="collapsePan" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                      <div className="form-row mb-3">
                        <input type="text" className="form-control  " placeholder="Name as per PAN" />
                        <input type="text" className="form-control  " placeholder="PAN" />
                      </div>
                      <button className="btn btn-pink">Verify</button>
                    </div>
                  </div>
                </div>

                {/* Step 2: AADHAAR */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAadhaar">
                      <div className="step-header">
                        <div className="step-info">
                          <div className="step-number">2</div>
                          <div className="step-Hed">AADHAAR</div>
                          <i className="bi bi-check-circle-fill check-icon"></i>
                        </div>
                        <i className="bi bi-chevron-down ms-auto"></i>
                      </div>
                    </button>
                  </h2>
                  <div id="collapseAadhaar" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      <div className="form-row mb-3">
                        <input type="text" className="form-control  " placeholder="AADHAAR Number" />
                      </div>
                      <button className="btn btn-pink">Verify</button>
                    </div>
                  </div>
                </div>

                {/*  Step 3: Bank Details  */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBank">
                      <div className="step-header">
                        <div className="step-info">
                          <div className="step-number">3</div>
                          <div className="step-Hed">Bank details</div>
                        </div>
                        <i className="bi bi-chevron-down ms-auto"></i>
                      </div>
                    </button>
                  </h2>
                  <div id="collapseBank" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                      <div className="form-row mb-3">
                        <input type="text" className="form-control  " placeholder="Full Name" />
                        <input type="text" className="form-control  " placeholder="Account Number" />
                      </div>
                      <div className="form-row mb-3">
                        <input type="text" className="form-control" placeholder="IFSC Code" />
                      </div>
                      <button className="btn btn-pink">Verify</button>
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
