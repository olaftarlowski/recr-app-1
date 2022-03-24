import { useEffect, useState } from "react";
import api from "../../api/directories";
import Card from "../../layout/Card";
import styled from "styled-components";

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1440px;
`;

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
        <Card>
          <p>{dirItem.name}</p>
          <p>{dirItem.id}</p>
        </Card>
      );
    });
    let files = fullData.files.map((fileItem) => {
      return (
        <Card>
          <p>{fileItem.name}</p>
          <p>{fileItem.id}</p>
        </Card>
      );
    });
    return (
      <>
        <p>data api</p>
        <ItemsWrapper>
          {directiories}
          {files}
        </ItemsWrapper>
      </>
    );
  } else {
    return <div>Bad Request</div>;
  }
};

export default FullData;
