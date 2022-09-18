import React from 'react'
import {Route,Routes} from 'react-router-dom';
import { MainContainer,CreateContainer } from '../components';
const RouteRoot = () => {
  return (
    <>
      <Routes>
            <Route path='/' element={<MainContainer/>}/>
            <Route path='createitem' element={<CreateContainer/>}/>
        </Routes>  
    </>
  )
}

export default RouteRoot
