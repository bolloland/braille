import React from 'react'


const AcceptButton = () => {

   const moveText = () => {
    let newText = document.getElementById("input").innerText
    document.getElementById("output").innerText += newText
  }
  const cleartext = () => {
    document.getElementById("output").innerText = ""
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