import React, { useRef, useState, useEffect } from "react";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// 🌀 Import the custom carousel effect module
import EffectCarousel from "./effect-carousel.esm";

// 🧩 Import Swiper core & effect styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./effect-carousel.css";
import "./main.css";
import Slide from "./slider";
import { getProducts } from "../../../servicefile/productservice";


const Carousel = () => {
  const [products, setProducts] = useState([]);
  const swiperRef = useRef(null);


  const getdata = async () => {
    let data = await getProducts();
    if (data && data.length > 0) {
      let result = [...data];
      setProducts(result);
    }
  };

  useEffect(() => {
    getdata()
    swiperRef.current = new Swiper(".swiper", {
      modules: [Autoplay, Navigation, Pagination, EffectCarousel],
      effect: "carousel",
      carouselEffect: {
        opacityStep: 0.33,
        scaleStep: 0.2,
        sideSlides: 2,
      },
      grabCursor: true,
      loop: false,
      // loopAdditionalSlides: 4,
      slidesPerView: "auto",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
    });
  }, []);

  return (
    <div id="app">
      <div className="swiper">
        <div className="swiper-wrapper">
          {products.map((slide, index) => (
            <div className="swiper-slide" key={index}>
              <div className="swiper-carousel-animate-opacity">
                {/* <div className="SliderBox"> */}
                <Slide slideData={slide} name={slide.name} />
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Carousel;
