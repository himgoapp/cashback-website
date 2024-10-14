import React, { useState, useEffect } from "react";
import {
	getProductsSimple,
	submitAccountId,
} from "../../../servicefile/productservice";
import styles from "./newPoker.module.css"; // Import your CSS module
import Navbtn from "../../common/button/navbtn/navbtn";
import { ToastContainer, toast } from "react-toastify";
import pokerIdIcon from "../../../assets/pokerIdIcon.png";

const staticAccountData = [
	{
		id: 1,
		name: "Phoenix Baker",
		username: "phoenixbaker",
	},
	{
		id: 2,
		name: "Micheal Scott",
		username: "miche",
	},
	{
		id: 3,
		name: "Lana Steiner",
		username: "lana",
	},
	{
		id: 4,
		name: "Olivia Rhye",
		username: "olivia",
	},
	{
		id: 5,
		name: "Dwight",
		username: "dwight",
	},
];

const NewPoker = ({ setGetInfos }) => {
	const [allProductIds, setAllProductIds] = useState([]);
	const [productId, setProductId] = useState("");
	const [product, setProduct] = useState({});
	const [referenceId, setReferenceId] = useState("");
	const [referralCode, setReferralCode] = useState("");
	const [showPokerMenu, setShowPokerMenu] = useState(false);
	const [showAccountMenu, setShowAccountMenu] = useState(false);
	const [loading, setLoading] = useState(false);

	const getProductsInfo = async () => {
		const res = await getProductsSimple();
		let mappedValue = res.map((item) => {
			return { value: item._id, label: item.name };
		});
		setAllProductIds(mappedValue);
	};

	const onSubmitFxn = async () => {
		if (productId && referenceId) {
			setLoading(true);
			let data = await submitAccountId(productId, referenceId, referralCode);
			if (data && data.message) {
				toast.success(`${data.message}`, {
					autoClose: 5000,
				});
			} else {
				toast.error(`${data.message}`, {
					autoClose: 5000,
				});
			}
			setGetInfos(true);
			setProductId("");
			setReferenceId("");
			setReferralCode("");
			setLoading(false);
		} else {
			toast.warn("Poker Site and Account id is a required field!");
		}
	};

	const onPokerIdChange = (poker) => {
		setProductId(poker.value);
		setProduct(poker);
		setShowPokerMenu(false);
	};

	useEffect(() => {
		getProductsInfo();
		// eslint-disable-next-line
	}, []);

	return (
		<div className={styles.NewPokerContainer}>
			<div className={styles.NewPokerContent}>
				<div className={styles.NewPokerHead}>Add New Poker ID</div>
				<div className={styles.NewPokerCreate}>
					<div className={styles.NewPokerCreate}>
						<div className={styles.NewPokerSelect}>
							{/* <div className={styles.SelectContent}>
              <div className={styles.SelectWrapper}></div>
            </div> */}

							{/* INFO: This will work as a custom select menu */}
							<div className={styles.SelectContent}>
								{productId ? (
									<button
										className={styles.SelectBtn}
										onClick={() => setShowPokerMenu(!showPokerMenu)}
									>
										<div className={styles.SelectedValue}>
											<img src={pokerIdIcon} alt='' />
											<div>{product.label}</div>
										</div>
										<div>
											<svg
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z'
													fill='#333333'
												/>
											</svg>
										</div>
									</button>
								) : (
									<button
										className={styles.SelectBtn}
										onClick={() => setShowPokerMenu(!showPokerMenu)}
									>
										<div>Select Poker Site</div>
										<div>
											<svg
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z'
													fill='#333333'
												/>
											</svg>
										</div>
									</button>
								)}
								{showPokerMenu && (
									<div className={styles.SelectMenu}>
										{allProductIds &&
											allProductIds.length > 0 &&
											allProductIds.map((item, index) => {
												return (
													<button
														onClick={() => {
															onPokerIdChange(item);
														}}
														className={
															item.value === productId ? styles.active : ""
														}
														key={index}
													>
														<img src={pokerIdIcon} alt='' />
														{item.label}
													</button>
												);
											})}
									</div>
								)}
							</div>
							{/* <select
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                className={styles.SelectContent + " " + styles.SelectWrapper}
                placeholder="Select Poker Site"
              >
                {" "}
                <option value="" disabled={true}>
                  Please select!
                </option>
                {allProductIds &&
                  allProductIds.length > 0 &&
                  allProductIds.map((item, index) => {
                    return <option value={item.value}>{item.label}</option>;
                  })}
              </select> */}
						</div>

						{/* INFO: This will work as a custom autocomplete feature */}
						<div className={styles.SelectContent}>
							<div className={styles.NewPokerAccId}>
								<input
									value={referenceId}
									onClick={() => setShowAccountMenu(true)}
									onChange={(e) => setReferenceId(e.target.value)}
									type='text'
									className={styles.SelectContent + " " + styles.SelectWrapper}
									placeholder='Enter Account id*'
								/>
							</div>
							{showAccountMenu && (
								<div className={styles.SelectMenu}>
									{staticAccountData &&
										staticAccountData.length > 0 &&
										staticAccountData.map((item, index) => {
											return (
												<button
													onClick={() => {
														setReferenceId(item.username);
														setShowAccountMenu(false);
													}}
												>
													<UserIcon />
													{item.name}
													<span className='light-text'>@{item.username}</span>
												</button>
											);
										})}
								</div>
							)}
						</div>
					</div>
					{/* <div className={styles.SubmitBtn}></div> */}{" "}
					{/* <div
						className={styles.submitbtn_container}
						onClick={() => {
							onSubmitFxn();
						}}
					> */}
					<Navbtn
						text='Submit'
						bg='#3968EB'
						color='white'
						showIcon={false}
						// style={{ width: "100%" }}
						onClick={() => {
							onSubmitFxn();
						}}
						loading={loading}
					/>
					{/* </div> */}
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default NewPoker;

export const UserIcon = () => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' width={16}>
		<path d='M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z' />
	</svg>
);
