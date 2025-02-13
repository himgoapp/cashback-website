import React, { useState, useEffect, useContext } from "react";
import styles from "./tableContainer.module.css";
import { alltransactions } from "../../../../servicefile/transactionservice";
import moment from "moment";
import { UserContext } from "../../../../App";
import { DataGrid } from "@mui/x-data-grid";
import { statusBaseColor } from "../../../../helperFxns/colorCode";
import eyeicon from "../../../../assets/eyeicon.svg";
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
          <img src={eyeicon} /> {/* Simple Eye Icon */}
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
            {selectedTransaction && (
              <div>
                <h3>Transaction Details</h3>
                <p>
                  <strong>Transaction ID:</strong>{" "}
                  {selectedTransaction.transaction_hash}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {moment(selectedTransaction.createdAt).format("DD MMM YYYY")}
                </p>
                <p>
                  <strong>Amount:</strong> ₹{selectedTransaction.actualAmount}
                </p>
                <p>
                  <strong>TDS:</strong> ₹{selectedTransaction.rackbackcut}
                </p>
                <p>
                  <strong>Status:</strong>
                  <span
                    style={{
                      color:
                        selectedTransaction.status === "Approved"
                          ? "#27ae60"
                          : selectedTransaction.status === "Pending"
                          ? "#f39c12"
                          : "#e74c3c",
                          background:
                          selectedTransaction.status === "Approved"
                            ? "#e3fcef"
                            : selectedTransaction.status === "Pending"
                            ? "#fff8e1"
                            : "#fdecea",
                      fontWeight: "bold",
                      textDecoration: "none",
                      borderRadius: "20px",
                      padding: "2px 5px",
                      fontSize:"13px"
                    }}
                  >
                    {" "}
                    {selectedTransaction.status}
                  </span>
                </p>
              </div>
            )}
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
