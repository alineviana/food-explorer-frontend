import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    height: 100vh;
    width: 100%;

    background: ${({ theme }) => theme.COLORS.DARK_100};

    grid-template-rows: 42.8rem auto 42.8rem;
    grid-template-areas: 
    "header"
    "content"
    "footer"
    ;
`;