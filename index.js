// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const generateReadme = require('./src/readme');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'github',
            message: 'What is your GutHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project:'
        },
        {
            type: 'input',
            name: 'license',
            message: 'What kind of license should you project have?'
        },
        {
            type: 'input',
            name: 'dependencies',
            message: 'What command should be run to install dependencies'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?'
        },
        {
            type: 'input',
            name: 'usingRepo',
            message: 'What does the user need to know about using the repo?'
        },
        {
            type: 'input',
            name: 'contributeRepo',
            message: 'What does the user need to know about contributing to the repo?'
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(filename, data){
fs.writeFile('./dist/README.md', questions, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Page created! Checkout out index.html in this directory to see it!');

});
};

// TODO: Create a function to initialize app
function init() {};

// Function call to initialize app
init();





// const pageHTML = generatePage(portfolioData);

//     fs.writeFile('./dist/index.html', pageHTML, err => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log('Page created! Checkout out index.html in this directory to see it!');

//         fs.copyFile('./src/style.css', './dist/style.css', err => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log('Style sheet copied successfully!')
//         });
//     });
// });