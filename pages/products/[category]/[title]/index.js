import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";

import PageLayout from "../../../../component/PageLayout";
import ShowProduct from "../../../../modules/products/components/Show";
import CardProduct from "../../../../modules/products/components/Card";
import BannerFooter from "../../../../component/Banners/Footer";

import mockData from "../../../../mock/data.json";
import { ProductContext } from "../../../../modules/products/context";
import { formattedString } from "../../../../utils/functions/orderArray";
import styles from "./styles.module.scss";

export default function ProductShow({ category, title }) {
  const { products } = useContext(ProductContext)
  const { listProducts } = products;

  const [data, setData] = useState({
    productShow: {},
    imageShow: undefined,
    productsRelatives: [],
  });
  const { productShow, imageShow, productsRelatives } = data;
  const [productNotFound, setProductNotFound] = useState(undefined);

  const findProducts = ({ array }) => {
    const categoryFormatted = formattedString(category, " ", "_")
    const titleFormatted = formattedString(title, " ", "_")

    const product = array.find(product => product.category === categoryFormatted && product.title === titleFormatted)
    const relatives = array.filter(product => product.category === categoryFormatted).slice(0, 3)

    return {
      product,
      relatives
    }
  }

  useEffect(() => {
    let productFilter = { product: {}, relatives: [] }

    if (listProducts.length > 0)
      productFilter = findProducts({ array: listProducts })
    else
      productFilter = findProducts({ array: mockData })


    const { product, relatives } = productFilter

    if (product === undefined) {
      setProductNotFound('Product not found')
      return
    }

    setData({
      productShow: product,
      imageShow: product?.images[0],
      productsRelatives: relatives,
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
