import { useEffect, useState } from "react";
import Head from "next/head";
import { usePathname, useSearchParams } from "next/navigation";
import { SideBySideMagnifier } from "react-image-magnifiers";
import useRate from "../../../hooks/useRate";

import ImageCard from "../../../component/Common/Image";

import mockData from "../../../mock/data.json";
import styles from "./styles.module.scss";

export default function ProductShow() {
  const [path, setPath] = useState({ category: null, title: null });
  const [product, setProduct] = useState({ product: null, image: null });
  const { generated, rates } = useRate();

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
      generated({
        value: productFilter[0].rate,
        colorFill: styles.fill,
        colorOutFill: styles.out_fill,
      });
      setProduct({
        product: productFilter[0],
        image: productFilter[0].images[0],
      });
    }
  }, [path]);

  const handleSelectImageProduct = (index) => {
    setProduct({
      ...product,
      image: product.product.images[index],
    });
  };

  return (
    <>
      <Head>
        <title>E-Commerce Product</title>
      </Head>
      <div className={styles.title__container}>
        <h1>{product?.product?.title}</h1>
        <ul>
          <li>Home : </li>
          <li>{path.category} : </li>
          <li>{path.title}</li>
        </ul>
      </div>

      <div className={styles.product__container}>
        <div className={styles.product__gallery}>
          {product.image && (
            <SideBySideMagnifier
              imageSrc={product?.image}
              imageAlt="Example"
              fillAvailableSpace={false}
            />
          )}
          {product?.product?.images.length > 1 &&
            product?.product?.images?.map((image, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleSelectImageProduct(index)}
                >
                  <ImageCard path={image} alt={image} width={50} height={80} />
                </div>
              );
            })}
        </div>

        <div className={styles.product__data}>
          <p>{`$${product?.product?.price}.00`}</p>
          <p>
            {rates.map((rate, index) => (
              <i key={index} className={`${rate}`}></i>
            ))}
          </p>
          <p>{product?.product?.description}</p>

          <div>
            <table>
              <tbody>
                <tr>
                  <td>SKU</td>
                  <td>{product?.product?.sku}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{product?.product?.category}</td>
                </tr>
                <tr>
                  <td>Tag</td>
                  <td>{product?.product?.tags?.join(",")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
