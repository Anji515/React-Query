import axios from "axios";
import { useQuery } from "react-query";

const fetchRqUsers = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/users?_limit=5`);
  };

const fetchRqPosts = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
  };

const RqParellerQueries = () => {
    const {data: usersData}=useQuery('users-query',fetchRqUsers)
    const {data: postsData}=useQuery('posts-query',fetchRqPosts)
  return (
    <div>RqParellerQueries</div>
  )
}

export default RqParellerQueries