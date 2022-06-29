import React, { useContext, useState } from 'react'
import '../styles/square-box.css'
import { MyContext } from '../ContextProvider'
import { letters } from '../braille-data/seed'

const SymbolContainer = () => {
    const context = useContext(MyContext)
    const {dots} = context
    const enteredArray = dots.map((dot) => dot.value)
    console.log(enteredArray, "enteredArray")

    const jsonArray = JSON.stringify(enteredArray)
    console.log(jsonArray, "json-entered")

    const [symbol, setSymbol] = useState("?")

    for (let i = 0; i < letters.length; i++) {
        let letterArray = JSON.stringify(letters[i].pattern); 
        if (jsonArray === letterArray) {
            console.log(letters[i].symbol)
            setSymbol(letters[i].symbol)

        }
    }


    return (
        <div className="square-box">
       {symbol}
        </div>
        )    
    
      
}

export default SymbolContainer


// const renderLetter = () => {

//     for (let i=0; i < letters.length; i++) {
//         if (letters[i].pattern.every((value, index) => value === enteredArray[index])) {
//                 return (letters[i].symbol)
//         } else { 
//             return ("?")
//         }
//     }
// }

// return (
//     <div className="square-box">
//    {renderLetter}
//     </div>
//     )       