import axios from "axios";
import { useEffect, useState } from "react";

const FullData = () => {
  const [fullData, setFullData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories"
      )
      .then((res) => {
        const items = res.data;
        console.log(items);
        setIsLoaded(true);
        setFullData(items);
      })
      .catch((error) => {
        setIsLoaded(true);
        setIsError(error);
      });
  }, []);
  console.log(fullData);

  if (isError) {
    return <div>{isError}</div>;
  }

  if (!isLoaded) {
    return <div>LOADING</div>;
  }

  if (fullData) {
    let content = fullData.files[7].name;
    return (
      <div>
        <p>data z api</p>
        <p>{content}</p>
      </div>
    );
  }

  return <div>Bad Request</div>;
};

export default FullData;
