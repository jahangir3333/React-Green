import React from 'react'
import { Link } from 'react-router'
import '../CSS/secondnavbar.css'
import leaf from '../IMAGES/ICONS/leaf.png'

function SecondNavBar() {
  return (
    <>
    <div className="second-navbar">
        <ul>
            <li><Link><img src={leaf} alt="leaf" />Ocean Recycling</Link></li>
            <li><Link><img src={leaf} alt="leaf" />Environmental</Link></li>
            <li><Link><img src={leaf} alt="leaf" />Renewable Energy</Link></li>
            <li><Link><img src={leaf} alt="leaf" />Ocean Recyling</Link></li>
            <li><Link><img src={leaf} alt="leaf" />Enviromental</Link></li>

        </ul>
    </div>
    
    </>
  )
}

export default SecondNavBar