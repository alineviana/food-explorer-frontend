import { Container } from "./styles";
import logoBanner from '../../assets/macaron.svg';

export function Banner() {
    return(
        <Container>
                <div className="image">
                    <img src={logoBanner} alt="Imagem de macarons" />
                </div>

                <div className="text-banner">
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </div>
        </Container>
    )
}