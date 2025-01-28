import React, { useState, useEffect } from 'react';
import styles from './rackback_table_and_transaction.module.css';
import pokercard from '../../../assets/pokercard.png';
import pokerbaazi from '../../../assets/pokerbaazi.png';
import jungleepokerlogo from '../../../assets/jungleepokerlogo.png';
import deposit from '../../../assets/deposit.png'
import withdrawal from '../../../assets/withdrawal.png'
const RakebackTable = ({ labels, dashboardInfo  }) => { 
  const [rakebackData, setRakebackData] = useState([]);
  const [allTransactions, setAllTransactions] = useState([]);

  // useEffect(() => {
  //   if(dashboardInfo && dashboardInfo.transactionsInfo && dashboardInfo.transactionsInfo.length > 0){
  //     console.log(dashboardInfo,"7--")
  //     setAllTransactions([...dashboardInfo.transactionsInfo])
  //   }
  //   }, [dashboardInfo])

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
      case 'Approved':
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
  const getTransactionArrowAndStyle = (type) => {
    if (type === 'Deposit') {
      return <img
      src={deposit}
      alt="Status Icon"
      style={{
        width: '22px',
        height: '22px',
        borderRadius: '50%',
        marginRight: '10px',
      }}
    />;
    }
    else {
      return <img
      src={withdrawal}
      alt="Status Icon"
      style={{
        width: '22px',
        height: '22px',
        borderRadius: '50%',
        marginRight: '10px',
      }}
    />;
     }
  };
const getTableIconStyle = (type)=>{
   if (type === 'Junglee Poker') {
    return <img
    src={jungleepokerlogo}
    alt="Status Icon"
    style={{
      width: '22px',
      height: '22px',
      borderRadius: '50%',
      marginRight: '10px',
    }}
  />;
  }
  else if (type === 'Poker Baazi') {
    return <img
    src={pokerbaazi}
    alt="Status Icon"
    style={{
      width: '22px',
      height: '22px',
      borderRadius: '50%',
      marginRight: '10px',
    }}
  />;
  }
  else if (type === 'MPL') {
    return <img
    src={pokercard}
    alt="Status Icon"
    style={{
      width: '22px',
      height: '22px',
      borderRadius: '50%',
      marginRight: '10px',
    }}
  />;
  }
  else {
    return <img
    src={pokercard}
    alt="Status Icon"
    style={{
      width: '22px',
      height: '22px',
      borderRadius: '50%',
      marginRight: '10px',
    }}
  />;
  }
}
 
// console.log(allTransactions,"56--")
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
            {dashboardInfo && dashboardInfo.userAccountIdInfo && dashboardInfo.userAccountIdInfo.length > 0 && dashboardInfo.userAccountIdInfo.map((label, index) =>
            {const arrow = getTableIconStyle(label.productId.name);

            return (
              
              <tr key={index}>
                <td>
                {arrow}{label.productId.name}
                </td>
                <td>{label.referenceId}</td>
                <td>{new Date(label.createdAt).toLocaleDateString('en-GB')}</td>
                <td className={styles[getStatusClass(label.status)]}>
                  {getStatusLabel(label.status)}
                </td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>

      <div  className={styles.transactions_container}>
        <font className={styles.transaction_heading}>Latest Transactions</font>
        <ul>
          {dashboardInfo && dashboardInfo.transactionsInfo && dashboardInfo.transactionsInfo.length > 0 && dashboardInfo.transactionsInfo.map((transaction, index) => {
                // console.log(transaction,"101--")
            const arrow = getTransactionArrowAndStyle(transaction.typeOfTransaction);
        
            return (
              <li key={index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>
                  <span
                      style={{
                        fontSize: '14px',
                        marginLeft: '5px',
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
                      }}
                    >
                      {transaction.typeOfTransaction}
                    </span>
                  </span>
                  <span>
                    <a className={styles.amount}>₹{transaction.actualAmount}</a>
                  </span>
                </div>
                <div className={styles.date}>
                  <a className={styles[getStatusClass(transaction.status)]}>
                  {getStatusLabel(transaction.status)}
            
                  </a>
                  <a>
                  {new Date(transaction.createdAt).toLocaleDateString('en-GB')}</a>
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
