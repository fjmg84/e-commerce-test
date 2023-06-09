import React from "react";
import Button from "../Common/Button";
import styles from "./styles.module.scss";

function Search() {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Search`);
  };

  return (
    <div className={styles.container}>
      <form>
        <input type="search" name="search" placeholder="Search products..." />
        <div className={styles.btn_container}>
          <Button
            handler={handleSearch}
            image="fa fa-search"
            myClassName={styles.btn}
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
