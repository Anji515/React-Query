import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Data } from './Data'
import { HomePage } from './Home.page'
import RQData from './RQData'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/users' element={<Data />}/>
          <Route path='/rq-users' element={<RQData />}/>
            
          <Route path='/' element={<HomePage />}/>
    </Routes>
  )
}

export default AllRoutes