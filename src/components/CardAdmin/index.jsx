import { Container } from "./style";
import { Link } from "react-router-dom";
import imgRavanello from '../../assets/ravanello.svg';
import { VscChevronRight } from 'react-icons/vsc';
import { PiPencilSimpleLight } from 'react-icons/pi';

export function CardAdmin() {
    return(
        <Container>
            <Link to='/editdish'>
                <button className="pencil"><PiPencilSimpleLight /></button>
            </Link>
            <img src={imgRavanello} alt="Imagem Salada Ravanello" />
            <h1>
                Salada Ravanello
                <VscChevronRight />
            </h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
            <span>R$ 49,97</span>
        </Container>
    )
}