import React, { useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./styles.module.scss";

function Navbar() {
  const navMobileRef = useRef()
  const pathname = usePathname();

  const taggedMenuMobile = () => {
    if (navMobileRef.current.offsetLeft < 0) {
      navMobileRef.current.style.left = 0;
    } else {
      navMobileRef.current.style.left = '-100%'
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardAlert}>
          <h6>
            20% 0ff all kidswear + free shopping when you spend $60 or more
          </h6>
        </div>

        <div className={styles.btn__menu}>
          <button onClick={taggedMenuMobile}>
            <li className="fa fa-bars fa-lg"></li>
          </button>
        </div>

        <Image
          className={styles.logo}
          src={"/recursos/common/logo-retina.png"}
          width={586}
          height={196}
          alt="logo"
          priority
        />

        <div className={styles.navbar}>
          <ul className={styles.links}>
            <li className={pathname === "/products" ? styles.active : ""}>
              <Link href={"/products"}>home</Link>
              <span />
            </li>
            <li className={pathname === "/shop_features" ? styles.active : ""}>
              shop features
              <span />
            </li>
            <li className={pathname === "/clothes" ? styles.active : ""}>
              clothes
              <span />
            </li>
            <li className={pathname === "/pages" ? styles.active : ""}>
              pages
              <span />
            </li>
            <li className={pathname === "/shortcodes" ? styles.active : ""}>
              shortcodes
              <span />
            </li>
            <li className={pathname === "/post_types" ? styles.active : ""}>
              post types
              <span />
            </li>
          </ul>
          <ul className={styles.menu}>
            <li>
              <i className="fa fa-heart-o"></i>
            </li>
            <li>
              <i className="fa fa-shopping-cart"></i>
            </li>
            <li>
              <i className="fa fa-search"></i>
            </li>
          </ul>
        </div>

        <div ref={navMobileRef} className={styles.navbar__mobile}>
          <ul className={styles.links}>
            <li className={pathname === "/products" ? styles.active : ""}>
              <Link href={"/products"}>home</Link>
              <span />
            </li>
            <li className={pathname === "/shop_features" ? styles.active : ""}>
              shop features
              <span />
            </li>
            <li className={pathname === "/clothes" ? styles.active : ""}>
              clothes
              <span />
            </li>
            <li className={pathname === "/pages" ? styles.active : ""}>
              pages
              <span />
            </li>
            <li className={pathname === "/shortcodes" ? styles.active : ""}>
              shortcodes
              <span />
            </li>
            <li className={pathname === "/post_types" ? styles.active : ""}>
              post types
              <span />
            </li>
          </ul>
          <ul className={styles.menu}>
            <li>
              <i className="fa fa-heart-o"></i>
            </li>
            <li>
              <i className="fa fa-shopping-cart"></i>
            </li>
            <li>
              <i className="fa fa-search"></i>
            </li>
          </ul>
        </div>


      </div>
    </>
  );
}

export default Navbar;
