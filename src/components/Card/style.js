import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border-radius: 8px;
    height: 29.2rem;
    width: 21rem;

    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    .heart {
        align-self: flex-end;
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        margin-right: 1.6rem;
        height: 2.2rem;
        width: 2.4rem;
    }

    img {
        width: 8.8rem;
    }

    h1 {
        align-items: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: 'Poppins', serif;
        display: flex;
        font-size: 1.4rem;
        font-weight: 400;

        svg {
            align-self: center;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    p {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-family: 'Roboto', serif;
        font-size: 1.6rem;
        font-weight: 400;
    }

    span {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: 'Roboto', serif;
        font-size: 2rem;
    }

    button:nth-child(6) {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        border-radius: 5px;
        height: 3.2rem;
        width: 16.2rem;
    }
`;