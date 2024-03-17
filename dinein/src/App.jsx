import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandignPage from './Components/LandingPage/LandignPage'
import Parent from './Components/Parent/Parent'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandignPage/>}/>
          <Route path='/dineinoptions' element={<Parent/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
