import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_100};    
    margin-top: 3.6rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
        height: 26.4rem;
        margin-top: 1.6rem;
        width: 26.4rem;
    }
    
    @media (min-width: 1024px) {
        flex-direction: row;
        margin-bottom: 5rem;

        img {
            height: 38rem;
            margin-top: 3.2rem;
            width: 39rem;
        }
    }

`;

export const Link = styled.div`
    align-items: center;
    align-self: flex-start;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;

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

export const Info = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 2.7rem;
        font-weight: 700;
        margin-top: 1.6rem;
        text-align: left;
    }

    p {
        font-size: 1.6rem;
        margin-top: 2.4rem;
        text-align: center;
        width: 26.4rem;
    }

    footer {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: space-evenly;
        margin-top: 2.4rem;
        width: 80%;
    }

    @media (min-width: 1024px) {
        display: inline-block;
        margin-left: 4.8rem;

        h1 {
            margin-top: 7rem;
        }

        p {
            font-size: 2.4rem;
            text-align: justify;
            width: 68.7rem;
        }
    }
`;

export const Order = styled.div`
    margin: 4.8rem 0 5.4rem;
    
    button:nth-child(1) {
        align-items: center;
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 1.4rem;
        font-family: 'Poppins', sans-serif; 
        font-weight: 400;
        height: 4.8rem;
        width: 31.6rem;
    }

    @media(min-width: 1024px) {
        button:nth-child(1) {
            width: 13.1rem;
        }
    }
`;