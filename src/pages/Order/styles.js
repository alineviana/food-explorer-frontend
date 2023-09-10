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
    justify-content: space-around;

    .details {
      h2 {
        font-family: "Poppins", serif;
        font-size: 3.2rem;
        font-weight: 500;
        margin: 5.6rem 0 2.7rem 3.5rem;
      }
    }

    .info_dish {
      display: flex;
      margin-top: 1.6rem;

      img {
        height: 10rem;
        margin: 0 0 0 1.9rem;
        width: 10rem;
      }

      h3 {
        font-family: "Poppins", serif;
        font-size: 2rem;
        font-weight: 500;
        margin: 2.5rem 0 0 1.3rem;
      }

      p {
        color: ${({ theme }) => theme.COLORS.TOMATO_400};
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

export const Pay = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_100};

  .payment {
    display: none;
  }

  @media (min-width: 1024px) {
    .section_wrapper {
      border: 1px solid #76797b;
      border-radius: 8px;
    }

    .payment {
      display: block;
      margin-bottom: 8rem;
      width: 53rem;
    }

    h2 {
      font-family: "Poppins", serif;
      font-size: 3.2rem;
      font-weight: 500;
      margin: 5.6rem 0 2.7rem 3.5rem;
    }

    .buttons_wrapper {
      display: flex;
    }

    .pix_button,
    .credit_button {
      align-items: center;
      border: none;
      display: flex;
      background-color: ${({ theme }) => theme.COLORS.DARK_100};
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

    .pix_button {
      border-bottom: 1px solid #76797b;
      border-radius: 8px 0 0 0;
    }

    .pix_button:hover,
    .credit_button:hover {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }

    .credit_button {
      border-left: 1px solid #76797b;
      border-bottom: 1px solid #76797b;
      border-radius: 0 8px 0 0;
    }

    .qrcode_image {
      display: flex;
      justify-content: center;
      margin: 5.7rem;
    }

    .pay_approved {
      align-items: center;
      color: ${({ theme }) => theme.COLORS.LIGHT_600};
      display: flex;
      flex-direction: column;
      font-family: 'Roboto', serif;
      font-size: 2.4rem;
      justify-content: center;
      margin: 5.9rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', serif;
  font-size: 1.6rem;
  gap: 3.7rem;
  margin: 5.9rem auto;
  width: 40.8rem;
  align-items: center;
  
  label {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  input{
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
    font-family: 'Poppins', serif;
    font-size: 1.4rem;
    height: 5.6rem;
    justify-content: center;
    width: 34.8rem;

    svg {
      margin-right: 1rem;
    }
  }
`;