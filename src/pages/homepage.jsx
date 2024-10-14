import React from "react";
import Navbar from "../components/common/navbar/navbar";
import Banner from "../components/home/banner/banner";
import AboutUs from "../components/home/aboutus/aboutUs";
import Deals from "../components/home/deals/deals";
import Getstarted from "../components/home/getStarted/getstarted";
import Featured from "../components/home/featured/featured";
import FAQ from "../components/home/FAQ/faq";
import JoinRakeback from "../components/home/joinRakeback/joinRakeback";
import Footer from "../components/common/footer/footer";
import MainContainer from "../layout/mainContainer";

const Homepage = () => {
	return (
		<>
			<MainContainer>
				<Navbar page='home' />
				<Banner />
				<AboutUs />
				<Deals />
				<Getstarted />
				<Featured />
				<FAQ />
				<JoinRakeback />
			</MainContainer>

			<div
				style={{ width: "100%", backgroundColor: "#3968eb" }}
				className='flex_center'
			>
				<Footer />
			</div>
		</>
	);
};

export default Homepage;
