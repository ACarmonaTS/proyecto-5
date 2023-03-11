import styles from "./header.module.css";

import Logo from "./logo/Logo";
import OptionBox from "./optionsBox/OptionsBox";
import SocialMenuBox from "./socialMenuBox/SocialMenuBox";

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
