import { useEffect, useState } from "react";
import Head from "next/head";
import { usePathname, useSearchParams } from "next/navigation";

import mockData from "../../../mock/data.json";

import ShowProduct from "../../../component/Product/Show";
import CardProduct from "../../../component/Product/Card";

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
    const category = pathname?.split("/")[1].replace("_", " ");
    const title = pathname?.split("/")[2].replaceAll("_", " ");

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
      {product.product ? <ShowProduct data={product} /> : <h1>Loading...</h1>}
      {product.relative && (
        <div className={styles.relative__container}>
          <h1>
            Relative Product
            <span />
          </h1>
          <div className={styles.relative__products}>
            {product.relative.map((product, index) => (
              <CardProduct key={index} product={product} showRate={true} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
