import React from 'react'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
    return (
        <div className='headerMain'>
            <Navbar/>
            <Hero/>
        </div>
    )
}

export default Header