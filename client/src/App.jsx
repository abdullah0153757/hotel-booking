import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';
import HotelReg from './components/HotelReg';
import Layout from './pages/hotelOwner/Layout';
import AddRoom from './pages/hotelOwner/AddRoom';
import ListRoom from './pages/hotelOwner/ListRoom';
import Dashboard from './pages/hotelOwner/Dashboard';


const App = () => {

  const isOnwerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOnwerPath && <Navbar />}
      {false && <HotelReg />}
      
      <div className='main-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='/rooms' element={<AllRooms /> } />
          <Route path='/rooms/:id' element={<RoomDetails /> } />
          <Route path='/my-bookings' element={<MyBookings /> } />
          
        </Routes>
      </div>
      <Footer />

    </div>
  )
}

export default App