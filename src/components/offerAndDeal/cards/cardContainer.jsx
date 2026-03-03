import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../../App";
import { getShoppingSiteImage } from "../../../helperFxns/colorCode";
import { mockStores } from "../../../data/mockStores";
import { toast } from "react-toastify";

const OfferCardContainer = ({ searchTerm }) => {
	const navigate = useNavigate();
	const [filteredProducts, setFilteredProducts] = useState([]);
	const { userData } = useContext(UserContext);

	// Use mock stores data instead of API call
	useEffect(() => {
		// Map mock stores to product format
		const storesAsProducts = mockStores.map((store, index) => ({
			_id: store.id,
			name: store.name,
			features: [store.cashbackRate, store.category],
			offer: store.cashbackRate,
			smallDescription: `Shop at ${store.name} and earn cashback on every purchase.`,
			url: store.url,
			isShoppingStore: true
		}));
		
		setFilteredProducts(storesAsProducts);
	}, []);

	// Filter based on search term
	useEffect(() => {
		if (searchTerm) {
			const filtered = mockStores
				.map((store, index) => ({
					_id: store.id,
					name: store.name,
					features: [store.cashbackRate, store.category],
					offer: store.cashbackRate,
					smallDescription: `Shop at ${store.name} and earn cashback on every purchase.`,
					url: store.url,
					isShoppingStore: true
				}))
				.filter(item => 
					item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					item.category?.toLowerCase().includes(searchTerm.toLowerCase())
				);
			setFilteredProducts(filtered);
		}
	}, [searchTerm]);

	// Handle Grab Deal button click for shopping stores
	const handleGrabDeal = (item) => {
		// Show tracking activated toast
		toast.success("Tracking Activated! Redirecting to store...");
		
		// Open store URL in new tab after a short delay
		setTimeout(() => {
			if (item.url) {
				window.open(item.url, '_blank');
			}
		}, 500);
	};

	return (
		<div>
			{filteredProducts &&
				filteredProducts.length > 0 &&
				filteredProducts.map((item, index) =>
					<div className="dealPage" key={index}>
						<div className="deal-ribbon">
							<span>EXCLUSIVE DEALS AND CASHBACK</span> .
							<span>BEST DEALS 50% OFF</span>
						</div>

						<div class="deal-content">
							<div className="logo-section">
								<img src={getShoppingSiteImage(item.name)} alt={item.name} />
							</div>

							<div className="features">
								<ul>
									{item && item.features && item.features.length > 0 && item.features.map((val, ind) => (
										<li key={ind}>
											<svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M1 4.5918L4 7.5918L10 1.5918" stroke="#28A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
											</svg>
											{val}
										</li>))}
								</ul>
							</div>

							<div className="payments">
								{/* Payment icons placeholder */}
							</div>

							<div className="right-section">
								<span onClick={() => { navigate(`/review/${item._id}`) }}>Review</span>
								<div className="DealsBtnpage">
									<button className="coupon-btn">
										{item.offer || 'CASHBACK'}
										<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clip-path="url(#clip0_7190_11624)">
												<path d="M5.15072 0.173828H10.6097C11.1124 0.173828 11.5195 0.580977 11.5195 1.08366V7.45247H10.6097V1.08366H5.15072V0.173828ZM3.78597 1.99349H8.79004C9.29272 1.99349 9.69987 2.40064 9.69987 2.90332V9.27213C9.69987 9.77482 9.29272 10.182 8.79004 10.182H3.78597C3.28329 10.182 2.87614 9.77482 2.87614 9.27213V2.90332C2.87614 2.40064 3.28329 1.99349 3.78597 1.99349ZM3.78597 9.27213H8.79004V2.90332H3.78597V9.27213Z" fill="black" />
											</g>
											<defs>
												<clipPath id="clip0_7190_11624">
													<rect width="10.918" height="10.918" fill="white" transform="matrix(-1 0 0 1 11.5898 0.132812)" />
												</clipPath>
											</defs>
										</svg>
									</button>
									{/* Grab Deal button - different logic for shopping stores vs shopping sites */}
									<button 
										className="claim-btn" 
										onClick={() => {
											if (item.isShoppingStore) {
												handleGrabDeal(item);
											} else {
												navigate(`/dashboard/shoppingid`);
											}
										}}
									>
										{item.isShoppingStore ? 'Grab Deal' : 'Claim Deal'}
									</button>
								</div>

							</div>
						</div>
					</div>
				)}
		</div>

	);
};

export default OfferCardContainer;
