import React, {useState} from 'react'


const AcceptButton = () => {

   const moveText = () => {
    let newText = document.getElementById("input").innerText
    document.getElementById("output").innerText += newText
  }
  const cleartext = () => {
    document.getElementById("output").innerText = ""
  }





   return (
    <div>
    <button  onClick={() => moveText()}>
      AcceptButton
    </button>
    <button onClick={()=> cleartext()}>
      Clear
    </button>
    </div>
  )
}

export default AcceptButton