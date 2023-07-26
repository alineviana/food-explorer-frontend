import { Container, Content, Link } from "./styles";
import { Header } from "../../components/Header";
import { PiCaretLeft } from "react-icons/pi";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

export function Dishes() {
  return (
    <Container>
      <Header />

      <main>        
        <Content>
          <Link>
            <PiCaretLeft />
            <ButtonText title="voltar" />
          </Link>
          
          <img src="./src/assets/ravanello.png" alt="Imagem Salada Ravanello" />
          <h1>Salada Ravanello</h1>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

          <Section>
            <Tag title="alface" />
            <Tag title="cebola" />
          </Section>

          <Button title="pedir ∙ R$ 25,00" />

        </Content>

      </main>

      <Footer />
    </Container>
  );
}
