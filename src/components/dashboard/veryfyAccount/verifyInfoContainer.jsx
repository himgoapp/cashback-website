import React, { useState, useContext } from "react";
import styles from "./verifyInfoContainer.module.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { sendEmailOtpAPI, loginVerify } from "../../../servicefile/authservice";
import {RakebackLogo} from "../../common/logo/logo";
import { UserContext } from "../../../App";
import Navbtn from "../../common/button/navbtn/navbtn";

function VerifyInfoContainer() {
    const { userData, setUserData } = useContext(UserContext);
    const [verifyModal, setVerifyModal] = useState(false);
    const [otp, setOtp] = useState("");
    const [username, setUsername] = useState(userData?.userName || "");
    const [address, setAddress] = useState(userData?.addressProofType || "");
    const [editMode, setEditMode] = useState(false); // Edit mode state

    const handleClose = () => {
        setVerifyModal(false);
        setOtp("");
    };

    const sendEmailOtp = async (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && emailRegex.test(email)) {
            let data = await sendEmailOtpAPI(email);
            if (data?.message === "Otp Sent!" && data.data?.type === "success") {
                // toast.success("Otp sent! Please check and enter it.");
                setVerifyModal(true);
            } else {
                // toast.error(data.message);
            }
        } else {
            // toast.warn("Please enter a valid email address!");
        }
    };

    const verifyOtp = async () => {
        if (otp.length === 6) {
            let data = await loginVerify(otp);
            if (data?.message === "Otp verified!" && data.user) {
                // toast.success("Email Verified!");
                setUserData({ ...data.user, username, address });
            } else {
                // toast.error("OTP verification failed.");
            }
        } else {
            // toast.warn("Please enter a valid 6-digit OTP!");
        }
    };

    return (
        <div className={styles.FormContainer}>
            <div className={styles.FormContent}>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={!editMode && username !== ""}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            disabled={!editMode && address !== ""}
                        />
                    </Form.Group>

                    {/* Email Input with Button Inside */}
                    <Form.Group className="mb-3 position-relative">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={userData?.email || ""}
                            disabled={!editMode}
                            style={{
                                paddingRight: "120px", // Ensure space for the button
                                height: "40px", // Adjust the input field height
                            }}
                        />
                        <Navbtn
                            text="Verify Email"
                            variant="outlined_primary"
                            size="small"
                            showIcon={false}  
                            iconColor="#3968EB"
                            onClick={() => sendEmailOtp(userData.email)}
                            style={{
                                position: "absolute",
                                right: "10px",  
                                top: "73%", 
                                transform: "translateY(-50%)", 
                                height: "32px", 
                                padding: "0 2px", 
                                minWidth: "100px", 
                                fontSize: "14px", 
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your mobile number"
                            value={userData?.phoneNumber || ""}
                            disabled
                        />
                    </Form.Group>

                    {/* Edit/Save Button with Color Change */}
                    <Button 
                     variant="primary"
                        onClick={() => setEditMode(!editMode)} 
                        style={{ marginTop: "10px" }}
                    >
                        {editMode ? "Save" : "Edit"}
                    </Button>
                </Form>
            </div>

            {/* Modal for OTP Verification */}
            <Modal size="md" show={verifyModal} onHide={handleClose}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>
                        <RakebackLogo />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>OTP</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your 6-digit OTP"
                                onChange={(e) => setOtp(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={verifyOtp}>
                        Verify Email
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default VerifyInfoContainer;
