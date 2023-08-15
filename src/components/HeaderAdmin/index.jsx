import { Container, Menu, Logo, Search, Receipt, Logout } from "./styles";
import { Input } from "../../components/Input";
import { AiOutlineMenu } from "react-icons/ai";
import { BsHexagonFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";

export function HeaderAdmin() {
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
          <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch} />
        </Search>

        <Link to='/newdish'>
          <Receipt>Novo Prato</Receipt>
        </Link>

        <Logout>
          <LuLogOut />
        </Logout>

    </Container>
  );
}
