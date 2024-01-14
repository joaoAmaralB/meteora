import ProductModalContextProvider from "../../contexts/ProductModalContext";
import products from "../../jsons/products.json";
import Card from "../Card";
import style from "./Products.module.css";

function Products() {
  return (
    <ProductModalContextProvider>
      <div className={style.products__container}>
        <h1>Produtos que estão bombando!</h1>
        <div className={style.products}>
          {products.map((product) => {
            return (
              <Card
                key={product.nome}
                nome={product.nome}
                imagem={product.imagem}
                descricao={product.descricao}
                preco={product.preco}
                tag={product.tag}
              />
            );
          })}
        </div>
      </div>
    </ProductModalContextProvider>
  );
}

export default Products;
