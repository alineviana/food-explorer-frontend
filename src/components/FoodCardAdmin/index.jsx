import { Container } from "./style";
import { VscChevronRight } from "react-icons/vsc";
import { PiPencilSimpleLight } from "react-icons/pi";

export function FoodCardAdmin({ data, image, name, description, price, detailsDish, ...rest }) {
  return (
    <Container {...rest}>
      <button className="pencil" onClick={() => detailsDish(data.id)}>
        <PiPencilSimpleLight />
      </button>

      <img src={image} alt={name} onClick={() => detailsDish(data.id)} />

      <h3>
        {name}
        <VscChevronRight />
      </h3>

      <p className="description" onClick={() => detailsDish(data.id)}>
        {description}
      </p>

      <p className="price" onClick={() => detailsDish(data.id)}>
        {Number(price).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </Container>
  );
}