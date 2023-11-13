import { useState, useEffect } from 'react'
import axios from 'axios'

export const Data = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5').then(res => {
      setData(res.data)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <h2>Traditional fetch Data</h2>
      {data.map(hero => {
        return <div key={hero.id}>{hero.title}</div>
      })}
    </>
  )
}
