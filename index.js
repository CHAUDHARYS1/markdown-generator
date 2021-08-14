// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadme = require('./src/readme');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
        type: 'input', 
        name: 'github',
        message: 'What is your GutHub username?'
        },
        {

        },
        {
            
        },
        {

        },
        {
            
        }, 
        {

        }, 
        {

        },
        {

        }
    ])

};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();