const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your Application?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your Application:',
    },
    {
      type: 'input',
      name: 'install',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter any usage information users should know:',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Enter any contribution guidelines for users:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter any test instructions for users:',
      },
  ]);

const generateREADME = (answers) => 
`# ${answers.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation})
* [Usage](#usage)
* [Contribution Guidelines](#contribution)
* [Tests](#tests)

## Description

${answers.description}

## Installation

${answers.install}

## Usage

${answers.usage}

## Contribution Guidelines

${answers.contribute}

## Tests

${answers.test}`;




promptUser()
  .then((answers) => writeFileAsync('SampleREADME.md', generateREADME(answers)))
  .then(() => console.log('Successfully wrote to Sample README.md'))
  .catch((err) => console.error(err));
