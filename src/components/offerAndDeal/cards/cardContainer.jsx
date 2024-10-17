import React, { useState, useEffect } from "react";
import styles from "./cardContainer.module.css";
import OfferCard from "./card";
import { Link } from "react-router-dom";
// import { generateArray } from "../../../utils/generateArray";
import { getProducts } from "../../../servicefile/productservice";

const OfferCardContainer = () => {
	const [products, setProducts] = useState([]);
	const token = localStorage.getItem("token") ? true : false;

	const getdata = async () => {
		let data = await getProducts();
		if (data && data.length > 0) {
			let result = [...data];
			setProducts(result);
		}
	};

	useEffect(() => {
		getdata();
		// eslint-disable-next-line
	}, []);

	return (
		<div className={styles.offer_cards_container}>
			{products &&
				products.length > 0 &&
				products.map((item, index) => {
					return (
						<Link
							to={token ? "/description" : "/"}
							style={{ textDecoration: "none" }}
							key={index}
						>
							<OfferCard
								fillBtn={(index + 1) % 2 === 0 ? false : true}
								product={item}
							/>
						</Link>
					);
				})}
		</div>
	);
};

export default OfferCardContainer;
