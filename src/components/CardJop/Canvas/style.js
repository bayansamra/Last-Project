import { Link } from "react-router-dom";
import styled from "styled-components";


export const StyledLink = styled(Link)`
color: #108a00;
text-decoration: none;

&:hover {
  text-decoration: underline;
}
`;


export const Openjob = styled.div`
display: flex;
justify-content: space-between;
`;


export const Div = styled.div`
  cursor: pointer;
`;