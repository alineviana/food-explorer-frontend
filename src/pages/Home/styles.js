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
`;