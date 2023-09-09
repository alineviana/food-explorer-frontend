import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 4px solid #00070a;
  border-radius: 8px;
  height: 29.2rem;
  width: 21rem;

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .pencil {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 2.4rem;

    svg {
      margin-left: 8rem;
    }
  }

  img {
    width: 8.8rem;
  }

  h3 {
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", serif;
    display: flex;
    font-size: 1.4rem;
    font-weight: bold;

    svg {
      align-self: center;
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

  @media (min-width: 1024px) {
    h3 {
      font-size: 1.6rem;
      letter-spacing: 1px;
      margin-top: 1rem;
      text-align: center;
      text-shadow: 1px 2px 3px black;
    }

    .description {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      display: flex;
      font-family: "Roboto", serif;
      font-size: 1.2rem;
      font-weight: 300;
      text-align: center;
      margin: 0.5rem 1.8rem;
    }

    .price {
      font-size: 2rem;
      font-weight: 200;
      margin-top: 1rem;
    }
  }
`;