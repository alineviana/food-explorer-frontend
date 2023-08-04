import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    background: ${({ theme }) => theme.COLORS.DARK_600};
    display: flex;
    grid-area: footer;

    height: 7.7rem;
    justify-content: space-between;
    width: 100%;
    
    p {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        font-family: 'Roboto', serif;
        font-size: 1.1rem;
    
        margin-right: 2rem;
        width: 19rem;
    }

    @media(min-width: 1024px) {
        p {
            font-size: 1.4rem;
            width: 25rem;
        }
    }
`;

export const Logo = styled.div`
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    width: 15rem;

    svg {
        fill: ${({ theme }) => theme.COLORS.LIGHT_700};

        height: 1.8rem;
        margin-left: 3rem;
        margin-right: 0.6rem;
        width: 2.2rem;
    }

    span {
        color: ${({ theme }) => theme.COLORS.LIGHT_700};

        font-family: 'Roboto', serif;
        font-size: 1.5rem;
        font-weight: bold;
    }

    @media(min-width: 1024px) {
        width: 30rem;

        svg {
            height: 3rem;
            margin-right: 1rem;
            width: 3rem;
        }

        span {
            font-size: 2.4rem;
        }
    }
`;