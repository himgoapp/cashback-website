import React, {useState } from "react";
import styles from "./navbar.module.css";
import Navbtn from "../button/navbtn/navbtn";
import { Link } from "react-router-dom";
import Logo from "../logo/logo";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const Navbar = ({ page }) => {
 const [loginTab, setLoginTab] = useState(false);
  const [signUpTab, setSignUpTab] = useState(false);

  console.log(loginTab , signUpTab ,"13 values ")

  return (
    <div className={styles.navbar_container}>
      <Logo />
      <div className={styles.navbar_link_container}>
        {page === "home" && homePageMenu}
        {page === "offer" && offersAndDealsPageMenu}
        <div className={styles.btn_link_container}>
          <div className={styles.signup_btn}  onClick ={() => setSignUpTab(true)}>
            {/* Sign Up Button Content */}

            {/* <Button variant="dark" onClick ={()=>{setSignUpTab(true)}} >Dark</Button> */}
            <Navbtn
              text="Sign up"
              bg="transparent"
              color="black"
              style={{
                borderRadius: "2.4375rem",
                border: "2px solid var(--black-800, #212121)",
              }}
             
            />
          </div>
          <div className={styles.login_btn} onClick ={()=>{setLoginTab(true);}}>
            {" "}
            {/* <Button variant="primary" onClick ={()=>{setLoginTab(true)}} >Log in</Button> */}
            <Navbtn text="Log in" bg="#3968EB" color="white" showIcon={false} />
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

       <Modal show={loginTab} onHide={() => setLoginTab(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone No.</Form.Label>
              <Form.Control
                type="phone"
                placeholder="9999998888"
                autoFocus
              />
            </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Otp</Form.Label>
              <Form.Control
                type="number"
                placeholder="123456"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> setLoginTab(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> setLoginTab(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        <Modal show={signUpTab} onHide={() => setSignUpTab(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone No.</Form.Label>
              <Form.Control
                type="phone"
                placeholder="9999998888"
                autoFocus
              />
            </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Otp</Form.Label>
              <Form.Control
                type="number"
                placeholder="123456"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> setSignUpTab(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> setSignUpTab(false)}>
            Save Changes
          </Button>
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
