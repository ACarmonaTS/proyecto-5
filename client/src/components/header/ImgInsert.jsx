import styles from "./imgInsert.module.css";

const Image = ({src, alt}) => <img className={styles.imgFont} src={src} alt={alt} />

export default Image