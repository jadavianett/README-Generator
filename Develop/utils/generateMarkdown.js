// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ## Title
  # ${data.title}










`

;
}

module.exports = generateMarkdown;
