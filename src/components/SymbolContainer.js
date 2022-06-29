import React, { useContext } from 'react'
import '../styles/square-box.css'
import { MyContext } from '../ContextProvider'
import { letters } from '../braille-data/seed'

const SymbolContainer = () => {
    const context = useContext(MyContext)
    const { dots } = context
    const enteredArray = dots.map((dot) => dot.value)
    console.log(enteredArray, "enteredArray")
    
    for (let i=0; i < letters.length; i++) {
           if (letters[i].pattern[0] === enteredArray[0]
            && letters[i].pattern[1] === enteredArray[1]
            && letters[i].pattern[2] === enteredArray[2]
            && letters[i].pattern[3] === enteredArray[3]
            && letters[i].pattern[4] === enteredArray[4]
            && letters[i].pattern[5] === enteredArray[5]) {

                return (
                    <div className="square-box">
                    {letters[i].symbol}
                    </div>
                )           
            } else {
                return (
                <div className="square-box">
                ?
                </div>
                )
            }
    }

}

export default SymbolContainer