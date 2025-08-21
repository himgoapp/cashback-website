import React from "react";
import styles from "./header.module.css";
import SectionHeader from "../../common/section_header/sectionHeader";
import Navbtn from "../../common/button/navbtn/navbtn";
const OfferHeader = ({ setSearchTerm, searchTerm }) => {
	return (
		<div className={styles.header_container}>
			{/* <SectionHeader
				head='Hottest Deals'
				subhead="   "
				offerHead={true}
			/> */}
			<div className="DealsOfferHed">
				<div class="col-lg-12 text-center">
					<h1 class="title">Hottest  <span class="titleAccent">Deals</span></h1>
					<p class="subtitle">With Rakebackk, it's not just about playing,  it's about earning more every time you do.</p>
				</div>				
			</div>
			{/* <div className={styles.email_input_container}>
				<div className={styles.input_content}>
					<input
						type='search'
						className={styles.input}
						placeholder='Search for offers'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
				<div className={styles.searchbtn}>
					<Navbtn
						text='Search'
						variant={"primary"}
						size={"small"}
						showIcon={false}
					/>
				</div>
			</div> */}
		</div>
	);
};

export default OfferHeader;
