import Image from "next/image";
import styles from "./styles.module.scss";

function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardAlert}>
          <h6>
            20% 0ff all kidswear + free shopping when you spend $60 or more{" "}
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

        <ul className={styles.navbar}>
          <li className={styles.active}>
            home
            <span />
          </li>
          <li>
            shop features
            <span />
          </li>
          <li>
            clothes
            <span />
          </li>
          <li>
            pages
            <span />
          </li>
          <li>
            shortcodes
            <span />
          </li>
          <li>
            post types
            <span />
          </li>
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
    </>
  );
}

export default Navbar;
