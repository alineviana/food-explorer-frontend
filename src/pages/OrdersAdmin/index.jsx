import { useNavigate } from "react-router-dom";
import { Container, Link } from "./styles";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { PiCaretLeft } from "react-icons/pi";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";

export function OrdersAdmin() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <HeaderAdmin />

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
                  <td>
                    <select>
                      <option value="Pendente">🔴 Pendente</option>
                      <option value="Preparando">🟠 Preparando</option>
                      <option value="Entregue">🟢 Entregue</option>
                    </select>
                  </td>
                  <td>00000004</td>
                  <td>
                    1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela,
                    1 x Suco de Maracujá
                  </td>
                  <td>20/05 às 18h00</td>
                </tr>
                <tr>
                  <td>
                    <select>
                      <option value="Pendente">🔴 Pendente</option>
                      <option value="Preparando">🟠 Preparando</option>
                      <option value="Entregue">🟢 Entregue</option>
                    </select>
                  </td>
                  <td>00000004</td>
                  <td>
                    1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela,
                    1 x Suco de Maracujá
                  </td>
                  <td>20/05 às 18h00</td>
                </tr>
                <tr>
                  <td>
                    <select>
                      <option value="Pendente">🔴 Pendente</option>
                      <option value="Preparando">🟠 Preparando</option>
                      <option value="Entregue">🟢 Entregue</option>
                    </select>
                  </td>
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
