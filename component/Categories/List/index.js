import Link from "next/link";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { ProductContext } from "../../../modules/products/context";

function CategoriesList() {
  const { products } = useContext(ProductContext)
  const { listCategories } = products
  return (
    <div className={styles.container}>
      <h1>Categories</h1>
      <div className={styles.container_list}>
        <ul>
          {listCategories.map((category, index) => {
            const { name, count, slug } = category;
            return (
              <li key={index}>
                <Link
                  href={{
                    pathname: "/",
                    query: { category: slug },
                  }}
                >
                  <div>
                    <span>{name}</span>
                    <span>({count})</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CategoriesList;
