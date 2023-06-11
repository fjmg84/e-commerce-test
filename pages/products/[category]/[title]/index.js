import React, { useEffect, useState } from "react";
import Head from "next/head";

import ShowProduct from "../../../../modules/products/components/Show";
import CardProduct from "../../../../modules/products/components/Card";
import BannerFooter from "../../../../component/Banners/Footer";

import mockData from "../../../../mock/data.json";
import { formattedString } from "../../../../utils/functions/orderArray";
import styles from "./styles.module.scss";

export default function ProductShow({ category, title }) {
  const [data, setData] = useState({
    productShow: {},
    imageShow: undefined,
    productsRelatives: [],
  });
  const [productNotFound, setProductNotFound] = useState(undefined);

  const { productShow, imageShow, productsRelatives } = data;

  useEffect(() => {
    let productCategory = mockData.filter(
      (data) => data.category === formattedString(category, " ", "_")
    );
    let productFilter = productCategory.filter(
      (product) => product.title === formattedString(title, " ", "_")
    );

    if (productFilter.length === 0)
      return setProductNotFound("Product not found");

    setData({
      productShow: productFilter[0],
      imageShow: productFilter[0].images[0],
      productsRelatives: productCategory.slice(1, 4),
    });
  }, [category, title]);

  return (
    <>
      <Head>
        <title>{`E-Commerce ${category}-${title}`}</title>
      </Head>
      {productNotFound ? (
        <div className={styles.productNotFound}>
          <h2>{productNotFound}</h2>
        </div>
      ) : (
        <>
          <ShowProduct productShow={productShow} imageShow={imageShow} />

          {productsRelatives && (
            <div className={styles.banner_footer}>
              <BannerFooter
                title="Relative Product"
                myClassName={styles.relative__title}
              >
                {productsRelatives.map((product, index) => (
                  <CardProduct key={index} product={product} showRate={true} />
                ))}
              </BannerFooter>
            </div>
          )}
        </>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const productsPath = mockData.slice(0, 5).map((arr) => {
    return {
      params: { category: arr.category, title: arr.title },
    };
  });

  return {
    paths: productsPath,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { category, title } = params;

  return {
    props: {
      category: formattedString(category, "_", " "),
      title: formattedString(title, "_", " "),
    },
  };
}
