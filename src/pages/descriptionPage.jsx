import React, { useContext } from "react";
import MainContainer from "../layout/mainContainer";
import Navbar from "../components/common/navbar/navbar";
import Footer from "../components/common/footer/footer";
import offerbg from "../assets/offerbannerbg.png";
import DescriptionContentWrapper from "../components/description/descriptionContentWrapper";
import OfferAndRegistration from "../components/description/offerAndRegistration";
import BonusesAndReview from "../components/description/bonuses_and_review";
// import PopupSignin from "../components/description/popup/signin";
import { UserContext } from "../App";
import ContentDeposit from "../components/description/ContentDeposit";
import CaskBackStep from "../components/description/CashBackStep"
import CashBackTimeMachine from "../components/description/CashBackTimeMachine"
import RakeBackStructure from "../components/description/RakeBackStructure"

const DescriptionPage = () => {
	const { showSigninPopup } = useContext(UserContext);

	return (
		<div style={{ position: "relative" }}>
			{/* <MainContainer> */}
			<Navbar page='offer' />
			<div style={{ position: "relative", marginTop: "4rem" }}>
				<MainContainer>
					{/* DescriptionContentWrapper */}
					<DescriptionContentWrapper>
						<OfferAndRegistration />
						<BonusesAndReview />
						<ContentDeposit />
						<CaskBackStep/>
						<CashBackTimeMachine/>
						<RakeBackStructure/>
					</DescriptionContentWrapper>
				</MainContainer>
				{/* banner background image */}
				<div
					className=''
					style={{
						position: "absolute",
						top: "-4rem",
						left: 0,
						width: "100%",
					}}
				>
					<img
						src={offerbg}
						alt=''
						style={{
							width: "100%",
							height: "22rem",
							position: "absolute",
							zIndex: -1,
						}}
					/>
				</div>{" "}
			</div>
			{/* simple div for height adn footer */}
			<div
				style={{
					width: "100%",
					backgroundColor: "#002366",
					marginTop: "10rem",
				}}
				className='flex_center'
			>
				<Footer />
			</div>

			{/* {showSigninPopup && <PopupSignin />} */}
		</div>
	);
};

export default DescriptionPage;
