import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../../../../component/Common/Button";
import Rate from "../Common/Rate";
import Category from "../Common/Category";
import Title from "../Common/Title";
import Price from "../Common/Price";

import styles from "./styles.module.scss";
import { formattedString } from "../../../../utils/functions/orderArray";

function CardProduct({
  product = {
    images: [],
    category: undefined,
    title: undefined,
    price: undefined,
    rate: undefined,
    count_stock: undefined,
  },
  showRate = false,
}) {
  const { images, category, title, price, rate, count_stock } = product;

  return (
    <div className={styles.container}>
      <div className={styles.boxCard}>
        <Link
          href={{
            pathname: "/products/[category]/[title]",
            query: {
              category: formattedString(category, "_", " "),
              title: formattedString(title, "_", " "),
            },
          }}
        >
          {images.length >= 2 ? (
            <div className={styles.boxCardImages}>
              <Image
                src={images[0]}
                width={210}
                height={300}
                alt={images[0]}
                priority
              />
              <Image
                src={images[1]}
                width={210}
                height={300}
                alt={images[1]}
                priority
              />
            </div>
          ) : (
            <Image
              src={images[0]}
              width={210}
              height={300}
              alt={images[0]}
              priority
            />
          )}
        </Link>

        <div className={styles.boxCardActions}>
          <span>
            <Button
              image={"fa fa-heart-o"}
              myClassName={styles.boxCardActionsBtn}
            />
            {count_stock > 1 && (
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

      <div className={styles.description__card}>
        {category && <Category category={category} />}

        {category && title && <Title title={title} category={category} />}

        {count_stock > 1 ? (
          <Price price={price} />
        ) : (
          <span className={styles.outOfStock}>out of stock</span>
        )}

        {showRate && (
          <p>
            <Rate count={rate} />
          </p>
        )}
      </div>
    </div>
  );
}

export default CardProduct;
