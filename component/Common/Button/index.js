import styles from "./styles.module.css";

function Button({ image = null, text, myClassName }) {
  return (
    <span className={`${styles.btn} ${myClassName}`}>
      <button>{image !== null ? image : text}</button>
    </span>
  );
}

export default Button;
