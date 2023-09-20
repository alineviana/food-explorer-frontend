import { useState } from "react";
import { Container, Count } from "./style";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

export function Counter({ quantity, decrement, increment }) {
  return (
    <Container>
      <Count>
        <button onClick={decrement}>
          <FiMinus />
        </button>
      </Count>

      <span>{String(quantity).padStart(2, "0")}</span>

      <Count>
        <button onClick={increment}>
          <FiPlus />
        </button>
      </Count>
    </Container>
  );
}
