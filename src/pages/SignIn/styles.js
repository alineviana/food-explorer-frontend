import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    flex-direction: column;
    height: 100vh;

    @media(min-width: 1024px) {
        flex-direction: row;
    }
`;

export const Form = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: auto;

    h2 {
        display: none;
    }

    button {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        border-radius: 0.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 1.4rem;
        font-family: 'Poppins', sans-serif; 
        font-weight: 400;
        height: 4.8rem;
        width: 31.6rem;
    }

    a {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        font-weight: 400;
        margin-top: 3.2rem;
    }

    @media(min-width: 1024px) {
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        border-radius: 1.6rem;
        padding: 6.4rem;

        h2 {
            display: flex;
            font-family: 'Poppins', sans-serif;
            font-size: 3.2rem;
            font-weight: 400;
            margin-bottom: 3.2rem;
        }

        input {
            border: 1px solid #FFFFFF;
            border-radius: 5px;
        }
    }
`;

export const Logo = styled.div`
    align-self: center;
    display: flex;
    margin-top: 15rem;
    
    svg {
        color: ${({ theme }) => theme.COLORS.CAKE_100};
        fill: ${({ theme }) => theme.COLORS.CAKE_100};
        height: 4.3rem;
        margin-right: 0.8rem;
        width: 4.3rem;
    }
    
    h1 {
        font-size: 3.7rem;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
    }

    @media(min-width: 1024px) {
        align-self: center;
        margin: auto;

        svg {
            height: 4.7rem;
            margin-right: 1.9rem;
            width: 4.9rem;
        }
    
        h1 {
            font-size: 4.2rem;
        }
    }
`;