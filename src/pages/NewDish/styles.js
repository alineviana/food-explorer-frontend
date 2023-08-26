import styled from 'styled-components';

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.DARK_100};
    display: grid;
    width: 100%;

    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas: 
    "header"
    "content"
    "footer";

    main {
        background-color: ${({ theme }) => theme.COLORS.DARK_100};
        grid-area: content;
        width: 100%;
    }
`;

export const Form = styled.form`
    background-color: ${({ theme }) => theme.COLORS.DARK_100};
    margin: auto 3.2rem;

    header {
        align-items: flex-end;
        display: flex;
        margin: 1rem 0 2.4rem 0;

        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            height: 2.2rem;
            margin-top: 1rem;
            width: 2.2rem;
        }

        button {
            font-size: 1.6rem;
        }
    }

    h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: 'Roboto', serif;
        font-size: 2.4rem;
        font-weight: 500;
        margin: 0 0 2.4rem 0;
    }

    .dish_image {
        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            height: 2.4rem;
            width: 2.4rem;
        }
    }

    label {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: 'Roboto', serif;
        font-size: 1.6rem;
        font-weight: 300;
        line-height: 4rem;
    }

    select {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        border: none;
        border-radius: 8px;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        display: flex;
        font-family: 'Roboto', serif;
        font-size: 1.4rem;
        
        height: 4.8rem;
        padding: 1.3rem;
        width: 100%;
    }

    .dish_information {
        margin-top: 2.4rem;

        h2 {
            margin-bottom: 1.6rem;
        }
    }

    .tags {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 1.6rem;
        padding: 0.8rem;
        margin-bottom: 1.6rem;
    }

    button:nth-child(1) {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
        border-radius: 5px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: 'Poppins', serif;
        font-size: 1.4rem;
        margin-bottom: 6.1rem;
        text-shadow: 1px 2px 3px black;
    }

    @media(min-width: 1024px) {
        margin: auto 12rem;

        header {
            margin: 4rem 0 2.4rem 0rem;

            svg {
                height: 3.2rem;
                width: 3.2rem;
            }

            button {
                font-size: 2.4rem;
                font-weight: bold;
            }
        }
        
        h1 {
            color: transparent;
            font-size: 2.4rem;
            margin: 0 0 2.4rem 0;
        }

        h1::before {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            content: 'Adicionar prato';
            font-family: 'Roboto', serif;
            font-size: 2.4rem;
            font-weight: 500;
        }
        
        .dish_wrapper {
            display: flex;
            gap: 3.2rem;

            .dish_image {
                width: 50%;
            }

            .dish_name {
                width: 100%;
            }

            .dish_category {
                width: 100%;
            }
        }

        .dish_information {
            display: flex;
            gap: 3.2rem;
            margin-top: 0;

            .ingredients {
                width: 100%;
            }

            .price {
                width: 25%;

                input {
                    height: 6rem;
                }
            }
        }

        .save_button {
            display: flex;
            justify-content: flex-end;
            
            button {
                width: 17.2rem;
            }
        }
    }
`;