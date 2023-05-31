import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

function BannerFooter() {
  const [imagesFooter] = useState([
    "/recursos/main/87339849_530805007551424_292323017375800029_nlow.jpg",
    "/recursos/main/87413583_2660130777540405_5722961474466513534_nlow.jpg",
    "/recursos/main/85069033_185901059177965_6767010623440980864_nlow.jpg",
    "/recursos/main/84981049_620107085435507_4260875787090681190_nlow.jpg",
    "/recursos/main/85051426_2060664737412512_8458893884651247910_nlow.jpg",
  ]);
  return (
    <>
      <div className={styles.title}>
        <h1>instagram @kidsrus</h1>
        <Image
          src={"/recursos/main/home-8.png"}
          alt="home"
          width={72}
          height={16}
        />
      </div>
      <div className={styles.carousel}>
        {imagesFooter.map((image, index) => {
          return (
            <Image
              key={index}
              className={styles.footerImage}
              src={image}
              alt={image}
              width={230}
              height={230}
              priority
            />
          );
        })}
      </div>
    </>
  );
}

export default BannerFooter;
