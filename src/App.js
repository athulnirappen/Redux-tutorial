import React from 'react'
import { useSelector,useDispatch } from 'react-redux';


function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({type:"INC"})
  }

  const decrement = () => {
    dispatch({type:"DEC"})
  }
  const Add = () => {
    dispatch({type:"add",payload:10})
  }
  return (
    <>
      <div>Counter App</div>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={Add}>Add by 10</button>
    </>
  );
}

export default App