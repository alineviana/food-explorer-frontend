import styled from 'styled-components';

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.DARK_100};
    width: 100%;

    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas: 
    "header" 
    "content"
    "footer";

    .carousel_wrapper {
        align-items: center;
        background: ${({ theme }) => theme.COLORS.DARK_100};
        display: flex;
        flex-direction: column;
        grid-area: content;
    }
`;