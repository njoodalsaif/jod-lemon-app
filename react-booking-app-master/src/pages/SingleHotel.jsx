import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import HotelPage from './HotelPage'
const SingleHotel = () => {
  return (
    <div>
      <Navbar/>
      <Header type='hotel'/>
      <HotelPage/>
    </div>
  )
}

export default SingleHotel