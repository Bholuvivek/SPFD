
import React, { useReducer } from 'react';

const Reducer = () => {
  // Define a reducer function to handle state updates
  const handleChange = (state, action) => {
    if (action.type === 'myage') {
      return { age: state.age + 1 };
    }
    throw Error('Unknown action.');
  };

  // Initialize state using useReducer
  const [state, dispatch] = useReducer(handleChange, { age: 5}); // Initialize age to 0

  return (
    <>
      <input
        type="text"
        name="age"
        id="age"
        value={state.age} // Access age from state
        onChange={(e) => dispatch({ type: 'myage' })} // Dispatch action to increment age
      />
      <button onClick={() => dispatch({ type: 'myage' })}>Increment age</button>
      <h2>{state.age}</h2>
    </>
  );
};

export default Reducer;
