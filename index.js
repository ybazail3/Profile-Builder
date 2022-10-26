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
            name: 'managername',
        },
        {
            type: 'input',
            message: 'What is your employees ID?',
            name: 'managerid',
        },
        {
            type: 'input',
            message: 'Enter employees email address',
            name: 'manageremail',
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
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter interns ID',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your interns email address?',
            name: 'email',
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
manager,
engineer,
intern}) =>

    {
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./style.css">
    <title>Document</title>
</head>
<body>
    <header>My Team</header>
    <div id="container"> 
        <head1 class="name"> ${managername} </head1>
        <div class="id"> ${managerid} </div>
        <div class="email"> ${manageremail} </div>
        <div class="office"> ${office} </div>
    </div>
</body>
</html>`;
    };

    // function pushAnswers() {
    //     getManager(),
    //     getEngineer(),
    //     getIntern()
    //             .then((answers) => writeFile(index.html, createHTML(answers)))
    //  }
// <li class="list-group-item">Email: <a href="mailto:jared@fakemail.com">jared@fakemail.com</a></li>

getManager();