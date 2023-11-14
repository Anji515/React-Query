import useFetchRqUsers from "../hooks/useFetchUsers";

const RQData = () => {

  const onSuccess = (data) => {
    console.log('Perform side effect after data fetching',data)
  }

  const onError = (error) => {
    console.log('Perform side effect after encounter error',error)
  }

  const { isLoading, data, isError, error, isFetching ,refetch } = useFetchRqUsers(onSuccess,onError)

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h1>RQ fetched users</h1>
      {/* <button onClick={refetch}>Fetch Users</button> */}
      {data.map((user) => {
        return <h4 key={user}>{user}</h4>;
      })}
    </div>
  );
};

export default RQData;
