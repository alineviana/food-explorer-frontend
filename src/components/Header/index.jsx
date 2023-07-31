import { Container, Menu, Logo, Receipt } from "./styles";
import { Input } from "../../components/Input";
import { AiOutlineMenu } from "react-icons/ai";
import { BsHexagonFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { PiReceiptBold } from "react-icons/pi";

export function Header() {
  return (
    <Container>
      <Menu>
        <AiOutlineMenu />

        <Logo>
          <BsHexagonFill />
          <span>food explorer</span>
        </Logo>
        
        <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch} />

        <Receipt>
          <PiReceiptBold />
        </Receipt>

      </Menu>

    </Container>
  );
}
