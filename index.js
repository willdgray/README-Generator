// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const markDown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the app for?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What licensing do you have',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'none'],

    },
    {
       type: 'input',
        name: 'tests',
        message: 'How do you run the test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to to use the app:',
    },
    {
        type: 'input',
        name: 'installation',
        message: "How to install the app",
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Contribution information.",
    },
    {
        type: 'input',
        name: 'email',
        message: "For questions(email).",
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'For questions(github).',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}


// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions).then((inquirerResponses)=>{
    writeToFile('README.md', markDown({...inquirerResponses}));
});
};

// Function call to initialize app
init();
