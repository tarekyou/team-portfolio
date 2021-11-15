const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const fs = require('fs')
const inquirer = require('inquirer')
const generatePage = require('./src/page-template')
const teamForce = []






const managerInfo = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "What is the manager's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the manager's id?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the manager's email?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the manager's office number?",
                name: "office",
            },
        ])
        .then(answers => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
                teamForce.push(manager);
        })
        

    };


const teamInfo = (individual) => {
    return inquirer.prompt([
        {
            type: "list",
            message: "choose employee job title",
            name: "role",
            choices: [
                "Engineer",
                "Intern",
                "Finished adding employees"
            ]
        },

        {
            message: "What is the engineer's name?",
            name: "name",
            when: ({role}) => role === "Engineer"
        },

        {
            message: "What is the engineer's ID?",
            name: "id",
            when: ({role}) => role === "Engineer"
        },

        {
            message: "What is the engineer's email address?",
            name: "email",
            when: ({role}) => role === "Engineer"
        },

        {
            message: "what is the engineer's GitHub username?",
            name: "github",
            when: ({role}) => role === "Engineer"
        },

        {
            message: "What is the intern's name?",
            name: "name",
            when: ({role}) => role === "Intern"
        },

        {
            message: "What is the intern's ID?",
            name: "id",
            when: ({role}) => role === "Intern"
        },

        {
            message: "What is the intern's email address?",
            name: "email",
            when: ({role}) => role === "Intern"
        },

        {
            message: "What is the inter's school?",
            name: "school",
            when: ({role}) => role === "Intern"
        },
        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(answers => {
        if (answers.confirmAddMember){
            return teamInfo(individual)
        }
        switch (answers.role) {
            case "Engineer":
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                teamForce.push(engineer);
                break;
            case "Intern":
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                teamForce.push(intern);
                break;
        }

    })
}
managerInfo()
.then(teamInfo)
.catch(err => {
    console.log(err);
  });