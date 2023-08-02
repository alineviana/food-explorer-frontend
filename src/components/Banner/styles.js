import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 3px;
    display: flex;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Poppins', sans-serif;

    height: 12rem;
    margin: 4.4rem auto;
    position: relative;
    width: 90%;

    .image {
        margin: auto;
        position: absolute;
        top: -29px;
        left: -35px;
    }

    .text-banner {
        position: absolute;
        right: 20px;

        h1 {
            font-size: 1.8rem;
            font-weight: 500;
            padding-top: 3.6rem;
            text-shadow: 0 3px 3px rgba(0, 0, 0.75);
        }

        p {
            font-size: 1.2rem;
            font-weight: 200;
            padding-top: 0.3rem;
            text-align: justify;
            text-shadow: 0 3px 3px rgba(0, 0, 0.75);
            width: 20.2rem;
        }
    }

    @media(min-width: 1024px) {
        margin: 16.4rem auto;
        height: 26rem;
        width: 80%;

        .image {
            top: -153px;
            left: -115px;

            img {
                height: 41.2rem;
                width: 65.6rem;
            }
        }

        .text-banner {
            right: 10px;

            h1 {
                font-size: 4rem;
                padding-top: 8.8rem;
            }

            p {
                font-size: 1.6rem;
                width: 100%;
            }
        }
    }

    @media(min-width: 1280px) {
        width: 90%;

        .text-banner {
            right: 200px;
        }
    }

    @media(min-width: 1500px) {
        .text-banner {
            right: 380px;
        }
    }
`;