import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Carousel } from "../../components/Carousel";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <div className="carousel_wrapper">
        <Carousel />
        <Carousel />
        <Carousel />
      </div>
      <Footer />
    </Container>
  );
}
