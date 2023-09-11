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
        margin: 5.6rem 0 2.7rem 3.5rem;
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
        border-left: 1px solid #4d585e;
        border-bottom: 1px solid #4d585e;
        height: 6.4rem;
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
    }
  }
`;
