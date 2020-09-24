// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ## Title
  # ${data.title}


## Description
${data.description}

## Table of Contents

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
If you have any questions, please contact me at: ${data.email}


`

;
}

module.exports = generateMarkdown;
