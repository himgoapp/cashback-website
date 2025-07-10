import React from 'react';
import styles from "../home/rakeback_chart.module.css";
import  '../../../assets/Style/style.css'

const LastTransactions = () => {
  const transactions = [
    { id: '#12548796', pokerId: '1234 ****', amount: -2500, date: '25 Jan 2021' },
    { id: '#12548796', pokerId: '1234 ****', amount: 750, date: '25 Jan 2021' },
    { id: '#12548796', pokerId: '1234 ****', amount: -1050, date: '25 Jan 2021' },
    { id: '#12548796', pokerId: '1234 ****', amount: 840, date: '25 Jan 2021' },
  ];

  return (
    <div className="LastTransactionSection">
      <div className="d-flex justify-content-between align-items-center mb-3 HeadingSec">
        <div className={styles.wallet_balance_head}>Last Transaction
        </div>
        <a href="#" className="SeeMore">See More</a>
      </div>

      <div className="LastTransactionTable table-responsive">
        <table className="table align-middle">
          <thead>
            <tr className="">
              <th>Description</th>
              <th>Transaction ID</th>
              <th>Poker ID</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <span className={`rounded-circle d-flex justify-content-center align-items-center border 
                      ${txn.amount < 0 ? 'border-danger text-danger' : 'border-success text-success'}`} 
                      style={{ width: 30, height: 30 }}
                    >
                      {txn.amount < 0 ? '↑' : '↓'}
                    </span>
                    <div>
                      <div className="fw-semibold">POker bazzi</div>
                      <div className=" small">{txn.date}</div>
                    </div>
                  </div>
                </td>
                <td className="fw-medium">{txn.id}</td>
                <td className="fw-medium">{txn.pokerId}</td>
                <td className={`fw-bold ${txn.amount < 0 ? 'text-danger' : 'text-success'}`}>
                  {txn.amount < 0 ? `-$${Math.abs(txn.amount).toLocaleString()}` : `+$${txn.amount.toLocaleString()}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LastTransactions;
