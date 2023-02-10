import React,{useContext} from 'react'

import {CrteContext} from "./Contextapi"


const Hello = () => {
  const { value } = useContext(CrteContext)
  const [statevalue,setStatevalue]=value
  
  
  return (
    <div>
      <h1>{statevalue}</h1>
      <button onClick={() => setStatevalue((statevalue) => statevalue + 1)}>Increment</button>
      <button onClick={()=>setStatevalue((statevalue)=>statevalue-1)}>Decrement</button>
    </div>
  )
}

export default Hello
