import { SideBySideMagnifier } from "react-image-magnifiers";
import ImageCard from "../../../component/Common/Image";
import styles from "./styles.module.scss";
import useRate from "../../../hooks/useRate";
import { useEffect, useState } from "react";

function ShowProduct({ data }) {
  const [productData, setProductData] = useState({ ...data });
  const { generated, rates } = useRate();

  const { product, image } = productData;

  useEffect(() => {
    generated({
      value: product.rate,
      colorFill: styles.fill,
      colorOutFill: styles.out_fill,
    });
  }, [data]);

  const handleSelectImageProduct = (index) => {
    setProductData({
      ...productData,
      image: product.images[index],
    });
  };

  return (
    <>
      <div className={styles.title__container}>
        <h1>{product?.title}</h1>
        <ul>
          <li>Home : </li>
          <li>{product?.category} : </li>
          <li>{product?.title}</li>
        </ul>
      </div>
      <div className={styles.product__container}>
        <div className={styles.product__gallery}>
          <SideBySideMagnifier
            imageSrc={image}
            imageAlt="Example"
            fillAvailableSpace={false}
          />

          {product?.images.length > 1 &&
            product?.images?.map((image, index) => {
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
          <p>{`$${product?.price}.00`}</p>
          <p>
            {rates.map((rate, index) => (
              <i key={index} className={`${rate}`}></i>
            ))}
          </p>
          <p>{product?.description}</p>

          <div>
            <table>
              <tbody>
                <tr>
                  <td>SKU</td>
                  <td>{product?.sku}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{product?.category}</td>
                </tr>
                <tr>
                  <td>Tag</td>
                  <td>{product?.tags?.join(",")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowProduct;
