import styled from 'styled-components';

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.DARK_100};
    display: grid;
    height: 100vh;
    width: 100%;

    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas: 
    "header"
    "content"
    "footer";
`;

export const Header = styled.div`
    align-items: center;
    background: ${({ theme }) => theme.COLORS.DARK_700};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-weight: 400;
    height: 11.4rem;

    svg {
        height: 2rem;
        margin: 5.6rem 1.6rem 2.4rem 2.8rem;
        width: 2rem;
    }

    span {
        margin: 5.6rem 1.6rem 2.4rem 0;
    }
`;

export const Search = styled.div`
    margin: 3.6rem 2.8rem 0 2.8rem;
    height: 4.8rem;

    svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    button {
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: 'Poppins', sans-serif;
        font-size: 2.2rem;
        font-weight: 300;
        margin-top: 3rem;

        border-bottom-width: 0.5px;
        border-bottom-style: solid;
        border-bottom-color: ${({ theme }) => theme.COLORS.DARK_900};

        padding-bottom: 1rem;
        text-align: start;
        width: 100%;
    }
`;