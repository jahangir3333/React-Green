import React from 'react'

function HeaderContent() {
    let style={
        fontSize:'70px',
        marginTop:'-10px'
    }

    let style_btn1={
      backgroundColor:'greenyellow',
      padding:'10px',
      paddingLeft:'30px',
      paddingRight:'30px',
      border:'1px solid greenyellow',
      marginRight:'20px',
      marginTop:'20px',
      color:'white',
      fontWeight:'bold'
    }

    let style_btn2={
      backgroundColor:'transparent',
      padding:'10px',
      paddingLeft:'30px',
      paddingRight:'30px',
      border:'1px solid white',
      marginTop:'20px',
      color:'white',
      fontWeight:'bold'

    }


  return (
    <>
    <div className="header-content" style={{width:'600px'}}> 
    <h4 style={{color:'green'}}>HERBAL ENVIRONMENT</h4>
    <h1 style={style}>Be Safe Controls Environment</h1>
    <p style={{color:'white', fontWeight:'bold', marginTop:'-30px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sit cum aliquid accusamus, iure tempore placeat quasi facere laboriosam dignissimos qui maiores officiis quo. Natus ipsum blanditiis exercitationem non modi.</p>
    <button className='btn1' style={style_btn1}>Lets Talk</button>
    <button className='btn2' style={style_btn2}>Read More</button>
    </div>
    </>
  )
}

export default HeaderContent