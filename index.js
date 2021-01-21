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
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license type for your Application:',
        choices: [
            {name: 'Apache',
            value: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            },
            {name: 'BSD',
            value: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
            },
            {name: 'GNU',
            value: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
            },  
            {name: 'ISC',
            value: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            },  
            {name: 'MIT',
            value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            },  
            {name: 'Mozilla',
            value: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
            },    
        ],
    },

  
  ]);

  
const generateREADME = (answers) => 
`# ${answers.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution Guidelines](#contribution)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

## Description

${answers.description}

## Installation

${answers.install}

## Usage

${answers.usage}

## Contribution Guidelines

${answers.contribute}

## Tests

${answers.test}

## License

${answers.license}

## Questions

Have questions about using this application? Reach the author on GitHub @${answers.github} or email ${answers.email}.

`;


promptUser()
  .then((answers) => writeFileAsync('SampleREADME.md', generateREADME(answers)))
  .then(() => console.log('Successfully wrote to Sample README.md'))
  .catch((err) => console.error(err));
