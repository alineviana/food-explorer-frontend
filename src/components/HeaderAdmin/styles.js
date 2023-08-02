import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    background: ${({ theme }) => theme.COLORS.DARK_700};
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`;

export const Menu = styled.div`
    align-items: center;
    align-self: flex-start;
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

    .logo {
        align-self: center;
        display: flex;
        margin-right: 1rem;
    }

    p {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-family: 'Roboto', serif;
        font-size: 1.2rem;
        font-weight: 300;
        align-self: center;
    }

    @media(min-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        
        svg {
            height: 3rem;
            width: 3rem;
        }

        span {
            flex-direction: column;
            font-size: 2.4rem;
            margin-left: 1rem;
        }

        p {
            align-self: end;
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
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: none;
    margin-top: 5.6rem;

    @media(min-width: 1024px) {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        border-radius: 0.5rem;
        display: flex;
        height: 5.4rem;
        justify-content: center;
        margin-top: 4rem;
        padding: 1.6rem;
        width: 21.6rem;
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