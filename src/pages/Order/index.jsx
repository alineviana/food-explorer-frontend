import { Container, Pay, Form } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import pixImg from "../../assets/pix.svg";
import creditoImg from "../../assets/credito.svg";
import qrcodeImg from "../../assets/qrcode.svg";
import relogioImg from "../../assets/relogio.svg";
import payApprovedImg from "../../assets/payApproved.svg";
import entregueImg from "../../assets/entregue.svg";
import { PiReceiptBold } from "react-icons/pi";
import { Footer } from "../../components/Footer";

export function Order() {
  return (
    <Container>
      <Header />

      <main>
        <Section className="details" title="Meu pedido">
          <div className="info_dish">
            <img src="../../src/assets/coffee.svg" alt="" />
            <div className="info_wrapper">
              <h3>Café Expresso</h3>
              <p>Remover dos favoritos</p>
            </div>
          </div>

          <div className="info_dish">
            <img src="../../src/assets/coffee.svg" alt="" />
            <div className="info_wrapper">
              <h3>Café Expresso</h3>
              <p>Remover dos favoritos</p>
            </div>
          </div>

          <div className="info_dish">
            <img src="../../src/assets/coffee.svg" alt="" />
            <div className="info_wrapper">
              <h3>Café Expresso</h3>
              <p>Remover dos favoritos</p>
            </div>
          </div>
          <p className="total_price">Total: R$ 103,88</p>
          <ButtonText className="advance_button" title="Avançar" />
        </Section>

        <Pay>
          <Section className="payment" title="Pagamento">
            <div className="section_wrapper">
              <div className="buttons_wrapper">
                <button className="pix_button">
                  <img src={pixImg} alt="Imagem de Pix" />
                  <span>PIX</span>
                </button>

                <button className="credit_button">
                  <img src={creditoImg} alt="Imagem de cartão de crédito" />
                  <span>Crédito</span>
                </button>
              </div>

              <div className="qrcode_image">
                <img src={qrcodeImg} alt="Imagem QRCODE" />
              </div>

              <div className="data_pay" hidden>
                <Form>
                  <label>
                    Número do Cartão
                    <input
                      disabled
                      placeholder="0000 0000 0000 0000"
                      type="number"
                    />
                  </label>

                  <div className="validity_and_cvc">
                    <label>
                      Validade
                      <input disabled placeholder="04/25" type="number" />
                    </label>

                    <label>
                      CVC
                      <input disabled placeholder="000" type="number" />
                    </label>
                  </div>

                  <Button icon={PiReceiptBold} title="Finalizar pagamento" />
                </Form>
              </div>

              <div className="pay_approved">
                <img src={relogioImg} alt="Imagem de um relógio" hidden />
                <img src={payApprovedImg} alt="Imagem de um relógio" hidden />
                <img src={entregueImg} alt="Imagem de um garfo e uma faca" hidden />
              </div>
            </div>
          </Section>
        </Pay>
      </main>

      <Footer />
    </Container>
  );
}
