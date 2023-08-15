import { Container, Link, Info, Order} from "./style";
import { PiCaretLeft } from "react-icons/pi";
import { ButtonText } from "../../components/ButtonText";
import imgRavanello from '../../assets/ravanello.svg';
import { Tag } from "../Tag";
import { Counter } from "../Counter";
import { PiReceiptBold } from "react-icons/pi";

export function Dish({ data, ...rest }) {
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
          <Counter />
          <button className="pedir">
            <PiReceiptBold />
            pedir ∙ R$ 25,00
          </button>
          <button className="incluir">
            incluir ∙ R$ 25,00
          </button> 
        </Order>

      </Info>

    </Container>
  );
}
