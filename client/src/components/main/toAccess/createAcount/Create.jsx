import styles from "./create.module.css";

import Image from "../../../ImgInsert";
import { faceLog, googleLog } from "../../../../assets/logosInfo";
const Create = () => {
  function toAccess() {
    document.getElementById("create").style.display = "none";
    document.getElementById("access").style.display = "flex";
  }
  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <p className={styles.session}>REGISTRO</p>
        <div className={styles.inputs}>
          <input
            className={styles.input}
            type="text"
            placeholder="Nombre - (Alias)"
            autoComplete="off"
          />
          <input
            className={styles.input}
            type="email"
            placeholder="Correo"
            autoComplete="off"
          />
          <input
            className={styles.input}
            type="tel"
            placeholder="Número celular"
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Contraseña"
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Comprobar contraseña"
          />
        </div>
        <div className={styles.access} type="submit">
          CREAR CUENTA
        </div>
        <div onClick={toAccess} className={styles.create}>
          INICIAR SESIÓN
        </div>
      </form>
      <hr />
      <div className={styles.socialMedia}>
        <div className={styles.btnAccess}>
          <div className={styles.option}>
            <Image src={faceLog.src} alt={faceLog.alt} />
          </div>
          CREAR CON FACEBOOK
        </div>
        <div className={styles.btnAccess}>
          <div className={styles.option}>
            <Image src={googleLog.src} alt={googleLog.alt} />
          </div>
          CREAR CON GOOGLE
        </div>
      </div>
    </section>
  );
};

export default Create;
