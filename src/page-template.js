const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer")
const Manager = require("../lib/Manager")
const Intern = require("../lib/Intern")
let displayPeople = ''

const engineerHTML = (person) => {
    // if (!engineerMember) {
    //   return '';
    // }
  
    return `

    <div class="card">
      <div class="card-header bg-primary">
          <h2 class="card-title">${person.name }</h2>
          <h3 class="card-title">${person.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${person.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${person.email}">${person.email}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${person.github}" target="_blank" rel="noopener noreferrer">github</a></li>
          </ul>
      </div>
    </div>
      
    `;
};
const internHTML = (person) => {
    // if (!internMember) {
    //   return '';
    // }
  
    return `

    <div class="card employee-card">
      <div class="card-header bg-primary">
          <h2 class="card-title">${person.name }</h2>
          <h3 class="card-title">${person.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${person.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${person.email}">${person.email}</a></li>
              <li class="list-group-item">School: ${person.school}</li>
          </ul>
      </div>
    </div>
      
    `;
};
const managerHTML = (person) => {

  
    return `

    <div class="card employee-card">
      <div class="card-header bg-primary">
          <h2 class="card-title">${person.name }</h2>
          <h3 class="card-title">${person.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${person.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${person.email}">${person.email}</a></li>
              <li class="list-group-item">Office: ${person.office}</li>
          </ul>
      </div>
    </div>
      
    `;
};


const generateHTML= (teamForce) =>{
    

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    </head>

    
    <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>

      </div>
    </header>
    <main class="container my-5">
        ${teamForce.forEach(person => {
            if(person.role === 'Engineer'){
                let engineer = engineerHTML(person)
                displayPeople += engineer
        } else if(person.role === 'Intern'){
            let intern =   internHTML(person)
            displayPeople += intern
        } else{
            let manager = managerHTML(person)
            displayPeople += manager
        }
    } 
        )
    }   
        
    ${displayPeople}
        
        
    </main>

  </body>
    </html>
    `;
}


module.exports = generateHTML