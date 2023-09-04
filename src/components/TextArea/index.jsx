import { Container } from './styles';

export function TextArea({ value, ...rest }) {
    return(
        <Container 
            value={value}
            {...rest}
        >
        </Container>
    );
}