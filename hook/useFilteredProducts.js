import { useEffect, useState } from "react";
import { filterProducts } from "../utils/functions/orderArray";

const useFilteredProducts = ({ categories, products, searchParams }) => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        let productsFilter = [];

        let categorySelected = categories.find(category => category.slug === searchParams?.get("category"))
        productsFilter = filterProducts({ listProducts: products, filter: categorySelected?.name })

        setProductsData(productsFilter);
    }, [categories, products, searchParams]);

    return productsData;
}

export default useFilteredProducts