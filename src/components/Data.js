import { useState, useEffect } from 'react'
import axios from 'axios'
import Laoder from './Laoder'

export const Data = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users?_limit=5').then(res => {
      setData(res.data)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <Laoder />
  }

  return (
    <>
      <h2>Traditional fetch Data</h2>
      {data.map(hero => {
        return <h4 key={hero.id}>{hero.name}</h4>
      })}
    </>
  )
}
