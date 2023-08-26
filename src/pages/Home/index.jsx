import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Carousel } from "../../components/Carousel";
import { HeaderAdmin } from "../../components/HeaderAdmin";

export function Home() {
  return (
    <Container>
      <HeaderAdmin />
      <Banner />

      <div className="carousel_wrapper">
        <div className="title">
          <h4>Refeições</h4>
        </div>
        <Carousel />

        <div className="title">
          <h4>Sobremesas</h4>
        </div>
        <Carousel />

        <div className="title">
          <h4>Bebidas</h4>
        </div>
        <Carousel />
      </div>

      <Footer />
    </Container>
  );
}
