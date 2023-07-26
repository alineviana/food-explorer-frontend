import styled from 'styled-components';

export const Container = styled.div`
    
    background: ${({ theme }) => theme.COLORS.DARK_600};

    height: 7.7rem;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-family: 'Roboto', serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        font-size: 1.1rem;
    
        margin-right: 2rem;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    svg {
        fill: ${({ theme }) => theme.COLORS.LIGHT_700};

        height: 1.8rem;
        width: 2.2rem;

        margin-right: 0.6rem;
        margin-left: 3rem;
    }

    h3 {
        color: ${({ theme }) => theme.COLORS.LIGHT_700};

        font-family: 'Roboto', serif;
        font-size: 1.52rem;
        font-weight: bold;
    }
`;