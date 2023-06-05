import React, { useEffect, useState } from "react";
import Head from "next/head";

import ShowProduct from "../../components/Show";
import CardProduct from "../../components/Card";
import BannerFooter from "../../../../component/Banners/Footer";

import mockData from "../../../../mock/data.json";
import styles from "./styles.module.scss";

export default function ProductShow({ category, title }) {
  const [product, setProduct] = useState({
    product: null,
    image: null,
    relative: [],
  });

  useEffect(() => {
    let productCategory = mockData.filter((data) => data.category === category);
    let productFilter = productCategory.filter(
      (product) => product.title === title
    );

    setProduct({
      product: productFilter[0],
      image: productFilter[0].images[0],
      relative: productCategory.slice(1, 4),
    });
  }, [category, title]);

  return (
    <>
      <Head>
        <title>{`E-Commerce ${category}-${title}`}</title>
      </Head>
      {product.product && <ShowProduct data={product} />}

      {product.relative && (
        <div className={styles.banner_footer}>
          <BannerFooter
            title="Relative Product"
            myClassName={styles.relative__title}
          >
            {product.relative.map((product, index) => (
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