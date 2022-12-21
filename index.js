const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;

let position = "manager";

// prompt user for team manager info
const promptTeamManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter team manager's name:",
        },
        {
            type: "input",
            name: "employeeID",
            message: "Enter team manager's employee ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter team manager's email address:",
        },
        {
            type: "input",
            name: "officeNo",
            message: "Enter team manager's office number:",
        },
        {
            type: "list",
            name: "addEmployee",
            message: "Choose whether to add an engineer or an intern:",
            choices: ["engineer", "intern", "done"],
        },
    ]);


}

// const renderManager = () => {
//     //IDK if this should be here or not, but we'll find out later
//     generateHTML();
//     renderEmployee();
// }

// renderManager();



const renderEmployee = (addEmployee) => {
    if (addEmployee === "engineer"){
        position = "engineer";
        promptEngineer();
        return `
        // fill with html
        `;
    }
    if (addEmployee === "intern"){
        position = "intern";
        promptIntern();
        return `
        // fill with html
        `;
    }
    if (addEmployee === "done"){
        return ``;
    }
}


const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter team manager's name:",
        },
        {
            type: "input",
            name: "employeeID",
            message: "Enter team manager's employee ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter team manager's email address:",
        },
        {
            type: "input",
            name: "github",
            message: "Enter engineers's github username:",
        },
        {
            type: "list",
            name: "addEmployee",
            message: "Choose whether to add an engineer or an intern:",
            choices: ["engineer", "intern", "done"],
        },
    ]);
}


const promptIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter team manager's name:",
        },
        {
            type: "input",
            name: "employeeID",
            message: "Enter team manager's employee ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter team manager's email address:",
        },
        {
            type: "input",
            name: "github",
            message: "Enter intern's school:",
        },
        {
            type: "list",
            name: "addEmployee",
            message: "Choose whether to add an engineer or an intern:",
            choices: ["engineer", "intern", "done"],
        },
    ]);
}


//generate html code
const generateHTML = ({name, position, ID, email}) => 
{`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Password Generator</title>
    <link rel="stylesheet" href="./assets/style.css" />
  </head>
  <body>
    <div class="wrapper">
      <header>
        <h1>My Team</h1>
      </header>
      <div class="card">
        <div class="card-header">
          <h2>${name}</h2>
        </div>
        <div class="card-body">
          <h3>${position}</h3>
          <h3>${ID}</h3>
          <h3>${email}</h3>
        </div>
      </div>
    </div>
  </body>
</html>
`}



const init = () => {
    promptTeamManager()
        .then((responses) => writeFile("index.html", generateHTML(responses)))
        .then(() => console.log("beep boop I work"))
        .catch((err) => console.error(err));
    }

// Function call to initialize app
init();