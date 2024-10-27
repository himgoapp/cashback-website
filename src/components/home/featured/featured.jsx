import React from "react";
import styles from "./featured.module.css";
import FeaturedCard from "./featured_card";
import Reveal from "../../common/reveal/Reveal";

const Featured = () => {
	return (
		<div className={`${styles.featured_container} container_max`}>
			<div className={styles.featured_content}>
				<div className={styles.header}>
					<Reveal>
						<div className={styles.head}>Featured blogs</div>
						<div className={styles.subhead}>
							Lorem ipsum dolor sit amet consectetur.
						</div>
					</Reveal>
				</div>

				<div className={styles.row}>
					<FeaturedCard />
					<FeaturedCard />
					<FeaturedCard />
				</div>
			</div>
		</div>
	);
};

export default Featured;
