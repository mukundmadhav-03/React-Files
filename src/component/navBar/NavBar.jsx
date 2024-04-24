import React from 'react'
import Logo from './Logo'
import About from './About'
import Home from './Home'
import Contact from './Contact'

const NavBar = () => {
  return (
    <div className='flex justify-around w-[100%] h-[8vh] bg-gray-300'>
        <Logo></Logo>
        <Home></Home>
        <About></About>
        <Contact></Contact>
    </div>
  )
}

export default NavBar