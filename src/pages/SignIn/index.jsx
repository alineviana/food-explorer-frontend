import { Container, Form, Logo } from "./styles";
import { BsHexagonFill } from "react-icons/bs";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <Container>
      <Logo>
        <BsHexagonFill />
        <h1>food explorer</h1>
      </Logo>

      <Form>
        <h2>Faça seu login</h2>

        <label>
          Email
          <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" />
        </label>

        <label>
          Senha
          <Input placeholder="No mínimo 6 caracteres" type="password" />
        </label>

        <Button title="Entrar" />

        <Link to="/signup">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
