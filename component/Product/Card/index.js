import React from "react";
import Image from "next/image";

import Button from "../../Common/Button";
import Rate from "../Common/Rate";
import Category from "../Common/Category";
import Title from "../Common/Title";
import Price from "../Common/Price";

import styles from "./styles.module.scss";

function CardProduct({ product, showRate = false }) {
  return (
    <div className={styles.container}>
      <div className={styles.boxCard}>
        {product.images.length >= 2 ? (
          <div className={styles.boxCardImages}>
            <Image
              src={product.images[0]}
              width={210}
              height={300}
              alt={product.images[0]}
              priority
            />
            <Image
              src={product.images[1]}
              width={210}
              height={300}
              alt={product.images[1]}
            />
          </div>
        ) : (
          <Image
            src={product.images[0]}
            width={210}
            height={300}
            alt={product.images[0]}
            priority
          />
        )}

        <div className={styles.boxCardActions}>
          <span>
            <Button
              image={"fa fa-heart-o"}
              myClassName={styles.boxCardActionsBtn}
            />
            {product.count_stock > 1 && (
              <Button
                text="add to cart"
                myClassName={styles.boxCardActionsBtn}
              />
            )}
            <Button
              image={"fa fa-search"}
              myClassName={styles.boxCardActionsBtn}
            />
          </span>
        </div>
      </div>

      <div className={styles.descriptionCard}>
        <Category category={product.category} />
        <Title title={product.title} category={product.category} />
        <Price price={product.price} />

        {product.count_stock < 1 && (
          <span className={styles.outOfStock}>out of stock</span>
        )}

        {showRate && (
          <p>
            <Rate count={product.rate} />
          </p>
        )}
      </div>
    </div>
  );
}

export default CardProduct;
