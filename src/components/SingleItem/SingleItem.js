import React from "react";
import { Link } from "react-router-dom";
import Card from "../../layout/Card";

const SingleItem = (props) => {
  return (
    <Card>
        <p>{props.id}</p>
        <p>{props.name}</p>
    </Card>
  );
};

export default SingleItem;
