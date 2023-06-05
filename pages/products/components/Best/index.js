import React from "react";
import Image from "next/image";

import Rate from "../Common/Rate";
import Price from "../Common/Price";
import Title from "../Common/Title";
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
                <Title title={product.title} category={product.category} />
                <div>
                  <Rate count={product.rate} />
                </div>
                <Price price={product.price} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BestProducts;
