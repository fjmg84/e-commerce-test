import Image from "next/image";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardAlert}>
          <h6>
            20% 0ff all kidswear + free shopping when you spend $60 or more
          </h6>
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
            <li className={pathname.startsWith("/") ? styles.active : ""}>
              home
              <span />
            </li>
            <li
              className={
                pathname.startsWith("/shop_features") ? styles.active : ""
              }
            >
              shop features
              <span />
            </li>
            <li
              className={pathname.startsWith("/clothes") ? styles.active : ""}
            >
              clothes
              <span />
            </li>
            <li className={pathname.startsWith("/pages") ? styles.active : ""}>
              pages
              <span />
            </li>
            <li
              className={
                pathname.startsWith("/shortcodes") ? styles.active : ""
              }
            >
              shortcodes
              <span />
            </li>
            <li
              className={
                pathname.startsWith("/post_types") ? styles.active : ""
              }
            >
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
