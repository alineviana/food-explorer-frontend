import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import statusRed from "../../assets/statusRed.svg";
import statusYellow from "../../assets/statusYellow.svg";
import statusGreen from "../../assets/statusGreen.svg";
import { Footer } from "../../components/Footer";

export function OrderHistory() {
  return (
    <Container>
      <Header />

      <main>
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
                    <img src={statusRed} alt="" /> Pendente
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
                    <img src={statusYellow} alt="" /> Pendente
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
                    <img src={statusGreen} alt="" /> Pendente
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
