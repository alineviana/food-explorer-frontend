import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    display: flex;
    font-size: 2.2rem;
`;

export const Count = styled.button`
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    svg {
        height: 2.7rem;
        margin: 0 1.5rem;
        width: 2.7rem;
    }
`;