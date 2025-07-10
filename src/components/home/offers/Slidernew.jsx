// components/OfferSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from 'swiper/modules';

const offers = [
  {
    title: 'Pokebazzi',
    rating: 4.8,
    cashback: '10% Cashback',
    description: 'Bet $1+, Get 10 100% Profit Boost Tokens!',
    endsIn: '22hrs 9min 99sec',
    rakeback: '$200 / Save 55%',
    features: ['Unlimited premium', 'Unlimited premium', 'Unlimited premium'],
    promoCode: 'POKERBAZZI25',
  },
  {
    title: 'Pokebazzi 1',
    rating: 4.8,
    cashback: '10% Cashback',
    description: 'Bet $1+, Get 10 100% Profit Boost Tokens!',
    endsIn: '22hrs 9min 99sec',
    rakeback: '$200 / Save 55%',
    features: ['Unlimited premium', 'Unlimited premium', 'Unlimited premium'],
    promoCode: 'POKERBAZZI25',
  },
  {
    title: 'Pokebazzi 2',
    rating: 4.8,
    cashback: '10% Cashback',
    description: 'Bet $1+, Get 10 100% Profit Boost Tokens!',
    endsIn: '22hrs 9min 99sec',
    rakeback: '$200 / Save 55%',
    features: ['Unlimited premium', 'Unlimited premium', 'Unlimited premium'],
    promoCode: 'POKERBAZZI25',
  },
  {
    title: 'Pokebazzi 3',
    rating: 4.8,
    cashback: '10% Cashback',
    description: 'Bet $1+, Get 10 100% Profit Boost Tokens!',
    endsIn: '22hrs 9min 99sec',
    rakeback: '$200 / Save 55%',
    features: ['Unlimited premium', 'Unlimited premium', 'Unlimited premium'],
    promoCode: 'POKERBAZZI25',
  },
  {
    title: 'Pokebazzi 4',
    rating: 4.8,
    cashback: '10% Cashback',
    description: 'Bet $1+, Get 10 100% Profit Boost Tokens!',
    endsIn: '22hrs 9min 99sec',
    rakeback: '$200 / Save 55%',
    features: ['Unlimited premium', 'Unlimited premium', 'Unlimited premium'],
    promoCode: 'POKERBAZZI25',
  },
  {
    title: 'Pokebazzi 5',
    rating: 4.8,
    cashback: '10% Cashback',
    description: 'Bet $1+, Get 10 100% Profit Boost Tokens!',
    endsIn: '22hrs 9min 99sec',
    rakeback: '$200 / Save 55%',
    features: ['Unlimited premium', 'Unlimited premium', 'Unlimited premium'],
    promoCode: 'POKERBAZZI25',
  },
  {
    title: 'Pokebazzi',
    rating: 4.8,
    cashback: '10% Cashback',
    description: 'Bet $1+, Get 10 100% Profit Boost Tokens!',
    endsIn: '22hrs 9min 99sec',
    rakeback: '$200 / Save 55%',
    features: ['Unlimited premium', 'Unlimited premium', 'Unlimited premium'],
    promoCode: 'POKERBAZZI25',
  },
  {
    title: 'Pokebazzi',
    rating: 4.8,
    cashback: '10% Cashback',
    description: 'Bet $1+, Get 10 100% Profit Boost Tokens!',
    endsIn: '22hrs 9min 99sec',
    rakeback: '$200 / Save 55%',
    features: ['Unlimited premium', 'Unlimited premium', 'Unlimited premium'],
    promoCode: 'POKERBAZZI25',
  },
  // Add more objects for other cards
];

export default function OfferSlider() {
  return (
    <div className="w-full flex justify-center items-center py-10 bg-white">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-[90%] max-w-5xl"
      >
        {offers.map((offer, index) => (
          <SwiperSlide key={index} className="w-80 bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="bg-[#101A3E] text-white py-4 rounded-t-xl">
              <div className="text-2xl font-bold">PokerBaazi</div>
              <div className="text-sm bg-pink-100 text-pink-600 px-2 py-1 rounded-full inline-block mt-2">{offer.cashback}</div>
            </div>
            <div className="mt-4 text-lg font-semibold">{offer.title}</div>
            <div className="text-yellow-500 mb-1">★★★★☆ <span className="text-sm text-gray-600">{offer.rating}</span></div>
            <p className="text-sm text-gray-600">{offer.description}</p>
            <div className="text-red-500 mt-3">{offer.endsIn}</div>
            <div className="text-black font-semibold">{offer.rakeback}</div>
            <ul className="text-green-600 mt-3 space-y-1 text-sm">
              {offer.features.map((feature, idx) => (
                <li key={idx}>✅ {feature}</li>
              ))}
            </ul>
            <div className="bg-gray-100 rounded-lg py-2 px-4 mt-4 font-mono text-sm">
              {offer.promoCode}
            </div>
            <button className="mt-4 bg-rose-500 text-white px-4 py-2 rounded-full">Claim Now</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
