import { Container, Content } from "./styles";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Section } from "../../components/Section";
import { DishAdmin } from "../../components/DishAdmin";
import { Footer } from "../../components/Footer";

export function DishesAdmin() {
  return (
    <Container>
      <HeaderAdmin />

      <main>
        <Content>
          
          <Section>
            
            <DishAdmin
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
