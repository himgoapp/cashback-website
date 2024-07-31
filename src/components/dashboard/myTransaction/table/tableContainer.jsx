// TableContent.js
import React, { useState, useEffect } from "react";
import styles from "./tableContainer.module.css";
import { generateArray } from "../../../../utils/generateArray";
import { alltransactions } from "../../../../servicefile/transactionservice";
import moment from "moment";

const TableContainer = () => {
  const [products, setProducts] = useState([]);

  const getTransactions = async () => {
    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {};
    const res = await alltransactions(userInfo._id);
    setProducts(res.transactionsInfo);
  };

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.TransactionTableContainer}>
      <div className={styles.TransactionTable}>
        <div className={styles.TableContent}>
          {/*  */}
          <div className={styles.IdColumn}>
            <div className={styles.IdHeader}>
              <div className={styles.Text}>Transaction ID</div>
            </div>
            {products &&
              products.length > 0 &&
              products.map((a, index) => {
                return (
                  <div className={styles.IdCell} key={index}>
                    <div className={styles.Text}>{a.transaction_hash}</div>
                  </div>
                );
              })}
          </div>
          {/*  */}
          <div className={styles.DateColumn}>
            <div className={styles.DateHeader}>
              <div className={styles.Text}>Date</div>
            </div>
            {products &&
              products.length > 0 &&
              products.map((a, index) => {
                return (
                  <div className={styles.DateCell} key={index}>
                    <div className={styles.Text}>
                      {moment(a.createdAt).format("DD MMM YYYY")}
                    </div>
                  </div>
                );
              })}
          </div>
          {/*  */}
          <div className={styles.TimeColumn}>
            <div className={styles.TimeHeader}>
              <div className={styles.Text}>Time</div>
            </div>
            {products &&
              products.length > 0 &&
              products.map((a, index) => {
                return (
                  <div className={styles.TimeCell} key={index}>
                    <div className={styles.Text}>
                      {moment(a.createdAt).format("LT")}
                    </div>
                  </div>
                );
              })}
          </div>
          {/*  */}
          <div className={styles.BalanceColumn}>
            <div className={styles.BalanceHeader}>
              <div className={styles.Text}>Closing Balance</div>
            </div>
            {products &&
              products.length > 0 &&
              products.map((a, index) => {
                return (
                  <div className={styles.BalanceCell} key={index}>
                    <div className={styles.Text}>₹{a.actualAmount}</div>
                  </div>
                );
              })}
          </div>
          {/*  */}
          <div className={styles.AmountColumn}>
            <div className={styles.AmountHeader}>
              <div className={styles.Text}>Commissions</div>
            </div>
            {products &&
              products.length > 0 &&
              products.map((a, index) => {
                return (
                  <div className={styles.AmountCell} key={index}>
                    <div className={styles.Text}>- ₹{a.rackbackcut}</div>
                  </div>
                );
              })}
          </div>
          {/*  */}
          <div className={styles.AmountColumn}>
            <div className={styles.AmountHeader}>
              <div className={styles.Text}>Amount</div>
            </div>
            {products &&
              products.length > 0 &&
              products.map((a, index) => {
                return (
                  <div className={styles.AmountCell} key={index}>
                    <div className={styles.Text}>- ₹{a.actualAmount}</div>
                  </div>
                );
              })}
          </div>
          {/*  */}
          <div className={styles.StatusColumn}>
            <div className={styles.StatusHeader}>
              <div className={styles.Text}>Status</div>
            </div>
            {products &&
              products.length > 0 &&
              products.map((a, index) => {
                return (
                  <div className={styles.StatusCell} key={index}>
                    <div
                      className={styles.Badge}
                      style={
                        a.status === "Success"
                          ? { backgroundColor: "#ecfdf3" }
                          : {}
                      }
                    >
                      <div
                        className={styles.Text}
                        style={
                          a.status === "Success"
                            ? { color: "#027A48" }
                            : { color: "#B54708" }
                        }
                      >
                        {a.status}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {/*  */}
          <div className={styles.DownloadColumn}>
            <div className={styles.DownloadHeader}></div>
            {/* {generateArray(7).map((a) => {
              return (
                <div className={styles.DownloadCell}>
                  <div className={styles.Button}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
                        stroke="#475467"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>{" "}
        <div className={styles.TablePagination}>
          <div className={styles.Button}> Previous </div>{" "}
          <div className={styles.Text}>
            Page {products.length} of {products.length}
          </div>
          <div className={styles.Button}> Next </div>
        </div>
      </div>
    </div>
  );
};

export default TableContainer;
