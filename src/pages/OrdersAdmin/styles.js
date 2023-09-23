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
  }

  .table_desktop {
    display: none;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", serif;
    font-size: 2.8rem;
    margin: 2.5rem 0 0 3rem;
  }

  .dish_not_registered {
    color: ${({ theme }) => theme.COLORS.TOMATO_300};
    font-family: "Poppins", serif;
    font-size: 2rem;
    margin: 3rem;
    text-align: center;
  }

  .order {
    align-items: center;
    border: 1px solid #4d585e;
    border-radius: 8px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    flex-direction: column;
    font-family: "Roboto", serif;
    font-size: 1.4rem;
    height: 19.4rem;
    margin: 2rem;

    ul {
      display: flex;
      gap: 1.5rem;
      margin-top: 1.6rem;
    }

    li {
      align-self: center;
      display: flex;
      margin-top: 1.6rem;
    }
  }

  .details {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-top: 1.6rem;
  }

  .status {
    select {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border: none;
      border-radius: 5px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      height: 4.8rem;
      margin-top: 2.5rem;
      text-align: center;
      width: 28.5rem;
    }
  }

  @media (min-width: 1024px) {
    .table_mobile {
      display: none;
    }

    .table_desktop {
      display: flex;
      flex-direction: column;

      h2 {
          font-family: "Poppins", serif;
          font-size: 3.2rem;
          font-weight: 500;
          margin: 2.5rem 0 2rem 12.3rem;
      }
    }

    main {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      table {
        border: 1px solid #4d585e;
        border-radius: 5px;
        font-family: "Roboto", serif;
        font-size: 1.4rem;
        margin: 2.5rem auto 5rem;
        width: 100rem;

        th {
          background-color: ${({ theme }) => theme.COLORS.DARK_900};
          border-left: 1px solid #4d585e;
          border-bottom: 1px solid #4d585e;
          height: 6.4rem;
          text-transform: uppercase;
          text-shadow: 2px 2px 2px black;
        }

        th:nth-child(1) {
          border-left: none;
        }

        td {
          border-left: 1px solid #4d585e;
          border-bottom: 1px solid #4d585e;
          height: 7rem;
          text-align: center;

          img {
            margin-right: 0.5rem;
          }
        }

        td:nth-child(1) {
          border-left: none;
        }

        select {
          background-color: ${({ theme }) => theme.COLORS.DARK_700};
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          border: none;
          border-radius: 5px;
          height: 4.8rem;
          text-align: center;
          width: 17.5rem;
        }
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
