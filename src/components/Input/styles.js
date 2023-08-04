import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    display: flex;
    
    margin-bottom: 2.8rem;
    width: 100%;

    > input {
        background: transparent;
        border: 0;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: 'Roboto', sans-serif; 
        font-size: 1.6rem;
        font-weight: 400;

        height: 4.8rem;
        padding: 1.6rem;
        width: 100%;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    > svg {
        margin-left: 1.6rem;
    }
`;