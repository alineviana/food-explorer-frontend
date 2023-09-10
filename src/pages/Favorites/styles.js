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

    .my_favorites {
      h2 {
        font-family: "Poppins", serif;
        font-size: 3.2rem;
        font-weight: 500;
        margin: 5.6rem 0 2.7rem 3.5rem;
      }
    }

    .info_dish {
      display: flex;
      margin: 1.6rem 0 2.5rem 0;

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
  }

  @media (min-width: 768px) {
    .dishes_wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 4.8rem;
    }
  }
`;
