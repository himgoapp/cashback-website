import Navbtn from "../../common/button/navbtn/navbtn";
import styles from "./address.module.css";
import { TextField } from "./address";

function BankAccDetails() {
  return (
    <>
      <div className={styles.AddressDetailsContainer}>
        <div className={styles.Text}>Bank Account Details</div>
        <div className={styles.AddressDetailsForm}>
          <div className={styles.AddressDetailsContent}>
            <div className={styles.InputRow}>
              <TextField
                label="Account Number"
                placeholder="*********************"
              />
              <TextField
                label="Verify Account Number"
                placeholder="83832993803748"
              />
            </div>
            <div className={styles.InputRow}>
              {" "}
              <TextField label="Bank Name" placeholder="ICICI Bank" />
              <TextField label="IFSC Code" placeholder="ICICI22881" />
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
