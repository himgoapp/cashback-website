import React from "react";
import styles from "./deal_card.module.css";
import Reveal from "../../common/reveal/Reveal";

const DealCard = ({ title, description, img, lastIndex }) => {
	return (
		<a
			href='/'
			className={`${styles.deals_card} ${lastIndex ? styles.last_card : ""}`}
		>
			<Reveal>
				<div>
					<img
						src={img}
						width={72}
						height={64}
						alt=''
						className={styles.image}
					/>

					<div className={styles.card_content}>
						<div className={styles.card_text_content}>
							<div className={styles.title}>{title}</div>
							<div className={styles.description}>{description}</div>
						</div>

						<div className={styles.learn_more_container}>
							Learn More
							<Arrow />
						</div>
					</div>
				</div>
			</Reveal>
		</a>
	);
};

export default DealCard;

const Arrow = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='26'
		height='12'
		viewBox='0 0 26 12'
		fill='none'
	>
		<path
			d='M24 7.5C25.1046 7.5 26 8.39543 26 9.5C26 10.6046 25.1046 11.5 24 11.5L2 11.5C0.895429 11.5 -1.35705e-07 10.6046 -8.74228e-08 9.5C-3.91405e-08 8.39543 0.895432 7.5 2 7.5L24 7.5Z'
			fill='#5C6077'
		/>
		<path
			d='M25.0711 7.74253C25.8522 8.52357 25.8522 9.7899 25.0711 10.571C24.2901 11.352 23.0238 11.352 22.2427 10.571L16.4143 4.74253C15.6332 3.96148 15.6332 2.69515 16.4143 1.9141C17.1953 1.13305 18.4617 1.13305 19.2427 1.9141L25.0711 7.74253Z'
			fill='#5C6077'
		/>
	</svg>
);
