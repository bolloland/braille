import React from 'react'
import '../styles/braille-container.css'


const DotContainer = (props) => {

    const { dot, switchColor } = props

  return (
    <div className="braille-container">  
      <button 
        key={dot.name} 
        className={dot.value === true ? "dot-blue" : "dot-black"}
        value={dot.value} 
        onClick={()=>switchColor(dot)}
        >
        {/* {dot.text} */}
      </button>
    </div>


  )
}



export default DotContainer