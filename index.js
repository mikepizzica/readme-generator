// TODO: Include packages needed for this application
// setup our file to use the inquirer package
const inquirer = require('inquirer');
// imports the File System package for our script
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log(generateMarkdown);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: 'input',
        message: "What is the description of your project?",
        name: "description"
    },
    {
        type: 'input',
        message: "What are the installation instructions of your project?",
        name: "installationInstructions"
    },
    {
        type: 'input',
        message: "What is the usage infomration of your project?",
        name: "usageInformation"
    },
    {
        type: 'input',
        message: "What are the contribution guidelines of your project?",
        name: "contributionGuidelines"
    },
    {
        type: 'input',
        message: "What are the test instructions of your project?",
        name: "testInstructions"
    },
    {
        type: 'input',
        message: "What is your Github username?",
        name: "githubUsername"
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: "email"
    },
    {
        type: 'list',
        message: "What is the license for this application?",
        name: "license",
        choices: ["None","Apache", "Boost", "Eclipse", "IBM", "MIT", "Mozilla", "Zlib"]
    }
];

// TODO: Create a function to write README file
function writeToFile(template) {
    fs.writeFile('README.md', template, (err) => {
        if(err) {
            console.error(err)
        }
        else {
            console.log("successfully made")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then(answers => {
          console.log(answers);
          var templateCreate = generateMarkdown(answers)
          console.log(templateCreate);
          writeToFile(templateCreate);
      })
}

// Function call to initialize app
init();