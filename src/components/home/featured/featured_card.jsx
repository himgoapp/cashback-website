import React from "react";
import styles from "./featured_card.module.css";
import featured from "../../../assets/featured.png";
import avatar from "../../../assets/avatar.png";
import Reveal from "../../common/reveal/Reveal";

const FeaturedCard = () => {
	return (
		<Reveal>
			<a href='#' className={styles.blog_post_card}>
				<div className={styles.image}>
					<img src={featured} alt='' style={{ height: "100%" }} />
				</div>

				<div className={styles.content}>
					<div className={styles.head_and_subhead}>
						<div className={styles.badge_group}>
							<div className={styles.badge}>
								<div className={styles.text}>Design</div>
							</div>

							<div className={styles.badge_content}>
								<div className={styles.text}>8 min read</div>
							</div>

							<div className={styles.right_arrow}></div>
						</div>

						<div className={styles.heading_and_text}>
							<div className={styles.heading_and_icon}>
								<div className={styles.text}>What is Wireframing?</div>
								<div className={styles.icon_wrap}>
									<div className={styles.icon}></div>
								</div>
							</div>
							<div className={styles.text}></div>
						</div>
					</div>

					<div className={styles.avatar_label}>
						<div className={styles.avatar}>
							<img src={avatar} style={{ width: "100%" }} alt='' />
						</div>

						<div className={styles.name_and_date}>
							<div className={styles.name}>Candice Wu</div>
							<div className={styles.date}>15 Jan 2022</div>
						</div>
					</div>
				</div>
			</a>
		</Reveal>
	);
};

export default FeaturedCard;
