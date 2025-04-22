import React, { createContext } from 'react'
import Header from './Header'
import SecondNavBar from './SecondNavBar'
import Content1 from './Content1'

const jahangir=createContext();

function Home() {
 
  return (
    <>
    <jahangir.Provider value='My Passed Props using UseContext'>
    <input type="text"/>
    <Header/>
    <SecondNavBar/>
    <Content1/>
    </jahangir.Provider>
    </>
  )
}

export default Home
export {jahangir}