import axios from "axios";
import { useQuery } from "react-query";

const fetchRqUsers = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/users?_limit=5`);
};

export const useFetchRqUsers = (onSuccess,onError) => {
   return useQuery(
        "rq-users",
        fetchRqUsers,
        {
          cacheTime:5000,
          onSuccess,
          onError,
          // staleTime:30000,
          // refetchOnMount:true,
          // refetchOnWindowFocus:true,
          // refetchInterval: 2000,
          // refetchIntervalInBackground: true,
          // enabled :false,

        /* For fetching sepecific data */
        //   select: (data)=>{
        //     const userData=data.data.map((user)=>user.name)
        //     return userData
        //   }
        }
      );
}

export default useFetchRqUsers