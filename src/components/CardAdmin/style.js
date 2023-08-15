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
    
    .pencil {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        height: 2.4rem;
        width: 2.4rem;

        svg {
            margin-left: 8rem;
        }
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
        font-weight: 600;

        svg {
            align-self: center;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    p {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        font-family: 'Roboto', serif;
        font-size: 1.2rem;
        text-align: center;
        width: 18rem;
    }

    span {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-family: 'Roboto', serif;
        font-size: 1.6rem;
        font-weight: 400;
    }
`;