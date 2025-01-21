import React, { useContext } from "react";
import styles from "./dashHomeHeader.module.css";
import bellIcon from "../../../assets/header_nav_btn2.png";
import { UserContext } from "../../../App";
import Navbtn from "../../common/button/navbtn/navbtn";
import { useNavigate } from "react-router-dom";
import { LogoutIcon } from "../../../assets/vectors";
import { color } from "framer-motion";

const DashboardHomeHeader = ({ title, data }) => {
	const {
		// showSidebar,
		setShowSidebar,
		showWalletWithdraw,
		setShowWalletWithdraw,
		showNotifications,
		setShowNotifications,
	} = useContext(UserContext);
	const navigate = useNavigate();
	const onLogout = () => {
		localStorage.clear();
		window.location.reload();
	};
	return (
		<div className={styles.HomeHeader}>
			<div className={styles.HeaderContainer}>
				<div className={styles.HeaderContent}>
					<div className={styles.HeaderContentWrapper}>
						{/*  */}
						<div className={styles.HeaderTexts}>
							<div className={styles.HeaderHead}>{title}</div>
						</div>
						{/*  */}
						<div className={styles.MenuAndLogo}>
							<div className={styles.Menu} onClick={() => setShowSidebar(true)}>
								{menuIcon}
							</div>
							<div className={styles.Logo}>{logoIcon}</div>
						</div>
						{/*  */}
						<div className={styles.HeaderActions}>
							<div
								className={styles.HeaderNavBtn}
								onClick={() => setShowWalletWithdraw(!showWalletWithdraw)}
							>
								<div className={styles.HeaderBtnIcon}>
									<div className={styles.Icon}>{walletIcon}</div>
								</div>
								<div className={styles.HeaderBtnText}>
									₹{data && data.wallet_balance ? data.wallet_balance : "0.00"}
								</div>
							
							</div>

							<div
								className={styles.HeaderNavBtn2}
								onClick={() => setShowNotifications(!showNotifications)}
							>
								<img src={bellIcon} alt='' />
							</div>
							<div>
								{/* <button className={styles.Button} onClick={() => onLogout()}>
							<LogoutIcon />
							
						</button> */}
						{/* <Navbtn
									text='Log out'
									variant={"outlined"}
									size={"small"}
									onClick={() => {
										onLogout();
									}}
								/> */}
						</div>
						</div>
					</div>
					<div className={styles.HeaderDivider}></div>
				</div>
			</div>
		</div>
	);
};

