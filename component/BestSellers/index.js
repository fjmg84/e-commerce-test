import Image from "next/image";
import styles from "./styles.module.scss";

function BestSellers({ products }) {
  const generateRated = (value) => {
    let rating = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= value)
        rating.push(<i className={`fa fa-star ${styles.fill}`}></i>);
      else rating.push(<i className={`fa fa-star ${styles.out_fill}`}></i>);
    }

    return rating;
  };
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
                <h4>{generateRated(product.rate).map((value) => value)}</h4>
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
