import styled from "styled-components";


export const StatusOfTime = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 820px;
  border: 1px solid #e4ebe4;
  border-radius: 10px;

  & img {
    width: 180px;
    height: 140px;
  }
`;


export const Status = styled.h3`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-left: 10px;
`;


export const Time = styled.p`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-top: 40px;
  margin-left: 10px;
`;