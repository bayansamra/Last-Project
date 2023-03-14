import styled,{ createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

body {
    font-family: 'Arial';
}
ul {
    list-style: none;
}
.active {
    color: black;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;
}
`;

export const Container = styled.div`
  min-height: 300px;
  width: 1200px;
  margin: 30px auto;
  padding: 0 1%;
  transition: all 0.5s;
`;