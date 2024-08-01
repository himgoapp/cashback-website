import React, { useState, useEffect } from "react";
import styles from "./newPoker.module.css"; // Import your CSS module
// import Navbtn from "../../common/button/navbtn/navbtn";
import {
  getProductsSimple,
  submitAccountId,
} from "../../../servicefile/productservice";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "react-bootstrap";

const NewPoker = ({ setGetInfos }) => {
  const [allProductIds, setAllProductIds] = useState([]);
  const [productId, setProductId] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [referralCode, setReferralCode] = useState("");

  const getProductsInfo = async () => {
    const res = await getProductsSimple();
    let mappedValue = res.map((item) => {
      return { value: item._id, label: item.name };
    });
    setAllProductIds(mappedValue);
  };

  const onSubmitFxn = async () => {
    if (productId && referenceId) {
      let data = await submitAccountId(productId, referenceId, referralCode);
      if (data && data.message) {
        toast.success(`${data.message}`, {
          autoClose: 5000,
        });
      } else {
        toast.error(`${data.message}`, {
          autoClose: 5000,
        });
      }
      setGetInfos(true);
      setProductId("");
      setReferenceId("");
      setReferralCode("");
    } else {
      toast.warn("Poker Site and Account id is a required field!");
    }
  };

  useEffect(() => {
    getProductsInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.NewPokerContainer}>
      <ToastContainer />
      <div className={styles.NewPokerContent}>
        <div className={styles.NewPokerHead}>Add New Poker ID</div>
        <div className={styles.NewPokerCreate}>
          <div className={styles.NewPokerSelect}>
            {/* <div className={styles.SelectContent}>
              <div className={styles.SelectWrapper}></div>
            </div> */}
            <select
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className={styles.SelectContent + " " + styles.SelectWrapper}
              placeholder="Select Poker Site"
            >
              {" "}
              <option value="" disabled={true}>
                Please select!
              </option>
              {allProductIds &&
                allProductIds.length > 0 &&
                allProductIds.map((item, index) => {
                  return <option value={item.value}>{item.label}</option>;
                })}
            </select>
          </div>
          <div className={styles.NewPokerAccId}>
            <input
              value={referenceId}
              onChange={(e) => setReferenceId(e.target.value)}
              type="text"
              className={styles.SelectContent + " " + styles.SelectWrapper}
              placeholder="Enter Account id*"
            />
          </div>
        </div>
        <div className={styles.NewPokerAccId}>
          <input
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
            type="text"
            className={styles.SelectContent + " " + styles.SelectWrapper}
            placeholder="Enter Refer code*"
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
    </div>
  );
};

export default NewPoker;
