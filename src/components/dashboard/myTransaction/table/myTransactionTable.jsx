import { useState, useEffect, useContext } from "react";
import moment from "moment";
import { UserContext } from "../../../../App";
import { alltransactions } from "../../../../servicefile/transactionservice";
import "../../../../assets/Style/style.css";

const CustomPagination = ({
  rowsPerPage,
  rowCount,
  onChangePage,
  currentPage,
}) => {
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
        className={currentPage === i ? "active" : ""}
        onClick={() => onChangePage(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div class="pagination">
      <button
        onClick={() => onChangePage(currentPage - 1)}
        disabled={disabledLesser}
      >
        &laquo; Previous
      </button>
      {startPage > 1 && (
        <>
          <button
            className={currentPage === 1 ? "active" : ""}
            onClick={() => onChangePage(1)}
          >
            1
          </button>
          {startPage > 2 && <span>...</span>}
        </>
      )}

      {pageNumbers}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span>...</span>}
          <button onClick={() => onChangePage(totalPages)}>{totalPages}</button>
        </>
      )}

      <button
        onClick={() => onChangePage(currentPage + 1)}
        disabled={disabledGreater}
      >
        Next &raquo;
      </button>
    </div>

    // <div className={styles.paginationContainer}>
    //   <div className={styles.paginationInfo}>
    //     Showing {rowCount > 0 ? firstIndex : 0} to{" "}
    //     {Math.min(lastIndex, rowCount)} of {rowCount} entries
    //   </div>

    //   <div className={styles.paginationControls}>
    //     <button
    //       className={`${styles.pageButton} ${styles.navButton}`}
    //       onClick={() => onChangePage(1)}
    //       disabled={disabledLesser}
    //     >
    //       «
    //     </button>

    //     <button
    //       className={`${styles.pageButton} ${styles.navButton}`}
    //       onClick={() => onChangePage(currentPage - 1)}
    //       disabled={disabledLesser}
    //     >
    //       ‹
    //     </button>

    //     {startPage > 1 && (
    //       <>
    //         <button
    //           className={styles.pageButton}
    //           onClick={() => onChangePage(1)}
    //         >
    //           1
    //         </button>
    //         {startPage > 2 && <span className={styles.ellipsis}>...</span>}
    //       </>
    //     )}

    //     {pageNumbers}

    //     {endPage < totalPages && (
    //       <>
    //         {endPage < totalPages - 1 && (
    //           <span className={styles.ellipsis}>...</span>
    //         )}
    //         <button
    //           className={styles.pageButton}
    //           onClick={() => onChangePage(totalPages)}
    //         >
    //           {totalPages}
    //         </button>
    //       </>
    //     )}

    //     <button
    //       className={`${styles.pageButton} ${styles.navButton}`}
    //       onClick={() => onChangePage(currentPage + 1)}
    //       disabled={disabledGreater}
    //     >
    //       ›
    //     </button>

    //     <button
    //       className={`${styles.pageButton} ${styles.navButton}`}
    //       onClick={() => onChangePage(totalPages)}
    //       disabled={disabledGreater}
    //     >
    //       »
    //     </button>
    //   </div>

    // </div>
  );
};

const TransactionsTable = ({ transactionType }) => {
  const { userData } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [flow, setFlow] = useState(false);
  const shouldShowTDS = transactions.some(
    (row) => row.typeOfTransaction === "Withdrawal"
  );
  const shouldShowStatus = transactions.some(
    (row) => row.typeOfTransaction === "Withdrawal"
  );
  const shouldShowPartner = transactions.some(
    (row) => row.typeOfTransaction === "Deposit"
  );
  const shouldShowType = transactions.some(
    (row) =>
      row.typeOfTransaction === "Deposit" || row.typeOfTransaction === "Deduct"
  );
  const shouldShowUpdatedAt = transactions.some(
    (row) => row.typeOfTransaction === "Withdrawal"
  );

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

  const formatted = (isoDate) => moment(isoDate).format("DD MMM, hh.mm A");

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

  // const handlePerRowsChange = async (newPerPage, page) => {
  //   setPerPage(newPerPage);
  //   setCurrentPage(1);
  // };

  // const handleOpenModal = (transaction) => {
  //   setSelectedTransaction(transaction);
  //   setOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setOpen(false);
  //   setSelectedTransaction(null);
  // };

  // const formatCurrency = (total) => {
  //   return new Intl.NumberFormat("en-IN", {
  //     style: "currency",
  //     currency: "INR",
  //     minimumFractionDigits: 2,
  //   })
  //     .format(total)
  //     .replace(/^(\D+)/, "₹");
  // };

  return (
    <div className="LastTransactionSection TransactionTableDB">
      <div className="LastTransactionTable table-responsive">
        <table className="table align-middle">
          <thead>
            <tr className="">
              {transactionType !== "TDS" && <th>Description</th>}
              <th>Transaction ID</th>
              {transactionType !== "TDS" && <th>Poker ID</th>}
              <th>Amount</th>
              {transactionType === "TDS" && <th>TDS</th>}
              {transactionType !== "TDS" && <th>Balance</th>}
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={index}>
                {transactionType !== "TDS" && (
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
                        <div className=" small">{formatted(txn.createdAt)}</div>
                      </div>
                    </div>
                  </td>
                )}
                <td className="fw-medium">{txn._id}</td>
                {transactionType !== "TDS" && (
                  <td className="fw-medium">
                    {txn.partner ? txn.partner : "N/A"}
                  </td>
                )}
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
                {transactionType === "TDS" && (
                  <td
                    className={`fw-bold ${
                      txn.typeOfTransaction === "Deposit"
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {txn.typeOfTransaction === "Deposit"
                      ? `+₹${txn.rackbackcut.toLocaleString()}`
                      : `-₹${Math.abs(txn.rackbackcut).toLocaleString()}`}
                  </td>
                )}
                {transactionType !== "TDS" && (
                  <td className="fw-medium">
                    {txn.latestBalance
                      ? `₹${Math.abs(txn.latestBalance).toLocaleString()}`
                      : "N/A"}
                  </td>
                )}

                <td className="fw-medium">{formatted(txn.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <CustomPagination
          rowsPerPage={perPage}
          rowCount={totalRows}
          onChangePage={handlePageChange}
          currentPage={currentPage}
        />
        {loading && <div className="text-center">Loading...</div>}
        {/* <div class="pagination">
          <a href="#">&laquo; Previous</a>
          <a href="#" class="active">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">Next &raquo;</a>
        </div> */}
      </div>
    </div>
  );
};

export default TransactionsTable;
