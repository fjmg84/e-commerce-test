import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

function Rate({ count = 5 }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    let tempRates = [];
    for (let i = 1; i <= 5; i++) {
      tempRates = [
        ...tempRates,
        `fa fa-star ${i <= count ? styles.colorFill : styles.colorOutFill}`,
      ];
    }
    setStars(tempRates);
  }, [count]);

  return (
    <>
      {stars.map((star, index) => (
        <i key={index} className={star}></i>
      ))}
    </>
  );
}

export default Rate;
