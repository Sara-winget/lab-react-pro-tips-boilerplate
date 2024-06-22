import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/home'
import Form from './Components/form'
import Contacts from './Components/Contact'
import { Routes,Route,Link } from 'react-router-dom'
function App() {
 

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/form" element={<Form />} />
        </Routes>
    </>
  )
}

export default App
