import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Dish } from "../../components/Dish";
import { Footer } from "../../components/Footer";

export function Dishes() {
  return (
    <Container>
      <Header />
      <Dish />
      <Footer />
    </Container>
  );
}