import React, { useContext } from 'react'
import '../styles/square-box.css'
import { MyContext } from '../ContextProvider'
import { letters } from '../braille-data/seed'

const SymbolContainer = () => {
    const context = useContext(MyContext)
    const {dots} = context
    const enteredArray = dots.map((dot) => dot.value)
    console.log(enteredArray, "enteredArray")
    
    const renderLetter = () => {

        for (let i=0; i < letters.length; i++) {
            if (letters[i].pattern.every((value, index) => value === enteredArray[index])) {
                    return (
                       letters[i].symbol
                    )
            } else { 
                return (
                    "?"
                    )
                }
        }

    }

    return (
        <div className="square-box">
       {renderLetter}
        </div>
        )           
}

export default SymbolContainer