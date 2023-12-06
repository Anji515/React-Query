import { useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import Laoder from './Laoder'
import { useInView } from 'react-intersection-observer'

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=18&_page=${pageParam}`)
}

export const InfiniteQueriesPage = () => {

  const { ref, inView } = useInView()

  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage
  } = useInfiniteQuery(['posts'], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 10) {
        return pages.length + 1
      } else {
        return undefined
      }
    }
  })

  useEffect(()=>{
    console.log('Fired')
    if(inView && hasNextPage){
      fetchNextPage()
    }
  },[inView,hasNextPage,fetchNextPage])

  if (isLoading) {
    return <Laoder />
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div style={{paddingLeft:'10%', paddingTop:'2%', paddingBottom:'10%'}}>
      <div style={{padding:'10px'}}>
        {data?.pages.map((group, i) => {
          return (
            <>
              {group.data.map((post,i) => {
                if(group.data.length === i+1){
                  return (<h2 ref={ref} key={post.id}>
                    {post.id} {post.title}
                  </h2>)
                }
                return (<h2 key={post.id}>
                  {post.id} {post.title}
                </h2>)
        })}
            </>
          )
        })}
      </div>
      <div>
        {isFetchingNextPage && <h3>Loading....</h3>}
        {/* <button 
        // ref={ref}
        onClick={() => fetchNextPage()} disabled={!hasNextPage}>
          Load more
        </button> */}
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
      {!hasNextPage && <h4>Reached the limit ....</h4>}
    </div>
  )
}