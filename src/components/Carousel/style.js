import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  align-self: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_100};
  margin-bottom: 5rem;
  width: 85%;
  
  h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Poppins', serif;
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 2.4rem;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .slide-item {
    height: 50%;
    object-fit: cover;
  }

  .swiper-button-prev {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .swiper-pagination {
    fill: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;