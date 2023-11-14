import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Data } from './Data'
import { HomePage } from './Home.page'
import RQData from './RQData'
import RqSingleUser from './RqSingleUser'
import RqParellerQueries from './RqParellerQueries'
import { DynamicParallelPage } from './DynamicParallelQuery'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/users' element={<Data />}/>
          <Route path='/rq-users' element={<RQData />}/>
          <Route path='/' element={<HomePage />}/>
          <Route path='/rq-users/:userId' element={<RqSingleUser />}/>
          <Route path='/rq-parellel' element={<RqParellerQueries />}/>
          <Route path='/rq-dynamic-parellel' element={<DynamicParallelPage userIds={[1,3]}/>}/>
    </Routes>
  )
}

export default AllRoutes