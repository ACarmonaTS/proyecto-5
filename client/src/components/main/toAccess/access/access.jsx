import style from "./access.module.css";

import Image from "../../../ImgInsert";
import { faceLog, googleLog } from "../../../../assets/logosInfo";
const Access = () => {
  return (
    <section className={style.container}>
      <form>
        <p className={style.session}>INICIAR SESIÓN</p>
        <div className={style.inputs}>
          <input type="email" placeholder="Correo" autoComplete="off" />
          <input type="password" placeholder="Contraseña" />
        </div>
        <div className={style.access} type="submit">
          INICIAR SESIÓN
        </div>
      </form>
      <hr />
      <div className={style.socialMedia}>
      <div className={style.btnAccess}>
          <div className={style.option}>
            <Image src={faceLog.src} alt={faceLog.alt} />
          </div>
          INGRESAR CON FACEBOOK
        </div>
        <div className={style.btnAccess}>
          <div className={style.option}>
            <Image src={googleLog.src} alt={googleLog.alt} />
          </div>
          INGRESAR CON FACEBOOK
        </div>
      </div>
    </section>
  );
};

export default Access;