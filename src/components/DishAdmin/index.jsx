import { Container, Link, Info, Order} from "./style";
import { PiCaretLeft } from "react-icons/pi";
import { ButtonText } from "../ButtonText";
import imgRavanello from '../../assets/ravanello.svg';
import { Tag } from "../Tag";
import { Button } from "../Button";

export function DishAdmin({ data, ...rest }) {
  return (
    <Container {...rest}>
      <Link>
        <PiCaretLeft />
        <ButtonText title="voltar" />
      </Link>

      <img src={imgRavanello} alt="Imagem Salada Ravanello" />

      <Info>
      <h1>{data.title}</h1>
      <p>{data.text}</p>

      {
        data.tags && (
          <footer>
          {
            data.tags.map((tag) => (
            <Tag key={tag.name} title={tag.name} />
           ))
          }
          </footer>
    )}

        <Order>
          <Button
            title="Editar prato"
          />
        </Order>

      </Info>

    </Container>
  );
}
