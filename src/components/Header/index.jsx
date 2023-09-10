import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Container, Menu, Logo, Search, Receipt, Logout } from "./styles";
import { Input } from "../../components/Input";
import { AiOutlineMenu } from "react-icons/ai";
import { BsHexagonFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { PiReceiptBold } from "react-icons/pi";
import { LuLogOut } from "react-icons/lu";

export function Header({ setSearch }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleOrder() {
    navigate("/order");
  }

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
          type="search"
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
          setSearch={setSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Receipt onClick={handleOrder}>
        <PiReceiptBold />
        <p>Pedidos (0)</p>
      </Receipt>

      <Logout>
        <LuLogOut onClick={handleSignOut} />
      </Logout>
    </Container>
  );
}
