import { useEffect } from "react";
import Image from "next/image";
import useRate from "../../hooks/useRate";
import styles from "./styles.module.scss";

function BestSellers({ products }) {
  const { generated, rates } = useRate();

  useEffect(() => {
    generated({
      value: products[0].rate,
      colorFill: styles.fill,
      colorOutFill: styles.out_fill,
    });
  }, [products]);
  return (
    <div className={styles.container}>
      <h1>Best Sellers</h1>
      <div className={styles.container_list}>
        {products.map((product) => {
          return (
            <div key={product.sku} className={styles.box}>
              <div className={styles.box_image}>
                <Image
                  src={product.images[0]}
                  width={50}
                  height={50}
                  alt={product.images[0]}
                />
              </div>

              <div className={styles.box_desc}>
                <h4>{product.title}</h4>
                <h4>
                  {rates.map((rate, index) => (
                    <i key={index} className={`${rate}`}></i>
                  ))}
                </h4>
                <h4>{`$${product.price}.00`}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BestSellers;
