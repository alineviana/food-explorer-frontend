import styled from "styled-components";

export const Container = styled.div`
  border-bottom-color: ${({ theme }) => theme.COLORS.LIGHT_700};
  border-bottom-width: 0.2px;
  border-bottom-style: solid;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  cursor: pointer;
  
  display: flex;
  font-family: 'Poppins', serif;
  font-size: 2.2rem;
  font-weight: 200;
  margin: 1.8rem 3.5rem 0 2.5rem;
  padding: 1rem;

  &:hover {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
`;
