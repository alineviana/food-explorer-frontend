import { Container } from "./styles";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { DishAdmin } from "../../components/DishAdmin";
import { Footer } from "../../components/Footer";

export function DishesAdmin() {
  return (
    <Container>
      <HeaderAdmin />
      <DishAdmin />
      <Footer />
    </Container>
  );
}