import React, { useState, useEffect } from "react";
import styles from "./rackback_table_and_transaction.module.css";

import {
  getStatusLabel,
  getStatusClass,
  getTagIdStatusClass,
  getTransactionArrowAndStyle,
  getTableIconStyle,
} from "../../../helperFxns/colorCode";

// import { color } from "framer-motion";
const RakebackTable = ({ labels, dashboardInfo }) => {
  const [rakebackData, setRakebackData] = useState([]);
  const [allTransactions, setAllTransactions] = useState([]);

  // useEffect(() => {
  //   if(dashboardInfo && dashboardInfo.transactionsInfo && dashboardInfo.transactionsInfo.length > 0){
  //     console.log(dashboardInfo,"7--")
  //     setAllTransactions([...dashboardInfo.transactionsInfo])
  //   }
  //   }, [dashboardInfo])

  // console.log(allTransactions,"56--")
  return (
    <div className={styles.rakeback_container}>
      {/* <div className={styles.table_container}>
        <font className={styles.heading}>TAG IDS</font>
        <table className={styles.rakeback_table}>
          <thead>
            <tr>
              <th className={styles.table_head}>Site Name</th>
              <th className={styles.table_head}>Account ID</th>
              <th className={styles.table_head}>Date</th>
              <th className={styles.table_head}>Status</th>
            </tr>
          </thead>
          <tbody>
            {dashboardInfo &&
              dashboardInfo.userAccountIdInfo &&
              dashboardInfo.userAccountIdInfo.length > 0 &&
              dashboardInfo.userAccountIdInfo.map((label, index) => {
                const arrow = getTableIconStyle(label.productId.name);

                return (
                  <tr key={index}>
                    <td>
                      {arrow}
                      {label.productId.name}
                    </td>
                    <td>{label.referenceId}</td>
                    <td>
                      {new Date(label.createdAt).toLocaleDateString("en-GB")}
                    </td>
                    <td>
                      <span style={getTagIdStatusClass(label.status)}>
                        {getStatusLabel(label.status)}
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div> */}

      <div className={styles.transactions_container}>
        <font className={styles.transaction_heading}>Latest Transactions</font>
        {dashboardInfo?.transactionsInfo?.length > 0 && (
          <table className={styles.transaction_table}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {dashboardInfo.transactionsInfo.map((transaction, index) => {
                const arrow = getTransactionArrowAndStyle(
                  transaction.typeOfTransaction
                );

                return (
                  <tr key={index} className={styles.transaction_row}>
                    <td className={styles.transaction_type}>
                      <span className={styles.transaction_arrow}>{arrow}</span>
                      <span>{transaction.typeOfTransaction}</span>
                    </td>
                    <td className={styles.amount}>
                      ₹{transaction.actualAmount}
                    </td>
                    <td>
                      <span
                        className={styles[getStatusClass(transaction.status)]}
                      >
                        {" "}
                        {getStatusLabel(transaction.status)}
                      </span>
                    </td>
                    <td className={styles.date}>
                      {new Date(transaction.createdAt).toLocaleDateString(
                        "en-GB"
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RakebackTable;
