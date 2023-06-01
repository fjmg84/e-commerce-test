import React, { useEffect, useState } from "react";
import Head from "next/head";
import { usePathname, useSearchParams } from "next/navigation";

import mockData from "../../../mock/data.json";

import ShowProduct from "../../../component/Product/Show";
import CardProduct from "../../../component/Product/Card";
import BannerFooter from "../../../component/Banners/Footer";

import styles from "./styles.module.scss";

export default function ProductShow() {
  const [product, setProduct] = useState({
    product: null,
    image: null,
    relative: [],
  });

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category").replace("_", " ");
    const title = searchParams.get("title").replaceAll("_", " ");

    if (category && title) {
      let productCategory = mockData.filter(
        (data) => data.category === category
      );
      let productFilter = productCategory.filter(
        (product) => product.title === title
      );

      setProduct({
        product: productFilter[0],
        image: productFilter[0].images[0],
        relative: productCategory.slice(1, 4),
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      <Head>
        <title>E-Commerce Product</title>
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
