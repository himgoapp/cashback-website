import React, { useState, useEffect, useContext } from "react";
import DataTable from "react-data-table-component";
import moment from "moment";
import { UserContext } from "../../../../App";
import { alltransactions } from "../../../../servicefile/transactionservice";
import eyeicon from "../../../../assets/eyevisible.svg";
import styles from "./tableContainer.module.css";
import zIndex from "@mui/material/styles/zIndex";

// Helper for status badge color
const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "approved":
      return { backgroundColor: "#ecfdf3", color: "#027a48" }; 
    case "pending":
      return { backgroundColor: "#fff8e1", color: "#b26a00" };
    case "aborted":
      return { backgroundColor: "#fdecea", color: "#b00020" }; 
    default:
      return { backgroundColor: "#e0e0e0", color: "#333" }; 
  }
};

// Custom styled DataTable
const customStyles = {
  table: {
    style: {
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    },
  },
  headRow: {
    style: {
      backgroundColor: '#f8f9fc',
      borderBottom: '1px solid #edf2f7',
      fontSize: '14px',
      fontWeight: '600',
      color: '#4a5568',
      minHeight: '56px',
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },
  headCells: {
    style: {
      paddingLeft: '16px',
      paddingRight: '16px',
      fontSize: '13px',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
    },
  },
  rows: {
    style: {
      fontSize: '14px',
      fontWeight: '400',
      color: '#2d3748',
      backgroundColor: '#ffffff',
      minHeight: '60px',
      '&:not(:last-of-type)': {
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: '#edf2f7',
      },
      '&:hover': {
        backgroundColor: '#f7fafc',
        transition: '0.2s',
      },
    },
  },
  cells: {
    style: {
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },
  pagination: {
    style: {
      borderTop: '1px solid #edf2f7',
      backgroundColor: '#ffffff',
      padding: '16px',
    },
    pageButtonsStyle: {
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      height: '32px',
      width: '32px',
      padding: '4px',
      margin: '0px 4px',
      cursor: 'pointer',
      transition: '0.2s',
      backgroundColor: '#ffffff',
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: '0.4',
      },
      '&:hover:not(:disabled)': {
        backgroundColor: '#f3f4f6',
      },
    },
  },
};

// Custom pagination component for more control
const CustomPagination = ({ rowsPerPage, rowCount, onChangePage, onChangeRowsPerPage, currentPage }) => {
  const totalPages = Math.ceil(rowCount / rowsPerPage);
  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage + 1;
  const disabledLesser = currentPage === 1;
  const disabledGreater = currentPage === totalPages || totalPages === 0;

  // Create page number buttons
  const pageNumbers = [];
  const maxPagesToShow = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  
  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(
      <button
        key={i}
        className={`${styles.pageButton} ${currentPage === i ? styles.activePageButton : ''}`}
        onClick={() => onChangePage(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.paginationInfo}>
        Showing {rowCount > 0 ? firstIndex : 0} to {Math.min(lastIndex, rowCount)} of {rowCount} entries
      </div>
      
      <div className={styles.paginationControls}>
        <button 
          className={`${styles.pageButton} ${styles.navButton}`} 
          onClick={() => onChangePage(1)}
          disabled={disabledLesser}
        >
          «
        </button>
        
        <button 
          className={`${styles.pageButton} ${styles.navButton}`} 
          onClick={() => onChangePage(currentPage - 1)}
          disabled={disabledLesser}
        >
          ‹
        </button>

        {/* First page button if not in view */}
        {startPage > 1 && (
          <>
            <button 
              className={styles.pageButton} 
              onClick={() => onChangePage(1)}
            >
              1
            </button>
            {startPage > 2 && <span className={styles.ellipsis}>...</span>}
          </>
        )}

        {/* Page number buttons */}
        {pageNumbers}

        {/* Last page button if not in view */}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className={styles.ellipsis}>...</span>}
            <button 
              className={styles.pageButton} 
              onClick={() => onChangePage(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}
        
        <button 
          className={`${styles.pageButton} ${styles.navButton}`} 
          onClick={() => onChangePage(currentPage + 1)}
          disabled={disabledGreater}
        >
          ›
        </button>
        
        <button 
          className={`${styles.pageButton} ${styles.navButton}`} 
          onClick={() => onChangePage(totalPages)}
          disabled={disabledGreater}
        >
          »
        </button>
      </div>
      
      {/* <div className={styles.paginationRowsPerPage}>
        <span className={styles.rowsPerPageLabel}>Rows per page:</span>
        <select 
          className={styles.rowsPerPageSelect}
          value={rowsPerPage}
          onChange={e => onChangeRowsPerPage(Number(e.target.value), currentPage)}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div> */}
    </div>
  );
};

const TableContainer = ({ transactionType }) => {
  const { userData } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [totalRows, setTotalRows] = useState(0);
  // const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [flow, setFlow] = useState(false);
 

  const getTransactions = async (page , checkValue) => {
    if (!userData || !userData._id) return;

    if(checkValue === true){
      setFlow(true);
    }else{
      setFlow(false);
      setCurrentPage(1);
    }
  
    setLoading(true);
    try {
      const res = await alltransactions(userData._id, transactionType, page);
      let data = res.transactionsInfo || [];
      setTransactions(data);
      setTotalRows(res.length || 0); // Set total rows to the length (16 in your case)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    getTransactions(1 , false);
  }, [transactionType]);

  useEffect(() => {
    if(flow === true){
    getTransactions(currentPage , true);}
  }, [currentPage]);

  const handlePageChange = (page) => {
    setFlow(true);
    setCurrentPage(page);
  };

  // const handlePerRowsChange = async (newPerPage, page) => {
  //   setPerPage(newPerPage);
  //   setCurrentPage(1); 
  // };

  const handleOpenModal = (transaction) => {
    setSelectedTransaction(transaction);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedTransaction(null);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount).replace(/^(\D+)/, '₹');
  };

  const columns = [
    {
      name: "Transaction ID",
      selector: row => row.transaction_hash,
      sortable: true,
      cell: row => (
        <div className={styles.transactionCell}>
          <span className={styles.transactionId}>{row.transaction_hash.substring(0, 8)}...</span>
          <span className={styles.transactionFull}>{row.transaction_hash}</span>
        </div>
      ),
    },
    {
      name: "Date & Time",
      selector: row => row.createdAt,
      sortable: true,
      cell: row => (
        <div className={styles.dateTimeCell}>
          <div className={styles.date}>{moment(row.createdAt).format("DD MMM YYYY")}</div>
          <div className={styles.time}>{moment(row.createdAt).format("h:mm A")}</div>
        </div>
      ),
    },
    {
      name: "TDS",
      selector: row => row.rackbackcut,
      sortable: true,
      right: true,
      cell: row => 
        row.typeOfTransaction === "Deposit" 
          ? <span className={styles.zeroAmount}>₹0.00</span>
          : <span className={styles.tdsAmount}>{formatCurrency(row.rackbackcut)}</span>
    },
    {
      name: "Amount",
      selector: row => row.actualAmount,
      sortable: true,
      right: true,
      cell: row => (
        <span className={row.typeOfTransaction === "Deposit" ? styles.creditAmount : styles.debitAmount}>
          {row.typeOfTransaction === "Deposit" ? "+" : "-"}
          {formatCurrency(row.actualAmount)}
        </span>
      ),
    },
    {
      name: "Status",
      selector: row => row.status,
      sortable: true,
      cell: row => (
        <div 
          className={styles.statusBadge}
          style={getStatusColor(row.status)}
        >
          {row.status}
        </div>
      ),
    },
    {
      name: "Actions",
      button: true,
      cell: row => (
        <button 
          className={styles.actionButton} 
          onClick={() => handleOpenModal(row)}
          aria-label="View transaction details"
        >
          <img src={eyeicon} alt="View" className={styles.eyeIcon} />
        </button>
      ),
    },
  ];

  return (
    <div className={styles.tableContainerWrapper}>
      {/* <div className={styles.tableHeader}>
        <h2 className={styles.tableTitle}>{transactionType} Transactions</h2>
        <div className={styles.tableStats}>
          <span>Total: {totalRows} transactions</span>
        </div>
      </div> */}
    <DataTable
        columns={columns}
        data={transactions}
        customStyles={customStyles}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        // paginationPerPage={perPage}
        paginationDefaultPage={currentPage}
        onChangePage={handlePageChange}
        // onChangeRowsPerPage={handlePerRowsChange}
        paginationComponent={props => (
          <CustomPagination 
            {...props} 
            currentPage={currentPage}
          />
        )}
        progressPending={loading}
        progressComponent={<div className={styles.loader}>Loading...</div>}
        noDataComponent={
          <div className={styles.noData}>
            No transactions found
          </div>
        }
        highlightOnHover
        pointerOnHover
        responsive
      />
  
      {open && selectedTransaction && (
        <div className={styles.modalBackdrop} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.receiptContainer}>
              <div className={styles.receiptHeader}>
                <h3 className={styles.receiptTitle}>Transaction Receipt</h3>
                <div className={styles.statusHeader}>
                  <div 
                    className={styles.statusBadgeLarge}
                    style={getStatusColor(selectedTransaction.status)}
                  >
                    {selectedTransaction.status}
                  </div>
                </div>
              </div>
              
              <div className={styles.receiptBody}>
                <div className={styles.receiptSection}>
                  <div className={styles.receiptRow}>
                    <span className={styles.receiptLabel}>Transaction ID</span>
                    <span className={styles.receiptValue}>{selectedTransaction.transaction_hash}</span>
                  </div>
                  
                  <div className={styles.receiptRow}>
                    <span className={styles.receiptLabel}>Date & Time</span>
                    <span className={styles.receiptValue}>
                      {moment(selectedTransaction.createdAt).format("DD MMM YYYY, h:mm A")}
                    </span>
                  </div>

                  <div className={styles.receiptRow}>
                    <span className={styles.receiptLabel}>Transaction Type</span>
                    <span className={styles.receiptValue}>{selectedTransaction.typeOfTransaction}</span>
                  </div>
                </div>

                <div className={styles.receiptDivider}></div>

                <div className={styles.receiptSection}>
                  <div className={styles.receiptRow}>
                    <span className={styles.receiptLabel}>TDS Amount</span>
                    <span className={styles.receiptValue}>
                      {selectedTransaction.typeOfTransaction === "Deposit" 
                        ? "₹0.00" 
                        : formatCurrency(selectedTransaction.rackbackcut)
                      }
                    </span>
                  </div>

                  <div className={styles.amountSection}>
                    <span className={styles.amountLabel}>Total Amount</span>
                    <span className={`${styles.amountValue} ${selectedTransaction.typeOfTransaction === "Deposit" ? styles.credit : styles.debit}`}>
                      {selectedTransaction.typeOfTransaction === "Deposit" ? "+" : "-"}
                      {formatCurrency(selectedTransaction.actualAmount)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.modalActions}>
              <button className={styles.closeButton} onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableContainer;