import { Fragment } from 'react'
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import Laoder from './Laoder'

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=3&_page=${pageParam}`)
}

export const InfiniteQueriesPage = () => {
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
      if (pages.length < 5) {
        return pages.length + 1
      } else {
        return undefined
      }
    }
  })

  if (isLoading) {
    return <Laoder />
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div style={{paddingLeft:'10%', paddingTop:'2%'}}>
      <div>
        {data?.pages.map((group, i) => {
          return (
            <Fragment key={i}>
              {group.data.map(post => (
                <h2 key={post.id}>
                  {post.id} {post.title}
                </h2>
              ))}
            </Fragment>
          )
        })}
      </div>
      <div>
        <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
          Load more
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
      {!hasNextPage && <h4>Reached the limit ....</h4>}
    </div>
  )
}