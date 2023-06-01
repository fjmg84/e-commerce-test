import React from "react";
import Link from "next/link";
function Title({ title, category }) {
  return (
    <h4>
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
