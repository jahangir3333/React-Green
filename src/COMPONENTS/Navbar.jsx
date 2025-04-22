import React from 'react'
import logo from '../IMAGES/logo.jpg' //IMAGE-LOGO IMPORT
import { Link } from 'react-router' //REACT-ROUTER IMPORT AFTER INSTALLING IT IN greenwebsite folder
import '../CSS/navbar.css'

function Navbar() {
  return (
    <>
    {/* NAVBAR */}
    <div className="nav">
    {/* LOGO SECTION */}
    <div className="logo"><img src={logo} alt="logo"/><h1>Echofy</h1></div>
    
    {/* COMBINING LINK AND BUTTON */}
    <div className="link-btn">
    {/* LINKS SECTION */}
    <div className="links"><ul><li><Link>Home</Link></li>
    <li><Link>About</Link></li>
    <li><Link to='/todo'>To Do App</Link></li>
    <li><Link>Pages</Link></li>
    <li><Link>Blog</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
      </ul></div>

    {/* BUTTON SECTION */}
    <div className="btn"><button>Create</button></div>
    </div>
    </div>
    
    </>
  )
}

export default Navbar