import styled from "styled-components";
import { Link } from "react-router-dom";


export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  margin: 3rem auto;
  padding: 0.7rem;
  border: 1px solid #999;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);

  @media (min-width: 300px) and (max-width: 1200px) {
    width: 340px;
    padding: 10px;
  }
`;


export const Register = styled.h3`
  color: #000000;
  font-family: "Arial";
  font-weight: 600;
  font-size: 1.5em;
  letter-spacing: 0.1rem;

  @media (min-width: 300px) and (max-width: 1200px) {
    font-size: 0.9em;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px;

  & label {
    font-family: "Arial";
    font-size: 12px;
    margin-bottom: 6px;
    letter-spacing: 0.1rem;
  }

  & input {
    font-size: 14px;
    width: 20rem;
    padding: 0.8rem;
    border-radius: 10px;
    border: 1px solid #ccc;
    outline: none;
  }

  @media (min-width: 300px) and (max-width: 1200px) {
    & input {
      width: 15rem;
    }
  }
`;

export const ShowPassword = styled.img`
  position: absolute;
  top: 42px;
  left: 330px;
  width: 1.3rem;
  height: 1.3rem;
  cursor: pointer;

  @media (min-width: 300px) and (max-width: 1200px) {
    left: 240px;
  }
`;

export const SubmitButton = styled.button`
  background: #3c8224;
  color: white;
  font-size: 16px;
  width: 22.5rem;
  margin-top: 20px;
  padding: 1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;

  &[disabled] {
    background-color: grey;
    cursor: not-allowed;
  }

  @media (min-width: 300px) and (max-width: 1200px) {
    width: 17.5rem;
  }
`;


export const StyledOR = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-family: "Arial";
  margin-top: 10px;

  & div {
    width: 160px;
    background-color: #a9acb0;
    height: 1px;
    margin-top: 10px;
    box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
    border-radius: 6px;
  }

  & span {
    color: #a9acb0;
    padding: 0 5px;
  }

  @media (min-width: 300px) and (max-width: 1200px) {
    & div {
      width: 120px;
    }
  }
`;


export const StyledImg = styled.img`
  background-color: #ffffff;
  vertical-align: sub;
  height: 20px;
  width: 20px;
  margin-right: 5px;
  border-radius: 10px;
`;


export const StyledButton = styled.button`
  background: #3c8224;
  color: white;
  font-size: 14px;
  width: 22.5rem;
  margin-top: 20px;
  padding: 1rem;
  border: 1px solid ${(props) => (!props.facebook ? "none" : "#3b5998")};
  border-radius: 25px;
  cursor: pointer;
  color: ${(props) => (!props.facebook ? "#222" : "#ffffff")};
  background-color: ${(props) => (!props.facebook ? "#ffffff" : "#537FE7")};

  @media (min-width: 300px) and (max-width: 1200px) {
    width: 17.5rem;
  }
`;


export const AlredyAccount = styled.div`
  font-family: "Arial";
  font-size: 12px;
  text-decoration: none;
  color: #a9acb0;
  margin: 20px 0;
`;


export const StyledLink = styled(Link)`
  color: #3c8224;
  font-family: "Arial";
  text-decoration: none;
`;


export const ErrorMessage = styled.span`
  color: red;
  font-family: "Arial";
  font-size: 16px;
  margin: 10px;
`;
