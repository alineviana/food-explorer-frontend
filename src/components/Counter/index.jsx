import { useState } from "react";
import { Container, Count } from "./style";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

export function Counter() {
  const [quantity, setQuantity] = useState(1);

  return (
    <Container>
      <Count>
        <button onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}>
          <FiMinus />
        </button>
      </Count>

      <span>{String(quantity).padStart(2, "0")}</span>

      <Count>
        <button onClick={() => setQuantity(quantity + 1)}>
          <FiPlus />
        </button>
      </Count>
    </Container>
  );
}
