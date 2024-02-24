import React from 'react'
import '../App.css'

function Telwind() {
  
    
  return (
   <>
   <div className="main">
    <div className='heading2'>
    <h2>So Today We will Learn How to Integrate Telwind CSS in our React App </h2>
    <h2>Follow This Steps:</h2> </div>
    <div className='steps'><h1>Step 1</h1></div>
    <div className='step-content'> 
      <ul>
      <li>Create React App with help of this command : <code>npm create vite</code></li>
      </ul>
      </div>
      <div className='steps'><h1>Step 2</h1></div>
    <div className='step-content'> 
      <ul>
      <li>Change Directory with help of this command : <code>cd app-name </code></li>
      </ul>
      </div>
      <div className='steps'><h1>Step 3</h1></div>
    <div className='step-content'> 
      <ul>
      <li>Install with help of this command : <code>npm i  or npm install</code></li>
      </ul>
      </div>
      <div className='steps'><h1>Step 4 </h1></div>
    <div className='step-content'> 
      <ul>
      <li>Install Telwind with help of this command : <code>npm install -D tailwindcss postcss autoprefixer <br /> npx tailwindcss init -p</code></li>
      </ul>
      </div>
     
      <div className='steps'><h1>Step 5</h1></div>
    <div className='step-content'> 
      <ul>
      <li>Configure your template paths: <br />Add the paths to all of your template files in your tailwind.config.js file. : <code> <br />./index.html, <br />
    ./src/**/*</code></li>
      </ul>
      </div>
      <div className='steps'><h1>Step 6 </h1></div>
    <div className='step-content'> 
      <ul>
      <li>IAdd the Tailwind directives to your CSS: <br />
Add the @tailwind directives for each of Tailwind’s layers to your: <br /> ./src/index.css file.</li><br /> <code>@tailwind base;<br />
@tailwind components;<br />

@tailwind utilities;</code>
      </ul>
      </div>
    
    <div className='heading2'>
      <h2>Conclusion:</h2>
    <p>All set! You have completed the integration of Tailwind CSS into your React app. To run your app, use the command:</p>
          <code>npm run dev</code>
    </div>
    </div>
    </>
  )
}

export default Telwind