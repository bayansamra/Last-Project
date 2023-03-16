import styled from "styled-components";


export const Cardjob = styled.div`
  position: relative;
  margin: 10px 0px;
  padding:10px;
  border-bottom:1px solid #999;

  &:hover {
    background-color: #f2f7f2;
    border-radius: 6px;

    & h3 {
      color: #3c8224;
    }
  }
`;

export const Jobdetail = styled.div`
  display: flex;
  color: #888;
  font-size: 14px;
  gap: 2px;

  & span {
  color: #888;
  }
`;

export const JobDescription = styled.p`
cursor: pointer;
`;


export const ToggleSaveBtn = styled.button`
  background: transparent;
  position: absolute;
  top: 40px;
  right: 30px;
  border: none;
  cursor: pointer;
`;


export const Jobdetail2=styled.div`
display:flex;
gap:10px;

& span {
  color: #888;
  }
`

export const SeeMore = styled.span`
  color: #108a00;
  display: inline;
  cursor: pointer;
`;
