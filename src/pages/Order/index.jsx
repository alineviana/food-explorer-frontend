import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Link, Pay, Form } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { PiCaretLeft } from "react-icons/pi";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import pixImg from "../../assets/pix.svg";
import creditoImg from "../../assets/credito.svg";
import qrcodeImg from "../../assets/qrcode.svg";
import relogioImg from "../../assets/relogio.svg";
import payApprovedImg from "../../assets/payApproved.svg";
import deliveredImg from "../../assets/delivered.svg";
import { PiReceiptBold } from "react-icons/pi";
import { Footer } from "../../components/Footer";

export function Order() {
  const [pix, setPix] = useState(false);
  const [credit, setCredit] = useState(true);
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handlePix() {
    // await api.put(`/orders/${user.id}`, { payment_method: "pix" });

    const pix = document.querySelector("#pix");
    const credit = document.querySelector("#credit");

    setPix(true);
    setCredit(false);

    pix.classList.remove("hidden");
    credit.classList.add("hidden");
  }

  async function handleCredit() {
    // await api.put(`/orders/${user.id}`, { payment_method: "credit" });

    const pix = document.querySelector("#pix");
    const credit = document.querySelector("#credit");

    setPix(false);
    setCredit(true);

    pix.classList.add("hidden");
    credit.classList.remove("hidden");
  }

  function paymentFlow() {
    const awaitPayment = document.querySelector("#awaitPayment");
    const approvedPayment = document.querySelector("#approvedPayment");
    const delivered = document.querySelector("#delivered");

    awaitPayment.classList.add("hidden");
    approvedPayment.classList.remove("hidden");

    setTimeout(() => {
      approvedPayment.classList.add("hidden");
      delivered.classList.remove("hidden");
    }, 4000)
  }

  async function handlePayment() {
    const credit = document.querySelector("#credit");
    const pix = document.querySelector("#pix");
    const awaitPayment = document.querySelector("#awaitPayment");
    const approvedPayment = document.querySelector("#approvedPayment");
    const delivered = document.querySelector("#delivered");

    credit.classList.add("hidden");
    pix.classList.add("hidden");
    awaitPayment.classList.remove("hidden");
    approvedPayment.classList.add("hidden");
    delivered.classList.add("hidden");

    setTimeout(() => {
      paymentFlow()
    }, 3000);
  }

  useEffect(() => {
    const pix = document.querySelector("#pix");
    const credit = document.querySelector("#credit");
    const awaitPayment = document.querySelector("#awaitPayment");
    const approvedPayment = document.querySelector("#approvedPayment");
    const delivered = document.querySelector("#delivered");

    pix.classList.add("hidden");
    awaitPayment.classList.add("hidden");
    approvedPayment.classList.add("hidden");
    delivered.classList.add("hidden");
    credit.classList.remove("hidden");
  }, [handlePayment]);

  return (
    <Container>
      <Header />
      <main>
        <Link>
          <PiCaretLeft />
          <ButtonText title="voltar" onClick={handleBack} />
        </Link>

        <div className="sections_wrapper">
          <Section className="details" title="Meu pedido">
            <div className="info_dish">
              <img src="../../src/assets/coffee.svg" alt="" />
              <div className="info_wrapper">
                <h3>
                  1x <span>Café Expresso</span> R$ 25,97
                </h3>
                <button>Excluir</button>
              </div>
            </div>

            <div className="info_dish">
              <img src="../../src/assets/coffee.svg" alt="" />
              <div className="info_wrapper">
                <h3>
                  1x <span>Café Expresso</span> R$ 25,97
                </h3>
                <button>Excluir</button>
              </div>
            </div>

            <div className="info_dish">
              <img src="../../src/assets/coffee.svg" alt="" />
              <div className="info_wrapper">
                <h3>
                  1x <span>Café Expresso</span> R$ 25,97
                </h3>
                <button>Excluir</button>
              </div>
            </div>
            <p className="total_price">Total: R$ 103,88</p>
            <ButtonText className="advance_button" title="Avançar" />
          </Section>

          <Pay>
            <Section className="payment" title="Pagamento">
              <div className="wrapper">
                <div className="section_wrapper_credit">
                  <div className="buttons_wrapper">
                    <button
                      className={`payment-credit ${credit ? "true" : "false"}`}
                      onClick={handleCredit}
                    >
                      <img src={creditoImg} alt="Imagem de cartão de crédito" />
                      <span>Crédito</span>
                    </button>

                    <button
                      className={`payment-pix ${pix ? "true" : "false"}`}
                      onClick={handlePix}
                    >
                      <img src={pixImg} alt="Imagem PIX" />
                      <span>PIX</span>
                    </button>
                  </div>

                  <div className="data_pay" id="credit">
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

                      <Button
                        icon={PiReceiptBold}
                        title="Finalizar pagamento"
                        onClick={handlePayment}
                      />
                    </Form>
                  </div>
                </div>

                <div className="section_wrapper_pix">
                  <img
                    className="qrcode_image"
                    src={qrcodeImg}
                    alt="Imagem QRCODE"
                    id="pix"
                  />
                </div>

                <div className="section_wrapper_payment">
                  <img
                    src={relogioImg}
                    alt="Imagem de um relógio"
                    id="awaitPayment"
                  />
                  <img
                    src={payApprovedImg}
                    alt="Imagem de sinal de visto"
                    id="approvedPayment"
                  />
                  <img
                    src={deliveredImg}
                    alt="Imagem de um garfo e uma faca"
                    id="delivered"
                  />
                </div>
              </div>
            </Section>
          </Pay>
        </div>
      </main>

      <Footer />
    </Container>
  );
}
