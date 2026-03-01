import React, { useContext } from "react";
import styles from "./PokerCardsContainer.module.css";
import { UserContext } from "../../../../App";
import moment from "moment";

const PokerCardsContainer = () => {
  const { walletData, transactionInfo } = useContext(UserContext);

  const formatAmt = (v) => {
    const n = Number(v || 0);
    return `₹${n.toFixed(2)}`;
  };

  const total = walletData?.wallet_balance ?? 0;
  const pending = walletData?.pending_rewards ?? 0;
  const confirmed = walletData?.confirmed_amount ?? Math.max(0, total - pending);

  const transactions = (transactionInfo && transactionInfo.transactions) || [];

  return (
    <div className={styles.PokerCardsContainer}>
      <div style={{ display: "flex", gap: 16, width: "100%", marginBottom: 12, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 180, background: "#fff", padding: 16, borderRadius: 8, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <div style={{ color: "#6b7280", fontSize: 14 }}>Total Cashback</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginTop: 8 }}>{formatAmt(total)}</div>
        </div>
        <div style={{ flex: 1, minWidth: 180, background: "#fff", padding: 16, borderRadius: 8, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <div style={{ color: "#6b7280", fontSize: 14 }}>Pending Rewards</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginTop: 8 }}>{formatAmt(pending)}</div>
        </div>
        <div style={{ flex: 1, minWidth: 180, background: "#fff", padding: 16, borderRadius: 8, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <div style={{ color: "#6b7280", fontSize: 14 }}>Confirmed Amount</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginTop: 8 }}>{formatAmt(confirmed)}</div>
        </div>
      </div>

      <div style={{ width: "100%" }}>
        <h5 style={{ marginBottom: 12 }}>Recent Transactions</h5>
        <div style={{ background: "#fff", borderRadius: 8, padding: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ overflowX: "auto" }}>
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Store</th>
                  <th>Order Value</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center">No transactions yet</td>
                  </tr>
                ) : (
                  transactions.map((t, i) => (
                    <tr key={i}>
                      <td>{t.date ? moment(t.date).format("DD MMM YYYY") : "-"}</td>
                      <td>{t.storeName || t.store || t.merchant || "-"}</td>
                      <td>{t.amount ? `₹${Number(t.amount).toFixed(2)}` : "-"}</td>
                      <td>{t.status || "-"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokerCardsContainer;
