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
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);
  const [removeItemOrder, setRemoveItemOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const [pix, setPix] = useState(false);
  const [credit, setCredit] = useState(false);
  const [awaitPayment, setAwaitPayment] = useState(false);
  const [approvedPayment, setApprovedPayment] = useState(false);

  function handleBack() {
    navigate(-1);
  }

  function handlePayment() {
    const detailsOrders = document.querySelector("#details");
    const detailsPayment = document.querySelector("#payment");

    detailsOrders.classList.add("hidden");
    detailsPayment.classList.remove("hidden");
  }

  async function handleCreditPayment() {
    const pix = document.querySelector("#pix");
    const credit = document.querySelector("#credit");

    setPix(false);
    setAwaitPayment(false);
    setApprovedPayment(false);
    setCredit(true);

    pix.classList.add("hidden");
    credit.classList.remove("hidden");
  }

  async function handlePixPayment() {
    const pix = document.querySelector("#pix");
    const credit = document.querySelector("#credit");
    const awaitPayment = document.querySelector("#awaitPayment");
    const approvedPayment = document.querySelector("#approvedPayment");

    setPix(true);
    setCredit(false);
    setAwaitPayment(false);
    setApprovedPayment(false);

    pix.classList.remove("hidden");
    credit.classList.add("hidden");
    awaitPayment.classList.add("hidden");
    approvedPayment.classList.add("hidden");
  }

  async function handleApprovedPayment() {
    const awaitPayment = document.querySelector("#awaitPayment");
    const approvedPayment = document.querySelector("#approvedPayment");

    setTimeout(() => {
      awaitPayment.classList.add("hidden");
      approvedPayment.classList.remove("hidden");
    }, 3000);
  }

  async function orderHistory() {
    await api.post(`/orderHistory/${user.id}`);
  }

  async function finalizePayment() {
    const credit = document.querySelector("#credit");
    const awaitPayment = document.querySelector("#awaitPayment");
    
    setPix(false);
    setCredit(false);

    credit.classList.add("hidden");
    awaitPayment.classList.remove("hidden");

    handleApprovedPayment();
    orderHistory();
  }

  useEffect(() => {
    async function orderDishes() {
      const response = await api.get(`/order/${user.id}`);
      setOrder(response.data);
      localStorage.setItem(
        "@foodexplorer:ordersCart",
        JSON.stringify(response.data)
      );
    }
    orderDishes();
  }, [order]);

  useEffect(() => {
    async function removeDish() {
      await api.delete(`/order/${removeItemOrder}/${user.id}`);
    }
    removeDish();
  }, [removeItemOrder]);

  useEffect(() => {
    let total = 0;

    order.forEach((dish) => {
      total += Number(dish.total_price);
    });
    setTotal(total);
  }, [order]);

  useEffect(() => {
    const pix = document.querySelector("#pix");
    const credit = document.querySelector("#credit");
    const awaitPayment = document.querySelector("#awaitPayment");
    const approvedPayment = document.querySelector("#approvedPayment");

    pix.classList.add("hidden");
    awaitPayment.classList.add("hidden");
    approvedPayment.classList.add("hidden");
    credit.classList.remove("hidden");
  }, [setOrder, setPix, setCredit]);

  return (
    <Container>
      <Header />
      <main>
        <Link>
          <PiCaretLeft />
          <ButtonText title="voltar" onClick={handleBack} />
        </Link>

        <div className="sections_wrapper">
          <Section className="details" id="details" title="Meu pedido">
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
                          setRemoveItemOrder(item.id);
                        }}
                      >
                        Excluir
                      </button>
                    </div>
                  </li>
                );
              })}

            <p className="total_price">
              Total:{" "}
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <ButtonText
              className="advance_button"
              title="Avançar"
              onClick={handlePayment}
            />
          </Section>

          <Pay>
            <Section className="payment" title="Pagamento">
              <div className="section_wrapper">
                <div className="buttons_wrapper">
                  <div className="credit_button">
                    <button
                      className={`${credit ? "true" : "hidden"}`}
                      onClick={handleCreditPayment}
                    >
                      <img src={creditoImg} alt="Imagem de cartão de crédito" />
                      Crédito
                    </button>
                  </div>
                  <div className="pix_button">
                    <button
                      className={`${pix ? "true" : "hidden"}`}
                      onClick={handlePixPayment}
                    >
                      <img src={pixImg} alt="Imagem PIX" />
                      PIX
                    </button>
                  </div>
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
                      onClick={finalizePayment}
                    />
                  </Form>
                </div>

                <div className="section_wrapper_pix">
                  <img
                    className="payment-pix"
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
                    className={`${awaitPayment ? "true" : "hidden"}`}
                  />
                  <img
                    src={payApprovedImg}
                    alt="Imagem de sinal de visto"
                    id="approvedPayment"
                    className={`${approvedPayment ? "true" : "hidden"}`}
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
