import React from "react";
import Image from "next/image";
import Link from "next/link";
import Rate from "../../Common/Rate";
import styles from "./styles.module.scss";

function BestProducts({ products }) {
  return (
    <div className={styles.container}>
      <h1>Best Sellers</h1>
      <div className={styles.container_list}>
        {products.map((product) => {
          return (
            <div key={product.sku} className={styles.box}>
              <div className={styles.box_image}>
                <Image
                  src={product.images[0]}
                  width={50}
                  height={50}
                  alt={product.images[0]}
                />
              </div>

              <div className={styles.box_desc}>
                <h4>
                  <Link
                    href={{
                      pathname: "/[category]/[title]",
                      query: {
                        category: product.category.replaceAll(" ", "_"),
                        title: product.title.replaceAll(" ", "_"),
                      },
                    }}
                  >
                    {product.title}
                  </Link>
                </h4>
                <h4>
                  <Rate count={product.rate} />
                </h4>
                <h4>{`$${product.price}.00`}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BestProducts;
