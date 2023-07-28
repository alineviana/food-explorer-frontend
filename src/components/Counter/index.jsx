import { Container } from "./style";
import { FiMinus } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';

export function Counter() {
    return(
        <Container>
            <FiMinus />
                <span>01</span>
            <FiPlus />
        </Container>
    )
}