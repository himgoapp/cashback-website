import React, { useState, useEffect, useContext } from "react";
import DataTable from "react-data-table-component";
import moment from "moment";
import { UserContext } from "../../../../App";
import { alltransactions } from "../../../../servicefile/transactionservice";
import styles from "./tableContainer.module.css";

const EyeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.eyeIcon}
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);



const NoDataComponent = () => (
  <div className={styles.noData}>
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.noDataIcon}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="12" y1="18" x2="12" y2="12"></line>
      <line x1="9" y1="15" x2="15" y2="15"></line>
    </svg>
    <h3 className={styles.noDataTitle}>No Transactions Found</h3>
    <p className={styles.noDataText} style={{ fontFamily: '"Roboto",sans-serif' }}>There are no transactions to display at this time.</p>
  </div>
);

const getStatusInfo = (status) => {
  switch (status.toLowerCase()) {
    case "approved":
      return {
        backgroundColor: "rgba(12, 110, 88, 0.1)",
        color: "#027a48",
        borderColor: "rgba(12, 110, 88, 0.2)",
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        )
      };
    case "pending":
      return {
        backgroundColor: "rgba(219, 168, 88, 0.1)",
        color: "#b26a00",
        borderColor: "rgba(219, 168, 88, 0.2)",
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="6" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        )
      };
    case "aborted":
      return {
        backgroundColor: "rgba(164, 48, 48, 0.1)",
        color: "#b00020",
        borderColor: "rgba(164, 48, 48, 0.2)",
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        )
      };
    default:
      return {
        backgroundColor: "#f1f5f9",
        color: "#64748b",
        borderColor: "#e2e8f0",
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        )
      };
  }
};

