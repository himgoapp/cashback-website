import React, { useContext } from "react";
import styles from "./wallet.module.css";
import Navbtn from "../../common/button/navbtn/navbtn";
import { UserContext } from "../../../App";

const WalletContainer = () => {
	const { setShowWalletWithdraw } = useContext(UserContext);
	return (
		<div className={styles.WalletContainer}>
			<div
				className={styles.WalletHeader}
				onClick={() => setShowWalletWithdraw(false)}
			>
				{backArrow} <span>Wallet</span>
			</div>
			<div className={styles.WalletContent}>
				<div className={styles.Balance}>
					<div className={styles.HeadText}>Wallet</div>
					<div className={styles.Amount}>₹1,280</div>
				</div>

				<div className={styles.WithdrawBtn}>
					<Navbtn
						text='Withdraw'
						variant={"primary"}
						size={"small"}
						showIcon={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default WalletContainer;
const backArrow = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
	>
		<path
			d='M15 18L9 12L15 6'
			stroke='#667085'
			strokeWidth='2'
			strokeLinecap='round'
			stroke-linejoin='round'
		/>
	</svg>
);
