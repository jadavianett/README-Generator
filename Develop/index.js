console.log("Hello node");
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user

inquirer
  .prompt([
    {
      type: "input",
      message: "What title would you like to use for your read me?",
      name: "title",
    },
    {
      type: "input",
      message: "What would you like your description to be?",
      name: "description",
    },
    {
      type: "input",
      message: "How do you install your application?",
      name: "installation",
    },
    {
      type: "input",
      message: "What usage information would you like to include?",
      name: "usage",
    },
    {
      type: "list",
      message: "Which license would you like to add?",
      name: "license",
      choices: ["MIT", "GNU", "ISC"],
    },
    {
      type: "input",
      message: "What contributor information would you like to include?",
      name: "contributing",
    },
    {
      type: "input",
      message: "How would a user test if your application is working properly?",
      name: "test",
    },
    {
      type: "input",
      message: "What is your e-mail address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
  ])
  .then((answers) => {
    var readMe = generateMarkdown(answers);
    fs.writeFile("generator.md", readMe, (err) => {
      if (err) throw err;
      console.log("Read me generated.");
    });
  });

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
