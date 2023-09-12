import { Container, Header, Search } from "./styles";
import { CgClose } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { Input } from "../Input";
import { ButtonText } from "../ButtonText";
import { Footer } from "../Footer";

export function Menu() {
  return (
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
        <div className="menu">
          <ButtonText title="Meus Favoritos" />
          <ButtonText title="Sair" />
        </div>
      </Search>

      <Footer />
    </Container>
  );
}
