import axios from "axios";
import {useQuery , useQueryClient  } from "react-query";

const fetchRqUsers = ({queryKey}) => {

    const userId = queryKey[1]
  return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
};

const useFetchSingleUser = (userId) => {
  
  const queryClient=useQueryClient()

    return useQuery(['single-user', userId],fetchRqUsers,{
      initialData:()=>{
        const user = queryClient.getQueryData('rq-users')?.data?.find(user=> user.id=== parseInt(userId))

        if(user){
          return {
            data: user
          }
        }else {
          return undefined
        }
      }
    })
}

export default useFetchSingleUser