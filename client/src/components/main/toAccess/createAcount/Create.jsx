import style from "./create.module.css";

import Image from "../../../ImgInsert";
import { faceLog, googleLog } from "../../../../assets/logosInfo";
const Create = () => {
  return (
    <section className={style.container}>
      <form className={style.form}>
        <p className={style.session}>REGISTRO</p>
        <div className={style.inputs}>
          <input
            className={style.input}
            type="text"
            placeholder="Nombre - (Alias)"
            autoComplete="off"
          />
          <input
            className={style.input}
            type="email"
            placeholder="Correo"
            autoComplete="off"
          />
          <input
            className={style.input}
            type="tel"
            placeholder="Número celular"
          />
          <input
            className={style.input}
            type="password"
            placeholder="Contraseña"
          />
          <input
            className={style.input}
            type="password"
            placeholder="Comprobar contraseña"
          />
        </div>
        <div className={style.access} type="submit">
          CREAR CUENTA
        </div>
      </form>
      <hr />
      <div className={style.socialMedia}>
        <div className={style.btnAccess}>
          <div className={style.option}>
            <Image src={faceLog.src} alt={faceLog.alt} />
          </div>
          CREAR CON FACEBOOK
        </div>
        <div className={style.btnAccess}>
          <div className={style.option}>
            <Image src={googleLog.src} alt={googleLog.alt} />
          </div>
          CREAR CON GOOGLE
        </div>
      </div>
    </section>
  );
};

export default Create;
