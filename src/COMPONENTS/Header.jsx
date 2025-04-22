import React from 'react'
import '../CSS/header.css'  //CSS LINKING
import Navbar from './Navbar'
import HeaderContent from './HeaderContent'


function Header() {
  return (
    <>
    <div className="header">
        <Navbar/>
        <div className="container">
        <HeaderContent/>
        
        </div>
    </div>
    </>
  )
}

export default Header