import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
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
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState([]);
  const [oldIngredients, setOldIngredients] = useState([]);
  const [price, setPrice] = useState("");

  const [description, setDescription] = useState("");
  
  const params = useParams();
  const navigate = useNavigate();
  
  function handleBack() {
    return navigate("/");
  }
  
  function handleImage(e) {
    const file = e.target.files[0];
    setImage(file);
  }
  
  async function handleUpdateDish() {
    const updateDish = {
      name: name,
      category: category,
      ingredients: JSON.stringify(ingredients, oldIngredients),
      price: price,
      description: description
    };

    const formData = new FormData();
    
    if (image) {
      formData.append("image", image);

      await api.patch(`/dishes/${params.id}`, formData);
    }

    await api.patch(`/dishes/${params.id}`, updateDish);
    
    alert("O prato foi editado com sucesso!");
    handleBack();
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
 
  function handleRemoveOldIngredient(deleted) {
    setOldIngredients((prevState) =>
      prevState.filter((oldIngredient) => oldIngredient !== deleted)
    );
  }
  
  async function deleteDish() {
    const confirm = window.confirm("Tem certeza que deseja excluir o prato?");
    
    if (confirm) {
      await api.delete(`/dishes/${params.id}`);
      alert("O prato foi excluído com sucesso!");
      handleBack();
    }
  }
  
  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setName(response.data[0].name);
      setCategory(response.data[0].category);
      setPrice(response.data[0].price);
      setDescription(response.data[0].description);
    }

    fetchDish();
  }, []);

  useEffect(() => {
    async function fetchIngredients() {
      const response = await api.get(`/ingredients/${params.id}`);
      setOldIngredients(response.data);
    }

    fetchIngredients();
  }, []);

  return (
    <Container>
      <HeaderAdmin />

      <main>
        <Form>
          <header>
            <PiCaretLeft />
            <ButtonText 
              title="voltar" 
              onClick={handleBack}
            />
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
                <select 
                  onChange={(e) => setCategory(e.target.value)}
                >
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
                        key={String(index)}
                        value={oldIngredient.name}
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
              onClick={handleUpdateDish}
            />
          </div>
        </Form>
      </main>

      <Footer />
    </Container>
  );
}