import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Container, Content } from "./styles";
import { FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Input } from "../Input";
import { ButtonText } from "../ButtonText";

export function SidebarAdmin({ active, setSearch }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function closeSidebar() {
    active(false);
  }

  function handleNewDish() {
    navigate("/newdish");
  }

  function handleFavorites() {
    navigate("/favorites");
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container sidebar={active}>
      <div className="title">
        <FaTimes onClick={closeSidebar} />
        <h1>Menu</h1>
      </div>

      <div className="input_wrapper">
        <Input
          type="search"
          placeholder="Busque pratos ou ingredientes"
          icon={FiSearch}
          setSearch={setSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Content>
        <ButtonText title="Novo Prato" onClick={handleNewDish} />
        <ButtonText title="Meus favoritos" onClick={handleFavorites} className="my_favorites" />
        <ButtonText title="Sair" onClick={handleSignOut} />
      </Content>
    </Container>
  );
}