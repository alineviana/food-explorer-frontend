import styled from 'styled-components';

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.DARK_100};
    display: grid;
    width: 100%;

    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas: 
    "header"
    "content"
    "footer";

    .tags {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: flex-start;
        margin-top: 1.6rem;
        padding: 0.8rem;
    }
`;

export const Content = styled.div`
    margin: 1rem 3.2rem 0;

    h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: 'Roboto', serif;
        font-size: 2.4rem;
        font-weight: 500;
        margin-bottom: 2.4rem;
    }

    input {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        border-radius: 8px;
    }

    .inputs {
        display: flex;
        flex-direction: column;

        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    button:nth-child(5) {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        margin: 2.4rem 0 5.3rem;
    }

    @media(min-width: 1024px) {
        margin: auto;

        .inputs {
            flex-direction: row;
            gap: 3.2rem;

            input {
                font-size: 1.4rem;
                width: 15.4rem;
            }
            
            input:first-child {
                width: 47.2rem;
            }

            select {
                width: 37rem;
            }
        }

        button:nth-child(5) {
            width: 17.2rem;
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
        margin: 0 0.5rem 2.4rem 0;
        width: 1.2rem;
    }

    button {
        font-weight: 300;
        margin-bottom: 2.4rem;
    }

    @media(min-width: 1024px) {
        svg, button {
            margin-top: 2.4rem;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    label {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: 'Roboto', serif;
        font-size: 1.6rem;
        font-weight: 300;
        line-height: 4rem;
    }

    select {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        border: none;
        border-radius: 8px;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        display: flex;
        font-family: 'Roboto', serif;
        font-size: 1.4rem;
        
        height: 4.8rem;
        padding: 1.3rem;
        width: 100%;
    }

    @media(min-width: 1024px) {
        button {
            align-self: flex-end;
        }
    }
`;