import styled from 'styled-components';

export const Container = styled.textarea`
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border: none;
    border-radius: 8px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    height: 17.2rem;
    padding: 1.6rem;
    resize: none;
    width: 100%;
    
    &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }    
`;