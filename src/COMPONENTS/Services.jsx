import React, { useState,createContext, useEffect} from 'react'
import Tasks from './Tasks'

const jahangir=createContext();

function Services() {
  let [title,setTitle]=useState()
  let [detail,setDetail]=useState()
  let [style, setStyle]=useState('block')
  let [tasks,setTasks]=useState([])


const handleclose=()=>{
    setStyle('none')
}

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
},[title])

console.log("rendering2....")

const handlesubmit=(e)=>{
    e.preventDefault();
    setStyle('none')
    tasks.push({title,detail})
    // alert("fdsjfklsjdk")

}

const deletetask=(e)=>{
  let newtask=[];
 for(let i=0;i<tasks.length;i++){
     newtask[i]=tasks[i]
 }
    newtask.splice(tasks.length-1,1)
    setTasks(newtask)
    console.log(e.target)
}


  return (
    <>
<jahangir.Provider value={{style,tasks,deletetask, setStyle,title,detail,setTitle,setDetail,handleclose,handlesubmit}}>

  <Tasks/>
</jahangir.Provider>
    </> 
     )
}

export default Services
export {jahangir}
// export {jahangir} is used to export the context so that it can be used in other components