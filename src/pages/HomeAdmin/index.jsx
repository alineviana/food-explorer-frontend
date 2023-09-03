import { Container } from "./styles";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";

export function HomeAdmin() {
  return (
    <Container>
      <HeaderAdmin />
      <Banner />
      <div className="carousel_wrapper">
      </div>
      <Footer />
    </Container>
  );
}
