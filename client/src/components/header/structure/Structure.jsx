import styles from "./structure.module.css";
import dataOptions from "../dataOptioms/dataOptions.jsx";
import Options from "../optioms/Options";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* <div className={styles.logo}>
        <img src="" alt="" />
        <span>LOGO</span>
      </div>
      <div className={styles.boxOptions}> */}
        {dataOptions.map((option, index) =>
          <Options key={index} options={option} />
        )}
      {/* </div>
      <div className={styles.icons}>
        <img src="" alt="" />
      </div> */}
    </header>
  );
};

export default Header;
