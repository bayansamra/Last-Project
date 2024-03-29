import styled from "styled-components";


export const InputFullName = styled.div`
  display: flex;
  margin: 12px 0;
  gap: 10px;

  & label {
    display: block;
    font-size: 12px;
    font-family: "Arial";
    margin-top: 10px;
    margin-bottom: 6px;
    letter-spacing: 0.1rem;
  }

  & input {
    font-size: 14px;
    width: 140px;
    border: none;
    padding: 0.8rem;
    border-radius: 10px;
    border: 1px solid #ccc;
    outline: none;
  }

  @media (min-width: 300px) and (max-width: 1200px) {
    & input {
      width: 100px;
    }
  }
`;


export const CheckedInputWrapper = styled.div`
  display: flex;
  font-family: "Arial";
  margin: 10px;

  & input {
    width: 18px;
    height: 18px;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
  }

  & input[type="checkbox"]:checked + label {
    color: green;
  }

  & label {
    margin-top: 2px;
    transition: color 0.3s ease-in-out;
    cursor: pointer;
  }

  @media (min-width:300px) and (max-width:1200px) {
    & input {
      width: 15px;
      height: 15px;
    }
    
    & label {
      font-size: 12px;
    }
  }
`;