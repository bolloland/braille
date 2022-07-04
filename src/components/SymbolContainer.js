import React, { useContext } from 'react'
import '../styles/square-box.css'
import { MyContext } from '../ContextProvider'
import { letters } from '../braille-data/seed'
// import AcceptButton from './AcceptButton'
// import PlainText from './PlainText'


const SymbolContainer = () => {
    // const [symbol, setSymbol] = useState("?")

    const {dots} = useContext(MyContext)
    // const {dots} = context
    const enteredArray = dots.map((dot) => dot.value)
    // console.log(enteredArray, "enteredArray")

    const jsonArray = JSON.stringify(enteredArray)
    // console.log(jsonArray, "json-entered")

    for (let i = 0; i < letters.length; i++) {
        let letterArray = JSON.stringify(letters[i].pattern); 
        if (jsonArray === letterArray) {
            // setSymbol(letters[i].symbol)
            return (
                <div className="square-box" id="input">
               {letters[i].symbol}
                </div>
                )  
        }
    }


    return (
        <div className="square-box">
       ?
        </div>
        )    
    
        // <AcceptButton />
        // <PlainText />
      
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