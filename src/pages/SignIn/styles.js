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
    background-color: ${({ theme }) => theme.COLORS.DARK_100};
    display: flex;
    flex-direction: column;
    margin-top: 7.3rem;

    h2 {
        display: none;
    }

    label {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: 'Roboto', serif;
        font-size: 1.6rem;
        font-weight: 300;
        line-height: 4rem;
    }
    
    input {
        width: 31.6rem;
    }

    input:focus {
        border: 1px solid #065E7C;
        border-radius: 5px;
        box-shadow: 1px 3px 5px #065E7C;
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

    button:hover {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
        box-shadow: 1px 3px 5px #065E7C;
        transform: scale(1.1);
        transition: .3s linear;
    }

    a {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        font-weight: 400;
        margin: 3.2rem 0 2rem;
    }

    a:hover {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        transform: scale(1.1);
        transition: .3s linear;
    }

    @media(min-width: 1024px) {
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        border-radius: 1.6rem;
        margin: auto;
        padding: 6.4rem;

        h2 {
            display: flex;
            font-family: 'Poppins', sans-serif;
            font-size: 3.2rem;
            font-weight: 400;
            margin-bottom: 3.2rem;
        }

        h2:hover {
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }

        input {
            border: 1px solid #FFFFFF;
            border-radius: 5px;
        }

        input, button {
            width: 34.8rem;
        }

        a {
            margin: 3.2rem 0 0;
        }
    }
`;

export const Logo = styled.div`
    align-self: center;
    display: flex;
    margin-top: 12rem;
    
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

    h1:hover {
        color: ${({ theme }) => theme.COLORS.CAKE_100};
        transition: all 3s;
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