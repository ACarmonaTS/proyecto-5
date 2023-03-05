import styles from "./structure.module.css";
import dataOptions from "../dataOptions/dataOptions.jsx";
import logos from "../../../assets/logosInfo.jsx";
import Options from "../options/Options.jsx";
import Image from "../ImgInsert.jsx";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Image src={logos[1].src} alt={logos[1].alt} />
      </div>
      <div className={styles.boxOptions}> 
        {dataOptions.map((option, index) =>
          <Options key={index} options={option} />
        )}
      </div>
      {/* <div className={styles.icons}>
        <img src="" alt="" />
      </div> */}
    </header>
  );
};

export default Header;
