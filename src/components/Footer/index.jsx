import { Container, Logo } from "./styles";
import { BsHexagonFill } from "react-icons/bs";

export function Footer() {
  return (
    <Container>
      <Logo>
        <BsHexagonFill />
        <span>food explorer</span>
      </Logo>
        <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}
