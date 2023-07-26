import { Container, Menu, Logo, Receipt } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import { BsHexagonFill } from "react-icons/bs";
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
      
        <Receipt>
          <PiReceiptBold />
        </Receipt>

      </Menu>

    </Container>
  );
}
