import React,{useState} from "react";



export const CrteContext=React.createContext()


export const ContextComponent = (props) => {
    const [count,setCount]=useState(0)
    return (
        <CrteContext.Provider value={{value:[count,setCount]}}>
            {props.children}
        </CrteContext.Provider>
        
    )
}