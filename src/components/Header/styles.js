import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    background: ${({ theme }) => theme.COLORS.DARK_700};
    height: 11.4rem;
    padding: 0 2.8rem;
    width: 100%;
`;

export const Menu = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 5.6rem;
        
    svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        height: 1.8rem;
        margin-right: 0.8rem;
        width: 2.4rem;
    }
`;

export const Logo = styled.div`
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;

    svg {
        color: ${({ theme }) => theme.COLORS.CAKE_100};
        fill: ${({ theme }) => theme.COLORS.CAKE_100};
    }

    span {
        font-family: 'Roboto', serif;
        font-size: 2.1rem;
        font-weight: bold;
    }
`;

export const Receipt = styled.button`
    align-items: center;
    background: transparent;
    border: none;
    display: flex;

    svg {
        height: 2.2rem;
        width: 2.6rem;
    }
`;