import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html{
  scroll-behavior: smooth;
}

body {
    font-family: 'Arial';
}

ul {
    list-style: none;
}

.active {
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
}
`;


export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 1%;
  margin: 30px auto;
  width: 1200px;
  transition: all 0.5s;
  gap: 6px;
`;