import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export const DATA_LIST = [
  {
    category: "For_Babies",
    image: "/recursos/main/baby.png",
    title: "Baby & Toddler",
  },
  {
    category: "For_Girls",
    image: "/recursos/main/girl.png",
    title: "For Girls",
  },
  {
    category: "For_Boys",
    image: "/recursos/main/boy.png",
    title: "For Boys",
  },
  {
    category: "For_Home",
    image: "/recursos/main/toys.png",
    title: "Home & Toys",
  },
];

function CategoriesCircle() {
  return (
    <>
      <div className={styles.categories}>
        {DATA_LIST.map((data, index) => {
          const { category, image, title } = data;
          return (
            <div key={index}>
              <Link
                href={{
                  pathname: "/",
                  query: { category },
                }}
              >
                <Image
                  src={image}
                  width={150}
                  height={180}
                  alt={image}
                  className={styles.slider}
                />
              </Link>
              <h5>
                <Link
                  href={{
                    pathname: "/",
                    query: { category },
                  }}
                >
                  {title}
                </Link>
              </h5>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CategoriesCircle;
