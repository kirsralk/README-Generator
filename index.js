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
      name: 'TOC',
      message: 'Enter section headings for your Table of Contents:',
    },
    {
      type: 'input',
      name: 'installation',
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
`   ${answers.name}
    ${answers.description}
    ${answers.TOC}
    ${answers.usage}
    ${answers.contribute}
    ${answers.test}`;

promptUser()
  .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));
