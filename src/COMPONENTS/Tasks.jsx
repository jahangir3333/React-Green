import React, { useContext, useRef, useState } from 'react'
import Form from './Form'
import {jahangir} from './Services'

function Tasks() {
  let design={
    backgroundColor:"green",
    color:"white",
    padding:"10px",
    margin:"10px",
    width:"300px",
    borderRadius:"15px",
    display:"flex",
    border:"2px solid black",
  }


  let {tasks,setStyle,deletetask}=useContext(jahangir)

  let [flag,setFlag]=useState(false)


  const opennewwindow=()=>{
    setFlag(true)
    setStyle('block')
  }



  return (
    <>
    <div className="services">
            <h1>To Do Lists</h1>
            {(tasks.length===0)?"no task":tasks.map((task,index)=>(



                <div className="container" style={design}>

                    <h2>{task.title}</h2>
                    <p>{task.detail}</p>
                  


                  <button onClick={deletetask} style={{padding:'10px', width:'100px',height:'30px', backgroundColor:'red',border:'none',borderRadius:'5px',color:'white',marginLeft:'150px',marginTop:'50px',alignItems:'center'}}
        >Delete</button>


                </div>





            ))}
            <button  onClick={opennewwindow}>New Task</button>
            </div>
                {flag===true?<Form/>:"No component"}
            
    </>
  )
}

export default Tasks