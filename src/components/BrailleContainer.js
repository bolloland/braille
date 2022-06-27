import React from 'react'
import '../styles/braille-container.css'
import "../images/blackdot.PNG"
import { useState } from 'react'

const BrailleContainer = () => {
  //onClick the ID should switch, and then alter the ID in the code. 

  const [dot1value, setdot1Value] = useState("false")
  const [dot1text, setdot1Text] = useState("black")
  const [dot2value, setdot2Value] = useState("false")
  const [dot2text, setdot2Text] = useState("black")
  const [dot3value, setdot3Value] = useState("false")
  const [dot3text, setdot3Text] = useState("black")
  const [dot4value, setdot4Value] = useState("false")
  const [dot4text, setdot4Text] = useState("black")
  const [dot5value, setdot5Value] = useState("false")
  const [dot5text, setdot5Text] = useState("black")
  const [dot6value, setdot6Value] = useState("false")
  const [dot6text, setdot6Text] = useState("black")

  
  const switch1Color = (id) => {

     console.log(id, "button 1")
    if (dot1value !== true) {
      setdot1Value(true)
      setdot1Text("blue")
    } else {
      setdot1Value(false)
      setdot1Text("black")
    } 
  }
    
   const switch2Color = (id) => {
      console.log(id, "button 2")
      if (dot2value !== true) {
        setdot2Value(true)
        setdot2Text("blue")
      } else {
        setdot2Value(false)
        setdot2Text("black")
      }   
    } 
   
    // if (dot3value !== true) {
    //   setdot3Value(true)
    //   setdot3Text("blue")
    // } else {
    //   setdot3Value(false)
    //   setdot3Text("black")
    // }   
  

  return (
    <div className="braille-container">
      <button className="dot" id="dot1" value={dot1value} onClick={()=>switch1Color("dot1")}>{dot1text}</button>
      <button className="dot" id="dot2" value={dot2value} onClick={()=>switch2Color("dot2")}>{dot2text}</button>
      <button className="dot" id="dot3" value={dot3value} onClick={()=>switch1Color("dot3")}>{dot3text}</button>
      <button className="dot" id="dot4" value={dot4value} onClick={()=>switch2Color("dot4")}>{dot4text}</button>
      <button className="dot" id="dot5" value={dot5value} onClick={()=>switch1Color("dot5")}>{dot5text}</button>
      <button className="dot" id="dot6" value={dot6value} onClick={()=>switch2Color("dot6")}>{dot6text}</button>
    
    </div>

)

}


export default BrailleContainer