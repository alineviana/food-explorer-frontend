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
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    display: flex;
    flex-direction: column;

    .my_favorites {
      h2 {
        font-family: "Poppins", serif;
        font-size: 3.2rem;
        font-weight: 500;
        margin: 5.6rem 0 2.7rem 6rem;
      }
    }

    .dishes_wrapper {
      p {
        color: ${({ theme }) => theme.COLORS.TOMATO_400};
        font-family: "Poppins", serif;
        font-size: 1.8rem;
        margin-left: 3.5rem;
        text-align: center;
        width: 85%;
      }
    }

    .info_dish {
      display: flex;
      margin: 1.6rem 0 2.5rem 2.5rem;

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

      button {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.TOMATO_400};
        font-size: 1.2rem;
        font-family: "Roboto", serif;
        font-weight: 500;
        margin: 1rem 0 0 1.8rem;
      }

      button:hover {
        color: ${({ theme }) => theme.COLORS.TOMATO_300};
        cursor: pointer;
        font-size: 1.4rem;
        transform: scale(1.1);
        transition: .3s linear;
      }
    }
  }

  @media (min-width: 768px) {
    .dishes_wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 4.8rem;

      p {
        display: flex;
        justify-content: center;
        font-size: 2rem;
        margin-top: 5rem;
      }
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

  :hover {
    color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  @media(min-width: 1024px) {
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