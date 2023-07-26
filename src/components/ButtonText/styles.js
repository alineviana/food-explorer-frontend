import styled from 'styled-components';

export const Container = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-size: 1.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
`;