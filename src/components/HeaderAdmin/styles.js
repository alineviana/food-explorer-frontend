import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  background: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  height: 11.4rem;
  justify-content: space-evenly;
  width: 100%;

  @media (min-width: 1024px) {
    align-items: center;
  }
`;

export const Menu = styled.button`
  align-self: center;
  background-color: transparent;
  border: none;

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    height: 1.8rem;
    margin-right: 0.8rem;
    width: 2.4rem;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  display: flex;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    fill: ${({ theme }) => theme.COLORS.CAKE_100};
    height: 2.2rem;
    width: 2.4rem;
  }

  span {
    font-family: "Roboto", serif;
    font-size: 2.1rem;
    font-weight: bold;
    margin-left: 0.8rem;
  }

  span:hover {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  .logo {
    align-self: center;
    display: flex;
    margin-right: 1rem;
  }

  p {
    align-self: center;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: "Roboto", serif;
    font-size: 1.2rem;
    font-weight: 300;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    justify-content: center;

    svg {
      height: 3rem;
      width: 3rem;
    }

    span {
      flex-direction: column;
      font-size: 2.4rem;
      margin-left: 1rem;
    }

    p {
      align-self: end;
    }
  }
`;

export const Search = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    margin-top: 2rem;
    width: 32.5rem;
  }
`;

export const Favorites = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  display: none;
  font-family: "Roboto", serif;
  font-size: 1.6rem;

  @media (min-width: 1024px) {
    display: flex;

    &:hover {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      transform: scale(1.1);
      transition: .3s linear;
    }
  }
`;

export const Order = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  display: none;
  font-family: "Roboto", serif;
  font-size: 1.6rem;

  @media (min-width: 1024px) {
    display: flex;

    &:hover {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      transform: scale(1.1);
      transition: .3s linear;
    }
  }
`;

export const Receipt = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  display: none;

  @media (min-width: 1024px) {
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 0.5rem;
    display: flex;
    height: 5.6rem;
    justify-content: center;
    padding: 1.6rem;
    width: 21.6rem;

    svg {
      height: 2.2rem;
      width: 2.6rem;
    }

    p {
      padding-left: 0.8rem;
    }

    &:hover {
      transform: scale(1.1);
      transition: .3s linear;
    }
  }
`;

export const Logout = styled.button`
  display: none;

  @media (min-width: 1024px) {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    height: 2.2rem;
    width: 2.2rem;

    svg:hover {
      color: ${({ theme }) => theme.COLORS.TOMATO_400};
      transform: scale(1.5);
      transition: .3s linear;
    }
  }
`;