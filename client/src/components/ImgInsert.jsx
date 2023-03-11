import styles from "./imgInsert.module.css";

const Image = ({ src, alt }) => (
  <img className={styles.container} src={src} alt={alt} />
);

export default Image;
