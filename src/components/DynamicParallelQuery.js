import { useQueries } from 'react-query'
import axios from 'axios'

const fetchUser = (userId) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
}

export const DynamicParallelPage = ({ userIds }) => {
  const queryResults = useQueries(
    userIds?.map(id => {
      return {
        queryKey: ['single-user', id],
        queryFn: () => fetchUser(id)
      }
    })
  )

  console.log({ queryResults })
  return <div>Dynamic Parallel Queries</div>
}