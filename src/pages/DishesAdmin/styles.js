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
        background-color: ${({ theme }) => theme.COLORS.DARK_100}; 
        grid-area: content;
    }
`;

export const Content = styled.div`
    background: ${({ theme }) => theme.COLORS.DARK_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    font-family: 'Poppins', sans-serif;
`;