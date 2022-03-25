import { useEffect, useState } from "react";
import api from "../../api/directories";
import styled from "styled-components";
import SingleItem from "../SingleItem/SingleItem";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1440px;
`;

const FullData = () => {
  const param = useParams();
  const idLink = param.directoryCode;
  let fetchLink = idLink ? `/directories/${idLink}` : "/directories";

  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(null);
  const [fullData, setFullData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(fetchLink);
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
  }, [fetchLink]);

  console.log(fullData);

  if (isError) {
    return <div>{isError.message}</div>;
  }

  if (!isLoaded) {
    return <div>LOADING</div>;
  } else if (fullData && !isError) {
    let directories = fullData.directories.map((dirItem, index) => {
      return (
        <Link to={`/directories/${dirItem.id}`} key={index}>
          <SingleItem id={dirItem.id} name={dirItem.name} />
        </Link>
      );
    });
    let files = fullData.files.map((fileItem, index) => {
      return <SingleItem key={index} id={fileItem.id} name={fileItem.name} />;
    });
    return (
      <>
        <p>data api</p>
        <ItemsWrapper>
          {directories}
          {files}
        </ItemsWrapper>
      </>
    );
  } else {
    return <div>Bad Request</div>;
  }
};

export default FullData;
