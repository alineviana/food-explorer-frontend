import { useState } from "react";
import { Container, Count } from "./style";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

export function Counter() {
  const [count, setCount] = useState(1);

  return (
    <Container>
      <Count>
        <button 
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
        >
          <FiMinus />
        </button>
      </Count>

      <span>
        {
          String(count).padStart(2, "0")
        }
      </span>

      <Count>
        <button 
          onClick={() => setCount(count + 1)}
        >
          <FiPlus />
        </button>
      </Count>
    </Container>
  );
}
