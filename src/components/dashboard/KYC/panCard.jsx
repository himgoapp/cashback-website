import React, { useState, useEffect, useContext } from "react";
import Navbtn from "../../common/button/navbtn/navbtn";
import { TextField } from "./address";
import styles from "./address.module.css";
import { addPanCard } from "../../../servicefile/kycservice";
import { toast } from "react-toastify";
import { UserContext } from "../../../App";

function PanCard({ userKyc, setLevel, setStepReload }) {
	const { userData } = useContext(UserContext);
	const [edit, setEdit] = useState(false);
	const [panCardNo, setPanCardNo] = useState("");

	const panCardAdd = async () => {
		if (!userData || !userData._id) return;

		if (!panCardNo) {
			toast.error(`PanCard is a required field.`);
		} else {
			const res = await addPanCard(userData._id, panCardNo);
			if (res && res.message === "PanCard Added!") {
				localStorage.setItem("transactionInfo", "true");
				setStepReload(true);
				toast.success(`${res.message}`);
			}
		}
	};

	useEffect(() => {
		if (userKyc.panCardNo) {
			setPanCardNo(userKyc.panCardNo);
		}
	}, []);

	return (
		<>
			<div className={styles.AddressDetailsContainer}>
				<div className={styles.Text}>
					PAN Card
					<div className={styles.edit} onClick={() => setEdit(true)}>
						{editIcon}
						<span style={{ color: "#3968EB" }}>Edit</span>
					</div>
				</div>
				<div className={styles.AddressDetailsForm}>
					<div className={styles.AddressDetailsContent}>
						<div className={styles.InputRow}>
							<TextField
								label='PAN Card Number'
								placeholder='GSVD73YB3B'
								currentValue={panCardNo}
								setValue={setPanCardNo}
								maxLength={10}
								onInput={(e) => {
									e.target.value = e.target.value.toUpperCase();
									if (e.target.value.length > 10) {
										e.target.value = e.target.value.slice(0, 10);
									}
								}}
							/>
						</div>
					</div>
					<div className={styles.FormFooter}>
						<div className={styles.Divider}></div>
						<div className={styles.Content}>
							<div
								className={styles.Actions}
								onClick={() => {
									panCardAdd();
								}}
							>
								<Navbtn
									text='Save changes'
									variant={"primary"}
									size={"small"}
									showIcon={false}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PanCard;
const editIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='14'
		height='14'
		viewBox='0 0 14 14'
		fill='none'
	>
		<g clipPath='url(#clip0_72_49822)'>
			<path
				d='M10.5007 5.83337L8.16733 3.50003M1.45898 12.5417L3.4332 12.3223C3.6744 12.2955 3.795 12.2821 3.90773 12.2457C4.00774 12.2133 4.10291 12.1675 4.19067 12.1097C4.28958 12.0444 4.37539 11.9586 4.54699 11.787L12.2507 4.08337C12.895 3.43904 12.895 2.39437 12.2507 1.75003C11.6063 1.1057 10.5617 1.1057 9.91733 1.75003L2.21366 9.45369C2.04205 9.6253 1.95625 9.7111 1.89102 9.81002C1.83315 9.89777 1.78741 9.99295 1.75503 10.093C1.71854 10.2057 1.70514 10.3263 1.67834 10.5675L1.45898 12.5417Z'
				stroke='#175CD3'
				strokeWidth='1.16667'
				strokeLinecap='round'
				stroke-linejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_72_49822'>
				<rect width='14' height='14' fill='white' />
			</clipPath>
		</defs>
	</svg>
);
