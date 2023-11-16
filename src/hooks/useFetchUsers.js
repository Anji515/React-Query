import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchRqUsers = (pageNumber) => {
  return axios.get(`http://localhost:3001/users?_limit=5&_page=${pageNumber}`);
};

const addUsers=(user)=>{
  return axios.post(`http://localhost:3001/users`,user);
}

export const useFetchRqUsers = (onSuccess,onError,pageNumber) => {
   return useQuery(
        ["rq-users",pageNumber],
        ()=>fetchRqUsers(pageNumber),
        {
        keepPreviousData: true, // to keep previous data until get the fresh data
        },
        {
          // cacheTime:5000,
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
          //   const userData=data.data.map((user)=>user.name)
          //   return userData
          //  }
        }
      );
}

export default useFetchRqUsers

export const useAddUserRqUsers =()=>{
  const queryClient = useQueryClient();
  return useMutation(addUsers,{
    onSuccess : ()=>{
      queryClient.invalidateQueries('rq-users')
    }
  })
}