import { Container, Form, Logo } from "./styles";
import { BsHexagonFill } from "react-icons/bs";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
    return(
        <Container>
            <Logo>
                <BsHexagonFill />
                <h1>food explorer</h1>
            </Logo>

            <Form>
                <h2>Faça seu login</h2>
                
                <Input
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                />

                <Input
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                />

                <Button title="Entrar" />

                <a href="#">
                    Criar uma conta
                </a>

            </Form>
        </Container>
    )
}