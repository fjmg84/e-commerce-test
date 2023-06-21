import React, { useContext, useEffect } from "react";
import Head from "next/head";
import { useSearchParams } from "next/navigation";

import PageLayout from "../../component/PageLayout";
import CategoriesCircle from "../../component/Categories/Circle";
import CategoriesList from "../../component/Categories/List";
import Search from "../../component/Search";
import NewsLetter from "../../component/NewsLetter";
import BestProducts from "../../modules/products/components/Best";
import CardProduct from "../../modules/products/components/Card";
import BannerHead from "../../component/Banners/Head";
import BannerFooter from "../../component/Banners/Footer";
import ImageCard from "../../component/Common/Image";

import {
  orderArray,
  unorderedArray,
  createListCategories,
} from "../../utils/functions/orderArray";
import mockData from "../../mock/data.json";
import styles from "./index.module.scss";
import useFilteredProducts from "../../modules/products/hook/useFilteredProducts";
import { ProductContext } from "../../modules/products/context";

const IMAGES_ARRAY = [
  "/recursos/main/87339849_530805007551424_292323017375800029_nlow.jpg",
  "/recursos/main/87413583_2660130777540405_5722961474466513534_nlow.jpg",
  "/recursos/main/85069033_185901059177965_6767010623440980864_nlow.jpg",
  "/recursos/main/84981049_620107085435507_4260875787090681190_nlow.jpg",
  "/recursos/main/85051426_2060664737412512_8458893884651247910_nlow.jpg",
];

export default function ProductHome(props) {
  const { products, setProducts } = useContext(ProductContext)
  const { listCategories, listProducts } = products
  const searchParams = useSearchParams();
  const { productsFilter } = useFilteredProducts({ categories: listCategories, products: listProducts, searchParams });


  useEffect(() => {
    setProducts({
      listCategories: props.categories,
      listProducts: props.products
    })
  }, [props])

  return (
    <PageLayout>
      <Head>
        <title>E-Commerce Baby</title>
      </Head>

      <section className={styles.container}>
        <BannerHead />
        <CategoriesCircle />

        <div className={styles.mainBox}>
          <div className={styles.title}>
            <h1>New Arrivals</h1>
            <span />
          </div>

          <aside>
            <Search />
            <CategoriesList />
            <BestProducts />
            <NewsLetter />
          </aside>
          <main>
            {
              productsFilter?.map((product) => {
                return (
                  <div key={product.sku} className={styles.product}>
                    <CardProduct product={product} />
                  </div>
                );
              })}
          </main>
        </div>
      </section>

      <div className={styles.banner__footer}>
        <BannerFooter
          title="instagram @kidsrus"
          myClassName={styles.kidsrus_title}
        >
          {IMAGES_ARRAY.map((image, index) => {
            return (
              <ImageCard
                key={index}
                myClassName={styles.footer__image}
                path={image}
                alt={image}
                width={230}
                height={230}
              />
            );
          })}
        </BannerFooter>
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const { categories } = createListCategories(mockData);

  return {
    props: {
      categories: orderArray(categories, "name"),
      products: unorderedArray(mockData),
    },
  };
}
