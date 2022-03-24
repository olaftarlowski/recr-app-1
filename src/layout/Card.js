import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid red;
  margin: 24px;

  p {
    font-size: 12px;
    margin: 2px 0;
  }
`;

const Card = (props) => {
  return <CardContainer>{props.children}</CardContainer>;
};

export default Card;
