import React, { useState, useContext, useEffect, useRef } from "react";
import Navbtn from "../../common/button/navbtn/navBtnTwo";
import styles from "./address.module.css";
import { addAddressProof } from "../../../servicefile/kycservice";
import { toast } from "react-toastify";
import { UserContext } from "../../../App";
import { color } from "framer-motion";

const SelectField = ({ label, options, placeholder, currentValue, setValue }) => {
  return (
    <div className={styles.SelectInput}>
      <div className={styles.SelectInputContent}>
        <div className={styles.InputLabel} style={{ fontFamily: '"Roboto",sans-serif' }}>{label}</div>
        <div className={styles.InputWrapper}>
          <select
            className={styles.SelectTextWrapper}
            value={currentValue}
            onChange={(e) => setValue(e.target.value)}
            style={{ fontFamily: '"Roboto",sans-serif' }}
          >
            <option value="" style={{ fontFamily: '"Roboto",sans-serif' }}>{placeholder}</option>
            {options.map((option, index) => (
              <option style={{ fontFamily: '"Roboto",sans-serif' }} key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {/* <div className={styles.DropdownIcon}>
            <div className={styles.Icon}>{dropdownIcon}</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const documentMaxLengths = {
  aadhaar_card: 12,
  driving_license: 16,
  passport: 9,
  voter_id: 10,
};

export const TextField = ({
  label,
  placeholder,
  currentValue,
  setValue,
  type,
  ...props

}) => {
  return (
    <div className={styles.TextInput}>
      <div className={styles.TextInputWithLabel}>
        <div className={styles.TextLabel} style={{ fontFamily: '"Roboto",sans-serif' }}> {label}
          <span className={styles.requiredAsterisk}>*</span></div>
        <input
          type={type ? type : "text"}
          className={styles.TextFieldInput}
          placeholder={placeholder}
          value={currentValue}
          onChange={(e) => setValue(e.target.value)}
          {...props}
          style={{ fontFamily: '"Roboto",sans-serif' }}
        />
      </div>
    </div>
  );
};
function AddressDetail({ setStepReload }) {
  const { userData, userKyc } = useContext(UserContext);
  const imageRef = useRef(null);
  const [file, handleFile] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressProofType, setAddressProofType] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [proofState, setProofState] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const isFormValid = file && addressProofType && documentNumber;

  const options = [
    { value: 'aadhaar_card', label: 'Aadhaar Card' },
    { value: 'passport', label: 'Passport' },
    { value: 'voter_id', label: 'Voter ID' },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option.value);
    console.log(option)
    setAddressProofType(option.value);
    setIsOpen(false);
  };
  
  const handleClick = (event) => {
    imageRef.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };

  const addAddressData = async () => {
    if (!userData || !userData._id) return;

    if (
      !file ||

      !addressProofType ||
      !documentNumber
    ) {
      // toast.error(`All fields are required for saving address information!`);
    } else {
      const res = await addAddressProof(
        userData._id,
        file,
        addressProofType,
        documentNumber,
      );
      if (res && res.message === "success") {
        localStorage.setItem("transactionInfo", "true");
        // toast.success(`Address information saved!`);
        setStepReload(true);
      }
    }
  };

  useEffect(() => {
    if (userKyc) {
      if (userKyc.firstName) setFirstName(userKyc.firstName);
      if (userKyc.lastName) setLastName(userKyc.lastName);
      if (userKyc.addressProofType)
        setAddressProofType(userKyc.addressProofType);
      if (userKyc.documentNumber) setDocumentNumber(userKyc.documentNumber);
      if (userKyc.proofState) setProofState(userKyc.proofState);
    }
  }, []);

  return (
    <>
      <div className={styles.AddressDetailsContainer}>
        <div className={styles.Text} style={{ fontFamily: 'Futura' }}>Address Details</div>
        <div className={styles.AddressDetailsForm}>
          <div className={styles.AddressDetailsContent}>
            <div className={styles.InputRow}>
              {/* <TextField
                label="First name"
                placeholder="Olivia"
                currentValue={firstName}
                setValue={setFirstName}
                required
              />
              <TextField
                label="Last name"
                placeholder="Rhye"
                currentValue={lastName}
                setValue={setLastName}
                required
              /> */}
            </div>
            <div className={styles.InputRow}>
              {/* <SelectField
								label='Address Proof Document Type'
								placeholder='Address Proof'
								currentValue={addressProofType}
								setValue={setAddressProofType}
							/> */}
              {/* <SelectField
                label="Address Proof Document Type"
                // placeholder="Address Proof..."
                currentValue={addressProofType}
                setValue={setAddressProofType}
                options={[
                  { value: "aadhaar_card", label: "Aaddhar Card" },
                  { value: "passport", label: "Passport" },
                  { value: "voter_id", label: "Voter ID" },
                ]}
                required
              /> */}
              <div className={styles.formGroup}>
                <label htmlFor="addressProofType" className={styles.formLabel}>
                  Address Proof Document Type <span className={styles.requiredAsterisk}>*</span>
                </label>

                <div className={styles.dropdownContainer}>
                  <div
                    className={styles.dropdownHeader}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {options.find(o => o.value === selectedOption)?.label || 'Select Document Type'}
                    <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
                  </div>

                  {isOpen && (
                    <div className={styles.dropdownList}>
                      {options.map((option) => (
                        <div
                          key={option.value}
                          className={styles.dropdownItem}
                          onClick={() => handleSelect(option)}
                          
                        >
                          {option.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <TextField
                label="Address Proof Document Number"
                // placeholder="GSVD73YB3B"
                currentValue={documentNumber}
                setValue={setDocumentNumber}
                maxLength={documentMaxLengths[addressProofType] || 20}
                required
              />

            </div>
            {/* <div className={styles.InputRow}>
              <TextField
                label="State"
                placeholder="Bihar"
                currentValue={proofState}
                setValue={setProofState}
                onInput={(e) => {
                  // allow only alphabets
                  let regex = /^[a-zA-Z\s]*$/;
                  if (!regex.test(e.target.value)) {
                    e.target.value = e.target.value.slice(0, -1);
                  }
                }}
                required
              />
            </div> */}
            <div className={styles.UploadArea}>
              <div className={styles.UploadLabel}>
                Upload Address Proof Document<span className={styles.requiredAsterisk}>*</span>
              </div>
              <div className={styles.FileUpload}>
                <div className={styles.FileUploadBase}>
                  <div className={styles.FileUploadContent}>
                    <div className={styles.Icon}>{uploadSVG}</div>
                    <div className={styles.UploadTextContainer}>
                      <div className={styles.Action}>
                        <input
                          type="file"
                          name="image"
                          id="image"
                          ref={imageRef}
                          style={{ display: "none" }}
                          accept=".jpg, .jpeg"
                          onChange={handleChange}
                          required
                        />
                        <Navbtn
                          text="Click to upload"
                          variant={"primary"}
                          size={"small"}
                          style={{
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            background: "#0052cc ",
                            color: "white",
                            cursor: "pointer",
                            borderRadius: "10px",
                            fontWeight: "500"

                          }}
                          onClickNav={() => {
                            handleClick();
                          }}
                        />
                        <div className={styles.Navbtn}>
                          <div className={styles.Text}></div>
                        </div>
                        {file && file.name && (
                          <div className={styles.ActionText} style={{ fontFamily: '"Roboto",sans-serif' }}>
                            Selected File : {file.name}
                          </div>
                        )}
                      </div>
                      <div className={styles.ActionSubtext}>
                        JPG or JPEG (Max Size 2MB)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.FormFooter}>
            <div className={styles.Divider}></div>
            <div className={styles.Content}>
              <div className={styles.Actions}>
                {/* <Navbtn
									text='Save changes'
									variant={"primary"}
									size={"small"}
									showIcon={false}
									onClickNav={() => {
										addAddressData();
									}}
								/> */}
                <button
                  className={`primary_button ${styles.btn_container}`}
                  onClick={() => { addAddressData(); }}
                  disabled={!isFormValid}
                  style={{
                    background: !isFormValid ? "#ccc" : "#0052cc",
                    cursor: !isFormValid ? "not-allowed" : "pointer"
                  }}
                >
                  Save changes
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddressDetail;
const dropdownIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="#667085"
      strokeWidth="1.66667"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const uploadSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <g clipPath="url(#clip0_113_5324)">
      <path
        d="M9.99935 6.66663V9.99996M9.99935 13.3333H10.0077M18.3327 9.99996C18.3327 14.6023 14.6017 18.3333 9.99935 18.3333C5.39698 18.3333 1.66602 14.6023 1.66602 9.99996C1.66602 5.39759 5.39698 1.66663 9.99935 1.66663C14.6017 1.66663 18.3327 5.39759 18.3327 9.99996Z"
        stroke="#475467"
        strokeWidth="1.66667"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_113_5324">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
