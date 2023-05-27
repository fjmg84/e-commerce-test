import Button from "../Common/Button";
import styles from "./styles.module.scss";

function Search() {
  return (
    <div className={styles.container}>
      <form>
        <input type="search" name="search" placeholder="Search products..." />
        <Button image="fa fa-search" myClassName={styles.btn} />
      </form>
    </div>
  );
}

export default Search;
