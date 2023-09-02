import { Container } from "./style";
import { Counter } from "../Counter";
import { ButtonText } from "../ButtonText";
import { VscChevronRight } from "react-icons/vsc";
import { VscHeart } from "react-icons/vsc";

export function FoodCard({ image, name, description, price, ...rest }) {
  return (
    <Container {...rest}>
      <button className="heart">
        <VscHeart />
      </button>

      <img src={image} alt={name} />

      <h3>
        {name}
        <VscChevronRight />
      </h3>

      <p className="description">{description}</p>

      <p className="price">{price}</p>

      <div className="buttons">
        <Counter />
        <ButtonText title="incluir" />
      </div>
    </Container>
  );
}
