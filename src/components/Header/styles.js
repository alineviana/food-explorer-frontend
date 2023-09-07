import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    background: ${({ theme }) => theme.COLORS.DARK_700};
    display: flex;
    height: 11.4rem;
    justify-content: space-between;
    padding: 0 2.8rem;
    width: 100%;
`;

export const Menu = styled.div`
    align-items: center;
    margin-top: 5.6rem;

    svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        height: 1.8rem;
        margin-right: 0.8rem;
        width: 2.4rem;
    }

    @media(min-width: 1024px) {
        display: none;
    }
`;

export const Logo = styled.div`
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    margin-top: 2rem;

    svg {
        color: ${({ theme }) => theme.COLORS.CAKE_100};
        fill: ${({ theme }) => theme.COLORS.CAKE_100};
        height: 2.2rem;
        width: 2.4rem;
    }

    span {
        font-family: 'Roboto', serif;
        font-size: 2.1rem;
        font-weight: bold;
        margin-left: 0.8rem;
    }

    span:hover {
       color: ${({ theme }) => theme.COLORS.CAKE_100};
    }

    @media(min-width: 1024px) {
        svg {
            height: 3rem;
            width: 3rem;
        }

        span {
            font-size: 2.4rem;
            margin-left: 1rem;
        }
    }
`;

export const Search = styled.div`
    display: none;
    align-items: center;

    @media(min-width: 1024px) {
        display: flex;
        margin: 4.5rem 3.2rem 0;
        width: 58.1rem;
    }
`;

export const Receipt = styled.button`
    background: transparent;
    border: none;
    display: flex;
    margin-top: 5.6rem;

    svg {
        align-items: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        height: 2.2rem;
        width: 2.6rem;
    }
    
    p {
        display: none;
    }

    @media(min-width: 1024px) {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        border-radius: 0.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        display: flex;
        height: 5.4rem;
        justify-content: center;
        margin: 4rem 2rem;
        padding: 1.6rem;
        width: 21.6rem;

        p {
            display: flex;
            margin-left: 0.8rem;
        }
    }
`;

export const Logout = styled.button`
    display: none;

    @media(min-width: 1024px) {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        display: flex;
        height: 3.2rem;
        margin-top: 6rem;
        width: 3.2rem;
    }
`;