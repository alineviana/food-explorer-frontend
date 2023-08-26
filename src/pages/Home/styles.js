import styled from 'styled-components';

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.DARK_100};
    height: 100vh;
    width: 100%;

    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas: 
    "header"
    "content"
    "footer";

    .carousel_wrapper {
        background: ${({ theme }) => theme.COLORS.DARK_100};
        display: flex;
        flex-direction: column;
        align-items: center;
    }
 
    .title {
        align-self: flex-start;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: 'Poppins', serif;
        font-size: 1.8rem;
        margin: 0 0 2.4rem 2.4rem;
    }

    @media(min-width: 1024px) {
        .title {
            font-size: 2.4rem;
            margin: 0 0 2.4rem 7rem;
        }
    }
`;