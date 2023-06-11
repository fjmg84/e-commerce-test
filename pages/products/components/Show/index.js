import React, { useEffect, useState } from "react";
import { SideBySideMagnifier } from "react-image-magnifiers";
import Image from "next/image";

import Button from "../../../../component/Common/Button";
import Rate from "../Common/Rate";
import Price from "../Common/Price";
import Title from "../Common/Title";
import Description from "../Common/Description";

import styles from "./styles.module.scss";

function ShowProduct({ productShow, imageShow }) {
  const [productSelected, setProductSelected] = useState({
    product: {
      sku: null,
      title: null,
      category: null,
      images: [],
      price: null,
      rate: null,
      description: null,
      tags: [],
    },
    image: null,
    loading: false,
  });

  const { product, image, loading } = productSelected;
  const { sku, title, category, images, price, rate, description, tags } =
    product;

  useEffect(() => {
    setProductSelected({
      ...productSelected,
      product: { ...productShow },
      image: imageShow,
    });
  }, [productShow, imageShow]);

  useEffect(() => {
    if (loading) setProductSelected({ ...productSelected, loading: false });
  }, [loading]);

  const handleSelectImageProduct = (index) => {
    setProductSelected({
      ...productSelected,
      image: images[index],
      loading: true,
    });
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.title__container}>
        {title && category && (
          <Title
            title={title}
            category={category}
            myClassName={styles.product__title}
          />
        )}

        <ul>
          <li>Home : </li>
          {category && <li>{category} : </li>}
          {title && <li>{title}</li>}
        </ul>
      </div>

      <div className={styles.product__container}>
        <div className={styles.product__gallery}>
          {loading && (
            <div className={styles.loading}>
              <p>
                <i className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                <span className="sr-only">Loading...</span>
              </p>
            </div>
          )}
          {image && (
            <>
              <SideBySideMagnifier
                imageSrc={image}
                imageAlt="image effects"
                fillAvailableSpace={false}
              />
              {images.length > 1 &&
                images.map((image, index) => {
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
            </>
          )}
        </div>

        <div className={styles.product__data}>
          {price && <Price price={price} />}
          {rate && (
            <div>
              <Rate count={rate} />
            </div>
          )}
          {description && <Description description={description} />}
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
                {sku && (
                  <tr>
                    <td>SKU</td>
                    <td>{sku}</td>
                  </tr>
                )}
                {category && (
                  <tr>
                    <td>Category</td>
                    <td>{category}</td>
                  </tr>
                )}
                {tags && (
                  <tr>
                    <td>Tag</td>
                    <td>{tags.join(",")}</td>
                  </tr>
                )}
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
          {description && <Description description={description} />}
        </div>
      </div>
    </>
  );
}

export default ShowProduct;
