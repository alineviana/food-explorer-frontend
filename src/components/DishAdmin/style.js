import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_100};
  display: flex;
  flex-direction: column;
  margin-top: 3.6rem;
  width: 100%;
`;

export const Link = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  display: flex;

  svg {
    align-content: center;
    height: 3.2rem;
    margin-left: 5.6rem;
    margin-right: 0.5rem;
    width: 1.2rem;
  }

  svg:hover, :hover {
    color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  @media(min-width: 1024px) {
    svg {
      height: 2.8rem;
      width: 3rem;
    }

    button {
      font-size: 2rem;
      font-weight: bold;
    }
  }
`;

export const Info = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  display: flex;
  flex-direction: column;
  font-family: "Poppins", serif;

  .dish_image {
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    img {
      height: 22.4rem;
      width: 22.4rem;
    }
  }

  .dish_description {
    align-items: center;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 2.7rem;
      font-weight: 500;
      margin-top: 1.6rem;
    }

    p {
      font-size: 1.6rem;
      font-weight: 300;
      margin-top: 2.4rem;
      text-align: center;
      width: 26.4rem;
    }

    section {
      align-self: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
      margin-top: 2.4rem;
      width: 80%;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 6rem;

    .dish_image {
      img {
        height: 34rem;
        margin: 0 0 3rem 10rem;
        width: 35rem;
      }
    }

    .dish_description {
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      margin-top: 2rem;

      h1 {
        align-self: flex-start;
        font-size: 4rem;
      }

      p {
        align-self: flex-start;
        font-size: 2.4rem;
        text-align: left;
        width: 68.7rem;
      }

      section {
        align-self: start;
        justify-content: flex-start;
      }
    }
  }
`;

export const Edition = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: "Roboto", sans-serif;
  margin: 4.8rem 0 5.4rem;
  width: 100%;

  button:hover {
    box-shadow: 1px 2px 3px white;
    transform: scale(1.1);
    transition: 0.3s linear;
  }

  .edit {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    height: 3.7rem;
    width: 100%;
  }

  @media (min-width: 1024px) {
    .edit {
      align-items: center;
      font-weight: 400;
      height: 4.8rem;
      justify-content: center;
      width: 13.1rem;
    }
  }
`;