import React from "react";

import { ProductProvider } from "../modules/products/context";
import "animate.css";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>)
}
