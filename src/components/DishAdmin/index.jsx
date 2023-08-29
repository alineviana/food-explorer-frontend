import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Link, Info, Order } from "./style";
import { PiCaretLeft } from "react-icons/pi";
import { ButtonText } from "../ButtonText";
import { Tag } from "../Tag";
import { Button } from "../Button";

export function DishAdmin() {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  function handleBackHome() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
      console.log(response)
    }

    fetchDish();
  }, []);

  return (
    <Container>
      <Link>
        <PiCaretLeft />
        <ButtonText title="voltar" onClick={handleBackHome} />
      </Link>

      {
        data && 
        <Info>
          <img src={`${api.defaults.baseURL}/files/${data.image}`} alt={data.name} />

          <h1>{data.name}</h1>

          <p>{data.description}</p>

          {data.tags && (
            <footer>
              {data.tags.map((tag) => (
                <Tag key={String(tag.id)} title={tag.name} />
              ))}
            </footer>
          )}

          <Order>
            <Button title="Editar prato" />
          </Order>
        </Info>
      }
    </Container>
  );
}
