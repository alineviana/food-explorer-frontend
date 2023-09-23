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
    background-color: ${({ theme }) => theme.COLORS.DARK_100};
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
    border: 1px solid #4D585E;
    border-radius: 8px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', serif;
    font-size: 1.4rem;
    height: 11.4rem;
    margin: 1.6rem;
    
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

  @media(min-width: 1024px) {
    .table_mobile, .order {
      display: none;
    }   

    .table_desktop {
      display: flex;
      flex-direction: column;

      h2 {
        font-family: "Poppins", serif;
        font-size: 3.2rem;
        font-weight: 500;
        margin: 4rem 0 2.7rem 17.5rem;
      }
    }

    table {
      border: 1px solid #4d585e;
      border-radius: 5px;
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
      font-family: "Roboto", serif;
      font-size: 1.4rem;
      margin: 2.5rem auto 5rem;
      width: 100rem;

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

  @media(min-width: 1280px) {
    table {
      width: 113rem;
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
    margin-left: 3rem;
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
