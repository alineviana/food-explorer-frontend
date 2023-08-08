import { Container, Form } from "./styles";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { PiCaretLeft } from "react-icons/pi";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { PiUploadSimple } from "react-icons/pi";
import { Section } from "../../components/Section";
import { Ingredients } from "../../components/Ingredients";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

export function NewDish() {
  return (
    <Container>
      <HeaderAdmin />

      <main>
        <Form>
          <header>
            <PiCaretLeft />
            <ButtonText title="voltar" />
          </header>

          <h1>Novo Prato</h1>

          <div className="dish_wrapper">
            <div className="dish_image">
              <label>
                Imagem do prato
                <Input placeholder="Selecione imagem" icon={PiUploadSimple} />
              </label>
            </div>

            <div className="dish_name">
              <label>
                Nome
                <Input type="text" placeholder="Ex.: Salada Ceasar" />
              </label>
            </div>

            <div className="dish_category">
              <label>
                Categoria
                <select>
                  <option value="refeicoes">Refeições</option>
                  <option value="sobremesas">Sobremesas</option>
                  <option value="bebidas">Bebidas</option>
                </select>
              </label>
            </div>
          </div>

          <div className="dish_information">
            <div className="ingredients">
              <Section title="Ingredientes">
                <div className="tags">
                  <Ingredients value="Pão Naan" />
                  <Ingredients placeholder="Adicionar" isNew />
                </div>
              </Section>
            </div>

            <div className="price">
              <label>
                Preço
                <Input type="number" placeholder="R$ 00,00" />
              </label>
            </div>
          </div>

          <label>
            Descrição
            <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
          </label>

          <div className="save_button">
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>

      <Footer />
    </Container>
  );
}
