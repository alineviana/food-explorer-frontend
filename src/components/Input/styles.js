import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    display: none;
    
    margin-bottom: 2.8rem;
    width: 100%;

    > input {
        height: 4.8rem;
        width: 100%;

        padding: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    > svg {
        margin-left: 1.6rem;
    }
`;