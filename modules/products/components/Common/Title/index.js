import React from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import styles from "./styles.module.scss";

function Title({ title, category, myClassName = null }) {
  return (
    <h4 className={`${myClassName} ${styles.title}`}>
      <Link
        href={{
          pathname: "/products/[category]/[title]",
          query: {
            category: category?.replaceAll(" ", "_"),
            title: title?.replaceAll(" ", "_"),
          },
        }}
      >
        {title}
      </Link>
    </h4>
  );
}

export default Title;
