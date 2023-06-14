import React, { useEffect, useState } from "react";
import Head from "next/head";

import PageLayout from "../../../../component/PageLayout";
import ShowProduct from "../../../../modules/products/components/Show";
import CardProduct from "../../../../modules/products/components/Card";
import BannerFooter from "../../../../component/Banners/Footer";

import mockData from "../../../../mock/data.json";
import { filterProducts, findProducts, formattedString } from "../../../../utils/functions/orderArray";
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
    const productXCategory = filterProducts({
      listProducts: mockData,
      filter: formattedString(category, " ", "_")
    })
    const productXTitle = findProducts({
      listProducts: productXCategory,
      filter: formattedString(title, " ", "_"),
      key: 'title'
    })

    if (productXTitle.length === 0) {
      return setProductNotFound("Product not found");
    }

    setData({
      productShow: productXTitle,
      imageShow: productXTitle.images[0],
      productsRelatives: productXCategory.slice(1, 4),
    });
  }, [category, title]);

  return (
    <PageLayout>
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
    </PageLayout>
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
      category,
      title
    },
  };
}
