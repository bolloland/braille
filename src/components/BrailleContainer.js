import React, { useContext } from 'react'
import '../styles/braille-container.css'
// import blackdot from "../images/blackdot.PNG"
// import bluedot from "../images/bluedot.PNG"
// import { useState } from 'react'
// import { DOT_DATA } from '../braille-data/constants'
import DotContainer from './DotContainer'
import { MyContext } from '../ContextProvider'


const BrailleContainer = () => {

    const context = useContext(MyContext)
    // console.log(context)
    const {dots, setDots} = context

  // create initial state as DOTDATA

    // const [dots, setDots] = useState(DOT_DATA)
    // console.log(dots, "current dots")
    
    // const enteredArray = dots.map((dot) => dot.value)
    // console.log(enteredArray, "enteredArray")

    // dots.map((dot) => dotArray.push(dot.value)

    const switchColor = (dot) => {
      // can't alter state, so make a copy (newDot) and pass that to setState
      let newDots = [...dots];
      let newDot;

      if (dot.value !== true) {
          newDot = {
      
            name: dot.name,
            value: true,
            text: "blue",
            
            }
        } else {
          newDot = {
            name: dot.name,
            value: false,
            text: "black",
            
          }
        }
        // find and replace clicked dot
        const dotIndex = dots.indexOf(dot)
        newDots.splice(dotIndex, 1, newDot)
        setDots(newDots)
    }

    return (
      <div className="braille-container">
         {dots && dots.map((dot) => {
          return ( 
            <DotContainer key={dot.name} dot={dot} switchColor={switchColor}   />
          )
         })}
      </div>
         )
  
}

export default BrailleContainer
