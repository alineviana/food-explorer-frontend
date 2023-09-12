import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  height: 100%;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  position: fixed;
  top: 0px;
  width: 40rem;
  z-index: 2;

  animation: showSidebar 0.4s;

  svg {
    cursor: pointer;
  }

  svg:hover {
    color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  .title {
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_500};
    display: flex;
    height: 11.4rem;
    margin-bottom: 3.6rem;
    padding: 5.6rem 0 2.4rem 2.8rem;

    h1 {
      font-family: "Roboto", serif;
      font-size: 2.1rem;
      font-weight: 300;
    }
  }

  .input_wrapper {
    margin: 0 3rem;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 3.6rem;
`;