import { Container } from "./style";
import { Counter } from '../Counter';
import { ButtonText } from '../ButtonText';
import imgRavanello from '../../assets/ravanello.svg';
import { VscChevronRight } from 'react-icons/vsc';
import { VscHeart } from 'react-icons/vsc';

export function Card() {
    return(
        <Container>
            <button className="heart"><VscHeart/></button>
            <img src={imgRavanello} alt="Imagem Salada Ravanello" />
            <h1>
                Salada Ravanello
                <VscChevronRight />
            </h1>
            <p>R$ 49,97</p>
            <Counter />
            <ButtonText title="incluir" />
        </Container>
    )
}