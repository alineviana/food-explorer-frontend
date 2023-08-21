import styled from 'styled-components';

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
    border: 0;
    border-radius: 1rem;
    font-weight: 500;
    height: 5.6rem;
    
    margin-top: 1.6rem;
    padding: 0 1.6rem;
    text-shadow: 1px 2px 2px rgba(0, 0, 0.8);
    width: 100%;

    &:disabled {
        opacity: 1;
    }
`;