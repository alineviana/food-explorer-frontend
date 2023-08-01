import { Container, Header, Search } from './styles';
import { CgClose } from 'react-icons/cg';
import { FiSearch } from "react-icons/fi";
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { Footer } from '../../components/Footer';

export function Menu() {
    return(
        <Container>
            <Header>
                <CgClose /> 
                <span>Menu</span>
            </Header>

            <Search>
                <Input
                    placeholder="Busque por pratos ou ingredientes"
                    icon={FiSearch}
                />
                <ButtonText title="Sair" />
            </Search>
            
            <Footer />
        </Container>
    )
}