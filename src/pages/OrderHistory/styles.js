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

    .details {
      h2 {
        font-family: "Poppins", serif;
        font-size: 3.2rem;
        font-weight: 500;
        margin: 4rem 0 2.7rem 12.3rem;
      }
    }

    table {
      border: 1px solid #4d585e;
      border-radius: 5px;
      font-family: "Roboto", serif;
      font-size: 1.4rem;
      margin: auto;
      width: 113rem;

      th {
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        border-left: 1px solid #4d585e;
        border-bottom: 1px solid #4d585e;
        font-size: 1.6rem;
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
        height: 6.4rem;
        text-align: center;

        img {
          margin-right: 0.5rem;
        }
      }

      td:nth-child(1) {
        border-left: none;
      }

      td:hover {
        color: ${({ theme }) => theme.COLORS.TOMATO_400};
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

  svg:hover, :hover {
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