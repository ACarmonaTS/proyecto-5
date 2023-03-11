import styles from "./access.module.css";

import Image from "../../../ImgInsert";
import { faceLog, googleLog } from "../../../../assets/logosInfo";

const Access = () => {
  function toCreate() {
    console.log("hola ...");
  }
  return (
    <section className={styles.container}>
      <form>
        <p className={styles.session}>INICIAR SESIÓN</p>
        <div className={styles.inputs}>
          <input type="email" placeholder="Correo" autoComplete="off" />
          <input type="password" placeholder="Contraseña" />
        </div>
        <div className={styles.access}>INICIAR SESIÓN</div>
        <div onClick={toCreate} className={styles.create}>
          CREAR CUENTA
        </div>
      </form>
      <hr />
      <div className={styles.socialMedia}>
        <div className={styles.btnAccess}>
          <div className={styles.option}>
            <Image src={faceLog.src} alt={faceLog.alt} />
          </div>
          INGRESAR CON FACEBOOK
        </div>
        <div className={styles.btnAccess}>
          <div className={styles.option}>
            <Image src={googleLog.src} alt={googleLog.alt} />
          </div>
          INGRESAR CON GOOGLE
        </div>
      </div>
    </section>
  );
};

export default Access;
