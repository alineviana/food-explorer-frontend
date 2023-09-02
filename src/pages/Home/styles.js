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

    section {
      background-color: ${({ theme }) => theme.COLORS.DARK_100};
      width: 100%;

      .swiper-slide {
        display: flex;
        justify-content: center;
      }

      .swiper-button-prev,
      .swiper-button-next {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      .swiper-pagination-bullet {
        background-color: transparent;
      }
    }
  }

  @media (min-width: 1024px) {
    .carousel_wrapper {
      margin-left: 2.4rem;
      width: 95%;
      
      h2 {
        font-size: 2.6rem;
        font-weight: 500;
        margin: 0 0 2.4rem 7rem;
      }
    }
  }
`;
