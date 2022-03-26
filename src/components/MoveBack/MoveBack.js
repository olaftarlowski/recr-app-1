import React from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0 auto;

  span {
    margin: 10px;
    font-size: 36px;
  }
`;

const MoveBack = () => {
  let navigate = useNavigate();

  const moveBackHandler = () => {
    navigate(-1);
  };

  return (
    <div>
      <Button onClick={moveBackHandler}>
        <span className={"material-icons"}>arrow_back</span>
        <span>back</span>
      </Button>
    </div>
  );
};

export default MoveBack;
