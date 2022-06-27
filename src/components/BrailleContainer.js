import React from 'react'
import '../styles/braille-container.css'
import "../images/blackdot.PNG"

const BrailleContainer = () => {

  const switchColor = () => {

  }


  return (
    <div className="braille-container">
      <button className="dot" id="dot1" onClick={switchColor}>FALSE</button>
      <button className="dot">FALSE</button>
      <button className="dot">FALSE</button>
      <button className="dot">FALSE</button>
      <button className="dot">FALSE</button>
      <button className="dot">FALSE</button>
    
    </div>



  )
}

export default BrailleContainer