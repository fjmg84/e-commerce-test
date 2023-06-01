import React from "react";
import Link from "next/link";

import ImageCard from "../../Common/Image";
import Button from "../../Common/Button";

import styles from "./styles.module.scss";
import Rate from "../../Common/Rate";

function CardProduct({ product, showRate = false }) {
  return (
    <div className={styles.container}>
      <div className={styles.boxCard}>
        {product.images.length >= 2 ? (
          <div className={styles.boxCardImages}>
            <ImageCard
              path={product.images[0]}
              width={210}
              height={300}
              alt={product.images[0]}
            />
            <ImageCard
              path={product.images[1]}
              width={210}
              height={300}
              alt={product.images[1]}
            />
          </div>
        ) : (
          <ImageCard
            path={product.images[0]}
            width={210}
            height={300}
            alt={product.images[0]}
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
        <h5>{product.category}</h5>
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
        <h4>{`$${product.price}.00`}</h4>
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
