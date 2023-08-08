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

export function EditDish() {
  return (
    <Container>
      <HeaderAdmin />

      <main>
        <Form>
          <header>
            <PiCaretLeft />
            <ButtonText title="voltar" />
          </header>

          <h1>Editar Prato</h1>

          <div className="dish_wrapper">
            <div className="dish_image">
              <label>
                Imagem do prato
                <Input placeholder="Selecione imagem para alterá-la" icon={PiUploadSimple} />
              </label>
            </div>

            <div className="dish_name">
              <label>
                Nome
                <Input type="text" placeholder="Salada César" />
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
                <Input type="number" placeholder="R$ 40,00" />
              </label>
            </div>
          </div>

          <label>
            Descrição
            <TextArea placeholder="A Salada César é uma opção refrescante para o verão." />
          </label>

          <div className="delete_save_buttons">
            <Button className="delete_button" title="Excluir prato" />
            <Button className="save_button" title="Salvar alterações" />
          </div>
        </Form>
      </main>

      <Footer />
    </Container>
  );
}
