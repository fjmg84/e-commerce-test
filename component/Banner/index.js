import Image from "next/image";
import Button from "../Common/Button";
import styles from "./styles.module.css";

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <div>
          <Image
            src="/recursos/main/slider-1.jpg"
            width={768}
            height={518}
            alt="slider 1"
            className={styles.slider}
          />
          <div>
            <h1>jumpsuits</h1>
            <h4>Comfortable clothes for your babies</h4>
            <Button text="discover" myClassName={styles.btn} />
          </div>
        </div>
        <div>
          <Image
            src="/recursos/main/girls-power.jpg"
            width={340}
            height={438}
            alt="slider 2"
            className={styles.girlsPower}
          />
          <div>
            <h1>girl power</h1>
            <h4>For a colorful summer</h4>
          </div>
        </div>
      </div>

      <div className={styles.categories}>
        <div>
          <Image
            src="/recursos/main/baby.png"
            width={150}
            height={180}
            alt="Baby & Toddler"
            className={styles.slider}
          />
          <h5>Baby & Toddler</h5>
        </div>
        <div>
          <Image
            src="/recursos/main/girl.png"
            width={150}
            height={180}
            alt="For Girls"
            className={styles.slider}
          />
          <h5>For Girls</h5>
        </div>
        <div>
          <Image
            src="/recursos/main/boy.png"
            width={150}
            height={180}
            alt="For Boys"
            className={styles.slider}
          />
          <h5>For Boys</h5>
        </div>
        <div>
          <Image
            src="/recursos/main/toys.png"
            width={150}
            height={180}
            alt="Home & Toys"
            className={styles.slider}
          />
          <h5>Home & Toys</h5>
        </div>
      </div>
    </div>
  );
}

export default Banner;
