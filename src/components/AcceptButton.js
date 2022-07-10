import React, { useContext } from 'react'
import { DOT_DATA } from '../braille-data/constants'
import { MyContext } from '../ContextProvider'

const AcceptButton = () => {

  const context = useContext(MyContext)
    // console.log(context)
    const {setDots} = context

   const moveText = () => {
    let newText = document.getElementById("input").innerText
    document.getElementById("output").innerText += newText
  }
  const cleartext = () => {
    document.getElementById("output").innerText = ""
    setDots(DOT_DATA)
    // get all dots to have value of false? mycontext and re-render?
  }

   return (
    <div>
    <button  onClick={() => moveText()}>
      Move Text
    </button>
    <button onClick={()=> cleartext()}>
      Clear Field
    </button>
    </div>
  )
}

export default AcceptButton