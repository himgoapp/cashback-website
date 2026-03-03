// components/OfferSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { ShoppingBag, Tag, Percent, Star } from 'lucide-react';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const offers = [
  {
    title: 'Amazon',
    rating: 4.8,
    cashback: '10% Cashback',
    description: 'Shop & Save on millions of products',
    endsIn: '22hrs 9min 99sec',
    cashbackAmount: 'Up to $200 / Save 55%',
    features: ['Free Shipping', 'Easy Returns', 'Secure Payments'],
    promoCode: 'AMAZON10',
  },
  {
    title: 'Flipkart',
    rating: 4.7,
    cashback: '8% Cashback',
    description: 'Big Billion Days Deals & Discounts',
    endsIn: '18hrs 45min 30sec',
    cashbackAmount: 'Up to ₹5000 / Save 60%',
    features: ['No Cost EMI', 'Exchange Offers', '24hr Delivery'],
    promoCode: 'FLIPKART8',
  },
  {
    title: 'Myntra',
    rating: 4.6,
    cashback: '12% Cashback',
    description: 'Fashion & Lifestyle Deals',
    endsIn: '2days 5hrs 20min',
    cashbackAmount: 'Up to ₹3000 / Save 50%',
    features: ['Fashion Brands', 'Easy Returns', 'Style Tips'],
    promoCode: 'MYNTRA25',
  },
  {
    title: 'Ajio',
    rating: 4.5,
    cashback: '15% Cashback',
    description: 'Curated Fashion Collections',
    endsIn: '3days 10hrs 15min',
    cashbackAmount: 'Up to ₹2500 / Save 45%',
    features: ['Premium Brands', 'Festive Sales', 'New Arrivals'],
    promoCode: 'AJIO15',
  },
  {
    title: 'Meesho',
    rating: 4.4,
    cashback: '20% Cashback',
    description: 'Affordable Shopping for Everyone',
    endsIn: '5days 8hrs 30sec',
    cashbackAmount: 'Up to ₹1000 / Save 70%',
    features: ['Budget Friendly', 'COD Available', 'Daily Deals'],
    promoCode: 'MEESHO20',
  },
  {
    title: 'Snapdeal',
    rating: 4.3,
    cashback: '7% Cashback',
    description: 'Value Shopping with Best Prices',
    endsIn: '1day 12hrs 45min',
    cashbackAmount: 'Up to ₹2000 / Save 40%',
    features: ['Super Value', 'Gift Cards', 'Easy Returns'],
    promoCode: 'SNAPDEAL7',
  },
  {
    title: 'Paytm Mall',
    rating: 4.5,
    cashback: '9% Cashback',
    description: 'Shopping with Cashback Rewards',
    endsIn: '4days 6hrs 20min',
    cashbackAmount: 'Up to ₹3500 / Save 55%',
    features: ['Cashback Points', 'Bank Offers', 'No Convenience Fee'],
    promoCode: 'PAYTM9',
  },
  {
    title: 'ShopClues',
    rating: 4.2,
    cashback: '11% Cashback',
    description: 'Budget Shopping Made Easy',
    endsIn: '6days 15hrs 10sec',
    cashbackAmount: 'Up to ₹1500 / Save 65%',
    features: ['Wholesale Prices', 'Daily Auctions', 'Free Shipping'],
    promoCode: 'SHOPCLUES11',
  },
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
          <SwiperSlide key={index} className="w-80 bg-white rounded-xl shadow-md p-5 text-center border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-t-lg">
              <div className="text-2xl font-bold flex items-center justify-center gap-2">
                <ShoppingBag size={24} />
                {offer.title}
              </div>
              <div className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full inline-block mt-2 font-semibold flex items-center gap-1">
                <Percent size={14} /> {offer.cashback}
              </div>
            </div>
            <div className="mt-4 text-lg font-semibold text-gray-800">{offer.title}</div>
            <div className="flex items-center justify-center gap-1 mb-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < Math.floor(offer.rating) ? "#FBBC38" : "none"} stroke={i < Math.floor(offer.rating) ? "#FBBC38" : "#CCCFD2"} />
              ))}
              <span className="text-sm text-gray-600 ml-1">{offer.rating}</span>
            </div>
            <p className="text-sm text-gray-600">{offer.description}</p>
            <div className="text-orange-500 mt-2 font-semibold text-sm flex items-center justify-center gap-1">
              <Tag size={14} /> {offer.endsIn}
            </div>
            <div className="text-blue-600 font-bold mt-2">{offer.cashbackAmount}</div>
            <ul className="text-green-600 mt-3 space-y-1 text-sm">
              {offer.features.map((feature, idx) => (
                <li key={idx} className="flex items-center justify-center gap-1">
                  <span className="text-green-500">✓</span> {feature}
                </li>
              ))}
            </ul>
            <div className="bg-gray-100 rounded-lg py-2 px-4 mt-4 font-mono text-sm flex items-center justify-center gap-2">
              <Tag size={14} className="text-gray-500" />
              {offer.promoCode}
            </div>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 w-full">
              <ShoppingBag size={18} /> Grab Deal
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
