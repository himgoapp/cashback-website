import React, { useContext, useState } from "react";
import Navbtn from "../../common/button/navbtn/navbtn";
import styles from "./address.module.css";
import { TextField } from "./address";
import { addBankDetails } from "../../../servicefile/kycservice";
import { toast } from "react-toastify";
import { UserContext } from "../../../App";
import Loading from "../../common/Loading/Loading";
function BankAccDetails({ setStepReload, userKyc }) {
  const { userData } = useContext(UserContext);
  const [account_number, setAccountNumber] = useState("");
  const [bank_name, setBankName] = useState("");
  const [ifsc_code, setIfscCode] = useState("");
  const [validate, setValidate] = useState("");
  const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

  const isRejected = userKyc?.bankDetailsUploadStatus === "Rejected";
  const isAlreadyUploadedOrApproved = ["Uploaded", "Approved"].includes(
    userKyc?.bankDetailsUploadStatus
  );

  const isFormValid =
    account_number &&
    bank_name &&
    ifsc_code &&
    validate &&
    account_number === validate;

  const addBankDetailsData = async () => {
    if (!userData || !userData._id) return;
    if (!account_number || !bank_name || !ifsc_code || !validate) {
      return;
    }
    if (account_number !== validate) {
      setError("Account numbers do not match");
      return;
    }
 try {
    setLoading(true);
    const res = await addBankDetails(
      userData._id,
      account_number,
      bank_name,
      ifsc_code
    );

    if (res && res.message === "Bank Saved Successfully!") {
      localStorage.setItem("transactionInfo", "true");
      setStepReload(true);
    }
    else {
      toast.error(res?.message || "Something went wrong");
    }
  } catch (error) {
    toast.error("Failed to submit bank details");
  } finally {
    setLoading(false); // Stop loading
  }
  };
if (loading) return <Loading />;

  return (
    <div className={styles.AddressDetailsContainer}>
      <div className={styles.Text} style={{ fontFamily: "Futura" }}>
        Bank Account Details
      </div>
      <div className={styles.AddressDetailsForm}>
        <div className={styles.AddressDetailsContent}>
          <div className={styles.InputRow}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "1 0 0",
              }}
            >
              <TextField
                label="Account Number"
                placeholder="*********************"
                type="password"
                value={account_number}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value) && value.length <= 18) {
                    setAccountNumber(value);

                    // Reset error while typing
                    if (validate && validate.length > 0) {
                      const newAccountPrefix = value.substring(0, validate.length);
                      setError(validate !== newAccountPrefix ? "Account numbers do not match" : "");
                    }
                  }
                }}
                onBlur={() => {
                  if (account_number.length < 9) {
                    setError("Account number must be at least 9 digits");
                  } else if (validate && account_number !== validate) {
                    setError("Account numbers do not match");
                  } else {
                    setError("");
                  }
                }}
                inputProps={{
                  minLength: 9,
                  maxLength: 18,
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                }}
                required
              />

            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "1 0 0",
              }}
            >
             <TextField
  label="Verify Account Number"
  placeholder="83832993803748"
  type="text"
  value={validate}
  onChange={(e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 18) {
      setValidate(value);

      const accountPrefix = account_number.substring(0, value.length);
      if (value !== accountPrefix) {
        setError("Account numbers do not match");
      } else {
        setError("");
      }
    }
  }}
  onBlur={() => {
    if (validate.length < 9) {
      setError("Please re-enter the full account number");
    } else if (validate !== account_number) {
      setError("Account numbers do not match");
    } else {
      setError("");
    }
  }}
  inputProps={{
    minLength: 9,
    maxLength: 18,
    inputMode: "numeric",
    pattern: "[0-9]*",
  }}
  required
/>

              {error && (
                <div
                  className={styles.errorText}
                  style={{ color: "red", marginTop: "4px", fontSize: "12px" }}
                >
                  {error}
                </div>
              )}
            </div>
          </div>

          <div className={styles.InputRow}>
            <TextField
              label="Bank Name"
              placeholder="ICICI Bank"
              value={bank_name}
              setValue={setBankName}
              required
            />
            <TextField
              label="IFSC Code"
              placeholder="ICICI22881"
              value={ifsc_code}
              setValue={setIfscCode}
              required
            />
          </div>
        </div>

        <div className={styles.FormFooter}>
          <div className={styles.Divider}></div>
          <div className={styles.Content}>
            {/* {isAlreadyUploadedOrApproved && (
              <p
                style={{
                  color: "#888",
                  fontSize: "14px",
                  marginBottom: "10px",
                }}
              >
                Bank details have already been submitted.
              </p>
            )} */}

            <div
              className={styles.Actions}
              onClick={() => {
                addBankDetailsData();
              }}
            >
              <Navbtn
                text="Submit"
                variant="primary"
                size="small"
                showIcon={false}
                disabled={!isFormValid}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankAccDetails;
