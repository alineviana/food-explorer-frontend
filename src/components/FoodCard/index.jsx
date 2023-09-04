import { Container } from "./style";
import { Counter } from "../Counter";
import { ButtonText } from "../ButtonText";
import { VscChevronRight } from "react-icons/vsc";
import { VscHeart } from "react-icons/vsc";

export function FoodCard({ data, image, name, description, price, detailsDish, ...rest }) {
  return (
    <Container {...rest}>
      <button className="heart">
        <VscHeart />
      </button>

      <img 
        src={image}
        alt={name}
        onClick={() => detailsDish(data.id)}
      />

      <h3>
        {name}
        <VscChevronRight />
      </h3>

      <p  
        className="description"
        onClick={() => detailsDish(data.id)}
      >
        {description}
      </p>

      <p
        className="price"
        onClick={() => detailsDish(data.id)}
      >
        {price}
      </p>

      <div className="buttons">
        <Counter />
        <ButtonText title="incluir" />
      </div>
    </Container>
  );
}
