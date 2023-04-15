import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Main'

export const AppRouter = () => {
  return 
    <Routes>
        <Route path='/' element={Main}>
            <Route path='pokemon/:id' element={<Main />} />

        </Route>
    
    </Routes>
    
  
}
