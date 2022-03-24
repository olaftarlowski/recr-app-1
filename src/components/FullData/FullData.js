import { useEffect, useState } from "react";
import api from "../../api/directories";

const FullData = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(null);
  const [fullData, setFullData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/directories");
        setFullData(response.data);
        setIsLoaded(true);
      } catch (err) {
        setIsError(err);
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    fetchData();
  }, []);

  console.log(fullData);

  if (isError) {
    return <div>{isError.message}</div>;
  }

  if (!isLoaded) {
    return <div>LOADING</div>;
  } else if (fullData && !isError) {
    let directiories = fullData.directories.map((dirItem) => {
      return (
        <div
          style={{ width: "100px", height: "100px", border: "1px solid red" }}
        >
          <p>{dirItem.name}</p>
          <p>{dirItem.id}</p>
        </div>
      );
    });
    let files = fullData.files.map((fileItem) => {
      return (
        <div
          style={{ width: "100px", height: "100px", border: "1px solid red" }}
        >
          <p>{fileItem.name}</p>
          <p>{fileItem.id}</p>
        </div>
      );
    });
    return (
      <div>
        <p>data z api</p>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {directiories}
          {files}
        </div>
      </div>
    );
  } else {
    return <div>Bad Request</div>;
  }
};

export default FullData;
