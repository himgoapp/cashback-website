import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { alltransactions } from "../../../servicefile/transactionservice";

export default function TransactionTable() {
  const [products, setProducts] = useState([]);
  const columns = [
    { field: "transaction_hash", header: "Transaction Id" },
    { field: "actualAmount", header: "Amount Withdraw" },
    { field: "total", header: "Total" },
    { field: "rackbackcut", header: "Fees" },
    { field: "status", header: "Status" },
    { field: "status", header: "Status" },
  ];

  const getTransactions = async () => {
    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {};
    const res = await alltransactions(userInfo._id);
    setProducts(res.transactionsInfo);
  };

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="card">
      <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
        {columns.map((col, i) => (
          <Column key={col.field} field={col.field} header={col.header} />
        ))}
      </DataTable>
    </div>
  );
}
