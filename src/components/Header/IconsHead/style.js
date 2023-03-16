import styled from "styled-components";


export const IconContainer = styled.span`
  position: relative;

  svg {
    width: 24px;
    margin: 24px 0 0 10px;
  }

  &:hover:before {
    content: attr(data-text);
    background-color: #efefef;
    color: #111;
    position: absolute;
    bottom: -12px;
    white-space: nowrap;
    font-size: 14px;
    padding: 5px;
    border-radius: 5px;
  }
`;