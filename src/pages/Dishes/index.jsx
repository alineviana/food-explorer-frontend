import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Dish } from "../../components/Dish";
import { Footer } from "../../components/Footer";

export function Dishes() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          
          <Section>
            
            <Dish
              data={{
                title: "Salada Ravanello",
                text: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
                tags: [
                  { id: "1", name: "alface" },
                  { id: "2", name: "cebola" },
                  { id: "3", name: "pão naan" },
                  { id: "4", name: "pepino" },
                  { id: "5", name: "rabanete" },
                  { id: "6", name: "tomate" },
                ],
              }}
            />            
          </Section>

        </Content>
      </main>
      
      <Footer />
      
    </Container>
  );
}
