import React, { useState, createContext } from 'react'
import { DOT_DATA } from './braille-data/constants'

    //context created OUTSIDE of Provider
export const MyContext = createContext({
        dots: [],
        setDots: () => {}
    })

const ContextProvider = (props) => {
    console.log(props, "ContextProps")
    const [dots, setDots] = useState(DOT_DATA)

    const values = {
        dots: dots,
        setDots: setDots
    }
// anything inside the Provider, will gain access to the props.children (anything in MyContext)
    return (
        <div>
            <MyContext.Provider value={values}>
                {props.children}
            </MyContext.Provider>
        </div>
    )
}

export default ContextProvider