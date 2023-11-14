import axios from "axios";
import { useQuery } from "react-query";

const fetchRqUsers = ({queryKey}) => {

    const userId = queryKey[1]
  return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
};

const useFetchSingleUser = (userId) => {
    return useQuery(['single-user', userId],fetchRqUsers)
}

export default useFetchSingleUser