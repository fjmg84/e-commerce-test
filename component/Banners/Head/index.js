import Image from "next/image";
import Button from "../../Common/Button";
import styles from "./styles.module.scss";

function BannerHead() {
  const handleButton = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.banner_1}>
          <Image
            src="/recursos/main/slider-1.jpg"
            width={768}
            height={518}
            alt="slider 1"
            className={styles.slider}
            priority
          />
          <div className={styles.banner_1_desc}>
            <h1>jumpsuits</h1>
            <h4>Comfortable clothes for your babies</h4>
            <div className={styles.banner_1_btn}>
              <Button
                handler={(e) => handleButton(e)}
                text="discover"
                myClassName={styles.btn}
              />
            </div>
          </div>
        </div>
        <div className={styles.banner_2}>
          <Image
            src="/recursos/main/girls-power.jpg"
            width={340}
            height={438}
            alt="slider 2"
            className={styles.girlsPower}
          />
          <div className={styles.banner_2_desc}>
            <h1>girl power</h1>
            <h4>For a colorful summer</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerHead;
