import React from "react";
import styles from "./deals.module.css";
import gift from "../../../assets/gift.png";

import mike from "../../../assets/mike.png";
import chat from "../../../assets/chat.png";
import live from "../../../assets/live.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import DealCard from "./deal_card";
import Reveal from "../../common/reveal/Reveal";
// import CarouselSlider from "./newJSX";

const cardInfo = [
  {
    title: "Sign Up or Deposit Bonuses",
    description:
      "Get extra value and more opportunities to boost your shopping bankroll right from the start!",
    img: gift,
  },
  {
    title: "Exclusive promotions",
    description:
      "Elevate Your Earnings with Exclusive Promotions: Rake Races and Points Races",
    img: mike,
  },
  {
    title: "Personal VIP Support",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sapien scelerisque ut elit nunc nulla mi gravida eros. ",
    img: chat,
  },
  {
    title: "Chances at live Tournaments",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sapien scelerisque ut elit nunc nulla mi gravida eros. ",
    img: live,
  },
];

const Deals = () => {
  return (
    <></>
    // <CarouselSlider />
    // <div className={`${styles.deals_container} container_max`}>
    //   <div className={styles.content}>
    //     <Reveal>
    //       <div className={styles.head_container}>
    //         <div className={styles.head}>Our Cashback Deals</div>
    //         <div className={styles.subhead}>
    //           Beyond Monthly Boosts: Your Benefits with Cashback.com
    //         </div>
    //       </div>
    //     </Reveal>

    //     <div className={styles.deals_card_container}>
    //       <CarouselSlider />
    //       {/* <Swiper
    // 					modules={[Pagination, Autoplay]}
    // 					spaceBetween={20}
    // 					slidesPerView={1}
    // 					className={styles.swiper}
    // 					pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
    // 					autoplay={{
    // 						delay: 5000,
    // 					}}
    // 					breakpoints={{
    // 						0: {
    // 							slidesPerView: 1,
    // 						},
    // 						600: {
    // 							slidesPerView: 2,
    // 						},
    // 						800: {
    // 							slidesPerView: 3,
    // 						},
    // 						1000: {
    // 							slidesPerView: 4,
    // 						},
    // 					}}
    // 				>
    // 					{cardInfo.map((deal, index) => {
    // 						return (
    // 							<SwiperSlide key={index}>
    // 								<DealCard
    // 									title={deal.title}
    // 									description={deal.description}
    // 									img={deal.img}
    // 									lastIndex={index === cardInfo.length - 1}
    // 								/>
    // 							</SwiperSlide>
    // 						);
    // 					})}
    // 				</Swiper> */}
    //       <div className="custom-swiper-pagination"></div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Deals;
