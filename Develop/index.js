// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        message: "create table of contents",
        name: 'table-of-contents',
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
        choices: ['MIT', 'option B', 'option C'],
    },
    {
        type: 'input',
        message:'Enter information about contributing member',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        message: 'What is your email address?',
        name: 'questions',
    }];

    // inquirer
    //     .prompt(questions)

TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    const data = JSON.stringify(response, null, 2);

    for (let i=2; i < process.argv.length; i++;) {

    }
    fs.writeFile('READMEEXAMPLE.md', process.argv[2], (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Success');
        }
    }
    );}

/* fs.writeFile('README.md', response, (err) =>
  err ? console.error(err) : console.log('Success!')
); */

// TODO: Create a function to initialize app
function init() { 
    inquirer
        .prompt(questions)
}

// Function call to initialize app
init();
