import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_100};
  width: 100%;

  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  .carousel_wrapper {
    margin: 0 0 5rem 0;

    h2 {
      align-self: flex-start;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: "Poppins", serif;
      font-size: 1.8rem;
      margin: 0 0 2.4rem 2.4rem;
    }

    h2:hover {
      color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }

    section {
      background-color: ${({ theme }) => theme.COLORS.DARK_100};

      .swiper-slide {
        display: flex;
        justify-content: center;
        margin: 0 1.6rem;
      }

      .swiper-slide:nth-child(1) {
        margin-left: 2.4rem;
      }

      .swiper-slide:hover {
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.1),
          rgba(255, 255, 255, 0.1)
        );
        backdrop-filter: blur(21px);
        -webkit-backdrop-filter: blur(21px);
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 2.4rem;
      }

      .swiper-button-prev,
      .swiper-button-next {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        display: none;
      }

      .swiper-button-prev:active,
      .swiper-button-next:active {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
      }
    }
  }

  @media (min-width: 1024px) {
    main {
      margin: auto;
      width: 90%;
    }

    .carousel_wrapper {
      h2 {
        font-size: 2.6rem;
        font-weight: 500;
        margin: 0 0 2.4rem 3rem;
      }

      section {
        .swiper-wrapper {
          height: 30rem;
        }

        .swiper-slide {
          margin: 0 -20px;
        }

        .swiper-button-prev,
        .swiper-button-next {
          display: flex;
        }
      }
    }
  }
`;
