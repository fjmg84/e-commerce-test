import Head from "next/head";
import Banner from "../component/Banner";
import CategoriesCircle from "../component/Categories/Circle";
import CategoriesList from "../component/Categories/List";
import mockData from "../mock/data.json";
import { orderArray } from "../utils/functions/orderArray";
import styles from "../pages/index.module.scss";

export default function Home({ categories, products }) {
  return (
    <>
      <Head>
        <title>E-Commerce Baby</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.box}>
          <Banner />
          <CategoriesCircle />
          <div className={styles.mainBox}>
            <main>
              <h1>New Arrivals</h1>
            </main>
            <aside>
              <CategoriesList categories={categories} />
            </aside>
          </div>
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
      categories: orderArray(categories, "name"),
      products: mockData,
    },
  };
}
