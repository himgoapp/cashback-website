import React from 'react';
import  '../../../../assets/Style/style.css'

const TransactionsTable = () => {
  const TransactionsTable = [
    { id: '#12548796', pokerId: '1234 ****', amount: -2500, date: '25 Jan 2021' },
    { id: '#12548796', pokerId: '1234 ****', amount: 750, date: '25 Jan 2021' },
    { id: '#12548796', pokerId: '1234 ****', amount: -1050, date: '25 Jan 2021' },
    { id: '#12548796', pokerId: '1234 ****', amount: 840, date: '25 Jan 2021' },
  ];

  return (
    <div className="LastTransactionSection TransactionTableDB">
      <div className="LastTransactionTable table-responsive">
        <table className="table align-middle">
          <thead>
            <tr className="">
              <th>Description</th>
              <th>Transaction ID</th>
              <th>Poker ID</th>
              <th>Amount</th>
              <th>Balance</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {TransactionsTable.map((txn, index) => (
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
                    </div>
                  </div>
                </td>
                <td className="fw-medium">{txn.id}</td>
                <td className="fw-medium">{txn.pokerId}</td>
                <td className={`fw-bold ${txn.amount < 0 ? 'text-danger' : 'text-success'}`}>
                  {txn.amount < 0 ? `-$${Math.abs(txn.amount).toLocaleString()}` : `+$${txn.amount.toLocaleString()}`}
                </td>
                <td>-$2,500</td>
                <td>28 Jan, 12.30 AM</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div class="pagination">
          <a href="#">&laquo; Previous</a>
          <a href="#" class="active">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">Next &raquo;</a>
        </div>
      </div>
    </div>
  );
};

export default TransactionsTable;
