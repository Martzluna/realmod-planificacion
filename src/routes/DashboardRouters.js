import React from 'react'
import {Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Components/home/Home'
import NavBars from '../Components/NavBars'
import Agentes from '../Components/Agentes'
import Footer from '../Components/Footer'




const DashboardRouters = () => {
  return (
    <div>
      <>
      <NavBars/>
        <Routes>
        <Route path="/" element={<Home />}/>
          
          <Route path="*" element={<Navigate to="/" />}/>

          <Route path="/agente" element={<Agentes />}/>
        </Routes>
        <Footer/>
      </>
    </div>
  )
}

export default DashboardRouters