import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 11.4rem;
    width: 100%;

    background: ${({ theme }) => theme.COLORS.DARK_700};

    padding: 0 2.8rem;
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5.6rem;
        
    svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        height: 1.8rem;
        width: 2.4rem;

        margin-right: 0.8rem;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    svg {
        color: ${({ theme }) => theme.COLORS.CAKE_100};
        fill: ${({ theme }) => theme.COLORS.CAKE_100};
    }

    h1 {
        font-family: 'Roboto', serif;
        font-size: 2.1rem;
        font-weight: bold;
    }
`;

export const Receipt = styled.button`
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    svg {
        height: 2.2rem;
        width: 2.6rem;
    }
`;