import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-blue-800 py-3 px-20 xl:px-[7rem]'>
        <div className="text-2xl font-bold text-gray-200">
            FLY HIGHT
        </div>
        <div className="flex items-center">
           <button className='transtiton duration-200 hover:scale-[0.99] bg-gray-200  btn-small mr-3 hover:bg-blue-600 text-blue-600 font-semibold hover:text-white py-2 px-9 text-lg rounded-md'>Login</button>
           <button className='transtiton duration-200 hover:scale-[0.99] bg-gray-200  btn-small hover:bg-blue-600 text-blue-600 font-semibold hover:text-white py-2 px-9 text-lg rounded-md'>Register</button>
        </div>
        
    </div>
  )
}

export default Navbar