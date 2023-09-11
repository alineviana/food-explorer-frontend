import { useNavigate } from "react-router-dom";
import { Container, Link } from "./styles";
import { Header } from "../../components/Header";
import { PiCaretLeft } from "react-icons/pi";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";

export function OrderHistory() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Link>
          <PiCaretLeft />
          <ButtonText title="voltar" onClick={handleBack} />
        </Link>
        <Section className="details" title="Histórico de Pedidos">
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

              <tbody>
                <tr>
                  <td>🔴 Pendente</td>
                  <td>00000004</td>
                  <td>
                    1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela,
                    1 x Suco de Maracujá
                  </td>
                  <td>20/05 às 18h00</td>
                </tr>
                <tr>
                  <td>🟢 Entregue</td>
                  <td>00000004</td>
                  <td>
                    1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela,
                    1 x Suco de Maracujá
                  </td>
                  <td>20/05 às 18h00</td>
                </tr>
                <tr>
                  <td>🟠 Preparando</td>
                  <td>00000004</td>
                  <td>
                    1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela,
                    1 x Suco de Maracujá
                  </td>
                  <td>20/05 às 18h00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>
      </main>

      <Footer />
    </Container>
  );
}
