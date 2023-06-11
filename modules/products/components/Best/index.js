import React from "react";
import Image from "next/image";

import Rate from "../Common/Rate";
import Price from "../Common/Price";
import Title from "../Common/Title";
import styles from "./styles.module.scss";

function BestProducts({ products = [] }) {
  return (
    <div className={styles.container}>
      <h1>Best Sellers</h1>
      <div className={styles.container_list}>
        {products.length > 0 &&
          products.map((product) => {
            const { sku, images, title, category, rate, price } = product;
            return (
              <div key={sku} className={styles.box}>
                <div className={styles.box_image}>
                  <Image
                    src={images[0]}
                    width={50}
                    height={50}
                    alt={images[0]}
                  />
                </div>

                <div className={styles.box_desc}>
                  <Title title={title} category={category} />
                  <div>
                    <Rate count={rate} />
                  </div>
                  <Price price={price} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default BestProducts;
