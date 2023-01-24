import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import List from './List'

const Hotel = ({type}) => {
  return (
    <>
      <Navbar/>
      <Header type='hotel'/>
      <List/>
    </>
  )
}

export default Hotel