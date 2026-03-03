

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import EffectCarousel from "../demo-vite/effect-carousel.esm"
import { getProductsSimple } from "../../../servicefile/productservice";
import { getShoppingClass } from "../../../helperFxns/colorCode";
import { Percent, Tag, ShoppingBag } from "lucide-react";
import Loading from "../../common/Loading/Loading";


const CenterSlider = () => {
    const navigate = useNavigate();
    const [allProductIds, setAllProductIds] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProductsInfo = async () => {
        const res = await getProductsSimple();
        setLoading(false);
        if (Array.isArray(res)) {
            setAllProductIds([...res, ...res, ...res, ...res, ...res, ...res]);
        } else {
            console.warn('getProductsSimple returned non-array:', res);
            setAllProductIds([]);
        }
    };

    useEffect(() => {
        getProductsInfo();
    }, []);

    return (
        <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectCarousel]}
            effect="carousel"
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: false,
            }}
            navigation={false}
            breakpoints={{
                991: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 1,
                },
            }}
        >
            <div className="swiper-carousel-animate-opacity">
                {loading && <Loading size="md" />}
                {/* Slides */}
                {allProductIds && allProductIds.length > 0 && allProductIds.map((item, index) => (
                    <SwiperSlide key={index}><div className={`slide-item ${getShoppingClass(item.name)}`}>
                        <div className="SliderBox ">
                            <div className="SliderBanner">
                                <span>Exclusive</span>
                            </div>
                            <div className="SliderContent">
                                <div className="StarSlider">
                                    <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_5805_26377)">
                                            <path d="M6.93782 2.57617L8.88245 6.45985L13.2311 7.08645L10.0845 10.1078L10.8271 14.3761L6.93782 12.3598L3.04857 14.3761L3.79118 10.1078L0.644531 7.08645L4.99319 6.45985L6.93782 2.57617Z" fill="#FDDB36" stroke="#FDDB36" stroke-width="0.786661" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_5805_26377">
                                                <rect width="13.875" height="16.952" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    {item?.rating?.editorRating}
                                </div>
                                <div className="Sliderheading">
                                    <h3>{item.name}</h3>
                                </div>
                                <div className="OfferSlider">
                                    <span>
                                                <Percent size={16} color="#0052CC" />
                                            Cashback
                                    </span>
                                    <h3>
                                        Upto 55% off
                                    </h3>
                                </div>
                                <div className="OfferSlider">
                                    <span>
                                                <Tag size={16} color="#1A73E8" />
                                            Bonus
                                    </span>
                                    <h3>
                                        100% upto $1000
                                    </h3>
                                </div>
                                <p className="GetProfitdes">
                                    <span>Code</span>
                                    <p>RBACKK</p>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_5805_26346)">
                                            <path d="M5.0179 0.0820312H10.4769C10.9796 0.0820312 11.3867 0.48918 11.3867 0.991862V7.36068H10.4769V0.991862H5.0179V0.0820312ZM3.65316 1.90169H8.65723C9.15991 1.90169 9.56706 2.30884 9.56706 2.81152V9.18034C9.56706 9.68302 9.15991 10.0902 8.65723 10.0902H3.65316C3.15048 10.0902 2.74333 9.68302 2.74333 9.18034V2.81152C2.74333 2.30884 3.15048 1.90169 3.65316 1.90169ZM3.65316 9.18034H8.65723V2.81152H3.65316V9.18034Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_5805_26346">
                                                <rect width="10.918" height="10.918" fill="white" transform="matrix(-1 0 0 1 11.457 0.0410156)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </p>
                                <ul className="SliderList">
                                    <li>
                                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 7L5 10L11 4" stroke="#28A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        Instant Withdrwals
                                    </li>
                                    <li>
                                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 7L5 10L11 4" stroke="#28A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        20% off on cashback upto 1000$
                                    </li>
                                    <li>
                                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 7L5 10L11 4" stroke="#28A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Unlimited premium
                                    </li>
                                </ul>
                                <div className="SliderFooter">
                                    <button className="Shoppingbazzi25" onClick={() => navigate(`/review/${item._id}`)}>View Details</button>
                                    <button className="ClaimNow" onClick={() => navigate(`/dashboard/shoppingid`)}>Grab Deal</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                ))}
            </div>

        </Swiper>
    );
};

export default CenterSlider;
