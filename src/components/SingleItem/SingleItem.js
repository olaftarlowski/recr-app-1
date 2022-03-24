import React from "react";
import { Link } from "react-router-dom";
import Card from "../../layout/Card";

const SingleItem = (props) => {
  return (
    <Card>
      <Link to={`/directories/${props.id}`}>
        <p>{props.id}</p>
        <p>{props.name}</p>
      </Link>
    </Card>
  );
};

export default SingleItem;
