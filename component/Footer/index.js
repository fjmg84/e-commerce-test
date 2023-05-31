import Image from "next/image";
import styles from "./styles.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <Image
          className={styles.logo}
          src={"/recursos/main/logo(1).png"}
          alt="logo alternative footer"
          width={300}
          height={100}
          priority
        />

        <ul className={styles.navbar}>
          <li>shop</li>
          <li>sale</li>
          <li>girls</li>
          <li>boys</li>
          <li>lookbook</li>
          <li>contacts</li>
        </ul>

        <ul className={styles.network}>
          <li>
            <i className="fa fa-facebook"></i>
          </li>
          <li>
            <i className="fa fa-instagram"></i>
          </li>
          <li>
            <i className="fa fa-twitter"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
