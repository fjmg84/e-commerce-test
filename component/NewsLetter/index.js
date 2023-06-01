import React from "react";
import Button from "../Common/Button";
import styles from "./styles.module.scss";

function NewsLetter() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Join Our Newsletter</h1>
      </div>
      <form>
        <input type="text" name="email" placeholder="Your Email Address" />
        <div className={styles.btn_container}>
          <Button text="subscribe" myClassName={styles.btn} />
        </div>
      </form>
    </div>
  );
}

export default NewsLetter;
