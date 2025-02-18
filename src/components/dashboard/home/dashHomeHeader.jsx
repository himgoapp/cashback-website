import React, { useContext, useState, useEffect } from "react";
import styles from "./dashHomeHeader.module.css";
import bellIcon from "../../../assets/header_nav_btn2.png";
import profileicon from "../../../assets/profileicon.svg";
import { UserContext } from "../../../App";
import Navbtn from "../../common/button/navbtn/navbtn";
import { Modal, Button, Form } from "react-bootstrap";
import { sendEmailOtpAPI, loginVerify } from "../../../servicefile/authservice";
import { toast } from "react-toastify";
import Logo from "../../common/logo/logo";

const DashboardHomeHeader = ({ title, icon }) => {
  const { userData, setUserData } = useContext(UserContext);
  const [editMode, setEditMode] = useState(false); // Edit mode state
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [username, setUsername] = useState(userData?.userName || "");
  const [address, setAddress] = useState(userData?.addressProofType || "");
  const [verifyModal, setVerifyModal] = useState(false);
  const [otp, setOtp] = useState("");
  const { setShowSidebar, showNotifications, setShowNotifications } =
    useContext(UserContext);

  const handleClose = () => {
    setVerifyModal(false);
    setOtp("");
  };

  // const onLogout = () => {
  //   localStorage.clear();
  //   window.location.reload();
  // };

  const handleProfileClick = () => {
    setShowProfileModal(true);
  };

  const handleCloseModal = () => {
    setShowProfileModal(false);
  };
  const sendEmailOtp = async (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailRegex.test(email)) {
      let data = await sendEmailOtpAPI(email);
      // if (data?.message === "Otp Sent!" && data.data?.type === "success") {
      //     toast.success("Otp sent! Please check and enter it.");
      setVerifyModal(true);
      // } else {
      //     toast.error(data.message);
      // }
    } else {
      toast.warn("Please enter a valid email address!");
    }
  };

  const verifyOtp = async () => {
    if (otp.length === 6) {
      let data = await loginVerify(otp);
      if (data?.message === "Otp verified!" && data.user) {
        toast.success("Email Verified!");
        setUserData({ ...data.user, username, address });
      } else {
        toast.error("OTP verification failed.");
      }
    } else {
      toast.warn("Please enter a valid 6-digit OTP!");
    }
  };
  // Apply blur effect to background when modal is open
  useEffect(() => {
    if (showProfileModal) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
      document.body.classList.add(styles.modalOpen); // Add class to body for blur
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
      document.body.classList.remove(styles.modalOpen); // Remove class from body
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove(styles.modalOpen); // Clean up
    };
  }, []);

  return (
    <div className={styles.HomeHeader}>
      <div className={styles.HeaderContainer}>
        <div className={styles.HeaderContent}>
          <div className={styles.HeaderContentWrapper}>
            <div className={styles.HeaderTexts}>
              <div className={styles.HeaderHead}>
                <span>{icon}</span>
                <span className={styles.header_text_gap}>{title}</span>
              </div>
            </div>
            <div className={styles.MenuAndLogo}>
              <div className={styles.Menu} onClick={() => setShowSidebar(true)}>
                {menuIcon}
              </div>
              <div className={styles.Logo}>{logoIcon}</div>
            </div>
            <div className={styles.HeaderActions}>
              {/* <div className={styles.HeaderNavBtn} onClick={handleProfileClick}>
                <img src={profileicon} alt="Profile Icon" />
              </div> */}
              <div className={styles.HeaderNavBtn} onClick={handleProfileClick}>
                {userIcon}
              </div>
              {/* <div
                className={styles.HeaderNavBtn2}
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <img src={bellIcon} alt="Notification Bell" />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {showProfileModal && (
        <Modal
          show={showProfileModal}
          onHide={handleCloseModal}
          backdrop="static"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
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
                  // disabled={!editMode && address !== ""}
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

                {userData?.isEmailVerified ? (
                  <div
                    style={{
                      color: "green",
                      fontSize: "12px",
                      marginTop: "5px",
                    }}
                  >
                    Your email is verified.
                  </div>
                ) : (
                  <>
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "5px",
                      }}
                    >
                      Your email is not verified.
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      style={{
                        backgroundColor: "rgb(0, 35, 102)", 
                        color: "white",
                        borderColor: "rgb(0, 35, 102)",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = "rgb(82, 255, 51)"; 
                        e.target.style.borderColor = "rgb(82, 255, 51)";
                        e.target.style.color = "black";


                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = "rgb(0, 35, 102)";
                        e.target.style.color = "white";
                        e.target.style.borderColor = "rgb(0, 35, 102)";


                      }}
                      onClick={() => sendEmailOtp(userData.email)}
                    >
                      Verify Email
                    </Button>
                  </>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  value={
                    userData?.phoneNumber ? `+${userData.phoneNumber}` : ""
                  }
                  disabled
                />
                {userData?.phoneNumber ? (
                  <div
                    style={{
                      color: "green",
                      fontSize: "12px",
                      marginTop: "5px",
                    }}
                  >
                    Your phone number is verified.
                  </div>
                ) : (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "5px",
                    }}
                  >
                    Your phone number is not verified.
                  </div>
                )}
              </Form.Group>

              {/* Edit/Save Button with Color Change */}
              <Button
                variant="primary"
                onClick={() => setEditMode(!editMode)}
                style={{
                  backgroundColor: "rgb(0, 35, 102)", 
                  color: "white",
                  borderColor: "rgb(0, 35, 102)",
                  marginTop: "-12px"
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "rgb(82, 255, 51)"; 
                  e.target.style.borderColor = "rgb(82, 255, 51)";
                  e.target.style.color = "black";


                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "rgb(0, 35, 102)";
                  e.target.style.color = "white";
                  e.target.style.borderColor = "rgb(0, 35, 102)";


                }}
              >
                {editMode ? "Save" : "Edit"}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      )}
      <Modal
        size="sm"
        show={verifyModal}
        onHide={handleClose}
        backdrop="static"
        // aria-labelledby="contained-modal-title-vcenter"
        centered
        // animation={false}
      >
        <Modal.Header className="d-flex justify-content-center" closeButton>
          <Modal.Title>
            <Logo />
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
          <Button variant="primary" onClick={verifyOtp}
           style={{
            backgroundColor: "rgb(0, 35, 102)", 
            color: "white",
            borderColor: "rgb(0, 35, 102)",
            marginTop: "-12px"
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "rgb(82, 255, 51)"; 
            e.target.style.borderColor = "rgb(82, 255, 51)";
            e.target.style.color = "black";


          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "rgb(0, 35, 102)";
            e.target.style.color = "white";
            e.target.style.borderColor = "rgb(0, 35, 102)";


          }}
          >
            Verify Email
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DashboardHomeHeader;
const userIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='30'
		height='30'
		viewBox='0 0 20 20'
		fill='none'
	>
		<g clipPath='url(#clip0_24_3723)'>
			<path
				d='M4.43008 16.1985C4.93702 15.0042 6.12061 14.1665 7.49984 14.1665H12.4998C13.8791 14.1665 15.0626 15.0042 15.5696 16.1985M13.3332 7.9165C13.3332 9.75745 11.8408 11.2498 9.99984 11.2498C8.15889 11.2498 6.6665 9.75745 6.6665 7.9165C6.6665 6.07555 8.15889 4.58317 9.99984 4.58317C11.8408 4.58317 13.3332 6.07555 13.3332 7.9165ZM18.3332 9.99984C18.3332 14.6022 14.6022 18.3332 9.99984 18.3332C5.39746 18.3332 1.6665 14.6022 1.6665 9.99984C1.6665 5.39746 5.39746 1.6665 9.99984 1.6665C14.6022 1.6665 18.3332 5.39746 18.3332 9.99984Z'
				stroke='#101828'
				strokeWidth='1.66667'
				strokeLinecap='round'
				stroke-linejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_24_3723'>
				<rect width='20' height='20' fill='white' />
			</clipPath>
		</defs>
	</svg>
);
const logoIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="44"
    viewBox="0 0 34 44"
    fill="none"
  >
    <path
      d="M31.1358 23.1382C32.1627 20.9728 32.6929 18.603 32.6874 16.2038C32.6874 7.27353 25.4711 0 16.584 0C7.69696 0 0.46975 7.27353 0.46975 16.2038C0.467305 18.6078 1.00127 20.9818 2.03226 23.1504C0.710917 24.8544 -0.00461603 26.9549 2.24101e-05 29.1162C0.0022807 31.7205 1.03228 34.2174 2.86356 36.0578C4.69484 37.8982 7.17749 38.9315 9.7657 38.9306C11.3647 38.9306 13.5527 38.3967 14.8767 37.7061C14.839 37.8285 14.7915 37.9608 14.7441 38.093C14.729 38.1436 14.7086 38.1925 14.6832 38.2387C14.4647 38.7854 14.1992 39.3119 13.8898 39.8122C13.8533 39.8857 13.8058 39.9567 13.7572 40.0424C12.8526 41.5487 11.6976 42.8873 10.3425 44H22.8255C21.4758 42.8814 20.3213 41.5438 19.4097 40.0424C19.3622 39.9567 19.3136 39.8857 19.2783 39.8122C18.969 39.3116 18.7031 38.7852 18.4836 38.2387C18.4686 38.1881 18.4482 38.1392 18.4228 38.093C18.3765 37.9608 18.3279 37.8273 18.2913 37.7061C19.6299 38.3955 21.8204 38.9306 23.4145 38.9306C25.2377 38.9354 27.0256 38.4251 28.5746 37.4576C30.1236 36.4901 31.3715 35.1044 32.1761 33.4582C32.9808 31.812 33.3099 29.9715 33.126 28.1463C32.9421 26.3212 32.2525 24.5846 31.1358 23.1345V23.1382ZM21.5016 1.35552C24.6114 2.40269 27.3138 4.41018 29.224 7.09231L25.3993 9.85111C24.068 7.97804 22.1824 6.57619 20.0121 5.84577L21.5016 1.35552ZM11.905 1.27225L13.3118 5.78577C11.0167 6.52047 7.86489 9.70417 7.86489 9.70417L4.09248 6.88782C6.04456 4.2354 8.77849 2.27027 11.905 1.27225ZM18.3035 31.7782C18.2392 31.7764 18.1749 31.7801 18.1112 31.7893C17.8876 31.8182 17.6625 31.8346 17.4371 31.8382C17.3618 31.8494 17.2856 31.8539 17.2095 31.8517C16.9917 31.8627 16.7885 31.875 16.584 31.875C16.3796 31.875 16.1861 31.8627 15.9829 31.8517C15.8983 31.8539 15.8137 31.8494 15.7298 31.8382C15.5088 31.8346 15.2881 31.8182 15.069 31.7893C14.9838 31.7782 14.9011 31.7783 14.8256 31.766C14.3693 31.717 13.9105 31.6435 13.4675 31.5603C13.4606 31.5545 13.4522 31.5506 13.4432 31.5493C13.1998 31.5003 12.9735 31.4513 12.7325 31.3913C12.7 31.3815 12.6683 31.3692 12.6376 31.3546C5.96408 29.5925 1.02222 23.47 1.02222 16.2038V16.0471L5.74869 16.0961V16.1793C5.74627 17.3397 5.93333 18.4926 6.30238 19.592C13.8058 13.8675 16.584 6.42618 16.584 6.42618C16.584 6.42618 19.3622 13.8675 26.8657 19.592C27.2217 18.5185 27.4081 17.3955 27.4182 16.2638L32.1446 16.3128C32.0862 24.3125 26.0345 30.9064 18.3035 31.7782Z"
      fill="#3968EB"
    />
  </svg>
);

const menuIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M3 12H21M3 6H21M3 18H21"
      stroke="#667085"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
