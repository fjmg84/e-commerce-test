import styles from "./styles.module.scss";

function Button({ image = null, text, myClassName }) {
  return (
    <span className={`${styles.btn} ${myClassName}`}>
      <button>{image !== null ? <i className={image}></i> : text}</button>
    </span>
  );
}

export default Button;
