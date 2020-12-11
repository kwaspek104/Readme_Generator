function generateMarkdown (userAnswers) {
const {
    title, 
    description, 
    installation, 
    usage,
    contributions,
    tests,
    name,
    email,
    license,
} = userAnswers
return `
# ${title}

## Description
${description}

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Tests](#tests)
* [About](#about)
* [License](#license)

## Installation
${installation}

## Usage
${usage}

## Contributions
${contributions}

## Tests
${tests}

## About
${name} \n
${email}

## License
${license}`
}

module.exports = generateMarkdown