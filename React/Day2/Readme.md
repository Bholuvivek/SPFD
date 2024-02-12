# Day 2: Understanding Components and JSX

Welcome to Day 2 of our React learning journey! Today, we will dive deeper into React components and JSX syntax.

## React Components

In React, components are the building blocks of a UI. They allow you to split the UI into independent and reusable pieces. There are two main types of components in React:

### Functional Components

Functional components are JavaScript functions that return JSX (JavaScript XML) to describe what should appear on the screen. They are the simplest form of React components.

```jsx
// Functional Component Example
const Welcome = () => {
  return <h1>Welcome to My React App!</h1>;
};
```

# Class Components

Class components are ES6 classes that extend the React.Component class. They define a render() method to return JSX. Class components have additional features like local state and lifecycle methods.

```jsx
// Class Component Example
class Welcome extends React.Component {
  render() {
    return <h1>Welcome to My React App!</h1>;
  }
}

```

# JSX Syntax
JSX is a syntax extension for JavaScript. It allows you to write HTML-like code within JavaScript. JSX makes React components more readable and easier to write.

```jsx
// JSX Syntax Example
const element = <h1>Hello, Vivek!</h1>;

```

# In JSX:

- You can use HTML tags directly.
- You can include JavaScript expressions inside curly braces {}.
- JSX elements can have attributes like HTML elements.
- Creating and Rendering React Components
- To create and render React components, you need to import React and use the ReactDOM.render() method to mount the component to the DOM.

```jsx
// App.js
import React from 'react';
import ReactDOM from 'react-dom';

// Define a functional component
const Welcome = () => {
  return <h1>Welcome to My React App!</h1>;
};

// Render the component to the DOM
ReactDOM.render(<Welcome />, document.getElementById('root'));

```

# Real-World Example: Todo List App
- Let's create a simple todo list application using React components and JSX. We'll define a TodoApp component that renders a list of todos stored in an array.

```jsx
// TodoApp.js
import React from 'react';

const TodoApp = () => {
  const todos = ['Learn React', 'Build a Todo App', 'Deploy to Heroku'];

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

```
# Conclusion
Understanding React components and JSX syntax is fundamental for building React applications. Experiment with creating components and using JSX to describe UI elements effectively. Stay tuned for tomorrow's lesson!

Happy coding! 🚀
Thank Your For reading