import styles from "../home/rakeback_chart.module.css";
import "../../../assets/Style/style.css";
import { Link } from "react-router-dom";

const LastTransactions = ({ transactionsInfo }) => {
  const transactions =
    transactionsInfo && transactionsInfo.length > 0 ? transactionsInfo : [];

  return (
    <div className="LastTransactionSection DashboardTransactionSection">
      <div className="d-flex justify-content-between align-items-center mb-3 HeadingSec">
        <div className="wallet_balance_head">Last Transaction</div>
        <Link className="SeeMore" to="/dashboard/mytransactions">
          See More
        </Link>
      </div>

      <div className="LastTransactionTable table-responsive">
        <table className="table align-middle">
          <thead>
            <tr className="">
              <th>Description</th>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    {txn.typeOfTransaction === "Deposit" ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <circle cx="15" cy="15" r="14" stroke="#41D4A8" stroke-width="2" />
                      <path d="M14.4697 21.5303C14.7626 21.8232 15.2374 21.8232 15.5303 21.5303L20.3033 16.7574C20.5962 16.4645 20.5962 15.9896 20.3033 15.6967C20.0104 15.4038 19.5355 15.4038 19.2426 15.6967L15 19.9393L10.7574 15.6967C10.4645 15.4038 9.98959 15.4038 9.6967 15.6967C9.40381 15.9896 9.40381 16.4645 9.6967 16.7574L14.4697 21.5303ZM15 10.5L14.25 10.5L14.25 21L15 21L15.75 21L15.75 10.5L15 10.5Z" fill="#41D4A8" />
                    </svg>
                      : <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="14" stroke="#FF7A1A" stroke-width="2" />
                        <path d="M15.5303 9.96967C15.2374 9.67678 14.7626 9.67678 14.4697 9.96967L9.6967 14.7426C9.40381 15.0355 9.40381 15.5104 9.6967 15.8033C9.98959 16.0962 10.4645 16.0962 10.7574 15.8033L15 11.5607L19.2426 15.8033C19.5355 16.0962 20.0104 16.0962 20.3033 15.8033C20.5962 15.5104 20.5962 15.0355 20.3033 14.7426L15.5303 9.96967ZM15 21L15.75 21L15.75 10.5L15 10.5L14.25 10.5L14.25 21L15 21Z" fill="#FF7A1A" />
                      </svg>}
                    <div>
                      <div className="fw-semibold">
                        {txn.partner ? txn.partner : "Cashbackk"}
                      </div>
                      <div className=" small">{txn.date}</div>
                    </div>
                  </div>
                </td>
                <td className="fw-medium">{txn._id}</td>
                <td
                  className={`fw-medium ${txn.typeOfTransaction === "Deposit"
                    ? "text-success"
                    : "text-danger"
                    }`}
                >
                  {txn.typeOfTransaction === "Deposit"
                    ? `+₹${txn.actualAmount.toLocaleString()}`
                    : `-₹${Math.abs(txn.actualAmount).toLocaleString()}`}
                </td>
                <td className="fw-medium">
                  ₹{txn.latestBalance.toLocaleString()}
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
