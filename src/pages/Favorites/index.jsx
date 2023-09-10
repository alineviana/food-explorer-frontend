import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";

export function Favorites() {
  return (
    <Container>
      <Header />

      <main>
        <Section className="my_favorites" title="Meus favoritos">
          <div className="dishes_wrapper">
            <div className="info_dish">
              <img src="../../src/assets/coffee.svg" alt="" />
              <div className="info_wrapper">
                <h3>Café Expresso</h3>
                <p>Remover dos favoritos</p>
              </div>
            </div>

            <div className="info_dish">
              <img src="../../src/assets/coffee.svg" alt="" />
              <div className="info_wrapper">
                <h3>Café Expresso</h3>
                <p>Remover dos favoritos</p>
              </div>
            </div>

            <div className="info_dish">
              <img src="../../src/assets/coffee.svg" alt="" />
              <div className="info_wrapper">
                <h3>Café Expresso</h3>
                <p>Remover dos favoritos</p>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </Container>
  );
}
