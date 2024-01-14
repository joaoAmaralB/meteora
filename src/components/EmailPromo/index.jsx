import React from "react";
import style from "./EmailPromo.module.css";

function EmailPromo() {
  return (
    <form className={style.promo__container}>
      <label htmlFor="Email" className={style.email_text}>
        Quer receber nossas novidades, promoções exclusivas e 10% OFF na
        primeira compra? Cadastre-se!
      </label>
      <div className={style.email_input}>
        <input type="email" id="Email" placeholder="Digite seu email"/>
        <button>Enviar</button>
      </div>
    </form>
  );
}

export default EmailPromo;
