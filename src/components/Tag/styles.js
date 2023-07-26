import styled from 'styled-components';

export const Container = styled.span`
    background: ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-size: 1.2rem;
    margin-right: 0.6rem;
    padding: 0.5rem 1.4rem;
`;