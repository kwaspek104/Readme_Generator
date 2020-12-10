function generateMarkdown (userAnswers) {
const {
    title, 
    description, 
    license,
    installation, 
    usage,
    contributing,
    tests,
    name,
    email
} = userAnswers
return `
# ${title}

## Description
${description}

## License
${license}

## Installation
${installation}

## Usage
${usage}

## Contributions
${contributing}

## Tests
${tests}

## About
${name}
${email}`
}

module.exports = generateMarkdown