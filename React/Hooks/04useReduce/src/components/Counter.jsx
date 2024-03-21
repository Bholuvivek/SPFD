import React, { useReducer } from 'react';
import '../App.css'

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};

const Counter = () => {
  // Initial state
  const initialState = { count: 0 };

  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <div>
      <h1>Count: {state.count}</h1>
        <button onClick={()=> dispatch({type: 'increment'})}>Increment</button>
        <button onClick={()=> dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
    </>
  );
};

export default Counter;
