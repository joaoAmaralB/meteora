import style from "./Card.module.css";
import { ProductModalContext } from "../../contexts/ProductModalContext";
import { useContext } from "react";

function Card({ nome, imagem, descricao, preco, tag }) {
  const { updateSelectedProduct } = useContext(ProductModalContext);

  return (
    <div className={style.card__container}>
      <img src={imagem} alt={nome} className={style.card_image} />

      <h3 className={style.card_title}>{nome}</h3>

      <h4 className={style.card_description}>{descricao}</h4>

      <h2 className={style.card_preco}>{preco}</h2>

      <button
        className={style.card_button}
        onClick={() =>
          updateSelectedProduct({
            SelectedImagem: imagem,
            selectedNome: nome,
            selectedDescricao: descricao,
            selectedPreco: preco,
            selectedTag: tag,
          })
        }
      >
        Ver mais
      </button>
    </div>
  );
}

export default Card;
