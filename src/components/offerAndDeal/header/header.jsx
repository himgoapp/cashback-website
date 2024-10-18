import React from "react";
import styles from "./header.module.css";
import SectionHeader from "../../common/section_header/sectionHeader";
import Navbtn from "../../common/button/navbtn/navbtn";
const OfferHeader = ({ setSearchTerm, searchTerm }) => {
	return (
		<div className={styles.header_container}>
			<SectionHeader
				head='Offers & Deals'
				subhead='Discover the Ultimate Poker Experience: Top-rated rooms, unbeatable offers, and more!'
				offerHead={true}
			/>
			<div className={styles.email_input_container}>
				{/* Input Content */}
				<div className={styles.input_content}>
					{/* Input */}
					<input
						type='search'
						className={styles.input}
						placeholder='Search for offers'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
				<div className={styles.searchbtn}>
					<Navbtn text='Search' bg='#3968EB' color='white' showIcon={false} />
				</div>
			</div>
		</div>
	);
};

export default OfferHeader;
