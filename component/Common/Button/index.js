import styles from "./styles.module.scss";

function Button({
  image = undefined,
  text = undefined,
  myClassName = undefined,
  handler = undefined,
}) {
  return (
    <button onClick={handler} className={`${styles.btn} ${myClassName}`}>
      <span>
        {image && <i className={image}></i>}
        {text && text}
      </span>
    </button>
  );
}

export default Button;
