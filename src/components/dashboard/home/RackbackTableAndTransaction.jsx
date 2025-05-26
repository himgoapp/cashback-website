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
              {dashboardInfo.transactionsInfo
                .filter(transaction => transaction.typeOfTransaction === "Deposit")
                .map((transaction, index) => {
                  const arrow = getTransactionArrowAndStyle(transaction.typeOfTransaction);

                  return (
                    <tr key={index} className={styles.transaction_row}>
                      <td className={styles.transaction_type}>
                        <span className={styles.transaction_arrow}>{arrow}</span>
                        <span className={styles.typeOfTransaction_trans}>
                          {transaction.typeOfTransaction}
                        </span>
                      </td>
                      <td className={styles.amount}>₹{transaction.actualAmount}</td>
                      <td className={styles.status}>
                        {(() => {
                          const { className, icon } = getStatusClass(transaction.status);
                          return (
                            <span
                              className={`${styles[className]} ${styles.status_wrapper}`}
                            >
                              <span className={styles.status_icon}>{icon}</span>
                              <span className={styles.status_text}>
                                {getStatusLabel(
                                  transaction.status === "Aborted"
                                    ? "Rejected"
                                    : transaction.status
                                )}
                              </span>
                            </span>
                          );
                        })()}
                      </td>
                      <td className={styles.date}>
                        {new Date(transaction.createdAt).toLocaleDateString("en-GB")}
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
