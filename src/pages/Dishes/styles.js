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

    > main {
        grid-area: content;
    }
`;

export const Link = styled.div`
    align-items: center;
    align-self: flex-start;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;

    margin-top: 3.5rem;
    margin-left: 5.6rem;

    svg {
        align-content: center;
        height: 3.2rem;
        margin-right: 0.5rem;
        width: 1.2rem;
    }

    button {
        font-weight: 300;
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
        font-size: 2.7rem;
        font-weight: 400;
        margin-top: 1.6rem;
    }

    > p {
        font-size: 1.6rem;
        font-weight: 300;
        padding: 2.4rem 5.6rem;
    }

    > button:nth-last-child(1) {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 1.1rem;
        font-family: 'Poppins', sans-serif; 
        font-weight: 400;
        height: 4.5rem;
        margin: 3.2rem 0 5.4rem;
        width: 18.8rem;
    }
`;