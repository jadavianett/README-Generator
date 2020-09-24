// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-blue)


## Description
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Testing](#Testing)
* [Questions](#Questions)

## Installation
${data.installation}

## Usage 
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Testing
${data.test}

## Questions
If you have any questions, please contact me directly via email at: ${data.email}
View my GitHub profile here: https://www.github.com/${data.username}


`

;
}

module.exports = generateMarkdown;
