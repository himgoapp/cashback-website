import React, { useState, useContext, useEffect } from "react";
import styles from "./verifyInfoContainer.module.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import {CashbackLogo} from "../../common/logo/logo";
import { UserContext } from "../../../App";
import Navbtn from "../../common/button/navbtn/navbtn";

function VerifyInfoContainer() {
    const { userData, setUserData } = useContext(UserContext);
    const [verifyModal, setVerifyModal] = useState(false);
    const [otp, setOtp] = useState("");
    const [username, setUsername] = useState(userData?.userName || "");
    const [address, setAddress] = useState(userData?.addressProofType || "");
    const [editMode, setEditMode] = useState(false);
    
    // Store ID feature - local state for user accounts
    const [storeId, setStoreId] = useState("");
    const [storeEmail, setStoreEmail] = useState("");
    const [userAccounts, setUserAccounts] = useState([]);

    // Load user accounts from localStorage on mount
    useEffect(() => {
        const storedAccounts = localStorage.getItem('user_accounts');
        if (storedAccounts) {
            try {
                setUserAccounts(JSON.parse(storedAccounts));
            } catch (e) {
                setUserAccounts([]);
            }
        }
    }, []);

    const handleClose = () => {
        setVerifyModal(false);
        setOtp("");
    };

    // Mock send email OTP - static app doesn't make API calls
    const sendEmailOtp = async (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && emailRegex.test(email)) {
            // For static app, just show success message
            toast.success("OTP sent! (Demo: Use any 6-digit code)");
            setVerifyModal(true);
        } else {
            toast.warn("Please enter a valid email address!");
        }
    };

    // Mock verify OTP - static app doesn't make API calls
    const verifyOtp = async () => {
        if (otp.length === 6) {
            // For static app, just show success message
            toast.success("Email Verified! (Demo mode)");
            setVerifyModal(false);
        } else {
            toast.warn("Please enter a valid 6-digit OTP!");
        }
    };

    // Add Store ID/Email to localStorage
    const addStoreAccount = () => {
        if (!storeId && !storeEmail) {
            toast.warn("Please enter a Store ID or Email!");
            return;
        }

        const newAccount = {
            id: Date.now(),
            storeId: storeId || storeEmail,
            email: storeEmail || "N/A",
            addedDate: new Date().toLocaleDateString()
        };

        const updatedAccounts = [...userAccounts, newAccount];
        setUserAccounts(updatedAccounts);
        localStorage.setItem('user_accounts', JSON.stringify(updatedAccounts));
        
        setStoreId("");
        setStoreEmail("");
        toast.success("Store account added successfully!");
    };

    // Remove store account
    const removeStoreAccount = (id) => {
        const updatedAccounts = userAccounts.filter(account => account.id !== id);
        setUserAccounts(updatedAccounts);
        localStorage.setItem('user_accounts', JSON.stringify(updatedAccounts));
        toast.success("Store account removed!");
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
                                paddingRight: "120px",
                                height: "40px",
                            }}
                        />
                        <Navbtn
                            text="Verify Email"
                            variant="outlined_primary"
                            size="small"
                            showIcon={false}  
                            iconColor="#3968EB"
                            onClick={() => sendEmailOtp(userData?.email)}
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

            {/* Store ID Section - Add New Store Account */}
            <div className={styles.FormContent} style={{ marginTop: "20px" }}>
                <h5>Add Store ID / Email</h5>
                <p style={{ fontSize: "14px", color: "#666" }}>
                    Add your store accounts to track cashback
                </p>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Store ID / Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter store ID (e.g., Amazon ID)"
                            value={storeId}
                            onChange={(e) => setStoreId(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Store Email (Optional)</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter store email"
                            value={storeEmail}
                            onChange={(e) => setStoreEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={addStoreAccount}>
                        Add Store Account
                    </Button>
                </Form>

                {/* Display User Accounts Table */}
                {userAccounts.length > 0 && (
                    <div style={{ marginTop: "20px" }}>
                        <h6>Your Store Accounts</h6>
                        <table className="table table-sm table-striped">
                            <thead>
                                <tr>
                                    <th>Store ID</th>
                                    <th>Email</th>
                                    <th>Added Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userAccounts.map((account) => (
                                    <tr key={account.id}>
                                        <td>{account.storeId}</td>
                                        <td>{account.email}</td>
                                        <td>{account.addedDate}</td>
                                        <td>
                                            <Button 
                                                variant="danger" 
                                                size="sm"
                                                onClick={() => removeStoreAccount(account.id)}
                                            >
                                                Remove
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Modal for OTP Verification */}
            <Modal size="md" show={verifyModal} onHide={handleClose}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>
                        <CashbackLogo />
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
                            <Form.Text className="text-muted">
                                Demo: Enter any 6-digit code
                            </Form.Text>
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
