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
  background-color: ${({ theme }) => theme.COLORS.DARK_100};

  section {
    margin-bottom: 6rem;
  }

  @media (min-width: 1024px) {
    h2 {
      font-family: "Poppins", serif;
      font-size: 3.2rem;
      font-weight: 500;
      margin: 2.5rem 0 2.7rem 3.5rem;
    }

    .wrapper {
      border: 1px solid #4D585E;
      img {
        padding: 5rem 0;
      }
    }

    .section_wrapper_credit {
      align-items: center;
      display: flex;
      flex-direction: column;
    }

    .buttons_wrapper {
      display: flex;
    }

    .payment-pix, .payment-credit {
      align-items: center;
      display: flex;
      background-color: ${({ theme }) => theme.COLORS.DARK_100};
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: "Roboto", serif;
      font-size: 1.6rem;
      height: 8.1rem;
      justify-content: center;
      width: 26.5rem;

      img {
        margin-right: 0.8rem;
      }
    }

    .payment-pix {
      border-top: 1px solid #76797b;
      border-left: 1px solid #76797b;
      border-bottom: 1px solid #76797b;
      border-radius: 0 5px 0 0;
    }

    .payment-credit {
      border-top: 1px solid #76797b;
      border-bottom: 1px solid #76797b;
      border-radius: 5px 0 0 0;
    }

    .payment-pix:hover, .payment-credit:hover {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }

    .section_wrapper_pix {
      align-items: center;
      display: flex;
      flex-direction: column;
    }

    .qrcode_image {
      height: 25rem;
      margin: 4rem;
      width: 25rem;
    }

    .section_wrapper_payment {
      align-items: center;
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", serif;
  font-size: 1.6rem;
  gap: 3.7rem;
  margin: 5.7rem 0;
  width: 40.8rem;

  label {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input {
    background-color: transparent;
    border: 1px solid white;
    border-radius: 5px;
    height: 4.8rem;
    margin-top: 1rem;
    padding-left: 1.5rem;
    width: 100%;
  }

  .validity_and_cvc {
    display: flex;
    justify-content: space-between;
    gap: 1.7rem;
  }

  button {
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    font-family: "Poppins", serif;
    font-size: 1.4rem;
    height: 5.6rem;
    justify-content: center;
    width: 34.8rem;

    svg {
      margin-right: 1rem;
    }
  }
`;
