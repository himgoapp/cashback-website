import React from "react";
import styles from "./featured.module.css";
import FeaturedCard from "./featured_card";
const Featured = () => {
	return (
		<div className={`${styles.featured_container} container`}>
			{/* Featured Content */}
			<div className={styles.featured_content}>
				{/* Header */}
				<div className={styles.header}>
					<div className={styles.head}>{/* Head Content */}Featured blogs</div>
					<div className={styles.subhead}>
						{/* Subhead Content */}Lorem ipsum dolor sit amet consectetur.{" "}
					</div>
				</div>

				{/* Row or Card Container */}
				<div className={styles.row}>
					{/* Cards go here */}
					<FeaturedCard />
					<FeaturedCard />
					<FeaturedCard />
				</div>

				{/* Or use .card_container */}
				<div className={styles.card_container}>{/* Cards go here */}</div>
			</div>
		</div>
	);
};

export default Featured;
