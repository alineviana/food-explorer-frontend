import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Container, Menu, Logo, Search, Receipt, Logout } from "./styles";
import { Input } from "../../components/Input";
import { AiOutlineMenu } from "react-icons/ai";
import { BsHexagonFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { PiReceiptBold } from "react-icons/pi";
import { LuLogOut } from "react-icons/lu";

export function Header() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <Menu>
        <AiOutlineMenu />
      </Menu>

      <Logo>
        <BsHexagonFill />
        <span>food explorer</span>
      </Logo>

      <Search>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
        />
      </Search>

      <Receipt>
        <PiReceiptBold />
        <p>Pedidos (0)</p>
      </Receipt>

      <Logout>
        <LuLogOut 
          onClick={handleSignOut}
        />
      </Logout>
    </Container>
  );
}
