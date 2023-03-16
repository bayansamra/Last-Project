import styled from "styled-components";


export const Stylednav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: -20px;
`;


export const Head = styled.h1`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande","Lucida Sans", Arial, sans-serif;
  color: #3c8224;

  @media (min-width: 300px) and (max-width: 1190px) {
    margin: 0 auto;
  }
`;

export const StyledBoxes = styled.div`
  display: flex;
  gap: 300px;

  @media (min-width: 300px) and (max-width: 1200px) {
    display: block;
  }
`;

export const Stylednotification = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;


export const AccountImg = styled.div`
  width: 30px;
  height: 20px;
  margin-left: 6px;

  & img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
`;


export const Profilediv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #ffffff;
  width: 250px;
  border-radius: 6px;
  box-shadow: 0 0 10px 2px rgba(0, 30, 0, 0.15);
  padding: 10px;
  z-index: 1;

  & img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  & span {
    color: #444;
    font-size: 12px;
    margin-top: -12px;
    margin-bottom: 10px;
  }

  & div {
    border-radius: 10rem;
    border: 1px solid #a4dd83;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 100%;
    right: 5%;
    transform: translateX(-50%);
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
    border-bottom: 8px solid #fff;
  }

  & ul {
    width: 100%;
    margin-right: 46px;
  }

  & li {
    width: 98%;
    padding: 10px;
    cursor: pointer;
  }

  & li:hover {
    background-color: #efe;
  }
`;

export const Online = styled.button`
  background-color: ${(props) => (props.isOnline ? "#108a00" : "transparent")};
  color: ${(props) => (props.isOnline ? "#ffffff" : "#111111")};
  border-radius: 10rem;
  border: none;
  padding: 10px;
  transition: all 0.5s;
`;