export default DashboardHomeHeader;
const logoIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='34'
		height='44'
		viewBox='0 0 34 44'
		fill='none'
	>
		<path
			d='M31.1358 23.1382C32.1627 20.9728 32.6929 18.603 32.6874 16.2038C32.6874 7.27353 25.4711 0 16.584 0C7.69696 0 0.46975 7.27353 0.46975 16.2038C0.467305 18.6078 1.00127 20.9818 2.03226 23.1504C0.710917 24.8544 -0.00461603 26.9549 2.24101e-05 29.1162C0.0022807 31.7205 1.03228 34.2174 2.86356 36.0578C4.69484 37.8982 7.17749 38.9315 9.7657 38.9306C11.3647 38.9306 13.5527 38.3967 14.8767 37.7061C14.839 37.8285 14.7915 37.9608 14.7441 38.093C14.729 38.1436 14.7086 38.1925 14.6832 38.2387C14.4647 38.7854 14.1992 39.3119 13.8898 39.8122C13.8533 39.8857 13.8058 39.9567 13.7572 40.0424C12.8526 41.5487 11.6976 42.8873 10.3425 44H22.8255C21.4758 42.8814 20.3213 41.5438 19.4097 40.0424C19.3622 39.9567 19.3136 39.8857 19.2783 39.8122C18.969 39.3116 18.7031 38.7852 18.4836 38.2387C18.4686 38.1881 18.4482 38.1392 18.4228 38.093C18.3765 37.9608 18.3279 37.8273 18.2913 37.7061C19.6299 38.3955 21.8204 38.9306 23.4145 38.9306C25.2377 38.9354 27.0256 38.4251 28.5746 37.4576C30.1236 36.4901 31.3715 35.1044 32.1761 33.4582C32.9808 31.812 33.3099 29.9715 33.126 28.1463C32.9421 26.3212 32.2525 24.5846 31.1358 23.1345V23.1382ZM21.5016 1.35552C24.6114 2.40269 27.3138 4.41018 29.224 7.09231L25.3993 9.85111C24.068 7.97804 22.1824 6.57619 20.0121 5.84577L21.5016 1.35552ZM11.905 1.27225L13.3118 5.78577C11.0167 6.52047 7.86489 9.70417 7.86489 9.70417L4.09248 6.88782C6.04456 4.2354 8.77849 2.27027 11.905 1.27225ZM18.3035 31.7782C18.2392 31.7764 18.1749 31.7801 18.1112 31.7893C17.8876 31.8182 17.6625 31.8346 17.4371 31.8382C17.3618 31.8494 17.2856 31.8539 17.2095 31.8517C16.9917 31.8627 16.7885 31.875 16.584 31.875C16.3796 31.875 16.1861 31.8627 15.9829 31.8517C15.8983 31.8539 15.8137 31.8494 15.7298 31.8382C15.5088 31.8346 15.2881 31.8182 15.069 31.7893C14.9838 31.7782 14.9011 31.7783 14.8256 31.766C14.3693 31.717 13.9105 31.6435 13.4675 31.5603C13.4606 31.5545 13.4522 31.5506 13.4432 31.5493C13.1998 31.5003 12.9735 31.4513 12.7325 31.3913C12.7 31.3815 12.6683 31.3692 12.6376 31.3546C5.96408 29.5925 1.02222 23.47 1.02222 16.2038V16.0471L5.74869 16.0961V16.1793C5.74627 17.3397 5.93333 18.4926 6.30238 19.592C13.8058 13.8675 16.584 6.42618 16.584 6.42618C16.584 6.42618 19.3622 13.8675 26.8657 19.592C27.2217 18.5185 27.4081 17.3955 27.4182 16.2638L32.1446 16.3128C32.0862 24.3125 26.0345 30.9064 18.3035 31.7782Z'
			fill='#3968EB'
		/>
	</svg>
);
const menuIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
	>
		<path
			d='M3 12H21M3 6H21M3 18H21'
			stroke='#667085'
			strokeWidth='2'
			strokeLinecap='round'
			stroke-linejoin='round'
		/>
	</svg>
);
const walletIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='20'
		height='20'
		viewBox='0 0 20 20'
		fill='none'
	>
		<path
			d='M13.3333 6.66677V3.75065C13.3333 3.05753 13.3333 2.71097 13.1873 2.498C13.0598 2.31192 12.8622 2.18551 12.6398 2.14767C12.3852 2.10435 12.0706 2.24958 11.4413 2.54003L4.04918 5.95176C3.48792 6.2108 3.20729 6.34032 3.00175 6.5412C2.82005 6.71878 2.68135 6.93556 2.59625 7.17496C2.5 7.44576 2.5 7.75483 2.5 8.37299V12.5001M13.75 12.0834H13.7583M2.5 9.33343L2.5 14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3184C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3184C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V9.33343C17.5 8.40001 17.5 7.9333 17.3183 7.57678C17.1586 7.26318 16.9036 7.00821 16.59 6.84842C16.2335 6.66677 15.7668 6.66677 14.8333 6.66677L5.16667 6.66677C4.23325 6.66677 3.76654 6.66677 3.41002 6.84842C3.09641 7.00821 2.84144 7.26318 2.68166 7.57678C2.5 7.9333 2.5 8.40001 2.5 9.33343ZM14.1667 12.0834C14.1667 12.3136 13.9801 12.5001 13.75 12.5001C13.5199 12.5001 13.3333 12.3136 13.3333 12.0834C13.3333 11.8533 13.5199 11.6668 13.75 11.6668C13.9801 11.6668 14.1667 11.8533 14.1667 12.0834Z'
			stroke='#475467'
			strokeWidth='1.66667'
			strokeLinecap='round'
			stroke-linejoin='round'
		/>
	</svg>
);
