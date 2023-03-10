import styles from "./optionsBox.module.css";

import dataOptions from "../dataOptions/dataOptions.jsx";
import Options from "../options/Options.jsx";

import { useState } from "react";

const OptionBox = () => {
  const [acount, setAcount] = useState("ACCESAR");
  function option(){
    if(acount === "ACCESAR"){
        setAcount("CERRAR") 
        document.getElementById("accessPoint").style.backgroundColor=" rgb(135, 0, 0)";
    }else{
        setAcount("ACCESAR") 
        document.getElementById("accessPoint").style.backgroundColor="rgb(23, 100, 0)";
    }
  };
  return (
    <div id="boxOptions" className={styles.container}>
      {dataOptions.map((option) => (
        <Options key={option} options={option} />
      ))}
      <div onClick={option} className={styles.access}>
        <div id="accessPoint" className={styles.btn}>{acount}</div>
      </div>
    </div>
  );
};

export default OptionBox;
