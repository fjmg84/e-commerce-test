import { useState } from "react";
import Head from "next/head";

import CategoriesCircle from "../component/Categories/Circle";
import CategoriesList from "../component/Categories/List";
import Search from "../component/Search";
import NewsLetter from "../component/NewsLetter";
import BestSellers from "../component/BestSellers";
import CardProduct from "../component/CardProduct";
import BannerHead from "../component/Banners/Head";
import BannerFooter from "../component/Banners/Footer";
import ImageCard from "../component/Common/Image";

import { orderArray, unorderedArray } from "../utils/functions/orderArray";
import mockData from "../mock/data.json";
import styles from "../pages/index.module.scss";

export default function Home({ categories, products }) {
  const [imagesFooter] = useState([
    "/recursos/main/87339849_530805007551424_292323017375800029_nlow.jpg",
    "/recursos/main/87413583_2660130777540405_5722961474466513534_nlow.jpg",
    "/recursos/main/85069033_185901059177965_6767010623440980864_nlow.jpg",
    "/recursos/main/84981049_620107085435507_4260875787090681190_nlow.jpg",
    "/recursos/main/85051426_2060664737412512_8458893884651247910_nlow.jpg",
  ]);
  let betsSellers = Object.values(products);

  return (
    <>
      <Head>
        <title>E-Commerce Baby</title>
      </Head>
      <div className={styles.container}>
        <BannerHead />

        <CategoriesCircle />

        <div className={styles.mainBox}>
          <div className={styles.title}>
            <h1>New Arrivals</h1>
            <span />
          </div>

          <aside>
            <Search />
            <CategoriesList categories={categories} />
            <BestSellers products={betsSellers.slice(0, 4)} />
            <NewsLetter />
          </aside>
          <main>
            {products.map((product) => {
              return (
                <div key={product.sku} className={styles.product}>
                  <CardProduct product={product} />
                </div>
              );
            })}
          </main>
        </div>
      </div>

      <BannerFooter title="instagram @kidsrus">
        {imagesFooter.map((image, index) => {
          return (
            <ImageCard
              key={index}
              myClassName={styles.footerImage}
              path={image}
              alt={image}
              width={230}
              height={230}
            />
          );
        })}
      </BannerFooter>
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
      products: unorderedArray(mockData),
    },
  };
}
