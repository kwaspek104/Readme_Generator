const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateReadme');
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project in however much detail you wish.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe how to install your application.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your application used for?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please describe the licensing of your project.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who else contributed to your project? Who did what?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please detail how to test your applcation.'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name, oh wise one?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?'
    },
]

function writeFile (fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function start() {
    inquirer.prompt(questions)
    .then((userAnswers) => {
      const userMarkdown = generateMarkdown(userAnswers)
      writeFile('README.md', userMarkdown)
    }) 
}
start();

