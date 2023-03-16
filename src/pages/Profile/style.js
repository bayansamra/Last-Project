import styled from "styled-components";


export const Box = styled.div`
  width: 1100px;
  margin: 40px auto;
  border-radius: 10px;
  border: 1px solid #d5e0d5;
  padding: 20px;
`;

export const Name = styled.div`
  display: flex;
  position: relative;

  & h2 {
    margin-left: 14px;
  }
`;

export const InfoBox = styled.div`
  width: 1110px;
  display: flex;

  & p {
    font-size: 14px;
    color: #001e00;
    text-align: justify;
    width: 500px;
    line-height: 22px;
  }
`;

export const RightBox = styled.div`
  width: 30%;
  margin-top: 40px;
  margin-left: 20px;
  border-right: 1px solid #d5e0d5;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 150px;
`;

export const LeftBox = styled.div`
  width: 70%;
  margin-top: 40px;
  margin-left: 20px;
  position: relative;

  & h2 {
    position: relative;
    width: 380px;
  }
`;

export const Span = styled.p`
  color: #999;
`;

export const Portfolio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 600px;
`;

export const AccountIMg = styled.div`
  width: 100px;
  height: 100px;
  margin-left: 6px;
  
  & img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  `;

export const Testimonials =styled.div`
margin:30px auto;
width:1120px;
padding:10px;
border: 1px solid #d5e0d5;
border-radius: 10px;
`

export const Divc=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const P = styled.p `
width:600px;
text-align: center;
`