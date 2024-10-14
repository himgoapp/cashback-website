import React, { useEffect, useState } from "react";
import styles from "./quickStart.module.css";
import Navbtn from "../../common/button/navbtn/navbtn";
import checkicon from "../../../assets/checkIcon.png";
import verifiedIcon from "../../../assets/verified.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const HomeQuickStart = ({ data }) => {
	const [hideGuide, setHideGuide] = useState(false);

	const hideGuideFxn = () => {
		setHideGuide(!hideGuide);
	};

	return (
		<>
			{!hideGuide && (
				<div className={styles.HomeQuickStart}>
					<div className={styles.QuickStartContent}>
						<div className={styles.Header}>
							<div className={styles.Head}>Quick Start Guide</div>
							<div className={styles.Button}>
								<button
									onClick={() => {
										hideGuideFxn();
									}}
									className={styles.Text}
								>
									Skip Guide
									<div className={styles.ArrowLeft}>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='20'
											height='20'
											viewBox='0 0 20 20'
											fill='none'
										>
											<path
												d='M4.16732 10.0001H15.834M15.834 10.0001L10.0007 15.8334M15.834 10.0001L10.0007 4.16675'
												stroke='#3968EB'
												strokeWidth='1.66667'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</div>
								</button>
							</div>
						</div>
						{/* guide one : link poker */}
						<div className={styles.Guid}>
							<div className={styles.GuidContent}>
								<div className={styles.Icons_container}>
									<div className={styles.Icons}>
										<div className={styles.Checkicon}>
											<img src={checkicon} alt='' />
										</div>
										<div className={styles.Approvalicon}>{approvedIcon}</div>
									</div>
									<div className={styles.TextContent}>
										<div className={styles.Head}>Link your Poker ID</div>
									</div>
								</div>
								<Link
									to='/dashboard/pokerid'
									style={{ color: "white", textDecoration: "none" }}
								>
									<Navbtn
										text='Link Poker Id'
										bg='#3968EB'
										color='white'
										showIcon={true}
										divOrButton='div'
									/>
								</Link>
							</div>
						</div>
						{/* guide two : complete KYC */}
						<div className={styles.Guid}>
							<div className={styles.GuidContent}>
								<div className={styles.Icons_container}>
									<div className={styles.Icons}>
										<CheckIcon
											done={data?.userKyc?.statusValue === "Completed"}
										/>
										<div className={styles.Checkicon}>
											<img src={verifiedIcon} alt='' />
										</div>
									</div>
									<div className={styles.TextContent}>
										<div className={styles.Head}>Complete KYC</div>
										<div className={styles.Subhead}>
											Complete your KYC and get your profile complete
										</div>
									</div>
								</div>
								<Link
									to='/dashboard/kyc'
									style={{ color: "white", textDecoration: "none" }}
								>
									<Navbtn
										text='Go to KYC Verification'
										bg='transparent'
										color='#3968EB'
										showIcon={true}
										iconColor='#3968EB'
										style={{
											borderRadius: "2.4375rem",
											border: "2px solid #3968EB",
											display: "flex",
											justifyContent: "center",
											// width: "100%",
										}}
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default HomeQuickStart;

export const CheckIcon = ({ done }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
		>
			<path
				d='M9.99935 16.0001L13.9993 20.0001L21.9993 12.0001M29.3327 16.0001C29.3327 23.3639 23.3631 29.3334 15.9993 29.3334C8.63555 29.3334 2.66602 23.3639 2.66602 16.0001C2.66602 8.63628 8.63555 2.66675 15.9993 2.66675C23.3631 2.66675 29.3327 8.63628 29.3327 16.0001Z'
				stroke={done ? "#11C15B" : "#EAECF0"}
				strokeWidth='2.67'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};
export const approvedIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='32'
		height='32'
		viewBox='0 0 32 32'
		fill='none'
	>
		<g clipPath='url(#clip0_72_48508)'>
			<path
				d='M20.4622 0.00195422H4.09245C1.83388 0.000319496 0.00163582 1.82991 1.0946e-06 4.08848V4.09446V27.9051C-0.00163363 30.1636 1.82796 31.9959 4.08647 31.9975H4.09245H20.4622C20.8806 31.9998 21.2968 31.9396 21.6974 31.8189C22.7517 31.4761 23.6251 30.726 24.1231 29.7355C23.8999 29.7504 23.6767 29.7653 23.4386 29.7653C19.9455 29.7653 17.1139 26.9336 17.1139 23.4406C17.1139 19.9476 19.9455 17.1159 23.4386 17.1159C23.8132 17.1122 24.1872 17.1472 24.5547 17.22V4.0944C24.5563 1.83583 22.7267 0.00358894 20.4682 0.00195422C20.4662 0.00195422 20.4642 0.00195422 20.4622 0.00195422ZM7.06877 7.44277H17.4859C18.1023 7.44277 18.602 7.94248 18.602 8.55889C18.602 9.17529 18.1023 9.67501 17.4859 9.67501H7.06877C6.45237 9.67501 5.95265 9.17529 5.95265 8.55889C5.95265 7.94248 6.45237 7.44277 7.06877 7.44277ZM7.06877 13.3954H17.4859C18.1023 13.3954 18.602 13.8951 18.602 14.5115C18.602 15.1279 18.1023 15.6277 17.4859 15.6277H7.06877C6.45237 15.6277 5.95265 15.1279 5.95265 14.5115C5.95265 13.8951 6.45237 13.3954 7.06877 13.3954ZM11.5333 21.5803H7.06877C6.45237 21.5803 5.95265 21.0806 5.95265 20.4642C5.95265 19.8478 6.45237 19.3481 7.06877 19.3481H11.5333C12.1497 19.3481 12.6494 19.8478 12.6494 20.4642C12.6494 21.0806 12.1497 21.5803 11.5333 21.5803Z'
				fill='#3A69F5'
			/>
			<path
				d='M22.447 26.5405C22.1509 26.5413 21.8668 26.4233 21.6583 26.2131L19.6746 24.2294C19.2543 23.7785 19.2793 23.0722 19.7302 22.652C20.1589 22.2526 20.8234 22.2526 21.252 22.652L22.4425 23.8425L25.6227 20.6653C26.0737 20.245 26.78 20.27 27.2002 20.721C27.5996 21.1496 27.5996 21.8141 27.2002 22.2427L23.2313 26.2101C23.0241 26.4201 22.7419 26.5389 22.447 26.5405Z'
				fill='#3A69F5'
			/>
			<path
				d='M24.554 14.9731C24.1849 14.9138 23.8118 14.8839 23.4379 14.8838C18.7121 14.8826 14.88 18.7128 14.8789 23.4386C14.8779 27.495 17.7251 30.9947 21.6968 31.8191C22.2694 31.9389 22.8529 31.9987 23.4379 31.9977C28.1588 32.0051 31.9919 28.184 31.9994 23.4631C32.0061 19.1633 28.8179 15.5278 24.554 14.9731ZM24.1225 29.7356C23.8993 29.7505 23.676 29.7654 23.4379 29.7654C19.9449 29.7654 17.1132 26.9337 17.1132 23.4407C17.1132 19.9477 19.9449 17.116 23.4379 17.116C23.8126 17.1124 24.1866 17.1473 24.554 17.2202C27.9929 17.8376 30.2801 21.1259 29.6627 24.5648C29.1669 27.3262 26.9115 29.4313 24.1225 29.7356Z'
				fill='#3A69F5'
			/>
		</g>
		<defs>
			<clipPath id='clip0_72_48508'>
				<rect width='32' height='32' fill='white' />
			</clipPath>
		</defs>
	</svg>
);
