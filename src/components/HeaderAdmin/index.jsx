import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Container, Menu, Logo, Search, Favorites, Order, Receipt, Logout } from "./styles";
import { SidebarAdmin } from "../SidebarAdmin";
import { Input } from "../../components/Input";
import { AiOutlineMenu } from "react-icons/ai";
import { BsHexagonFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { PiReceiptBold } from "react-icons/pi";
import { LuLogOut } from "react-icons/lu";

export function HeaderAdmin({ setSearch }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const [order, setOrder] = useState([]);

  function showSiderbar() {
    setSidebar(!sidebar);
  }

  function handleHome() {
    navigate("/");
  }

  function handleMyFavorites() {
    navigate("/favorites");
  }

  function handleNewDish() {
    navigate("/newdish");
  }

  function handleOrders() {
    navigate("/ordersadmin")
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  useEffect(() => {
    async function getOrder() {
      const response = await api.get(`/orderhistory`);
      setOrder(response.data);
    }
    getOrder();
  }, [order]);

  return (
    <Container>
      <Menu>
        <AiOutlineMenu onClick={showSiderbar} />
        {sidebar && <SidebarAdmin active={setSidebar} setSearch={setSearch} />}
      </Menu>

      <Logo onClick={handleHome}>
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
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Favorites onClick={handleMyFavorites}>Meus favoritos</Favorites>

      <Order onClick={handleNewDish}>Novo Prato</Order>

      <Receipt onClick={handleOrders}>
        <PiReceiptBold />
        <p>Pedidos ({ order.length ?? 0 })</p>
      </Receipt>

      <Logout onClick={handleSignOut}>
        <LuLogOut  />
      </Logout>
    </Container>
  );
}
