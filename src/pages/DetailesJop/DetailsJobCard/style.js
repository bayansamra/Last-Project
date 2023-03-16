import styled from "styled-components";

export const JobDetailCard = styled.div`
  display: flex;
  width: 1100px;
  margin: 40px auto;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #d5e0d5;

  @media (min-width: 300px) and (max-width: 900px) {
   flex-direction:column;
  }
`;

export const Right = styled.div`
  width: 75%;
  border-right: 1px solid #d5e0d5;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;


export const Btns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  @media (min-width: 300px) and (max-width: 900px) {
  }
`;

export const Jobtitle = styled.h1`
  font-weight: 500;
  margin-bottom: 50px;
  padding: 14px;
`;

export const Jobspeciality = styled.p`
  text-decoration: underline;
  color: #108a00;
  padding: 14px;
  cursor: pointer;
`;

export const Span = styled.p`
  display: block;
  color: #5e6d55;
  padding-left: 14px;
  width: 780px;
  line-height: 22px;
`;

export const Jobdescription = styled.p`
  font-size: 14px;
  padding: 14px;
  text-align: justify;
  line-height: 22px;
  letter-spacing: 0.6px;
`;

export const JobStatus = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  gap: 30px;

  & span {
    color: #5e6d55;
  }

  & p {
    width: 180px;
    color: #5e6d55;
  }
`;


export const Div = styled.div`
  padding: 20px 10px;
  
  & span {
    color: #5e6d55;
  }
`;

export const AboutClient = styled.div`
  padding: 20px;
`;