const customStyles = {
  table: {
    style: {
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',

    },
  },
  headRow: {
    style: {
      backgroundColor: '#f8f9fc',
      borderBottom: '1px solid #edf2f7',
      fontSize: '14px',
      fontWeight: '600',
      color: '#3a5a78',
      minHeight: '56px',

    },
  },
  headCells: {
    style: {
      paddingLeft: '16px',
      paddingRight: '16px',
      fontSize: '13px',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      fontFamily: "Roboto, sans-serif !important",

    },
  },
  rows: {
    style: {
      fontSize: '14px',
      fontWeight: '400',
      color: '#1e293b',
      backgroundColor: '#ffffff',
      minHeight: '64px',
      '&:not(:last-of-type)': {
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: '#edf2f7',
      },
      '&:hover': {
        backgroundColor: 'rgba(58, 90, 120, 0.02)',
        transition: 'all 0.2s ease',
        transform: 'translateX(4px)',
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
  },
};

const CustomPagination = ({ rowsPerPage, rowCount, onChangePage, onChangeRowsPerPage, currentPage }) => {
  const totalPages = Math.ceil(rowCount / rowsPerPage);
  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage + 1;
  const disabledLesser = currentPage === 1;
  const disabledGreater = currentPage === totalPages || totalPages === 0;

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

        {pageNumbers}

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
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [flow, setFlow] = useState(false);
  const shouldShowTDS = transactions.some(row => row.typeOfTransaction === "Withdrawal");
  const shouldShowStatus = transactions.some(row => row.typeOfTransaction === "Withdrawal");
  const shouldShowPartner = transactions.some(row => row.typeOfTransaction === "Deposit");
  const shouldShowType = transactions.some(row => row.typeOfTransaction === "Deposit" || row.typeOfTransaction === "Deduct");
  const shouldShowUpdatedAt = transactions.some(row => row.typeOfTransaction === "Withdrawal");




  const getTransactions = async (page, checkValue) => {
    if (!userData || !userData._id) return;

    if (checkValue === true) {
      setFlow(true);
    } else {
      setFlow(false);
      setCurrentPage(1);
    }

    setLoading(true);
    try {
      const res = await alltransactions(userData._id, transactionType, page);
      let data = res.transactionsInfo || [];
      setTransactions(data);
      setTotalRows(res.length || 0);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTransactions(1, false);
  }, [transactionType]);

  useEffect(() => {
    if (flow === true) {
      getTransactions(currentPage, true);
    }
  }, [currentPage]);

  const handlePageChange = (page) => {
    setFlow(true);
    setCurrentPage(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
    setCurrentPage(1);
  };

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

  const renderTooltip = (text) => {
    return <div className={styles.tooltip}>{text}</div>;
  };

  const columns = [
    {
      name: "Transaction ID",
      selector: row => row._id,
      sortable: false,
      cell: row => (
        <div className={styles.transactionCell}>
          <span className={styles.transactionId}>{row._id.substring(0, 8)}...</span>
          <div className={styles.transactionFull} style={{ fontFamily: '"Roboto",sans-serif' }}>{row._id}</div>
        </div>
      ),
    },
    {
      name: "Created At",
      selector: row => row.createdAt,
      sortable: false,
      cell: row => (
        <div className={styles.dateTimeCell}>
          <div className={styles.date}>{moment(row.createdAt).format("DD MMM YYYY")}</div>
          <div className={styles.time}>{moment(row.createdAt).format("h:mm A")}</div>
        </div>
      ),
    },
    ...(shouldShowUpdatedAt ? [{
      name: "Updated At",
      selector: row => row.updatedAt,
      sortable: false,
      cell: row => (
        <div className={styles.dateTimeCell}>
          <div className={styles.date}>
            {moment(row.updatedAt).format("DD MMM YYYY")}
          </div>
          <div className={styles.time}>
            {moment(row.updatedAt).format("h:mm A")}
          </div>
        </div>
      ),
    },
    ] : []),
    ...(shouldShowTDS ? [{
      name: "TDS",
      selector: row => row.rackbackcut,
      sortable: false,
      right: true,
      cell: row =>
        row.typeOfTransaction === "Deposit"
          ? <span className={styles.zeroAmount} style={{ fontFamily: '"Roboto",sans-serif' }}>₹0.00</span>
          : <span className={styles.tdsAmount} style={{ fontFamily: '"Roboto",sans-serif' }} >{formatCurrency(row.rackbackcut)}</span>
    }] : []),
    ...(shouldShowPartner ? [{
      name: "Site Name",
      selector: row => row.rackbackcut,
      sortable: false,
      right: true,
      cell: row =>
        row.typeOfTransaction === "Deposit"
          ? <span style={{ fontFamily: '"Roboto",sans-serif', fontWeight: "600" }} className={styles.partner}>{row.partner}</span>
          : <span style={{fontWeight:"bold"}} className={styles.no_partner}>-</span>
    }] : []),
      ...(shouldShowType ? [{
      name: "Type",
      selector: row => row.rackbackcut,
      sortable: false,
      right: true,
      cell: row =>
        row.typeOfTransaction === "Deposit" || row.typeOfTransaction === "Deduct"
          ? <span style={{ fontFamily: '"Roboto",sans-serif', fontWeight: "600" }}>{row.typeOfTransaction === "Deposit" ? "Credit" : "Debit"}</span>
          : ""
    }] : []),

    {
      name: "Amount",
      selector: row => row.actualAmount,
      sortable: false,
      right: true,
      cell: row => (
        <span className={row.typeOfTransaction === "Deposit" ? styles.creditAmount : styles.debitAmount} style={{ fontFamily: '"Roboto",sans-serif' }}>
          {formatCurrency(row.actualAmount)}
        </span>
      ),
    },
      {
      name: "Balance",
      selector: row => row.latestBalance,
      sortable: false,
      right: true,
      cell: row => (
        <span className={styles.creditAmount} style={{ fontFamily: '"Roboto",sans-serif' }}>
          {formatCurrency(row.latestBalance)}
        </span>
      ),
    },
    ...(shouldShowStatus ? [{
      name: "Status",
      selector: row => row.status,
      sortable: false,
      cell: row => {
        const statusInfo = getStatusInfo(row.status);
        return (
          <div
            className={styles.statusBadge}
            style={{
              backgroundColor: statusInfo.backgroundColor,
              color: statusInfo.color,
              borderColor: statusInfo.borderColor,
            }}
          >
            {/* <span className={styles.statusIcon}>{statusInfo.icon}</span> */}
            <span style={{ fontFamily: '"Roboto",sans-serif' }}>{row.status === "Aborted" ? "Rejected" :row.status}</span>
          </div>
        );
      },
    }] : []),
    {
      name: "Details",
      button: true,
      cell: row => (
        <button
          className={styles.actionButton}
          onClick={() => handleOpenModal(row)}
          aria-label="View transaction details"
          title="View transaction details"
        >
          <EyeIcon />
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
        progressPending={loading}
        customStyles={customStyles}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        paginationDefaultPage={currentPage}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handlePerRowsChange}
        noDataComponent={<NoDataComponent />}
        paginationComponent={({ ...props }) => (
          <CustomPagination
            {...props}
            rowsPerPage={perPage}
            rowCount={totalRows}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handlePerRowsChange}
            currentPage={currentPage}
          />
        )}
      />


      {open && selectedTransaction && (
        <div className={styles.modalBackdrop} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.receiptContainer}>
              <div className={styles.receiptHeader}>
                <h3 className={styles.receiptTitle}>Transaction Detail</h3>
                {/* <div className={styles.statusHeader}>
                  <div
                    className={styles.statusBadgeLarge}
                    style={{
                      backgroundColor: getStatusInfo(selectedTransaction.status).backgroundColor,
                      color: getStatusInfo(selectedTransaction.status).color,
                      borderColor: getStatusInfo(selectedTransaction.status).borderColor,
                    }}
                  >
                    <span className={styles.statusIconLarge}>{getStatusInfo(selectedTransaction.status).icon}</span>
                    <span style={{fontFamily:'"Roboto",sans-serif'}}>{selectedTransaction.status}</span>
                  </div>
                </div> */}
                <button
                  className={styles.closeIcon}
                  onClick={handleCloseModal}
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </div>

              <div className={styles.receiptBody}>
                <div className={styles.receiptSection}>
                  <div className={styles.receiptRow}>
                    <span className={styles.receiptLabel}>Transaction ID</span>
                    <span className={styles.receiptValue}>{selectedTransaction._id}</span>
                  </div>

                  <div className={styles.receiptRow}>
                    <span className={styles.receiptLabel}>Created At</span>
                    <span className={styles.receiptValue}>
                      {moment(selectedTransaction.createdAt).format("DD MMM YYYY, h:mm A")}
                    </span>
                  </div>
                  {selectedTransaction.typeOfTransaction === "Withdrawal" && (
                    <div className={styles.receiptRow}>
                      <span className={styles.receiptLabel}>Updated At</span>
                      <span className={styles.receiptValue}>
                        {moment(selectedTransaction.updatedAt).format("DD MMM YYYY, h:mm A")}
                      </span>
                    </div>
                  )}
                  <div className={styles.receiptRow}>
                    <span className={styles.receiptLabel}>Type</span>
                    <span className={styles.receiptValue}>{selectedTransaction.typeOfTransaction === "Deposit" ? "Credit" :selectedTransaction.typeOfTransaction === "Deduct" ? "Debit" :selectedTransaction.typeOfTransaction}</span>
                  </div>

                  {selectedTransaction.typeOfTransaction === "Withdrawal" && selectedTransaction.status === "Approved" && (
                    <div className={styles.receiptRow}>
                      <span className={styles.receiptLabel}>UTR</span>
                      <span className={styles.receiptValue}>{selectedTransaction.utr}</span>
                    </div>
                  )}
                </div>
                <div className={styles.receiptSection}>
                  {selectedTransaction.typeOfTransaction === "Withdrawal" && (
                    <div className={styles.receiptRow}>
                      <span className={styles.receiptLabel}>TDS Amount</span>
                      <span className={styles.receiptValue}>
                        {formatCurrency(selectedTransaction.rackbackcut)}
                      </span>
                    </div>
                  )}
                  {selectedTransaction.typeOfTransaction === "Deposit" && (
                    <div className={styles.receiptRow}>
                      <span className={styles.receiptLabel}>Site Name</span>
                      <span className={styles.receiptValue}>
                        {selectedTransaction.partner}
                      </span>
                    </div>
                  )}
                    {selectedTransaction.typeOfTransaction !== "Withdrawal" && (
                    <div className={styles.receiptRow}>
                      <span className={styles.receiptLabel}>Note</span>
                      <span className={styles.receiptValue}>
                        {selectedTransaction.note}
                      </span>
                    </div>
                  )}
                  <div className={styles.amountSection}>
                    <span className={styles.amountLabel}>Total Amount</span>
                    <span className={`${styles.amountValue} ${selectedTransaction.typeOfTransaction === "Deposit" ? styles.credit : styles.debit}`}>
                      {formatCurrency(selectedTransaction.actualAmount)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableContainer;