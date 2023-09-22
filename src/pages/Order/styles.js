import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_100};
  display: grid;
  height: 100vh;
  width: 100%;

  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  main {
    background: ${({ theme }) => theme.COLORS.DARK_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h2 {
      font-family: "Poppins", serif;
      font-size: 3.2rem;
      font-weight: 500;
      margin: 2.5rem 0 2.7rem 2rem;
    }

    .hidden {
      display: none;
    }

    .sections_wrapper {
      display: flex;
      justify-content: space-around;
    }

    .details {
      h2 {
        font-family: "Poppins", serif;
        font-size: 3.2rem;
        font-weight: 500;
        margin: 2.5rem 0 2.7rem 2rem;
      }
    }

    .info_dish {
      display: flex;
      margin-top: 1.6rem;

      img {
        height: 10rem;
        margin: 0 0 0 0.5rem;
        width: 10rem;
      }
    }

    .info_wrapper {
      align-self: center;
      display: flex;
      flex-direction: column;

      h3 {
        display: flex;
        font-family: "Poppins", serif;
        font-size: 2rem;
        font-weight: 500;
        margin: 2.5rem 0 0 1.3rem;
      }

      p {
        align-self: center;
        font-family: "Roboto", serif;
        font-size: 1.2rem;
        font-weight: 300;
        margin-left: 1.5rem;
      }

      button {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.TOMATO_400};
        display: flex;
        font-size: 1.2rem;
        font-family: "Roboto", serif;
        font-weight: 500;
        margin: 1rem 0 0 1.3rem;
      }
    }

    .total_price {
      font-family: "Poppins", serif;
      font-size: 2rem;
      font-weight: 500;
      margin: 2.5rem 0 0 3.5rem;
    }
  }

  .advance_button {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 5px;
    height: 4.8rem;
    margin: 4.7rem 0 5.8rem 17.5rem;
    width: 21.6rem;
  }

  @media (min-width: 1024px) {
    .total_price {
      padding-bottom: 3.1rem;
    }

    .advance_button {
      display: none;
    }
  }
`;

export const Link = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  display: flex;
  margin-top: 3.2rem;

  svg {
    align-content: center;
    height: 3.2rem;
    margin-left: 5.6rem;
    margin-right: 0.5rem;
    width: 1.2rem;
  }

  svg:hover,
  :hover {
    color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  @media (min-width: 1024px) {
    svg {
      height: 2.8rem;
      width: 3rem;
    }

    button {
      font-size: 2rem;
      font-weight: bold;
    }
  }
`;

export const Pay = styled.div`
  .section_wrapper {
    border: 1px solid #76797b;
    border-radius: 5px;
    height: 46.2rem;
    margin-bottom: 6rem;
    width: 35.5rem;

    .section_wrapper_pix {
      display: flex;
      justify-content: center;
      margin-top: 5rem;
    }

    .section_wrapper_payment {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 5rem;

      img {
        width: 30.7rem;
      }
    }
  }

  .buttons_wrapper {
    align-items: center;
    border-bottom: 1px solid #76797b;
    display: flex;
    justify-content: space-around;
    height: 8.1rem;

    .credit_button,
    .pix_button {
      display: flex;
      justify-content: center;
      height: 8.1rem;
      width: 17.7rem;
    }

    .pix_button {
      border-left: 1px solid #76797b;
    }

    .credit_button:hover,
    .pix_button:hover {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border: 1px solid #76797b;
      border-radius: 5px;
    }

    button {
      align-items: center;
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      display: flex;
    }

    img {
      margin-right: 0.8rem;
    }
  }

  .data_pay {
    margin: 5rem 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-family: "Roboto", serif;
    font-size: 1.6rem;
    width: 100%;
  }

  input {
    background-color: transparent;
    border: 1px solid #7c7c8a;
    border-radius: 5px;
    height: 4.8rem;
    margin-top: 1rem;
    padding-left: 2rem;
    width: 100%;
  }

  .validity_and_cvc {
    display: flex;
    gap: 1rem;
    margin-top: 3.7rem;
  }

  button {
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    justify-content: center;
    margin-top: 3.7rem;

    svg {
      margin-right: 0.8rem;
    }
  }
`;
