import React, { useState, useContext, useEffect, useRef } from "react";
import Navbtn from "../../common/button/navbtn/navBtnTwo";
import styles from "./address.module.css";
import { addAddressProof } from "../../../servicefile/kycservice";
import { ToastContainer, toast } from "react-toastify";

const SelectField = ({ label, placeholder }) => {
  return (
    <div className={styles.SelectInput}>
      <div className={styles.SelectInputContent}>
        <div className={styles.InputLabel}>{label}</div>
        <div className={styles.InputWrapper}>
          <div className={styles.SelectTextWrapper}>
            <div className={styles.SelectText}>
              <div className={styles.Text}>{placeholder}</div>
            </div>
          </div>
          <div className={styles.DropdownIcon}>
            <div className={styles.Icon}>{dropdownIcon}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TextField = ({
  label,
  placeholder,
  currentValue,
  setValue,
  type,
}) => {
  return (
    <div className={styles.TextInput}>
      <div className={styles.TextInputWithLabel}>
        <div className={styles.TextLabel}>{label}</div>
        <input
          type={type ? type : "text"}
          className={styles.TextFieldInput}
          placeholder={placeholder}
          value={currentValue}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};
function AddressDetail({ setStepReload }) {
  const imageRef = useRef(null);
  const [file, handleFile] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressProofType, setAddressProofType] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [proofState, setProofState] = useState("");

  const handleClick = (event) => {
    imageRef.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };

  const addAddressData = async () => {
    if (
      !file ||
      !firstName ||
      !lastName ||
      !addressProofType ||
      !documentNumber ||
      !proofState
    ) {
      toast.error(`All fields are required for saving address information!`);
    } else {
      const res = await addAddressProof(
        file,
        firstName,
        lastName,
        addressProofType,
        documentNumber,
        proofState
      );
      if (res && res.message === "success") {
        localStorage.setItem("transactionInfo", "true");
        toast.success(`Address information saved!`);
        setStepReload(true);
      }
    }
  };

  return (
    <>
      <div className={styles.AddressDetailsContainer}>
        <div className={styles.Text}>Address Details</div>
        <div className={styles.AddressDetailsForm}>
          <div className={styles.AddressDetailsContent}>
            <div className={styles.InputRow}>
              <TextField
                label="First name"
                placeholder="Olivia"
                currentValue={firstName}
                setValue={setFirstName}
              />
              <TextField
                label="Last name"
                placeholder="Rhye"
                currentValue={lastName}
                setValue={setLastName}
              />
            </div>
            <div className={styles.InputRow}>
              <TextField
                label="Address Proof Document Type"
                placeholder="Address Proof"
                currentValue={addressProofType}
                setValue={setAddressProofType}
              />
              <TextField
                label="Address Proof Document Number"
                placeholder="GSVD73YB3B"
                currentValue={documentNumber}
                setValue={setDocumentNumber}
              />
            </div>
            <div className={styles.InputRow}>
              <TextField
                label="State"
                placeholder="Bihar"
                currentValue={proofState}
                setValue={setProofState}
              />
            </div>
            <div className={styles.UploadArea}>
              <div className={styles.UploadLabel}>
                Upload Address Proof Document*
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
                        />
                        <Navbtn
                          text="Click to upload"
                          bg="transparent"
                          color="#3968EB"
                          style={{
                            padding: 0,
                          }}
                          onClickNav={() => {
                            handleClick();
                          }}
                        />
                        <div className={styles.Navbtn}>
                          <div className={styles.Text}></div>
                        </div>
                        {file && file.name && (
                          <div className={styles.ActionText}>
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
                <Navbtn
                  text="Save changes"
                  bg="#3968EB"
                  color="white"
                  showIcon={false}
                  onClickNav={() => {
                    addAddressData();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
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
