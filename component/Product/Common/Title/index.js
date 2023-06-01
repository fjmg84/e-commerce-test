import React from "react";
import Link from "next/link";
function Title({ title, category, myClassName = null }) {
  return (
    <h4 className={myClassName}>
      <Link
        href={{
          pathname: "/[category]/[title]",
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
