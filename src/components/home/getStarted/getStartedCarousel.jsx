import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import React from "react";
import styles from "./getstarted.module.css";
import getStartedStep1 from "../../../assets/getStartedStep1.png";
import getStartedStep2 from "../../../assets/getStartedStep2.png";
import getStartedStep3 from "../../../assets/getStartedStep3.png";

import "swiper/css";
import "swiper/css/pagination";

const GetStartedCarousel = () => {
	return (
		<Swiper
			modules={[Pagination, Autoplay]}
			spaceBetween={20}
			slidesPerView={1}
			pagination={{ clickable: true }}
			autoplay={{
				delay: 5000,
			}}
			className={`get_started_swiper ${styles.swiper}`}
		>
			<SwiperSlide className='pb-4'>
				<div className={styles.image}>
					{/* Image Content */}
					<img src={getStartedStep1} width={360} height={360} alt='' />
				</div>
			</SwiperSlide>
			<SwiperSlide className='pb-4'>
				<div className={styles.image}>
					{/* Image Content */}
					<img src={getStartedStep2} width={360} height={300} alt='' />
				</div>
			</SwiperSlide>
			<SwiperSlide className='pb-4'>
				<div className={styles.image}>
					{/* Image Content */}
					<img src={getStartedStep3} width={400} height={360} alt='' />
				</div>
			</SwiperSlide>
		</Swiper>
	);
};

export default GetStartedCarousel;
