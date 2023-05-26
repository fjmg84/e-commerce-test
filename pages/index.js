import styles from "../pages/index.module.css";
import Banner from "../component/Banner";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container_banner}>
        <Banner />
      </div>
    </div>
  );
}
