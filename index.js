const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// const generateReadme = require('./src/readme');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'projectTitle',
            message: 'What is your project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use:'
        },
        {
            type: 'input',
            name: 'Credits',
            message: 'List your collaborators:'
        },
        {
            type: 'input',
            name: 'license',
            message: 'What kind of license does your project have?'
        },
        {
            type: 'input',
            name: 'features',
            message: 'if your project has alot of features, list them out here:'
        }
    ]);
};
// const [github, email, description, license, dependencies, tests, usingRepo, contributeRepo] = questions;

// const pageMD = generatePage(github, email, description, license, dependencies, tests, usingRepo, contributeRepo);

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./dist/README.md', generateMarkdown(data), err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Page created! Checkout out readme.md in this directory to see it!');

    });
};

// TODO: Create a function to initialize app
function init() {
    questions().then((data) => {
        writeToFile(data);
        // console.log(data);
    });
};

// Function call to initialize app
init();

