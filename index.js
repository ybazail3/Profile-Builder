const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

const team = [];

const { writeFile } = require('fs').promises;

const getManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your team managers name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your employees ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter employees email address',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the office number?',
            name: 'office',
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        // TODO: add team here
        team.push(manager);
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
        .then(getTeam => {
            switch (getTeam) {
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
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Engineers name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter Engineers ID',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter Engineers email address',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Add engineers GitHub username',
            name: 'github',
        },
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        // TODO: add team here
        team.push(engineer);
        getTeam();
    })
};

const getIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your interns name?',
            name: 'internname',
        },
        {
            type: 'input',
            message: 'Enter interns ID',
            name: 'internid',
        },
        {
            type: 'input',
            message: 'What is your interns email address?',
            name: 'internemail',
        },
        {
            type: 'input',
            message: 'What school is your intern enrolled in?',
            name: 'school',
        },
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        // TODO: add team here
        team.push(intern);
        getTeam();
    })
};

const finishedTeam = () => {
    console.log('Finished building team')
   // createHTML();
}


const createHTML = ({
managername,
managerid,
manageremail,
office,
engineername,
engineerid,
engineeremail,
github,
internname,
internid,
internemail,
school}) =>

    {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link href="./style.css">
            <title>Team Profile</title>
        </head>
        <body>
            <h1 class="d-flex justify-content-center bg-info p-3 mb-3">My Team</h1>
            <div class="d-flex flex-row justify-content-around">
            <div id="container" class= "d-flex flex-column m-1 bg-light rounded border border-secondary shadow"> 
                <h6 class="bg-dark text-white p-2"> Name: ${managername}</h6>
                <ul class="m-1"><i class="fa-solid fa-mug-hot"></i></ul>
                <ul class="id p-2"> ID: ${managerid} </ul>
                <ul class="email p-2"> Email: <a href= "mailto: ${manageremail} "></a>${manageremail}</ul>
                <ul class="office p-2"> Office #: ${office} </ul>
            </div>
            <div id="container" class="d-flex flex-column m-1 bg-light rounded border border-secondary shadow"> 
                <h6 class="bg-dark text-white p-2"> Name: ${engineername} </h6>
                <ul class="m-1"><i class="fa-regular fa-glasses"></i></ul>
                <ul class="id p-2"> ID: ${engineerid} </ul>
                <ul class="email p-2"> Email: <a href= "mailto: ${engineeremail} "></a>${engineeremail} </ul>
                <ul class="office p-2"> GitHub: <a href="https://github.com/${github}"></a> ${github}</ul>
            </div>
            <div id="container" class="d-flex flex-column m-1 bg-ulght rounded border border-secondary shadow"> 
                <h6 class="bg-dark text-white p-2"> Name: ${internname} </h6>
                <ul class="m-1"><i class="fa-solid fa-user-graduate"></i></ul>
                <ul class="id p-2"> ID: ${internid} </ul>
                <ul class="email p-2"> Email: <a href= "mailto: ${internemail} "></a>${internemail} </ul>
                <ul class="office p-2"> University: ${school} </ul>
            </div>
            </div>
        </body>
        </html>
  `;
    };

    function pushAnswers() {
        getManager(),
        getEngineer(),
        getIntern()
                .then((answers) => writeFile(index.html, createHTML(answers)))
     }
getManager();
pushAnswers();