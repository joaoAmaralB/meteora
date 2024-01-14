import React, { useContext, useEffect } from "react";
import style from "./ProductModal.module.css";
import { ProductModalContext } from "../../contexts/ProductModalContext";

function ProductModal() {
  const { selectedProduct, resetSelectedProduct } = useContext(ProductModalContext);

  useEffect(() => {
    if (selectedProduct.selectedNome) {
      console.log("Abrir o modal para:", selectedProduct.selectedNome);
    }
  }, [selectedProduct]);

  return (
    <dialog open={selectedProduct.selectedNome !== ''}>
      <div></div>

      <div>
        <img src={selectedProduct.selectedImagem} alt="" />
        <div>
          <h1>{selectedProduct.selectedNome}</h1>

          <p></p>

          <hr />

          <h2></h2>
        </div>
      </div>
    </dialog>
  );
}

export default ProductModal;
