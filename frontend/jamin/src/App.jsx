import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import PublicRoute from './Routes/PublicRouter'
import Auth from './auth/Auth'
import LandingPage from './landing/LandingPage/LandingPage'
import PrivateRoute from './Routes/PrivateRoute'
import Home from './Pages/Home/Home'
import Browse from './Pages/Browse/Browse'
import Profile from './Pages/Profile/Profile'
import Save from './Pages/Save/Save'
import Sell from './Pages/Sell/Sell'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
    <Navbar/>
      <Routes >
        
        <Route element={<PublicRoute />}>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Auth />} />
        </Route>
       <Route element={<PrivateRoute/>}>
         <Route path='/home' element={<Home />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/save' element={<Save />} />
        <Route path='/sell' element={<Sell />} />
       </Route>
      </Routes>
      <Footer/>


    </>
  )
}

export default App
