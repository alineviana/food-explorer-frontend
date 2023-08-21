import { useState } from "react";
import { api } from '../../services/api';
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
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  async function handleNewDish() {
    await api.post("/dishes", {
      name,
      category,
      ingredients,
      price,
      description
    });

    alert("O prato foi cadastrado com sucesso!");
    navigate("/");
  }  

  function handleAddIngredients() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

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
                <Input 
                  type="text"
                  placeholder="Ex.: Salada Ceasar"
                  onChange={e => setName(e.target.value)}
                />
              </label>
            </div>

            <div className="dish_category">
              <label>
                Categoria
                <select 
                  onChange={e => setCategory(e.target.value)}
                >
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
                  {
                    ingredients.map((ingredient, index) => (
                      <Ingredients
                        key={String(index)}
                        value={ingredient}
                        onClick={() => handleRemoveIngredient(ingredient)}
                      />
                    ))
                  }
                  <Ingredients
                    isNew
                    placeholder="Adicionar"
                    value={newIngredient}
                    onChange={e => setNewIngredient(e.target.value)}
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
                  onChange={e => setPrice(e.target.value)}
                />
              </label>
            </div>
          </div>

          <label>
            Descrição
            <TextArea 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
            />
          </label>

          <div className="save_button">
            <Button 
              title="Salvar alterações"
              onClick={handleNewDish}
            />
          </div>
        </Form>
      </main>

      <Footer />
    </Container>
  );
}
