import styles from "./optionsBox.module.css"
import dataOptions from "../dataOptions/dataOptions.jsx";
import Options from "../options/Options.jsx";

const OptionBox = () => 
    <div className={styles.boxOptions}>
        {dataOptions.map((option) => (
          <Options key={option} options={option} />
        ))}
    </div>

export default OptionBox