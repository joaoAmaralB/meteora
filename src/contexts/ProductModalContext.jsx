import { createContext, useState } from "react";

const ProductModalContext = createContext();

const ProductModalContextProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState({
    selectedImagem: "",
    selectedNome: "",
    selectedDescricao: "",
    selectedPreco: "",
    selectedTag: "",
  });

  const updateSelectedProduct = (newData) => {
    setSelectedProduct({
      selectedImagem: newData.selectedImagem,
      selectedNome: newData.selectedNome,
      selectedDescricao: newData.selectedDescricao,
      selectedPreco: newData.selectedPreco,
      selectedTag: newData.selectedTag,
    });

    console.log(selectedProduct);
  };

  const resetSelectedProduct = () => {
    setSelectedProduct({
      selectedImagem: "",
      selectedNome: "",
      selectedDescricao: "",
      selectedPreco: "",
      selectedTag: "",
    });
  };

  return (
    <ProductModalContext.Provider
      value={{ selectedProduct, updateSelectedProduct, resetSelectedProduct }}
    >
      {children}
    </ProductModalContext.Provider>
  );
};

export default ProductModalContextProvider;
export { ProductModalContext };
