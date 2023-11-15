import { Link } from "react-router-dom";
import useFetchRqUsers from "../hooks/useFetchUsers";
import { useState } from "react";
import Laoder from "./Laoder";

const RQData = () => {

  const [pageNumber, setPageNumber]=useState(1)
  const onSuccess = (data) => {
    console.log('Perform side effect after data fetching',data)
  }

  const onError = (error) => {
    console.log('Perform side effect after encounter error',error)
  }

  const { isLoading, data, isError, error, isFetching ,refetch } = useFetchRqUsers(onSuccess,onError,pageNumber)

  if (isLoading) {
    return <Laoder />;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div style={{paddingLeft:'10%', paddingTop:'2%'}}>
    <div >
      <h1>Fetched Users From Rq</h1>
      {/* <button onClick={refetch}>Fetch Users</button> */}
      {/* {data.map((user) => {
        return <h4 key={user}>{user}</h4>;
      })} */}

      {data?.data.map((user) => {
        return <h4 key={user.id}>
         <Link to={`/rq-users/${user.id}`}>{user.name}</Link></h4>;
      })}
    </div>
    <div>
      <button disabled={pageNumber===1} onClick={()=>setPageNumber(page=>page-1)} >Prev</button>
      <button disabled={true} >{pageNumber}</button>
      <button disabled={pageNumber===2} onClick={()=>setPageNumber(page=>page+1)} >Next</button>
    </div>
    {isFetching && 'Loading...'}
    </div>
  );
};

export default RQData;
