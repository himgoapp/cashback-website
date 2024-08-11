import React, { useState } from "react";
import Navbtn from "../../common/button/navbtn/navbtn";
import styles from "./address.module.css";
import { TextField } from "./address";
import { addBankDetails } from "../../../servicefile/kycservice";
import { ToastContainer, toast } from "react-toastify";

function BankAccDetails({ setStepReload }) {
  const [account_number, setAccountNumber] = useState("");
  const [bank_name, setBankName] = useState("");
  const [ifsc_code, setIfscCode] = useState("");
  const [validate, setValidate] = useState("");

  const addBankDetailsData = async () => {
    if (!account_number || !bank_name || !ifsc_code || !validate) {
      toast.error(`All fields are required for saving address information!`);
    } else if (account_number !== validate) {
      toast.error(
        `Account Number value is not same in Account Number and Verify Account Number fields!`
      );
    } else if (
      account_number &&
      bank_name &&
      ifsc_code &&
      validate &&
      account_number === validate
    ) {
      const res = await addBankDetails(account_number, bank_name, ifsc_code);
      if (res && res.message === "Bank Saved Successfully!") {
        localStorage.setItem("transactionInfo", "true");
        toast.success(`Bank information saved!`);
        setStepReload(true);
      }
    }
  };

  return (
    <>
      <div className={styles.AddressDetailsContainer}>
        <div className={styles.Text}>Bank Account Details</div>
        <div className={styles.AddressDetailsForm}>
          <div className={styles.AddressDetailsContent}>
            <div className={styles.InputRow}>
              <TextField
                label="Account Number"
                placeholder="*********************"
                type="password"
                value={account_number}
                setValue={setAccountNumber}
              />
              <TextField
                label="Verify Account Number"
                placeholder="83832993803748"
                value={validate}
                setValue={setValidate}
              />
            </div>
            <div className={styles.InputRow}>
              {" "}
              <TextField
                label="Bank Name"
                placeholder="ICICI Bank"
                value={bank_name}
                setValue={setBankName}
              />
              <TextField
                label="IFSC Code"
                placeholder="ICICI22881"
                value={ifsc_code}
                setValue={setIfscCode}
              />
            </div>
          </div>
          <div className={styles.FormFooter}>
            <div className={styles.Divider}></div>
            <div className={styles.Content}>
              <div
                className={styles.Actions}
                onClick={() => {
                  addBankDetailsData();
                }}
              >
                <Navbtn
                  text="Save changes"
                  bg="#3968EB"
                  color="white"
                  showIcon={false}
                />
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default BankAccDetails;
