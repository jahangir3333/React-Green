import React, { useContext } from 'react'
import {jahangir} from './Home'

function Content2() {

const myvalue=useContext(jahangir)

  return (
    <div>{myvalue}</div>
  )
}

export default Content2