import Head from "next/head";

import styles from "../pages/index.module.css";
import Banner from "../component/Banner";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div className={styles.container_banner}>
        <Banner />
      </div>
    </div>
  );
}
