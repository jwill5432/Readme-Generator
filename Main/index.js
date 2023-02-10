const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'projectname',
    message: 'Project Name:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Project Description:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Project Installation'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your project?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'If people want to contribute, how can they?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How has the project been tested?'
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Who worked on the project?'
  },
  {
    type: 'input',
    name: 'github_username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your Email address?'
  },
  {
    type: 'input',
    name: 'license',
    message: 'Please provide the license for your project:'
  }
];

inquirer.prompt(questions).then(answers => {
  let readme = `# ${answers.projectname}
  
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Credits](#credits)
- [Contact](#contact)
- [License](#license)
  
## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Credits
${answers.credits}

## Contact
[${answers.github_username}](https://github.com/${answers.github_username}) ,
${answers.email}, Feel free to contact me with any questions on the program or follow up deveopment.


## License
${answers.license}`;

  fs.writeFile('README.md', readme, (err) => {
    if (err) throw err;
    console.log('The README has been generated!');
  });
});