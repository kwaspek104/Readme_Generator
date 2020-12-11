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