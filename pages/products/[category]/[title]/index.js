import React, { useEffect, useState } from "react";
import Head from "next/head";

import ShowProduct from "../../components/Show";
import CardProduct from "../../components/Card";
import BannerFooter from "../../../../component/Banners/Footer";

import mockData from "../../../../mock/data.json";
import styles from "./styles.module.scss";

export default function ProductShow({ category, title }) {
  const [data, setData] = useState({
    productShow: {},
    imageShow: undefined,
    productsRelatives: [],
  });

  const { productShow, imageShow, productsRelatives } = data;

  useEffect(() => {
    let productCategory = mockData.filter((data) => data.category === category);
    let productFilter = productCategory.filter(
      (product) => product.title === title
    );

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
      {productShow && (
        <ShowProduct productShow={productShow} imageShow={imageShow} />
      )}

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
  const category = context.params.category.replace("_", " ");
  const title = context.params.title.replaceAll("_", " ");

  return {
    props: {
      category,
      title,
    },
  };
}
