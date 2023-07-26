import styled from 'styled-components';

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.DARK_100};
    display: grid;
    height: 100vh;
    width: 100%;

    grid-template-rows: auto 42.8rem;
    grid-template-areas: 
    "header"
    "content"
    "footer";

    > main {
        grid-area: auto;
    }
`;

export const Link = styled.div`
    align-items: center;
    align-self: flex-start;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;

    margin-top: 3.5rem;
    margin-left: 2rem;

    svg {
        height: 2.2rem;
        margin-right: 0.5rem;
        width: 1.2rem;
    }
`;

export const Content = styled.div`
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    display: flex;
    font-family: 'Poppins', sans-serif; 
    flex-direction: column;
    text-align: center;
    align-items: center;

    > img {
        border-radius: 50%;
        height: 12rem;
        margin-top: 1.6rem;
        width: 12rem;
    }

    > h1 {
        font-size: 2.6rem;
        font-weight: 400;
        padding-top: 1.6rem;
    }

    > p {
        font-weight: 300;
        padding: 1rem 5.6rem 0;
    }

    > button:nth-last-child(1) {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 1.1rem;
        font-family: 'Poppins', sans-serif; 
        font-weight: 400;
        height: 4.5rem;
        margin-bottom: 5.4rem;
        width: 18.8rem;
    }
`;