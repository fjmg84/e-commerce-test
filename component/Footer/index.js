import Image from "next/image";
import styles from "./styles.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
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
        <Image
          src={
            "/recursos/main/87339849_530805007551424_292323017375800029_nlow.jpg"
          }
          alt={"87339849_530805007551424_292323017375800029_nlow.jpg"}
          width={230}
          height={230}
          priority
        />
        <Image
          src={
            "/recursos/main/87413583_2660130777540405_5722961474466513534_nlow.jpg"
          }
          alt={"87413583_2660130777540405_5722961474466513534_nlow.jpg"}
          width={230}
          height={230}
          priority
        />
        <Image
          src={
            "/recursos/main/85069033_185901059177965_6767010623440980864_nlow.jpg"
          }
          alt={"87339849_530805007551424_292323017375800029_nlow.jpg"}
          width={230}
          height={230}
          priority
        />
        <Image
          src={
            "/recursos/main/84981049_620107085435507_4260875787090681190_nlow.jpg"
          }
          alt={"87339849_530805007551424_292323017375800029_nlow.jpg"}
          width={230}
          height={230}
          priority
        />
        <Image
          src={
            "/recursos/main/85051426_2060664737412512_8458893884651247910_nlow.jpg"
          }
          alt={"87339849_530805007551424_292323017375800029_nlow.jpg"}
          width={230}
          height={230}
          priority
        />
      </div>
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
            {" "}
            <i className="fa fa-facebook"></i>
          </li>
          <li>
            {" "}
            <i className="fa fa-instagram"></i>
          </li>
          <li>
            {" "}
            <i className="fa fa-twitter"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
