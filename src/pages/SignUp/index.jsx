import { useState } from "react";
import { api } from "../../services/api";
import { Container, Form, Logo } from "./styles";
import { BsHexagonFill } from "react-icons/bs";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    setLoading(true);

    api.post("/users", { name, email, password })
    .then(() => { 
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar!");
      }
    })
    .finally(() => setLoading(false));
  }

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
          <Input 
            placeholder="Exemplo: Maria da Silva" 
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label>
          Email
          <Input 
            placeholder="Exemplo: exemplo@exemplo.com.br" 
            type="text"
            onChange={e => setEmail(e.target.value)}
          />
        </label>

        <label>
          Senha
          <Input 
            placeholder="No mínimo 6 caracteres" 
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </label>

        <Button 
          title="Criar conta"
          onClick={handleSignUp}
          loading={loading}
        />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
