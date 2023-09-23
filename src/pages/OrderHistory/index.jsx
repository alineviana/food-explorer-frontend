import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Container, Link } from "./styles";
import { Header } from "../../components/Header";
import { PiCaretLeft } from "react-icons/pi";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";

export function OrderHistory() {
  const navigate = useNavigate();
  const [orderHistory, setOrderHistory] = useState([]);
  const [isOrderHistory, setIsOrderHistory] = useState([]);
  const user = JSON.parse(localStorage.getItem("@foodexplorer:user"));

  function handleBack() {
    navigate(-1);
  }

  function fetchStatusColor(status) {
    if (status === "Pendente") {
      return "🔴 Pendente";
    } else if (status === "Preparando") {
      return "🟠 Preparando";
    }
    return "🟢 Entregue";
  }

  function formatDateTime(dateTime) {
    const dateTimeString = new Date(dateTime);

    const formatDate = dateTimeString.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const formatTime = dateTimeString.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return `${formatDate} às ${formatTime}`;
  }

  useEffect(() => {
    try {
      async function getOrderHistory() {
        const response = await api.get(`/orderhistory/${user.id}`);
        setOrderHistory(response.data);
      }
      getOrderHistory();
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert(
          "Não foi possível carregar o histórico de pedidos, tente novamente!"
        );
      }
    }
  }, [orderHistory]);

  return (
    <Container>
      <Header />

      <main>
        <Link>
          <PiCaretLeft />
          <ButtonText title="voltar" onClick={handleBack} />
        </Link>

        <Section className="table_mobile" title="Pedidos">
          {orderHistory.length > 0 ? (
            <>
              {orderHistory.map((item, index) => {
                return (
                  <section key={String(index)}>
                    <div className="order">
                      <ul className="each_order">
                        <li>code</li>
                        <li>{fetchStatusColor(item.status)}</li>
                        <li>{formatDateTime(item.created_at)}</li>
                      </ul>
                      <div className="details">{item.detailing}</div>
                    </div>
                  </section>
                );
              })}
            </>
          ) : (
            <p className="dish_not_registered">
              Nenhum pedido foi realizado.
            </p>
          )}
        </Section>

        <Section className="table_desktop" title="Histórico de Pedidos">
          {orderHistory.length > 0 ? (
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Código</th>
                    <th>Detalhamento</th>
                    <th>Data e hora</th>
                  </tr>
                </thead>

                <tbody className="desktop">
                  {orderHistory.map((item, index) => {
                    return (
                      <>
                        <tr key={String(index)}>
                          <td> {fetchStatusColor(item.status)} </td>
                          <td>00000004</td>
                          <td>{item.detailing}</td>
                          <td>{formatDateTime(item.created_at)}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="dish_not_registered">
              Nenhum pedido foi realizado.
            </p>
          )}
        </Section>
      </main>

      <Footer />
    </Container>
  );
}
