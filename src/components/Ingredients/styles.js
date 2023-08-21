import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.LIGHT_600}` : "none"};
    border-radius: 8px;
    display: flex;
    box-shadow: 2px 5px 3px rgba(0, 0, 0.6);

    padding: 0 1.2rem 0 1rem;

    > button {
        align-self: center;
        background: none;
        border: none;
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_600};
        
        svg {
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
    }
    
    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
        svg {
            color: ${({ theme }) => theme.COLORS.TOMATO_100};
        }
    }
    
    > input {
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
        height: 4rem;
        padding: 0.8rem;
        text-shadow: 1px 2px 2px rgba(0, 0, 0.6);
        width: 11.8rem;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_600};
        }
    }
`;