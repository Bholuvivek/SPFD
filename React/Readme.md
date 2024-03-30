# Hey I Started to React Library
# This is My React Learning Schedule

## Day 1: Setting Up Your Environment
- Install Node.js and npm (Node Package Manager).
- Create a new React project using Create React App.
- Familiarize yourself with the project structure and essential files.

## Day 2: Understanding Components and JSX
- Learn about React components and their role in building UI.
- Understand JSX syntax for writing React components.
- Create simple React components and render them in a React application.

## Day 3: Props and State
- Explore props (properties) in React for passing data between components.
- Understand the concept of state and its significance in React.
- Practice passing props and managing state within components.

## Day 4: Handling Events and Lifecycle Methods
- Learn how to handle user events in React using event handlers.
- Understand React component lifecycle methods such as componentDidMount, componentDidUpdate, componentWillUnmount, etc.
- Implement event handling and lifecycle methods in your React components.

## Day 5: Conditional Rendering and Lists
- Explore conditional rendering techniques in React using if statements and ternary operators.
- Learn how to render lists of data dynamically using map function.
- Practice conditional rendering and rendering lists in your React application.

# Advanced React Learning Schedule

## Day 6: React Hooks
- Learn about React hooks, including useState, useEffect, useContext, and useRef.
- Understand how hooks allow functional components to manage state and lifecycle methods.
- Practice using various React hooks in your components.

## Day 7: Context API
- Explore the React Context API for managing global state in React applications.
- Learn how to create, provide, and consume context in React components.
- Implement context-based state management in your React application.

## Day 8: Component Composition
- Understand the concept of component composition in React.
- Learn about higher-order components (HOCs) and render props for code reuse.
- Practice composing components using HOCs and render props patterns.

## Day 9: React Router
- Explore React Router for handling client-side routing in React applications.
- Learn about Route, Switch, Link, Redirect, and other components provided by React Router.
- Implement routing in your React application to navigate between different views/pages.

## Day 10: Redux Fundamentals
- Learn about Redux and its role in managing state in large-scale React applications.
- Understand Redux concepts such as actions, reducers, and the Redux store.
- Practice integrating Redux into your React application and managing state using Redux principles.


```react
import React from 'react'
import { useState } from 'react';

const Form = () => {
  // eslint-disable-next-line no-undef
  const  [inputValue, setInputValue] =  useState('');

	const  handleChange = (event) => {
		setInputValue(event.target.value);
	};
  return (
    <>

    <div className='md:w-[373px] h-[480px] p-0.5 rounded-md bg-slate-700 align-center justify-center ml-96'>
      <div className='mt-1 mx-1'><img className=' w-[365px] rounded-md' src="https://images.pexels.com/photos/247899/pexels-photo-247899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></div>
      <p>Book Your Session</p>
<form>
	<input className='mx-2 bg-slate-100 w-[355px] rounded-md m-[4px]'  type="text" placeholder='Full Name....'  value={inputValue} onChange={handleChange} /><br />
  <input className='mx-2 bg-slate-100 w-[355px] rounded-md m-[4px]'  type="email" placeholder='Email'  value={inputValue} onChange={handleChange} /><br />
  <input className='mx-2 bg-slate-100 w-[355px] rounded-md m-[4px]'  type="tel" placeholder="Mobile Number"  value={inputValue} onChange={handleChange} /><br />
  <input className='mx-2 bg-slate-100 w-[355px] rounded-md m-[4px]'  type="text" placeholder='City'  value={inputValue} onChange={handleChange} /><br />
  <select className='mx-2 bg-slate-100 w-[355px] rounded-md m-[4px]' name="" id="" value="select"> Select
    <option value="One">One</option>
    <option value="Two">Two</option>
    <option value="Three">Three</option>
  </select>
  <button  className='float-right bg-slate-100 w-[75px] rounded-md m-2'>Submit</button>
  </form>
     
    </div>
    </>
  )
}

export default Form
```
