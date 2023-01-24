import React from 'react'
import Featured from '../components/Featured'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import PropertyList from '../components/PropertyList'
import FeaturedProperty from '../components/FeaturedProperties'
import MailList from '../components/MailList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-full max-w-full'>
      <Navbar/>
      <Header/>
      <div className='xl:px-[13rem] mt-12'>
        <h1 className='py-6 text-gray-800 xl:mb-4 text-left text-2xl font-bold xl:text-4xl'>Browse by property type</h1>
        <PropertyList/>
        <Featured/>
        <h1 className='mt-[3rem] mb-[1.5rem] text-gray-800  text-left text-2xl font-bold xl:text-4xl'>Homes guests love</h1>
        <FeaturedProperty/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home