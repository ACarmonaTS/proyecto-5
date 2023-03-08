import styles from "./structure.module.css";

import Logo from "../logo/Logo";
import OptionBox from "../optionsBox/OptionsBox";
import SocialMenuBox from "../socialMenuBox/socialMenuBox";
 
const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <OptionBox />
      <SocialMenuBox />
    </header>
  );
};

export default Header;
