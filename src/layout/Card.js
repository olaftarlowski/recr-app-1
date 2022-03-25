import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 140px;
  height: 100px;
  margin: 16px;
  color: #fff;
  text-decoration: none;

  p {
    font-size: 18px;
    margin: 2px 0;
  }
`;

const Card = (props) => {
  return <CardContainer>{props.children}</CardContainer>;
};

export default Card;
