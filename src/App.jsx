import { useState } from 'react'
import NavigationBar from '../Components/NavigationBar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'
import AddTeam from '../Components/AddTeam'
import ViewTeam from '../Components/ViewTeam'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<AddTeam/>}/>
        <Route path="View Team" element={<ViewTeam/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
