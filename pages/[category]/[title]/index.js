import { useEffect, useState } from "react";
import Head from "next/head";
import { usePathname, useSearchParams } from "next/navigation";

import mockData from "../../../mock/data.json";

import ShowProduct from "../../../component/Product/Show";

export default function ProductShow() {
  const [path, setPath] = useState({ category: null, title: null });
  const [product, setProduct] = useState({ product: null, image: null });

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setPath({
      category: pathname?.split("/")[1].replace("_", " "),
      title: pathname?.split("/")[2].replaceAll("_", " "),
    });
  }, [pathname, searchParams]);

  useEffect(() => {
    if (path.category && path.title) {
      let productFilter = mockData.filter(
        (data) => data.category === path.category && data.title === path.title
      );
      setProduct({
        product: productFilter[0],
        image: productFilter[0].images[0],
      });
    }
  }, [path]);

  return (
    <>
      <Head>
        <title>E-Commerce Product</title>
      </Head>
      {product.product ? <ShowProduct data={product} /> : <h1>Loading...</h1>}
    </>
  );
}
