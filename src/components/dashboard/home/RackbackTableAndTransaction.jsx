import React, { useState, useEffect } from "react";
import styles from "./rackback_table_and_transaction.module.css";

import { getStatusLabel, getStatusClass, getTagIdStatusClass, getTransactionArrowAndStyle, getTableIconStyle } from "../../../helperFxns/colorCode";

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
      <div className={styles.table_container}>
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
      </div>

      <div className={styles.transactions_container}>
        <font className={styles.transaction_heading}>Latest Transactions</font>
        <ul>
          {dashboardInfo &&
            dashboardInfo.transactionsInfo &&
            dashboardInfo.transactionsInfo.length > 0 &&
            dashboardInfo.transactionsInfo.map((transaction, index) => {
              // console.log(transaction,"101--")
              const arrow = getTransactionArrowAndStyle(
                transaction.typeOfTransaction
              );

              return (
                <li key={index}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      <span
                        style={{
                          fontSize: "14px",
                          marginLeft: "5px",
                          fontWeight: "bold",
                        }}
                      >
                        {arrow}
                      </span>
                      <span
                        style={{
                          marginLeft: "5px",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {transaction.typeOfTransaction}
                      </span>
                    </span>
                    <span>
                      <span className={styles.amount}>
                        ₹{transaction.actualAmount}
                      </span>
                    </span>
                  </div>
                  <div className={styles.date}>
                    <a className={styles[getStatusClass(transaction.status)]}>
                      {getStatusLabel(transaction.status)}
                    </a>
                    <a>
                      {new Date(transaction.createdAt).toLocaleDateString(
                        "en-GB"
                      )}
                    </a>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default RakebackTable;
