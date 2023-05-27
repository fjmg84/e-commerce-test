import Head from "next/head";
import Banner from "../component/Banner";
import mockData from "../mock/data.json";
import styles from "../pages/index.module.css";

export default function Home({ categories, products }) {
  return (
    <>
      <Head>
        <title>E-Commerce Baby</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.container_banner}>
          <Banner />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  let categories = [],
    temp = [];
  mockData.forEach((arr) => {
    let nameCategory = arr.category;
    if (temp.includes(nameCategory) === false) {
      let countCategory = mockData.filter(
        (arr) => arr.category === nameCategory
      ).length;
      temp = [...temp, nameCategory];
      categories = [
        ...categories,
        { name: nameCategory, count: countCategory },
      ];
    }
  });
  return {
    props: {
      categories,
      products: mockData,
    },
  };
}
