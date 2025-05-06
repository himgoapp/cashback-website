import React, { useContext, useState } from "react";
import Navbtn from "../../common/button/navbtn/navbtn";
import styles from "./address.module.css";
import { TextField } from "./address";
import { addBankDetails } from "../../../servicefile/kycservice";
import { toast } from "react-toastify";
import { UserContext } from "../../../App";

function BankAccDetails({ setStepReload }) {
	const { userData } = useContext(UserContext);
	const [account_number, setAccountNumber] = useState("");
	const [bank_name, setBankName] = useState("");
	const [ifsc_code, setIfscCode] = useState("");
	const [validate, setValidate] = useState("");
	const [errors, setErrors] = useState({});

	const isFormValid =
		account_number &&
		bank_name &&
		ifsc_code &&
		validate &&
		account_number === validate;

	const addBankDetailsData = async () => {
		if (!userData || !userData._id) return;

		if (!account_number || !bank_name || !ifsc_code || !validate) {
			// toast.error(`All fields are required for saving address information!`);
		} else if (account_number !== validate) {
			// toast.error(
			// 	`Account Number value is not same in Account Number and Verify Account Number fields!`
			// );
		} else if (
			account_number &&
			bank_name &&
			ifsc_code &&
			validate &&
			account_number === validate
		) {
			const res = await addBankDetails(
				userData._id,
				account_number,
				bank_name,
				ifsc_code
			);
			if (res && res.message === "Bank Saved Successfully!") {
				localStorage.setItem("transactionInfo", "true");
				// toast.success(`Bank information saved!`);
				setStepReload(true);
			}
		}
	};

	return (
		<>
			<div className={styles.AddressDetailsContainer}>
				<div className={styles.Text} style={{ fontFamily: "Futura" }}>Bank Account Details</div>
				<div className={styles.AddressDetailsForm}>
					<div className={styles.AddressDetailsContent}>
						<div className={styles.InputRow}>
							<TextField
								label="Account Number"
								placeholder="*********************"
								type="password"
								value={account_number}
								onChange={(e) => {
									const value = e.target.value;
									if (/^\d*$/.test(value) && value.length <= 18) {
										setAccountNumber(value);
									}
								}}
								inputProps={{
									minLength: 9,
									maxLength: 18,
									inputMode: 'numeric',
									pattern: '[0-9]*'
								}}
								required
							/>

							<TextField
								label="Verify Account Number"
								placeholder="83832993803748"
								type="text"
								value={validate}
								onChange={(e) => {
									const value = e.target.value;
									if (/^\d*$/.test(value) && value.length <= 18) {
										setValidate(value);
									}
								}}
								inputProps={{
									minLength: 9,
									maxLength: 18,
									inputMode: 'numeric',
									pattern: '[0-9]*'
								}}
								required
							/>

						</div>
						<div className={styles.InputRow}>
							{" "}
							<TextField
								label='Bank Name'
								placeholder='ICICI Bank'
								value={bank_name}
								setValue={setBankName}
								required
							/>
							<TextField
								label='IFSC Code'
								placeholder='ICICI22881'
								value={ifsc_code}
								setValue={setIfscCode}
								required
							/>
						</div>
					</div>
					<div className={styles.FormFooter}>
						<div className={styles.Divider}></div>
						<div className={styles.Content}>
							<div
								className={styles.Actions}
								onClick={() => {
									addBankDetailsData();
								}}
							>
								<Navbtn
									text='Save changes'
									variant='primary'
									size='small'
									showIcon={false}
									disabled={!isFormValid}
								/>

							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default BankAccDetails;
