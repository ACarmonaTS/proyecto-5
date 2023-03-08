import styles from "./structure.module.css";
import dataOptions from "../dataOptions/dataOptions.jsx";
import { logos, mLogos, market, menus, backMenu } from "../../../assets/logosInfo.jsx";
import Options from "../options/Options.jsx";
import Image from "../../ImgInsert.jsx";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Image src={logos[1].src} alt={logos[1].alt} />
      </div>
      <div className={styles.boxOptions}>
        {dataOptions.map((option) => (
          <Options key={option} options={option} />
        ))}
      </div>
      <div className={styles.boxMlogos}>
        <div className={styles.social}>
          {mLogos.map((logo) => (
            <div key={logo.alt} className={styles.icons}>
              <Image src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
        <p>&nbsp;</p>
        <div className={styles.market}>
          <Image src={market.src} alt={market.alt} />
          <div className={styles.notify}>5</div>
        </div>
        <div className={styles.menu}>
          <div className={styles.icoMenus}>
            <Image  src={menus.src} alt={menus.alt} />
          </div>
          <div className={styles.icoBack}>
            <Image  src={backMenu.src} alt={backMenu.alt} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
