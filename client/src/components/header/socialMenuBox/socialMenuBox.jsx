import styles from "./socialMenuBox.module.css"

import { mLogos, market, menus, backMenu } from "../../../assets/logosInfo.jsx";
import Image from "../../ImgInsert.jsx";

const SocialMenuBox = () => {
  window.onresize = () => {
    if(window.innerWidth>=1200){
      document.getElementById("input").style.display = "block";
      document.getElementById("output").style.display = "none";
      document.getElementById("boxOptions").style.display = "flex";
    };
    if(window.innerWidth<=1199) invisibleMenu();
  }

  const visibleMenu = () => {
    document.getElementById("input").style.display = "none";
    document.getElementById("output").style.display = "block";
    document.getElementById("boxOptions").style.display = "flex";
  };

  const invisibleMenu = () => {
    document.getElementById("input").style.display = "block";
    document.getElementById("output").style.display = "none";
    document.getElementById("boxOptions").style.display = "none";
  };

  return(
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
          <div id="input" onClick={visibleMenu} className={styles.icoMenus}>
            <Image src={menus.src} alt={menus.alt} />
          </div>
          <div id="output" onClick={invisibleMenu} className={styles.icoBack}>
            <Image  src={backMenu.src} alt={backMenu.alt} />
          </div>
        </div>
    </div>
)}

export default SocialMenuBox