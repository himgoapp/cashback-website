import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
// import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { alltransactions } from "../../../servicefile/transactionservice";
// import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function TransactionTable() {
  const [products, setProducts] = useState([]);
  const columns = [
    { field: "transaction_hash", header: "Transaction Id" },
    { field: "actualAmount", header: "Amount Withdraw" },
    { field: "total", header: "Total" },
    { field: "rackbackcut", header: "Fees" },
    { field: "status", header: "Status" },
    { field: "createdAt", header: "Date" },
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
    <>
      {" "}
      <Button
        variant="dark"
        onClick={() => {
          // setSignUpTab(true);
        }}
      >
        Create Withdraw
      </Button>
      <div className="card">
        <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
          {columns.map((col, i) => (
            <Column key={col.field} field={col.field} header={col.header} />
          ))}
        </DataTable>
      </div>
    </>
  );
}
