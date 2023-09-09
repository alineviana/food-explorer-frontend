import { useAuth } from "../../hooks/auth";
import { Container, Menu, Logo, Search, Receipt, Logout } from "./styles";
import { Input } from "../../components/Input";
import { AiOutlineMenu } from "react-icons/ai";
import { BsHexagonFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";

export function HeaderAdmin({ setSearch }) {
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
          <div className="logo">
            <BsHexagonFill />
            <span>food explorer</span>
          </div>
          <p>admin</p>
        </Logo>
        
        <Search>
          <Input 
            type="search"
            placeholder="Busque por pratos ou ingredientes" 
            icon={FiSearch} 
            setSearch={setSearch}
            onChange={(e) => setSearch(e.target.value)}/>
        </Search>

        <Link to='/newdish'>
          <Receipt>Novo Prato</Receipt>
        </Link>

        <Logout>
          <LuLogOut 
            onClick={handleSignOut}
          />
        </Logout>

    </Container>
  );
}
