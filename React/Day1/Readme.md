# Day 1: Setting Up Your Environment

## Install Node.js and npm

1. *Download Node.js*: Go to the [official Node.js website](https://nodejs.org/) and download the latest version of Node.js for your operating system (Windows, macOS, or Linux).

2. *Install Node.js*: Follow the installation instructions provided on the website for your specific operating system. This usually involves running the installer and following the prompts.

3. *Verify Installation*: After installation, open a terminal (Command Prompt on Windows, Terminal on macOS/Linux) and run the following commands to verify that Node.js and npm are installed correctly:
    bash
    node -v
    npm -v
    
   These commands should output the versions of Node.js and npm installed on your system.

## Create a New React Project

1. *Using Create React App*: Create React App is a tool that sets up a new React project with a predefined project structure and build scripts.

2. *Install Create React App globally*: Open a terminal and run the following command to install Create React App globally on your system:
    bash
    npm install -g create-react-app
    

3. *Create a New React Project*: Once Create React App is installed, navigate to the directory where you want to create your new React project using the terminal. Then, run the following command to create a new React project:
    bash
    npx create-react-app my-react-app
    
   Replace my-react-app with the desired name of your project.

4. *Navigate to Your Project*: After the project is created successfully, navigate into the project directory using the terminal:
    bash
    cd my-react-app
    

## Familiarize Yourself with the Project Structure and Essential Files

1. *Project Structure*: Explore the directory structure of your newly created React project. Important directories include:
   - src/: Contains the source code for your React application.
   - public/: Contains the public assets like HTML files and images.
   - node_modules/: Contains the installed npm packages.
   - package.json: Specifies dependencies and scripts for your project.

2. *Essential Files*: Familiarize yourself with the essential files in your React project, including:
   - src/index.js: Entry point of your React application.
   - public/index.html: HTML template for your React application.
   - package.json: Configuration file for npm packages and scripts.
   - README.md: Contains information about your project.

## Conclusion

Congratulations! You have successfully set up your environment for React development. Take some time to explore the project structure and essential files before moving on to the next steps in your React journey.
