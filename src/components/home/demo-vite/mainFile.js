import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import SwiperMain from "./main.js";

import ACRPoker from "../../../assets/ACRPoker.png"; // adjust path as per your structure
import "./main.scss"; // your SCSS or CSS file

const slides = [
  {
    title: "Guardians Of The Galaxy",
    description:
      "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
  },
  {
    title: "Justice League",
    description:
      "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
  },
  {
    title: "Spider-Man: Far from Home",
    description:
      "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
  },
  {
    title: "The Suicide Squad",
    description:
      "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
  },
  {
    title: "Thor: Ragnarok",
    description:
      "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
  },
  {
    title: "Doctor Strange",
    description:
      "America Chavez and a version of Stephen Strange are chased by a demon in the space between universes while searching for the Book of Vishanti",
  },
];

const Carousel = () => {
  return (
    <div id="app">
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        className="swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-carousel-animate-opacity">
              <img src={ACRPoker} alt={slide.title} />
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
