import React from 'react';

const Day1 = () => {
  return (
    <div>
      <h1>Day 1: Setting Up Your Environment</h1>

      <h2>Install Node.js and npm</h2>

      <ol>
        <li>
          <strong>Download Node.js:</strong> Go to the{' '}
          <a href="https://nodejs.org/">official Node.js website</a> and download the latest version of Node.js for your operating system (Windows, macOS, or Linux).
        </li>
        <li>
          <strong>Install Node.js:</strong> Follow the installation instructions provided on the website for your specific operating system. This usually involves running the installer and following the prompts.
        </li>
        <li>
          <strong>Verify Installation:</strong> After installation, open a terminal (Command Prompt on Windows, Terminal on macOS/Linux) and run the following commands to verify that Node.js and npm are installed correctly:
          <pre>
            <code>node -v</code>
            <code>npm -v</code>
          </pre>
          These commands should output the versions of Node.js and npm installed on your system.
        </li>
      </ol>

      <h2>Create a New React Project</h2>

      <ol>
        <li>
          <strong>Using Create React App:</strong> Create React App is a tool that sets up a new React project with a predefined project structure and build scripts.
        </li>
        <li>
          <strong>Install Create React App globally:</strong> Open a terminal and run the following command to install Create React App globally on your system:
          <pre>
            <code>npm install -g create-react-app</code>
          </pre>
        </li>
        <li>
          <strong>Create a New React Project:</strong> Once Create React App is installed, navigate to the directory where you want to create your new React project using the terminal. Then, run the following command to create a new React project:
          <pre>
            <code>npx create-react-app my-react-app</code>
          </pre>
          Replace <code>my-react-app</code> with the desired name of your project.
        </li>
        <li>
          <strong>Navigate to Your Project:</strong> After the project is created successfully, navigate into the project directory using the terminal:
          <pre>
            <code>cd my-react-app</code>
          </pre>
        </li>
      </ol>

      <h2>Familiarize Yourself with the Project Structure and Essential Files</h2>

      <ol>
        <li>
          <strong>Project Structure:</strong> Explore the directory structure of your newly created React project. Important directories include:
          <ul>
            <li><code>src/</code>: Contains the source code for your React application.</li>
            <li><code>public/</code>: Contains the public assets like HTML files and images.</li>
            <li><code>node_modules/</code>: Contains the installed npm packages.</li>
            <li><code>package.json</code>: Specifies dependencies and scripts for your project.</li>
          </ul>
        </li>
        <li>
          <strong>Essential Files:</strong> Familiarize yourself with the essential files in your React project, including:
          <ul>
            <li><code>src/index.js</code>: Entry point of your React application.</li>
            <li><code>public/index.html</code>: HTML template for your React application.</li>
            <li><code>package.json</code>: Configuration file for npm packages and scripts.</li>
            <li><code>README.md</code>: Contains information about your project.</li>
          </ul>
        </li>
      </ol>

      <h2>Conclusion</h2>

      <p>Congratulations! You have successfully set up your environment for React development. Take some time to explore the project structure and essential files before moving on to the next steps in your React journey.</p>
    </div>
  );
};

export default Day1;
