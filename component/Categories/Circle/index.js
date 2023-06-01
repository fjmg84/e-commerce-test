import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

function CategoriesCircle() {
  return (
    <>
      <div className={styles.categories}>
        <div>
          <Image
            src="/recursos/main/baby.png"
            width={150}
            height={180}
            alt="Baby & Toddler"
            className={styles.slider}
          />
          <h5>
            <Link
              href={{
                pathname: "/",
                query: { category: "For Babies" },
              }}
            >
              Baby & Toddler
            </Link>
          </h5>
        </div>
        <div>
          <Image
            src="/recursos/main/girl.png"
            width={150}
            height={180}
            alt="For Girls"
            className={styles.slider}
          />
          <h5>
            <Link
              href={{
                pathname: "/",
                query: { category: "For Girls" },
              }}
            >
              For Girls
            </Link>
          </h5>
        </div>
        <div>
          <Image
            src="/recursos/main/boy.png"
            width={150}
            height={180}
            alt="For Boys"
            className={styles.slider}
          />
          <h5>
            <Link
              href={{
                pathname: "/",
                query: { category: "For Boys" },
              }}
            >
              For Boys
            </Link>
          </h5>
        </div>
        <div>
          <Image
            src="/recursos/main/toys.png"
            width={150}
            height={180}
            alt="Home & Toys"
            className={styles.slider}
          />
          <h5>
            <Link
              href={{
                pathname: "/",
                query: { category: "For Home" },
              }}
            >
              Home & Toys
            </Link>
          </h5>
        </div>
      </div>
    </>
  );
}

export default CategoriesCircle;
