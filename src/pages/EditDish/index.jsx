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
            <ButtonText title="voltar" onClick={handleBack} />
          </header>

          <h1>Editar Prato</h1>

          <div className="dish_wrapper">
            <div className="dish_image">
              <Section title="Imagem do prato">
                <label for="uploadImage">
                  <div className="upload_image">
                    <PiUploadSimple />
                    Selecione imagem para alterá-la
                  </div>
                  <Input
                    name="uploadImage"
                    id="uploadImage"
                    type="file"
                    onChange={handleImage}
                  />
                </label>
              </Section>
            </div>

            <div className="dish_name">
              <label>
                Nome
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>

            <div className="dish_category">
              <label>
                Categoria
                <select onChange={(e) => setCategory(e.target.value)}>
                  <option value="Refeições">Refeições</option>
                  <option value="Sobremesas">Sobremesas</option>
                  <option value="Bebidas">Bebidas</option>
                </select>
              </label>
            </div>
          </div>

          <div className="dish_information">
            <div className="ingredients">
              <Section title="Ingredientes">
                <div className="tags">
                  {ingredients.map((ingredient, index) => (
                    <Ingredients
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))}
                  {oldIngredients &&
                    oldIngredients.map((oldIngredient, index) => (
                      <Ingredients
                        value={oldIngredient.name}
                        key={String(index)}
                        onClick={() => handleRemoveOldIngredient(oldIngredient)}
                      />
                    ))}
                  <Ingredients
                    isNew
                    placeholder="Adicionar"
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredients}
                  />
                </div>
              </Section>
            </div>

            <div className="price">
              <label>
                Preço
                <Input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
            </div>
          </div>

          <label>
            Descrição
            <TextArea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <div className="delete_save_buttons">
            <Button 
              className="delete_button" 
              title="Excluir prato"
              onClick={deleteDish}
            />
            <Button 
              className="save_button"
              title="Salvar alterações"
              onClick={updateDish}
            />
          </div>
        </Form>
      </main>

      <Footer />
    </Container>
  );
}