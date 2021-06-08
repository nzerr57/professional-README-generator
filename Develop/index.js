// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information for project',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose a license for your project',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        message: 'Enter information about contributing members',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address',
        name: 'email',
    }];

//TODO: Create a function to write README file
const writeToFile = (answers) => {
    fs.writeFile("exampleREADME.md", generateMarkdown(answers), (err) => {
        err ? console.log(err) : console.log('README has been created')
    });
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions).then(writeToFile);
}



// Function call to initialize app
init();
