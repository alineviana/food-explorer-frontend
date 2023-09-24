import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Container, Form, Logo } from "./styles";
import { BsHexagonFill } from "react-icons/bs";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);

  function handleSignIn() {
    setLoading(true);

    signIn({ email, password }).finally(() => setLoading(false));
  }

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
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Senha
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <Button title="Entrar" onClick={handleSignIn} loading={loading} />

        <Link to="/signup">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
