import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 64px 0;
  min-width: 468px;
  height: 100vh;
  box-sizing: border-box;
  font-size: 24px;
`;

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 36px;
  min-width: 468px;
`;

export const LayoutItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  font-size: 1.2rem;
  letter-spacing: 0.8px;
  line-height: 1.4;
  max-width: ${props => props.maxWidth};

  .main {
    margin: 8px;
    font-size: 2.2rem;
    font-weight: 600;
  }

  .main-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    width: 300px;
    height: 100%;
  }

  .desc {
    font-size: 1rem;
  }

  .row {
    margin: 0;
  }

  .name {
    font-weight: 600;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
    margin: 16px;
    font-family: "Tomorrow", sans-serif;
  }

  .icon {
    position: relative;
    left: -6px;
    margin: 8px 0;
    animation: spin 1.5s ease-out infinite;
    transform-origin: 80% 100%;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(45deg);
    }

    50% {
      transform: rotate(0deg);
    }

    60% {
      transform: rotate(35deg);
    }

    75% {
      transform: rotate(5deg);
    }

    85% {
      transform: rotate(30deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
`;
