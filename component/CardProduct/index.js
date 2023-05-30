import styles from "./styles.module.scss";
import ImageCard from "../Common/Image";
import Button from "../Common/Button";

function CardProduct({ product }) {
  return (
    <div className={styles.container}>
      <div className={styles.boxCard}>
        {product.images.length >= 2 ? (
          <div className={styles.boxCardImages}>
            <ImageCard
              path={product.images[0]}
              width={210}
              height={300}
              alt={product.images[0]}
            />
            <ImageCard
              path={product.images[1]}
              width={210}
              height={300}
              alt={product.images[1]}
            />
          </div>
        ) : (
          <ImageCard
            path={product.images[0]}
            width={210}
            height={300}
            alt={product.images[0]}
          />
        )}

        <div className={styles.boxCardActions}>
          <span>
            <Button
              image={"fa fa-heart-o"}
              myClassName={styles.boxCardActionsBtn}
            />
            {product.count_stock > 1 && (
              <Button
                text="add to cart"
                myClassName={styles.boxCardActionsBtn}
              />
            )}
            <Button
              image={"fa fa-search"}
              myClassName={styles.boxCardActionsBtn}
            />
          </span>
        </div>
      </div>

      <div className={styles.descriptionCard}>
        <h5>{product.category}</h5>
        <h4>{product.title}</h4>
        <h4>{`$${product.price}.00`}</h4>
        {product.count_stock < 1 && (
          <span className={styles.outOfStock}>out of stock</span>
        )}
      </div>
    </div>
  );
}

export default CardProduct;
