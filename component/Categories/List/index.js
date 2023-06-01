import Link from "next/link";
import styles from "./styles.module.scss";

function CategoriesList({ categories }) {
  return (
    <div className={styles.container}>
      <h1>Categories</h1>
      <div className={styles.container_list}>
        <ul>
          {categories.map((category, index) => {
            return (
              <li key={index}>
                <Link
                  href={{
                    pathname: "/",
                    query: { category: category.name },
                  }}
                >
                  <div>
                    <span>{category.name}</span>
                    <span>({category.count})</span>
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
