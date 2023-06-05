import React, { useEffect, useState } from "react";
import { SideBySideMagnifier } from "react-image-magnifiers";
import Image from "next/image";

import Button from "../../../../component/Common/Button";
import Rate from "../Common/Rate";
import Price from "../Common/Price";
import Title from "../Common/Title";
import Description from "../Common/Description";

import styles from "./styles.module.scss";

function ShowProduct({ data }) {
  const [productData, setProductData] = useState({ product: {}, image: null });

  const { product, image } = productData;

  useEffect(() => {
    setProductData({ ...data });
  }, [data]);

  const handleSelectImageProduct = (index) => {
    setProductData({
      ...productData,
      image: product.images[index],
    });
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.title__container}>
        {product.title && product.category && (
          <Title
            title={product.title}
            category={product.category}
            myClassName={styles.product__title}
          />
        )}

        <ul>
          <li>Home : </li>
          <li>{product?.category} : </li>
          <li>{product?.title}</li>
        </ul>
      </div>

      <div className={styles.product__container}>
        <div className={styles.product__gallery}>
          {image && (
            <SideBySideMagnifier
              imageSrc={image}
              imageAlt="Example"
              fillAvailableSpace={false}
            />
          )}

          {product.images &&
            product.images.length > 1 &&
            product.images.map((image, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleSelectImageProduct(index)}
                >
                  <Image
                    src={image}
                    alt={image}
                    width={50}
                    height={80}
                    priority
                  />
                </div>
              );
            })}
        </div>

        <div className={styles.product__data}>
          <Price price={product.price} />
          <p>
            <Rate count={product.rate} />
          </p>
          <Description description={product.description} />

          {product?.count_stock > 0 && (
            <div className={styles.form__container}>
              <form>
                <input type="number" defaultValue={1} />
                <Button
                  handler={(e) => handleAddToCart(e)}
                  text="add to cart"
                  myClassName={styles.btn}
                />
              </form>
            </div>
          )}

          <div className={styles.product__info__table}>
            <table>
              <tbody>
                <tr>
                  <td>SKU</td>
                  <td>{product?.sku}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{product?.category}</td>
                </tr>
                <tr>
                  <td>Tag</td>
                  <td>{product?.tags?.join(",")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.product_info_extra}>
          <ul>
            <li className={styles.active}>
              description
              <span />
            </li>
            <li>
              Additional information
              <span />
            </li>
            <li>
              Review (1)
              <span />
            </li>
          </ul>
          <Description description={product?.description} />
        </div>
      </div>
    </>
  );
}

export default ShowProduct;