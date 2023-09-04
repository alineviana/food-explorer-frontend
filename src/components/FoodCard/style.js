import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border-radius: 8px;
  height: 29.2rem;
  width: 21rem;

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .heart {
    align-self: flex-end;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin: 1rem 1rem 0 0;
    height: 1rem;
    width: 2.4rem;
  }

  .heart:active {
    color: ${({ theme }) => theme.COLORS.TOMATO_100};
    border: none;
    fill: red;
  }

  img {
    width: 8rem;
    margin-bottom: 0.2rem;
  }

  h3 {
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", serif;
    display: flex;
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 0.2rem;

    svg {
      align-self: center;
      justify-items: center;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  .description {
    display: none;
}

.price {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: "Roboto", serif;
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0.3rem 0 0.5rem;
  }

  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Roboto", serif;
    font-size: 1.5rem;
  }

  button:nth-child(2) {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 5px;
    height: 3.2rem;
    margin-bottom: 1rem;
    width: 16.2rem;
  }

  @media (min-width: 1024px) {
    h3 {
        font-size: 1.7rem;
        margin-top: 1rem;
        text-align: center;
    }

    .description {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      display: flex;
      font-family: "Roboto", serif;
      font-size: 1.2rem;
      font-weight: 300;
      text-align: center;
      margin: 0.5rem 1.5rem;
    }

    .price {
        font-size: 2rem;
        font-weight: 300;
        margin-top: 1rem;
    }

    .buttons {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 0 2.5rem 0 2.5rem;

      svg {
        width: 1.5rem;
      }

      button {
        font-size: 1rem;
        padding: 0.1rem;
      }
    }

    button:nth-child(2) {
      margin-top: 1rem;
    }
  }
`;
