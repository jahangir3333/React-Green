import React, { useContext } from 'react'
import '../CSS/form.css'
import {jahangir} from './Services'


function Form() {
    const {style,setTitle,setDetail,handleclose,handlesubmit}=useContext(jahangir)
   

  return (
    <>
    
    <div className="form" style={{display:style}}>
    <h1>My Form</h1>
    <form action="" onSubmit={(e)=>handlesubmit(e)}>
    <input type="text" name='tasktitle' onChange={(e)=>setTitle(e.target.value)}/><br /><br />
    <input type="text"  name='taskdetail' onChange={(e)=>setDetail(e.target.value)}/><br /><br />
    <button onClick={handleclose}>Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" />

    </form>
    
    </div>
    </>
  )
}

export default Form