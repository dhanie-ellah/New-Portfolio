import React from 'react'
import SideBar from '../Components/SideBar'
import Navbar from '../Components/Navbar'
import Homemain from '../Components/Homemain'

const Home = () => {
  return (
    <div className='w-[75%] m-auto lg:w-[80%] sm:w-[90%]'>
      <SideBar/>
      <Navbar/>
      <Homemain/>
    </div>
  )
}

export default Home