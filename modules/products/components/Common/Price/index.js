import React from "react";
import styles from "./styles.module.scss";

function Price({ price }) {
  return <h4 className={styles.price}>{`$ ${price}.00`}</h4>;
}

export default Price;
