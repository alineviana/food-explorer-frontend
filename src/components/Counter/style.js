import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 2.1rem;
  }
`;

export const Count = styled.div`
  button {
    border: none;
    background: transparent;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    height: 2.7rem;
    margin: 0 0.6rem;
    width: 2.7rem;
  }

  svg:hover {
    color: ${({ theme }) => theme.COLORS.TOMATO_200};
    transition: 0.3s linear;
  }
`;
