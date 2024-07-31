import React, { useState } from "react";
import styles from "./kycProgress.module.css";
import { Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

function KycProgress() {
  const [panName, setPanName] = useState("");
  const [panCard, setPanCard] = useState("");
  const [image, setImage] = useState("");

  const [account_number, set_account_number] = useState("");
  const [bank_name, set_bank_name] = useState("");
  const [holder_name, set_holder_name] = useState("");
  const [bank_address, set_bank_address] = useState("");
  const [ifsc_code, set_ifsc_code] = useState("");

  const onSubmitFxn = () => {};
  return (
    <>
      <div className={styles.NewPokerContainer}>
        <ToastContainer />
        <div className={styles.NewPokerContent}>
          <div className={styles.NewPokerHead}>Submit Pan Card Details</div>
          <div className={styles.NewPokerCreate}>
            <div className={styles.NewPokerSelect}>
              <input
                value={image}
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                className={styles.SelectContent + " " + styles.SelectWrapper}
                placeholder="Enter Full Name from PAN CARD!*"
              />
            </div>
            <div className={styles.NewPokerAccId}>
              <input
                value={panName}
                onChange={(e) => setPanName(e.target.value)}
                type="text"
                className={styles.SelectContent + " " + styles.SelectWrapper}
                placeholder="Enter Full Name from PAN CARD!*"
              />
            </div>
          </div>
          <div className={styles.NewPokerAccId}>
            <input
              value={panCard}
              onChange={(e) => setPanCard(e.target.value)}
              type="text"
              className={styles.SelectContent + " " + styles.SelectWrapper}
              placeholder="Enter *"
            />
          </div>
          {/* <div className={styles.SubmitBtn}></div> */}{" "}
          <Button
            variant="primary"
            onClick={() => {
              onSubmitFxn();
            }}
          >
            Submit
          </Button>
        </div>
        <div className={styles.NewPokerContainer}>
          <div className={styles.NewPokerContent}>
            <div className={styles.NewPokerHead}>Submit Your Bank Details!</div>
            <div className={styles.NewPokerCreate}>
              <div className={styles.NewPokerAccId}>
                <input
                  value={account_number}
                  onChange={(e) => set_account_number(e.target.value)}
                  type="text"
                  className={styles.SelectContent + " " + styles.SelectWrapper}
                  placeholder="Enter Bank Account Number!*"
                />
              </div>
            </div>
            <div className={styles.NewPokerAccId}>
              <input
                value={holder_name}
                onChange={(e) => set_holder_name(e.target.value)}
                type="text"
                className={styles.SelectContent + " " + styles.SelectWrapper}
                placeholder="Enter Account Holder Name*"
              />
            </div>

            <div className={styles.NewPokerAccId}>
              <input
                value={bank_name}
                onChange={(e) => set_bank_name(e.target.value)}
                type="text"
                className={styles.SelectContent + " " + styles.SelectWrapper}
                placeholder="Enter Bank Name*"
              />
            </div>

            <div className={styles.NewPokerAccId}>
              <input
                value={bank_address}
                onChange={(e) => set_bank_address(e.target.value)}
                type="text"
                className={styles.SelectContent + " " + styles.SelectWrapper}
                placeholder="Enter Bank Address*"
              />
            </div>

            <div className={styles.NewPokerAccId}>
              <input
                value={ifsc_code}
                onChange={(e) => set_ifsc_code(e.target.value)}
                type="text"
                className={styles.SelectContent + " " + styles.SelectWrapper}
                placeholder="Enter Ifsc Code*"
              />
            </div>
            <Button
              variant="primary"
              onClick={() => {
                onSubmitFxn();
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default KycProgress;
