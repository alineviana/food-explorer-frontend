import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Link, Info, Order } from "./style";
import { PiCaretLeft } from "react-icons/pi";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../Tag";
import { Counter } from "../../components/Counter";
import { PiReceiptBold } from "react-icons/pi";

export function Dish() {
  const [data, setData] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  function handleBackHome() {
    navigate("/");
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data[0]);
    }

    fetchDishes();
  }, []);

  useEffect(() => {
    async function fetchIngredients() {
      const response = await api.get(`/ingredients/${params.id}`);
      setIngredients(response.data);
    }

    fetchIngredients();
  }, []);

  return (
    <Container>
      {data && (
        <main>
          <Link>
            <PiCaretLeft />
            <ButtonText title="voltar" onClick={handleBackHome} />
          </Link>

          <Info>
            <div className="dish_image">
              <img
                src={`${api.defaults.baseURL}/files/${data.image}`}
                alt={data.name}
              />
            </div>

            <div className="dish_description">
              <h1>{data.name}</h1>
              <p>{data.description}</p>

              <section className="ingredients">
                {ingredients &&
                  ingredients.map((ingredient) => (
                    <Tag key={String(ingredient.id)} title={ingredient.name} />
                  ))}
              </section>

              <Order>
                <Counter />
                <button className="pedir">
                  <PiReceiptBold />
                  pedir ∙ R$ {data.price}
                </button>
                <button className="incluir">
                  incluir ∙ {" "}
                  {Number(data.price).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </button>
              </Order>
            </div>
          </Info>
        </main>
      )}
    </Container>
  );
}
