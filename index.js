const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let engineers = [];
let interns = [];

const getManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your team managers name?',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'What is your employees ID?',
            name: 'managerId',
        },
        {
            type: 'input',
            message: 'Enter employees email address',
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: 'What is the office number?',
            name: 'office',
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.office);
        getTeam();
    })
};

const getTeam = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Select one of the following',
            name: 'type',
            choices: ['Add Engineer', 'Add Intern', 'Finished building my team!'],
        }])
        .then(answers => {
            switch (answers.type) {
                case 'Add Engineer':
                    getEngineer();
                    break;
                case 'Add Intern':
                    getIntern();
                    break;
                default:
                    finishedTeam();
            }
        })
}

const getEngineer = () => {
    console.log('Adding Engineer!')
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Engineers name',
            name: 'engineerName',
        },
        {
            type: 'input',
            message: 'Enter Engineers ID',
            name: 'engineerId',
        },
        {
            type: 'input',
            message: 'Enter Engineers email address',
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: 'Add engineers GitHub username',
            name: 'github',
        },
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
        engineers.push(engineer)
        getTeam();
    })
};

const getIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your interns name?',
            name: 'internName',
        },
        {
            type: 'input',
            message: 'Enter interns ID',
            name: 'internid',
        },
        {
            type: 'input',
            message: 'What is your interns email address?',
            name: 'internEmail',
        },
        {
            type: 'input',
            message: 'What school is your intern enrolled in?',
            name: 'school',
        },
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
        interns.push(intern)
        getTeam();
    })
};

const finishedTeam = () => {
    console.log('Finished building team')
    const html = createHTML();
    fs.writeFile('index.html', html, (err) =>
        err ? console.log(err) : console.log('Created index.html for team!')
    );
}

const createHTML = () => {
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link href="./style.css">
            <title>Team Profile</title>
        </head>
        <body>
            <h1 class="d-flex justify-content-center bg-info p-3 mb-3">My Team</h1>
            <div class="d-flex flex-row justify-content-around">
            <div id="container" class= "d-flex flex-column m-1 bg-light rounded border border-secondary shadow"> 
                <h6 class="bg-dark text-white p-2"> Name: ${Manager.name} ☕️ </h6>
                <ul class="id p-2"> ID: ${Manager.id} </ul>
                <ul class="email p-2"> Email: <a href="mailto: ${Manager.email} ">${Manager.email}</a></ul>
                <ul class="office p-2"> Office #: ${Manager.office} </ul>
            </div>
            <div id="container" class="d-flex flex-column m-1 bg-light rounded border border-secondary shadow"> 
        <h6 class="bg-dark text-white p-2"> Name: ${Engineer.name} 👩🏽‍💻 </h6>
        <ul class="id p-2"> ID: ${Engineer.id} </ul>
        <ul class="email p-2"> Email: <a href= "mailto: ${Engineer.email} ">${Engineer.email} </a></ul>
        <ul class="office p-2"> GitHub: <a href="https://github.com/${Engineer.github}"> ${Engineer.github}</a></ul>
    </div>
    <div id="container" class="d-flex flex-column m-1 bg-ulght rounded border border-secondary shadow"> 
        <h6 class="bg-dark text-white p-2"> Name: ${Intern.name} 👩🏽‍🎓 </h6>
        <ul class="id p-2"> ID: ${Intern.id} </ul>
        <ul class="email p-2"> Email: <a href= "mailto: ${Intern.email} ">${Intern.email} </a></ul>
        <ul class="office p-2"> University: ${Intern.school} </ul>
    </div>
            </div>
        </body>
        </html>
  `;
};

getManager();


