import React, { useState } from "react";
import { Modal, Button, Form, Spinner, InputGroup } from "react-bootstrap";
import { ContactUs } from "../servicefile/contactus";
import styles from "./contactUsModal.module.css"; // Import CSS module

const ContactUsModal = ({ show, handleClose }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState(""); // State for error message
    const [loading, setLoading] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

    const handleNameChange = (e) => {
        const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
        setName(value);
    };

    const handlePhoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, "").slice(0, 10);
        setPhone(value);

        // Clear error when the user starts typing
        if (value.length === 10) {
            setPhoneError("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate phone number
        if (phone.length !== 10) {
            setPhoneError("Phone number must be exactly 10 digits");
            return;
        }

        setLoading(true);
        const formData = { name, phone };

        try {
            await ContactUs(formData);
            setName("");
            setPhone("");
            setPhoneError(""); // Clear error after successful submission
            handleClose();
            setTimeout(() => setShowThankYou(true), 500);
        } catch (error) {
            alert("Failed to submit, please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header closeButton className={styles.contactModalHeader}>
                    <Modal.Title className={styles.contactModalTitle}>{rakelogo}</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.contactModalBody}>
                    <Form onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <Form.Group className={`mb-3 ${styles.contactFormGroup}`} controlId="name">
                            <Form.Label className={styles.contactLabel}>Name</Form.Label>
                            <Form.Control
                                type="text"
                                className={`${styles.contactInput} ${styles.borderedInput}`}
                                value={name}
                                onChange={handleNameChange}
                                required
                            />
                        </Form.Group>

                        {/* Phone Field with Validation */}
                        <Form.Group className={`mb-3 ${styles.contactFormGroup}`} controlId="phone">
                            <Form.Label className={styles.contactLabel}>Phone Number</Form.Label>
                            <InputGroup>
                                <InputGroup.Text className={styles.inputPrefix}>+91</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    className={`${styles.contactInput} ${styles.borderedInput} ${
                                        phoneError ? styles.errorInput : ""
                                    }`}
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    maxLength="10"
                                    required
                                />
                            </InputGroup>
                            {phoneError && <p className={styles.errorText}>{phoneError}</p>}
                        </Form.Group>

                        <div className="text-center">
                            <Button variant="primary" type="submit" className={styles.submitBtn}>
                                {loading ? <Spinner size="sm" animation="border" /> : "Submit"}
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Thank You Modal */}
            <Modal show={showThankYou} onHide={() => setShowThankYou(false)} centered>
                <Modal.Header closeButton className={styles.thankYouHeader}>
                    <Modal.Title className={styles.thankYouTitle}>Thank You!</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.thankYouBody}>
                    <p>Your request has been submitted successfully.</p>
                    <Button
                        variant="success"
                        onClick={() => setShowThankYou(false)}
                        className={styles.thankYouBtn}
                    >
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
};
export default ContactUsModal;
const rakelogo = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="220"
        height="40"
        viewBox="0 0 240 46"
        fill="none"

    >
        <text x="40" y="30" className={styles.logo_font} font-size="20" fill="black" font-weight="bold" letter-spacing="0.5px" >
            Rakebackk
        </text>
        <path
            d="M31.8434 24.164C32.8936 21.9495 33.4358 19.5258 33.4302 17.0721C33.4302 7.93884 26.0499 0.5 16.9609 0.5C7.87188 0.5 0.480426 7.93884 0.480426 17.0721C0.477925 19.5307 1.02403 21.9586 2.07844 24.1766C0.727073 25.9193 -0.00472093 28.0675 2.29193e-05 30.2779C0.00233253 32.9415 1.05574 35.4951 2.92863 37.3773C4.80153 39.2595 7.3406 40.3163 9.98763 40.3153C11.623 40.3153 13.8607 39.7693 15.2148 39.063C15.1762 39.1883 15.1277 39.3235 15.0791 39.4588C15.0638 39.5105 15.0429 39.5605 15.0169 39.6078C14.7934 40.1669 14.5219 40.7053 14.2054 41.217C14.1681 41.2922 14.1196 41.3648 14.0698 41.4525C13.1447 42.993 11.9634 44.3621 10.5775 45.5H23.3443C21.9639 44.356 20.7831 42.988 19.8508 41.4525C19.8022 41.3648 19.7525 41.2922 19.7164 41.217C19.4001 40.7051 19.1282 40.1667 18.9037 39.6078C18.8883 39.556 18.8674 39.506 18.8414 39.4588C18.7941 39.3235 18.7444 39.187 18.707 39.063C20.076 39.7681 22.3162 40.3153 23.9466 40.3153C25.8112 40.3203 27.6397 39.7984 29.2239 38.8089C30.8081 37.8194 32.0844 36.4022 32.9073 34.7186C33.7303 33.035 34.0669 31.1527 33.8788 29.286C33.6907 27.4194 32.9854 25.6434 31.8434 24.1603V24.164ZM21.9902 1.88633C25.1707 2.9573 27.9345 5.01042 29.8882 7.7535L25.9765 10.575C24.6149 8.65936 22.6865 7.22565 20.4668 6.47863L21.9902 1.88633ZM12.1756 1.80117L13.6143 6.41726C11.267 7.16866 8.04362 10.4247 8.04362 10.4247L4.18548 7.54436C6.18192 4.83166 8.97798 2.82187 12.1756 1.80117ZM18.7195 33.0005C18.6537 32.9986 18.5879 33.0023 18.5228 33.0117C18.2941 33.0413 18.0639 33.0581 17.8333 33.0618C17.7563 33.0733 17.6784 33.0779 17.6006 33.0756C17.3778 33.0869 17.17 33.0994 16.9609 33.0994C16.7518 33.0994 16.5539 33.0869 16.3461 33.0756C16.2596 33.0779 16.173 33.0733 16.0872 33.0618C15.8612 33.0581 15.6356 33.0413 15.4114 33.0117C15.3243 33.0005 15.2397 33.0005 15.1625 32.988C14.6958 32.9379 14.2266 32.8627 13.7736 32.7776C13.7665 32.7716 13.7579 32.7677 13.7487 32.7663C13.4998 32.7162 13.2683 32.6661 13.0219 32.6047C12.9886 32.5947 12.9562 32.5821 12.9248 32.5672C6.09962 30.7651 1.04545 24.5034 1.04545 17.0721V16.9118L5.87933 16.9619V17.047C5.87686 18.2338 6.06817 19.4129 6.44561 20.5373C14.1196 14.6826 16.9609 7.07223 16.9609 7.07223C16.9609 7.07223 19.8022 14.6826 27.4762 20.5373C27.8403 19.4394 28.031 18.2908 28.0412 17.1335L32.8751 17.1835C32.8154 25.365 26.6262 32.1088 18.7195 33.0005Z"
            fill="#0052cc"
        />
    </svg>
);