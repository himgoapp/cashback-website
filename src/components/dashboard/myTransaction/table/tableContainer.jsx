// TableContent.js
import React, { useState, useEffect, useContext } from "react";
import styles from "./tableContainer.module.css";
import { alltransactions } from "../../../../servicefile/transactionservice";
import moment from "moment";
import { UserContext } from "../../../../App";
import { DataGrid } from "@mui/x-data-grid";

const dummyTransactionData = [
	{
		transaction_hash: "0x1234567890",
		createdAt: "2021-09-01T12:00:00.000Z",
		actualAmount: 1000,
		rackbackcut: 100,
		status: "Success",
	},
];

// rackbackcut for commission

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
		headerName: "Closing Balance",
		flex: 1,
		minWidth: 120,
		renderCell: (params) => {
			return `₹${params.row.actualAmount}`;
		},
		headerClassName: styles.Header,
	},
	{
		field: "actualAmount_2",
		headerName: "Amount",
		flex: 1,
		minWidth: 120,
		renderCell: (params) => {
			return `-₹${params.row.actualAmount}`;
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
					<div
						className={styles.Text}
						style={
							rowStatus === "Success"
								? { color: "#027A48" }
								: { color: "#B54708" }
						}
					>
						{rowStatus}
					</div>
				</div>
			);
		},
	},
];

const TableContainer = ({transactionType}) => {
	const { userData } = useContext(UserContext);
	const [products, setProducts] = useState([]);
	const [page , setPage] =useState(0)

	const getTransactions = async () => {
		if (!userData || !userData._id) return;
		const res = await alltransactions(userData._id , transactionType, page );
		setProducts(res.transactionsInfo);
	};

	useEffect(() => {
		getTransactions();
	}, [transactionType, page]);

	return (
		<div className={styles.TransactionTableContainer}>
			<DataGrid
				rows={products}
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
				className='colored_rows'
				style={{
					width: "100%",
				}}
			/>
		</div>
	);
};

export default TableContainer;
