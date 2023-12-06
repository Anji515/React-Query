import React from "react";
import useFetchSingleUser from "../hooks/useFetchSingleUser";
import { useParams } from "react-router-dom";

const RqSingleUser = () => {
  const { userId } = useParams();
  const { isLoading, data, isError, error } = useFetchSingleUser(userId);
  console.log('single users',data)

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div style={{paddingLeft:'10%', paddingTop:'2%'}}>
      <h3>SingleUser Details</h3>
     <p>{data?.data.name} - {data?.data.email}</p>
    </div>
  );
};

export default RqSingleUser;
