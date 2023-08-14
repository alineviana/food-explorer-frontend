import { Container, Form, Logo } from "./styles";
import { BsHexagonFill } from "react-icons/bs";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <Logo>
        <BsHexagonFill />
        <h1>food explorer</h1>
      </Logo>

      <Form>
        <h2>Crie sua conta</h2>

        <label>
          Seu nome
          <Input placeholder="Exemplo: Maria da Silva" type="text" />
        </label>

        <label>
          Email
          <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" />
        </label>

        <label>
          Senha
          <Input placeholder="No mínimo 6 caracteres" type="password" />
        </label>

        <Button title="Entrar" />

        <a href="#">Já tenho uma conta</a>
      </Form>
    </Container>
  );
}
