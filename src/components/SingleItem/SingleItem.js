import React from "react";
import Card from "../../layout/Card";

const SingleItem = (props) => {
  let iconName;
  if (props.name.includes("dir_")) {
    iconName = "folder";
  } else if (props.name.includes(".jpg")) {
    iconName = "image";
  } else {
    iconName = "text_snippet";
  }

  return (
    <Card>
      <span className={"material-icons"}>{iconName}</span>
      <p>
        {props.name.length > 10
          ? `${props.name.substring(0, 8)}...`
          : props.name}
      </p>
    </Card>
  );
};

export default SingleItem;
