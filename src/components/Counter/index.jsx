import { Container, Count } from "./style";
import { FiMinus } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';

export function Counter() {
    return(
        <Container>
            <Count>
                <FiMinus />
            </Count>
            
                <span>01</span>
            
            <Count>
                <FiPlus />
            </Count>
        </Container>
    )
}