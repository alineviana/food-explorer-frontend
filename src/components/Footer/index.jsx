import { Container, Logo } from "./styles";
import { BsHexagonFill } from "react-icons/bs";

export function Footer() {
  return (
    <Container>
      <Logo>
        <BsHexagonFill />
        <h3>food explorer</h3>
      </Logo>
        <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}
