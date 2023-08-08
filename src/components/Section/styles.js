import styled from 'styled-components';

export const Container = styled.section`
    background: ${({ theme }) => theme.COLORS.DARK_100};

    h2 {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: 'Roboto', serif;
        font-size: 1.6rem;
        font-weight: 400;
        margin-top: 0.5rem;
    }
`;