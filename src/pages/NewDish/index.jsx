import { Container, Content, Link, Form } from "./styles";
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
      <Content>
        <main>
          <Link>
            <PiCaretLeft />
            <ButtonText title="voltar" />
          </Link>
          <Form>
            <h1>Novo Prato</h1>

            <div className="inputs">
              <label className="imagem">
                Imagem do prato
                <Input placeholder="Selecione imagem" icon={PiUploadSimple} />
              </label>

              <label>
                Nome
                <Input placeholder="Ex.: Salada Ceasar" />
              </label>

              <label>
                Categoria
                <select>
                  <option value="refeicoes">Refeições</option>
                  <option value="sobremesas">Sobremesas</option>
                  <option value="bebidas">Bebidas</option>
                </select>
              </label>
            </div>

            <Section title="Ingredientes">
              <div className="tags">
                <Ingredients value="Pão Naan" />
                <Ingredients placeholder="Adicionar" isNew />
              </div>

              <label>
                Preço
                <Input placeholder="R$ 0,00" />
              </label>
            </Section>

            <label>
              Descrição
              <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
            </label>

            <Button title="Salvar alterações" />
          </Form>
        </main>
      </Content>
      <Footer />
    </Container>
  );
}
