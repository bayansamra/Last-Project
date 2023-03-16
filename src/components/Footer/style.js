import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #001e00;
  color: #fff;
  align-items: center;
  width: 1450px;
  margin: 0 auto;
  padding: 10px;
  gap: 20px;

  @media (min-width: 300px) and (max-width: 700px) {
    width: 400px;
  }

  @media (min-width: 701px) and (max-width: 1200px) {
    width: 1300px;
  }
`;


export const Ul = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;

  div > ul > li {
    padding-top: 10px;
  }

  & div > ul > li:hover {
    color: #3c8224;
    text-decoration: underline;
    cursor: pointer;
  }


  @media (min-width: 300px) and (max-width: 700px) {
    display: block;
    width: 400px;
  }
`;


export const Icon = styled.img`
  width: 20px;
  height: 20px;
  vertical-align: bottom;
  margin-left: 20px;

  @media (min-width: 300px) and (max-width: 700px) {
    display: block;
    margin-bottom: 5px;
  }
`;


export const Icons = styled.div`
  & div {
    margin-bottom: 20px;
  }

  display: flex;
  justify-content: space-between;
  width: 1200px;
  border-bottom: 1px solid #ffffff;

  @media (min-width: 300px) and (max-width: 700px) {
    display: block;
    margin-left: 70px;
    width: 400px;
  }
`;


export const Footer2 = styled.div`
  font-size: 10px;
  margin: 10px auto;
  letter-spacing: 2px;

  @media (min-width: 300px) and (max-width: 700px) {
    display: block;
    font-size: 8px;
    width: 400px;
    margin-left: 50px;
  }
`;