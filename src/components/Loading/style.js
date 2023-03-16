import styled from "styled-components";


export const LoadingStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .loading-spinner {
    border: 3px solid #f3f3f3;
    border-radius: 50%;
    border-top-color: #3c8224;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }

  .loading-message {
    color: #3c8224;
    font-size: 2rem;
    text-align: center;
    margin-top: 1rem;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;