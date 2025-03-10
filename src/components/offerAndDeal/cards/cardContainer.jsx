import React, { useState, useEffect, useContext } from "react";
import styles from "./cardContainer.module.css";
import OfferCard from "./card";
import { Link } from "react-router-dom";
// import { generateArray } from "../../../utils/generateArray";
import { getProducts } from "../../../servicefile/productservice";
import { UserContext } from "../../../App";

const OfferCardContainer = ({ searchTerm }) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const { userData } = useContext(UserContext);

	const getdata = async () => {
		let data = await getProducts();
		if (data && data.length > 0) {
			let result = [...data];
			setProducts(result);
			setFilteredProducts(result);
		}
	};

	useEffect(() => {
		if (searchTerm && searchTerm.length > 3) {
			let filteredData = products.filter((item) => {
				return item.name.toLowerCase().includes(searchTerm.toLowerCase());
			});
			if (filteredData.length === 0) {
				setFilteredProducts(products);
			} else {
				setFilteredProducts(filteredData);
			}
		} else {
			setFilteredProducts(products);
		}
	}, [searchTerm]);

	useEffect(() => {
		getdata();
		// eslint-disable-next-line
	}, []);

	return (
		<div className={styles.offer_cards_container}>
			{filteredProducts &&
				filteredProducts.length > 0 &&
				filteredProducts.map((item, index) => {
					return (
						
							<OfferCard
								fillBtn={(index + 1) % 2 === 0 ? false : true}
								product={item}
								index={index}
							/>
						
					);
				})}
		</div>
	);
};

export default OfferCardContainer;
