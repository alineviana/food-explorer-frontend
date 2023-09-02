import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  font-size: 2.2rem;
  justify-content: center;
`;

export const Count = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  svg {
    height: 2.7rem;
    width: 2.7rem;
  }
`;
