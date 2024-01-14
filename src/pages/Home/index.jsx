import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Infos from "../../components/Infos";
import Products from "../../components/Products";
import Tags from "../../components/Tags";
import EmailPromo from "../../components/EmailPromo";
import Footer from "../../components/Footer";
import style from "./Home.module.css";
import ProductModal from "../../components/ProductModal";
import ProductModalContextProvider from "../../contexts/ProductModalContext";

function Home() {
  return (
    <ProductModalContextProvider>
      <div className={style.home__container}>
        <Header />
        <Banner />
        <Tags />
        <Products />
        <Infos />
        <EmailPromo />
        <Footer />
        <ProductModal />
      </div>
    </ProductModalContextProvider>
  );
}

export default Home;
