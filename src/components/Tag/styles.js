import styled from "styled-components";

export const Container = styled.span`
  background: ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.5rem;
  box-shadow: 2px 3px 6px #82f3ff;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  align-self: center;
  font-size: 1.2rem;
  margin-right: 0.6rem;
  padding: 0.5rem 1rem;
  text-shadow: 1px 2px 3px black;
  transform: scale(1.1);
`;