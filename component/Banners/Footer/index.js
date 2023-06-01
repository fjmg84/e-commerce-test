import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

function BannerFooter({ children, title, myClassName = null }) {
  return (
    <>
      <div className={styles.title}>
        <h1 className={myClassName}>{title}</h1>
        <Image
          src={"/recursos/main/home-8.png"}
          alt="home"
          width={72}
          height={16}
        />
      </div>
      <div className={styles.carousel}>{children}</div>
    </>
  );
}

export default BannerFooter;
