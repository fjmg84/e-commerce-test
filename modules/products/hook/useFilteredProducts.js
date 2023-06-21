import { useEffect, useState } from "react";
import { filterProducts } from "../../../utils/functions/orderArray";

const useFilteredProducts = ({ categories = [], products = [], searchParams }) => {
    const [productsFilter, setProductsFilter] = useState([]);

    useEffect(() => {
        let productsData = [];

        if (categories.length > 0 && products.length > 0) {

            let categorySelected = categories.find(category => category.slug === searchParams?.get("category"))
            productsData = filterProducts({ listProducts: products, filter: categorySelected?.name })

            setProductsFilter(productsData);
        }
    }, [categories, products, searchParams]);

    return { productsFilter };
}

export default useFilteredProducts