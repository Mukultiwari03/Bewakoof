import React from 'react'
import './App.css'
import Navbar from './Components/Navbar' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Men from './Views/Men';
import { Routes,Route } from 'react-router-dom';
// import Home from './Views/Home';
// import Women from './Views/Women';
function App() {
  return (
    <>
      <Navbar />
      <Men/>
      {/* <Routes>
      <Route path='/men' element={<Men/>}/>
      <Route path='/women' element={<Women/>}/>
      </Routes> */}
    </>
  )
}

export default App

