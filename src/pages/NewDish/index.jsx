import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
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
  const [image, setImage] = useState(null);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState([]);

  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    return navigate(-1);
  }

  function handleImage(e) {
    const file = e.target.files[0];
    setImage(file);
  }

  async function handleNewDish() {
    if (!image) {
      return alert("Selecione uma imagem para o prato!");
    }

    if (!name) {
      return alert("Digite um nome para o prato!");
    }

    if (!category) {
      return alert("Selecione uma categoria para o prato!");
    }

    if (ingredients.length === 0) {
      return alert("Informe ao menos um ingrediente para o prato!");
    }

    if (newIngredient) {
      return alert(
        "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique em adicionar ou deixe o campo vazio!"
      );
    }

    if (!price) {
      return alert("Digite um preço para o prato!");
    }

    if (!description) {
      return alert("Digite uma descrição para o prato!");
    }

    const formData = new FormData();

    formData.append("image", image);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("ingredients", JSON.stringify(ingredients));
    formData.append("price", price);
    formData.append("description", description);

    await api.post("/dishes", formData);

    alert("O prato foi cadastrado com sucesso!");

    navigate(-1);
  }

  function handleAddIngredients() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  return (
    <Container>
      <HeaderAdmin />

      <main>
        <Form>
          <header>
            <PiCaretLeft />
            <ButtonText title="voltar" onClick={handleBack} />
          </header>

          <h1>Novo Prato</h1>

          <div className="dish_wrapper">
            <div className="dish_image">
              <Section title="Imagem do prato">
                <label for="uploadImage">
                  <div className="upload_image">
                    <PiUploadSimple />
                    Selecione a imagem
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
                  placeholder="Ex.: Salada Ceasar"
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
                  placeholder="R$ 00,00"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
            </div>
          </div>

          <label>
            Descrição
            <TextArea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <div className="save_button">
            <Button title="Salvar alterações" onClick={handleNewDish} />
          </div>
        </Form>
      </main>

      <Footer />
    </Container>
  );
}
