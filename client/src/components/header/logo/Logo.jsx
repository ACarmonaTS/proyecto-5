import styles from "./logo.module.css"

import { logos } from "../../../assets/logosInfo.jsx"; 
import Image from "../../ImgInsert.jsx";

const Logo = () => {
return (
    <div className={styles.container}>
        <Image src={logos[1].src} alt={logos[1].alt} />
    </div> 
)}

export default Logo;