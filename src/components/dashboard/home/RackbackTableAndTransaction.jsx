import React, { useState, useEffect } from 'react';
import styles from './rackback_table_and_transaction.module.css';
import pokercard from '../../../assets/pokercard.png';

const RakebackTable = ({ labels, transactions  }) => { 
  const [rakebackData, setRakebackData] = useState([]);

  const getStatusLabel = (status) => {
    switch (status) {
      case 'Successful':
        return 'Successful';
      case 'Pending':
        return 'Pending';
      case 'Aborted':
        return 'Aborted';
      default:
        return status;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Successful':
        return 'status-successful';
      case 'Pending':
        return 'status-pending';
      case 'Aborted':
        return 'status-aborted';
      default:
        return '';
    }
  };

  // Helper function to get the transaction status arrow and color
  const getTransactionArrowAndStyle = (status) => {
    if (status === 'Deposit') {
      return { arrow: '↑', color: 'green' };
    } else if (status === 'Withdraw') {
      return { arrow: '↓', color: 'red' }; 
    } else if (status === 'Pending') {
      return { arrow: '→', color: 'orange' }; 
    }
    return { arrow: '', color: 'black' };
  };

  if (!labels || labels.length === 0) {
    return <div></div>;
  }

  return (
    <div className={styles.rakeback_container}>
      <div className={styles.table_container}>
        <font className={styles.heading}>TAG IDS</font>
        <table className={styles.rakeback_table}>
          <thead >
            <tr>
              <th className={styles.table_head}>Site Name</th>
              <th className={styles.table_head}>Account ID</th>
              <th className={styles.table_head}>Date</th>
              <th className={styles.table_head}>Status</th>
            </tr>
          </thead>
          <tbody>
            {labels.map((label, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={pokercard}
                    alt="Status Icon"
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      marginRight: '10px',
                    }}
                  />
                  {label.name}
                </td>
                <td>{label.id}</td>
                <td>{label.date}</td>
                <td className={styles[getStatusClass(label.status)]}>
                  {getStatusLabel(label.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.transactions_container}>
        <font className={styles.transaction_heading}>Latest Transactions</font>
        <ul>
          {transactions.map((transaction, index) => {
            const { arrow, color } = getTransactionArrowAndStyle(transaction.status);
            return (
              <li key={index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>
                  <span
                      style={{
                        fontSize: '14px',
                        marginLeft: '5px',
                        color: color,
                        fontWeight:'bold'
                      }}
                    >
                      {arrow}
                    </span>
                    <span
                      style={{
                        marginLeft: '5px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: color, 
                      }}
                    >
                      {transaction.status}
                    </span>
                
                  </span>
                  <span>
                    <a className={styles.amount}>₹{transaction.amount}</a>
                  </span>
                </div>
                <div className={styles.date}>
                  {transaction.date}
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
