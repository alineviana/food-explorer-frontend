import { Container } from "./style";
import { Counter } from "../Counter";
import { ButtonText } from "../ButtonText";
import { VscChevronRight } from "react-icons/vsc";
import { SlHeart } from "react-icons/sl";

export function FoodCard({ data, image, name, description, price, detailsDish, ...rest }) {
  return (
    <Container {...rest}>
      <button className="heart">
        <SlHeart />
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
