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
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

function App() {
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    // Send 'otp' to your server for validation
    // If validation is successful, proceed; otherwise, show an error message
    console.log('OTP is ', otp);
  };

  return (
    <div className="App">
    
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span>&nbsp;</span>}
        inputType="tel"
        containerStyle={{ display: 'unset' }}
        inputStyle={{ width: "3rem",  height: "3.5rem" }}
        renderInput={(props) => <input {...props} className='otp-input' />}
      />
      <div className='btn-container'>
        <button onClick={handleVerify}>Verify OTP</button>
      </div>
    </div>
  );
}

export default App;

```


# References Table

| **Category**             | **Title**                                   | **Description**                                                    | **Link**                                                    |
|--------------------------|---------------------------------------------|--------------------------------------------------------------------|------------------------------------------------------------|
| **Articles**             | React Patterns for Component Reusability   | React Patterns Documentation                                       | [React Patterns](https://reactpatterns.com/)              |
|                          | Advanced React Component Patterns          | Kent C. Dodds Blog                                                 | [Advanced React Patterns](https://kentcdodds.com/blog/compound-components-with-react-context-api) |
|                          | Reusable Component Design with Hooks       | LogRocket Blog                                                     | [LogRocket Blog](https://blog.logrocket.com/how-to-build-reusable-react-components/) |
| **GitHub Repositories**  | Recoil Todo App                            | A React project demonstrating reusable components and state management with Recoil. | [GitHub Repository](https://github.com/recoiljs/examples) |
|                          | React-Hooks Library                        | A collection of reusable React hooks.                              | [GitHub Repository](https://github.com/streamich/react-use) |
| **StackOverflow Threads**| How to Structure a Reusable React Codebase | A detailed discussion on reusable React architecture.              | [StackOverflow Thread](https://stackoverflow.com/questions/55757761/how-to-structure-a-react-codebase-for-reusability) |
|                          | Reusable Form Components in React          | Insights into reusable form component design.                      | [StackOverflow Thread](https://stackoverflow.com/questions/48399066/reusable-form-components-in-react) |
| **Documentation**        | Material-UI Customization                  | Guidance on creating reusable Material-UI components.              | [Material-UI Docs](https://mui.com/customization/theming/) |
|                          | React TypeScript Cheatsheets               | Patterns for reusable TypeScript-based React components.           | [Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) |
| **Blogs**                | Dynamic Forms in React                     | Explanation of dynamic, reusable forms with minimal duplication.    | [Form Design Article](https://dev.to/aspittel/building-dynamic-forms-in-react-1fip) |

