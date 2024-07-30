import React from "react";
import DashboardHomeHeader from "../home/dashHomeHeader";
import TransactionTable from "./transactionsTable";

const TransactionMain = () => {
  return (
    <div>
      <DashboardHomeHeader />
      <TransactionTable />
    </div>
  );
};

export default TransactionMain;
