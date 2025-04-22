import React, { useRef } from 'react'
import nature from '../IMAGES/naturemountainbg.png'
import Content2 from './Content2'


function Content1() {
    let style={
        display:'flex',
        paddingLeft:'400px',
        paddingTop:'100px',
        height:'600px',
        backgroundColor:'#f7f1df',


    }

  let myelement=useRef();
  console.log(myelement.current)


  return (
    <div className="content1" style={style}>
        <div className="image">
        <img src={nature} alt="nature" />
        </div>
        <div className="content1-content" style={{marginTop:'20px', marginLeft:'50px',width:'600px', fontSize:'30px'}}>
            <h4 ref={myelement} style={{color:'green'}}>ABOUT ECHOFY</h4>
            <h2 style={{marginTop:'-30px'}}>Environmental Sustainable Forever Green Future</h2>
        </div>
        <Content2/>
    </div>
  )
}

export default Content1