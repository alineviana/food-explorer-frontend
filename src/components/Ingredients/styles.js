import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.LIGHT_600}` : "none"};
    border-radius: 8px;
    display: flex;

    padding-right: 1.6rem;

    > button {
        background: none;
        border: none;
        align-self: center;
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_600};
    }
    
    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    
    > input {
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
        height: 4rem;
        padding: 0.8rem;
        width: 11.8rem;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_600};
        }
    }
`;