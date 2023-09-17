import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
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
import { useAuth } from "../../hooks/auth";

export function Order() {
  const { user } = useAuth();
  const [order, setOrder] = useState([]);
  const [removeOrder, setRemoveOrder] = useState([]);
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
    }, 5000);
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
      paymentFlow();
    }, 4000);
  }

  useEffect(() => {
    async function orderDishes() {
      const response = await api.get(`/order/${user.id}`);
      setOrder(response.data);
      localStorage.setItem(
        "@foodexplorer:total",
        JSON.stringify(response.data)
      );
    }
    orderDishes();
  }, [order]);

  useEffect(() => {
    async function removeDish() {
      await api.delete(`/order/${removeOrder}/${user.id}`);
    }
    removeDish();
  }, [removeOrder]);

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
  }, []);

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
            {order &&
              order.map((item, index) => {
                return (
                  <li className="info_dish" key={String(index)}>
                    <img
                      src={`${api.defaults.baseURL}/files/${item.image}`}
                      alt={item.name}
                    />
                    <div className="info_wrapper">
                      <h3>
                        <span>
                          {item.quantity} x {item.name}
                        </span>
                        <p>
                          {item.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
                      </h3>
                      <button
                        onClick={() => {
                          setRemoveOrder(item.dish_id);
                        }}
                      >
                        Excluir
                      </button>
                    </div>
                  </li>
                );
              })}

            <p className="total_price">Total: 139,98</p>
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
