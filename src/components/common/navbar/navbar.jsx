import React, { useState, useContext } from "react";
import styles from "./navbar.module.css";
import Navbtn from "../button/navbtn/navbtn";
import { Link } from "react-router-dom";
import Logo from "../logo/logo";
// import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
import PopupSignin from "../../description/popup/signin";
import { CrossIcon } from "../../../assets/vectors";

const Navbar = ({ page }) => {
	// const navigate = useNavigate();
	const { loginTab, setLoginTab } = useContext(UserContext);
	const token = localStorage.getItem("token")
		? localStorage.getItem("token")
		: "";

	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className='container_max'>
			<div className={styles.navbar_container}>
				<Logo />
				<div className={styles.navbar_link_container}>
					{page === "home" && homePageMenu}
					{page === "offer" && offersAndDealsPageMenu}
					{token && token.length > 0 ? (
						dashboardMenu
					) : (
						<div className={styles.btn_link_container}>
							<Navbtn
								text='Sign up'
								bg='transparent'
								color='black'
								style={{
									borderRadius: "2.4375rem",
									border: "2px solid var(--black-800, #212121)",
								}}
								onClick={() => {
									setLoginTab(true);
								}}
							/>
							<Navbtn
								text='Log in'
								bg='#3968EB'
								color='white'
								showIcon={false}
								onClick={() => {
									setLoginTab(true);
								}}
							/>
						</div>
					)}
				</div>
				{/* for mobile screen */}

				<button
					className={styles.burger_menu}
					onClick={() => {
						setShowMenu(!showMenu);
					}}
				>
					<div className={styles.icon}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
						>
							<path
								d='M3 12H21M3 6H21M3 18H21'
								stroke='#667085'
								strokeWidth='2'
								strokeLinecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</div>
				</button>
				{showMenu && (
					<div className={styles.link_mobile_container}>
						<div className={styles.link_mobile_header}>
							<Logo />
							<button
								aria-label='Close menu'
								onClick={() => setShowMenu(false)}
							>
								<CrossIcon />
							</button>
						</div>
						<div>
							{page === "home" && homePageMenu}
							{page === "offer" && offersAndDealsPageMenu}
							{token && token.length > 0 ? (
								dashboardMenu
							) : (
								<div className={styles.btn_link_container}>
									<Navbtn
										text='Sign up'
										bg='transparent'
										color='black'
										style={{
											borderRadius: "2.4375rem",
											border: "2px solid var(--black-800, #212121)",
										}}
										onClick={() => {
											setLoginTab(true);
											setShowMenu(false);
										}}
									/>
									<Navbtn
										text='Log in'
										bg='#3968EB'
										color='white'
										showIcon={false}
										onClick={() => {
											setLoginTab(true);
											setShowMenu(false);
										}}
									/>
								</div>
							)}
						</div>
					</div>
				)}
				{loginTab && <PopupSignin />}
			</div>
		</div>
	);
};

export default Navbar;

const homePageMenu = (
	<div className={styles.menu_container}>
		<a href='/#about-us' className={styles.aboutus}>
			<span>About Us</span>{" "}
		</a>
		<a href='/#faq' className={styles.faq}>
			<span>FAQs</span>{" "}
		</a>
	</div>
);

const dashboardMenu = (
	<div className={styles.menu_container}>
		<div className={styles.aboutus}>
			<Link to='/dashboard' style={{ textDecoration: "none" }}>
				<span>Dashboard</span>{" "}
			</Link>
		</div>
	</div>
);

const offersAndDealsPageMenu = (
	<div className={styles.menu_container}>
		<div className={styles.aboutus}>
			<Link to='/' style={{ textDecoration: "none" }}>
				<span>Home</span>
			</Link>
		</div>
		<div className={styles.faq}>
			<Link to='/offer_and_deals' style={{ textDecoration: "none" }}>
				<span style={{ color: "#3968EB" }}>Offers & deals</span>
			</Link>
		</div>
	</div>
);
