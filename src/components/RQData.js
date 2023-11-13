import axios from "axios"
import { useQuery } from "react-query"

const fetchRqUsers=()=>{
  return axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
 }

const RQData = () => {

  const { isLoading, data, isError, error }=useQuery('rq-users',fetchRqUsers)
  
  if(isLoading){
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      <h1>RQ fetched users</h1>
      {data?.data.map((data)=>{
        return <h4 key={data.id}>{data.title}</h4>
      })}
    </div>
  )
}

export default RQData