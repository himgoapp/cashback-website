// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { CarouselEffect } from "./CarouselEffect";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css"; // your SCSS from earlier

const slides = [
  {
    img: "/images/guardians-of-the-galaxy.jpg",
    title: "Guardians Of The Galaxy",
    desc: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
  },
  {
    img: "/images/justice-league.jpg",
    title: "Justice League",
    desc: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
  },
  {
    img: "/images/spider-man.jpg",
    title: "Spider-Man: Far from Home",
    desc: "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
  },
  {
    img: "/images/suicide-squad.jpg",
    title: "The Suicide Squad",
    desc: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
  },
  {
    img: "/images/thor-ragnarok.jpg",
    title: "Thor: Ragnarok",
    desc: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
  },

  // repeat slides if needed
];

export default function CarouselSlider() {
  return (
    <div id="app">
      <Swiper
        modules={[Navigation, Pagination, CarouselEffect]}
        effect="carousel"
        navigation
        pagination={{ clickable: true }}
        loop
        className="swiper-carousel"
      >
        {slides.concat(slides).map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-carousel-animate-opacity">
              <img src={slide.img} alt={slide.title} />
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
