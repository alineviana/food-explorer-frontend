import { Container } from "./styles";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Banner } from "../../components/Banner";
import { Carousel } from "../../components/Carousel";
import { Footer } from "../../components/Footer";

export function HomeAdmin() {
  return (
    <Container>
      <HeaderAdmin />
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
