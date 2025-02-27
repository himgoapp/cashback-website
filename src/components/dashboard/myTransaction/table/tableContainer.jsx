import React, { useState, useEffect, useContext } from "react";
import styles from "./tableContainer.module.css";
import { alltransactions } from "../../../../servicefile/transactionservice";
import moment from "moment";
import { UserContext } from "../../../../App";
import { DataGrid } from "@mui/x-data-grid";
import { statusBaseColor } from "../../../../helperFxns/colorCode";
import eyeicon from "../../../../assets/eyevisible.svg";
const columns = [
  {
    field: "transaction_hash",
    headerName: "Transaction ID",
    flex: 1,
    minWidth: 200,
    headerClassName: styles.Header,
  },
  {
    field: "createdAt_1",
    headerName: "Date",
    flex: 1,
    minWidth: 120,
    renderCell: (params) => {
      return moment(params.row.createdAt).format("DD MMM YYYY");
    },
    headerClassName: styles.Header,
  },
  {
    field: "createdAt_2",
    headerName: "Time",
    flex: 1,
    minWidth: 120,
    renderCell: (params) => {
      return moment(params.row.createdAt).format("LT");
    },
    headerClassName: styles.Header,
  },
  {
    field: "actualAmount_1",
    headerName: "TDS",
    flex: 1,
    minWidth: 120,
    renderCell: (params) => {
      return params.row.typeOfTransaction === "Deposit"
        ? 0.0
        : `₹${params.row.rackbackcut.toFixed(2)}`;
    },
    headerClassName: styles.Header,
  },
  {
    field: "actualAmount_2",
    headerName: "Amount",
    flex: 1,
    minWidth: 120,
    renderCell: (params) => {
      return params.row.typeOfTransaction === "Deposit"
        ? `+₹${params.row.actualAmount.toFixed(2)}`
        : `-₹${params.row.actualAmount.toFixed(2)}`;
    },
    headerClassName: styles.Header,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 120,
    cellClassName: styles.StatusColumn,
    headerClassName: styles.Header,
    renderCell: (params) => {
      let rowStatus = params.row.status;
      return (
        <div
          className={styles.Badge}
          style={rowStatus === "Success" ? { backgroundColor: "#ecfdf3" } : {}}
        >
          <div style={statusBaseColor(rowStatus)}>{rowStatus}</div>
        </div>
      );
    },
  },
  {
    field: "view",
    headerName: "View",
    renderCell: (params) => {
      return (
        <button
          className={styles.eyeButton}
          onClick={() => params.row.handleOpenModal(params.row)}
        >
          <img src={eyeicon} /> 
        </button>
      );
    },
  },
];

const TableContainer = ({ transactionType }) => {
  const { userData } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false); // Modal state
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const getTransactions = async () => {
    if (!userData || !userData._id) return;
    const res = await alltransactions(userData._id, transactionType, page);
    setProducts(res.transactionsInfo);
  };

  useEffect(() => {
    getTransactions();
  }, [transactionType, page]);

  // Define the function to open the modal
  const handleOpenModal = (transaction) => {
    setSelectedTransaction(transaction);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedTransaction(null);
  };

  // Inject handleOpenModal into each transaction row
  const productsWithModal = products.map((transaction) => ({
    ...transaction,
    handleOpenModal: handleOpenModal,
  }));

  return (
    <div className={styles.TransactionTableContainer}>
      <DataGrid
        rows={productsWithModal}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10, 25, 50]}
        getRowId={(row) => row.transaction_hash}
        className="colored_rows"
        style={{
          width: "100%",
        }}
      />

      {/* Modal for Transaction Details */}
      {open && (
  <div className={styles.modal}>
  <div className={styles.modalContent}>
      <div className={styles.receiptContainer}>
        <h3 className={styles.title}>Transaction Details</h3>
        <p className={styles.transactionId}>
          Transaction ID: {selectedTransaction.transaction_hash}
        </p>
        {/* <p>Account Number: {selectedTransaction.bank.account_number}</p>
        <p>Bank Name: {selectedTransaction.bank.bank_name}</p>
        <p>IFSC Code: {selectedTransaction.bank.ifsc_code}</p> */}

        <div className={styles.detailsRow}>
          <span>Date:</span>
          <span>{moment(selectedTransaction.createdAt).format("DD MMM YYYY")}</span>
        </div>
        <div className={styles.detailsRow}>
          <span>Transaction Type:</span>
          <span>{selectedTransaction.typeOfTransaction}</span>
        </div>
        <div className={styles.detailsRow}>
          <span>Status:</span>
          <span
            className={
              selectedTransaction.status === "Approved"
                ? styles.approved
                : selectedTransaction.status === "Pending"
                ? styles.pending
                : styles.rejected
            }
          >
            {selectedTransaction.status}
          </span>
        </div>
        <div className={styles.amountContainer}>
          <span>Amount</span>
          <span className={styles.amount}>₹{selectedTransaction.actualAmount}</span>
        </div>
      </div>

      <button className={styles.closeButton} onClick={handleCloseModal}>
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default TableContainer;
