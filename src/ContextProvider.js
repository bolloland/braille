import React, { useState, createContext } from 'react'
import { DOT_DATA } from './braille-data/constants'

    //context created OUTSIDE of Provider
export const MyContext = createContext({
        dots: [],
        setDots: () => {}
    })

const ContextProvider = (props) => {
    // console.log(MyContext)
    const [dots, setDots] = useState(DOT_DATA)

    const values = {
        dots: dots,
        setDots: setDots
    }

    return (
        <div>
            <MyContext.Provider value={values}>
                {props.children}
            </MyContext.Provider>
        </div>
    )
}

export default ContextProvider