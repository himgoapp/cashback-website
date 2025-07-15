import styles from "../home/rakeback_chart.module.css";
import "../../../assets/Style/style.css";
import { Link } from "react-router-dom";

const LastTransactions = ({ transactionsInfo }) => {
  const transactions =
    transactionsInfo && transactionsInfo.length > 0 ? transactionsInfo : [];

  return (
    <div className="LastTransactionSection">
      <div className="d-flex justify-content-between align-items-center mb-3 HeadingSec">
        <div className={styles.wallet_balance_head}>Last Transaction</div>
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
                    <span
                      className={`rounded-circle d-flex justify-content-center align-items-center border 
                      ${
                        txn.typeOfTransaction === "Deposit"
                          ? "border-success text-success"
                          : "border-danger text-danger"
                      }`}
                      style={{ width: 30, height: 30 }}
                    >
                      {txn.typeOfTransaction === "Deposit" ? "↓" : "↑"}
                    </span>
                    <div>
                      <div className="fw-semibold">
                        {txn.partner ? txn.partner : "Rakebackk"}
                      </div>
                      <div className=" small">{txn.date}</div>
                    </div>
                  </div>
                </td>
                <td className="fw-medium">{txn._id}</td>
                <td
                  className={`fw-bold ${
                    txn.typeOfTransaction === "Deposit"
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
