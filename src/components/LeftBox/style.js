import styled from "styled-components";


export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 10px;
  border: 1px solid #e4ebe4;
  border-radius: 10px;

  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  
  & span {
    color: #444;
    font-size: 14px;
    margin-top: -12px;
    margin-bottom: 10px;
  }

  & div {
    color: #3c8224;
  }

  &:hover {
    h2 {
      color: #3c8224;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;


export const Info = styled.ul`
  width: 280px;
  border: 1px solid #e4ebe4;
  border-radius: 10px;
  padding: 20px;

  & li svg {
    width: 18px;
    padding: 10px;
    margin-left: 60px;
  }

  & li p {
    display: inline-block;
    width: 150px;
  }

  & li p span {
    display: block;
    margin-top: 12px;
    width: 200px;
    color: #888;
  }
`;


export const MoreInfo = styled.div`
  width: 320px;
  border: 1px solid #e4ebe4;
  border-radius: 10px;

  cursor: pointer;
  & p {
    display: inline-block;
    margin: 10px;
    padding: 10px;
    width: 200px;
  }

  & div {
    &:hover {
      background-color: #beccbe;
    }
  }
`;