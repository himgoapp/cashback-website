import React, { useState } from "react";
import styles from "./navbar.module.css";
// import Navbtn from "../button/navbtn/navbtn";
import { Link } from "react-router-dom";
import Logo from "../logo/logo";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import {
  loginOtp,
  loginVerify,
  verifySendOtpPhone,
  phoneVerify,
  signUpFxn,
} from "../../../servicefile/authservice";
import { useNavigate } from "react-router-dom";

const Navbar = ({ page }) => {
  const navigate = useNavigate();
  const [loginTab, setLoginTab] = useState(false);
  const [signUpTab, setSignUpTab] = useState(false);
  const [loginButtonType, setloginButtonType] = useState(1);
  const [signUpStep, setSignUpStep] = useState(1);
  const [phoneNumber, setPhoneNUmber] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [otp, setOtp] = useState("");

  const handleClose = () => {
    setSignUpTab(false);
    setLoginTab(false);
    setSignUpStep(false);
    setloginButtonType(1);
    setPhoneNUmber("");
    setOtp("");
  };

  const sendOtp = async () => {
    if (phoneNumber && phoneNumber.length === 10) {
      let data = await loginOtp(phoneNumber);

      if (
        data &&
        data.message === "Otp Sent!" &&
        data.data &&
        data.data.type === "success"
      ) {
        toast.success("Otp sent! Please check and fill and submit Otp.");
        setloginButtonType(2);
      } else {
        toast.error("No such user exist!");
      }
    } else {
      toast.warn("Please fill your 10 digit phone number carefully!");
    }
  };

  const verifyPhone = async () => {
    if (phoneNumber && phoneNumber.length === 10) {
      let data = await verifySendOtpPhone(phoneNumber);

      if (
        data &&
        data.message === "Otp Sent!" &&
        data.data &&
        data.data.type === "success"
      ) {
        toast.success("Otp sent! Please check and fill and submit Otp.");
        setloginButtonType(2);
      } else {
        toast.error("No such user exist!");
      }
    } else {
      toast.warn("Please fill your 10 digit phone number carefully!");
    }
  };

  const verifyOtp = async () => {
    if (otp && otp.length === 6) {
      let data = await loginVerify(phoneNumber, otp);
      if (data && data.message === "Otp verified!" && data.user) {
        toast.success(`${data.message} Welcome ${data.user.username}`, {
          autoClose: 8000,
        });
        localStorage.setItem("token", data.token);
        localStorage.setItem("userInfo", JSON.stringify(data.user));
        navigate("/dashboard");
      } else {
        toast.error(`${data.message}`, {
          autoClose: 8000,
        });
      }
    } else {
      toast.warn("please fill your otp carefully!");
    }
  };

  const verifyPhoneOtp = async () => {
    if (otp && otp.length === 6) {
      let data = await phoneVerify(phoneNumber, otp);
      if (data && data.message === "Otp verified!") {
        toast.success(`Phone N0. Verified!`, {
          autoClose: 8000,
        });
        setSignUpStep(2);
      } else {
        toast.error(`${data.message}`, {
          autoClose: 8000,
        });
      }
    } else {
      toast.warn("Please fill your otp carefully!");
    }
  };

  const signUP = async () => {
    if (otp && otp.length === 6) {
      let data = await signUpFxn(phoneNumber, email, userName);
      if (data && data.message === "Account Created Successfully!") {
        toast.success(`Sign up successfull! Please login`, {
          autoClose: 8000,
        });
        handleClose();
      } else {
        toast.error(`${data.message}`, {
          autoClose: 5000,
        });
      }
    } else {
      toast.warn("Email Already registered!");
    }
  };

  return (
    <div className={styles.navbar_container}>
      <ToastContainer />
      <Logo />
      <div className={styles.navbar_link_container}>
        {page === "home" && homePageMenu}
        {page === "offer" && offersAndDealsPageMenu}
        <div className={styles.btn_link_container}>
          <div className={styles.signup_btn}>
            {/* Sign Up Button Content */}

            <Button
              variant="dark"
              onClick={() => {
                setSignUpTab(true);
              }}
            >
              SIGN UP
            </Button>
          </div>

          {/* Login Button Content */}
          <div className={styles.login_btn}>
            {" "}
            <Button
              variant="primary"
              onClick={() => {
                setLoginTab(true);
              }}
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
      {/* for mobile screen */}
      <div className={styles.burger_menu}>
        <div className={styles.icon}>
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
        </div>
      </div>

      <Modal
        className="ModalSignIN  "
        size="lg"
        show={loginTab}
        onHide={() => handleClose()}
      >
        <Modal.Header className="d-flex justify-content-center mb-5">
          <Modal.Title>
            <Logo></Logo>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-5 Form-Group"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Phone No.</Form.Label>
              <Form.Control
                type="string"
                placeholder="Please put your 10 digit mobile number!"
                disabled={loginButtonType === 2}
                onChange={(e) => setPhoneNUmber(e.target.value)}
                autoFocus
              />
            </Form.Group>
            {loginButtonType === 2 && (
              <Form.Group
                className="mb-3 Form-Group"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Otp</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Please put your 6 digit otp!"
                  onChange={(e) => setOtp(e.target.value)}
                  autoFocus
                />
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {loginButtonType === 1 ? (
            <Button variant="primary" onClick={() => sendOtp()}>
              Send Otp
            </Button>
          ) : (
            <>
              <Button variant="primary" onClick={() => verifyOtp()}>
                Verify Otp
              </Button>
              <Button
                variant="info"
                style={{ marginTop: "10px" }}
                onClick={() => sendOtp()}
              >
                Resend Otp
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>

      <Modal
        className="ModalSignIN"
        size="lg"
        show={signUpTab}
        onHide={() => handleClose()}
      >
        <Modal.Header className="d-flex justify-content-center mb-5">
          <Modal.Title>
            <Logo></Logo>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-5 Form-Group"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Phone No.</Form.Label>
              <Form.Control
                type="string"
                placeholder="Please put your 10 digit mobile number!"
                disabled={loginButtonType === 2}
                onChange={(e) => setPhoneNUmber(e.target.value)}
                autoFocus
              />
            </Form.Group>
            {signUpStep === 1 ? (
              <>
                {loginButtonType === 2 && (
                  <Form.Group
                    className="mb-3 Form-Group"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Otp</Form.Label>
                    <Form.Control
                      type="string"
                      placeholder="Please put your 6 digit otp!"
                      onChange={(e) => setOtp(e.target.value)}
                      autoFocus
                    />
                  </Form.Group>
                )}
              </>
            ) : (
              <>
                {" "}
                <Form.Group
                  className="mb-5 Form-Group"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email.</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Please put your email here!"
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-5 Form-Group"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="test"
                    placeholder="Please put your full name here!"
                    onChange={(e) => setUserName(e.target.value)}
                    autoFocus
                  />
                </Form.Group>
              </>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {signUpStep === 1 ? (
            <>
              {loginButtonType === 1 ? (
                <Button variant="primary" onClick={() => verifyPhone()}>
                  Verify Phone
                </Button>
              ) : (
                <>
                  <Button variant="primary" onClick={() => verifyPhoneOtp()}>
                    Verify Otp
                  </Button>
                  <Button
                    variant="info"
                    style={{ marginTop: "10px" }}
                    onClick={() => sendOtp()}
                  >
                    Resend Otp
                  </Button>
                </>
              )}
            </>
          ) : (
            <Button variant="primary" onClick={() => signUP()}>
              Submit Details
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Navbar;

const homePageMenu = (
  <div className={styles.menu_container}>
    <div className={styles.aboutus}>
      <span>About Us</span>{" "}
    </div>
    <div className={styles.faq}>
      <span>FAQs</span>{" "}
    </div>
  </div>
);

const offersAndDealsPageMenu = (
  <div className={styles.menu_container}>
    <div className={styles.aboutus}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <span>Home</span>
      </Link>
    </div>
    <div className={styles.faq}>
      <Link to="/offer_and_deals" style={{ textDecoration: "none" }}>
        <span style={{ color: "#3968EB" }}>Offers & deals</span>
      </Link>
    </div>
  </div>
);
