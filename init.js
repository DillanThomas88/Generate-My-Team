const inquirer = require('inquirer')
const Employee = require('./assets/js/employee')
const Intern = require('./assets/js/intern')
const Manager = require('./assets/js/manager')
const Engineer = require('./assets/js/engineer');
const createHTML = require('./assets/js/writehtml')
const fileName = 'index.html'

const initQuestion = [
    ['Would you like to add a new member to the team?', 'newMember', 'confirm'],
]
const EmployeeType = [
    ['Employee Role:', 'role', 'list', ['Intern', 'Engineer', 'Manager']]
]
const employeeQuestions = [
    ['Employee Name:', 'name', 'input'],
    ['Employee Email:', 'email', 'input'],
    ['Employee Age:','age','input'],
    ['Employee Sex:', 'sex','input'],
    ['Employee Location:', 'location','input']
]
const internQuestions = [
    ['School:', 'school', 'input']
]
const engineerQuestions = [
    ['GitHub Username:', 'github', 'input']
]
const managerQuestions = [
    ['Office Number:', 'office', 'input']
]

let appData = []

class Application {
    start() {
        inquirer.prompt(this.GetQuestions(initQuestion))
            .then((data) => {
                if (!data.newMember) {
                    if(appData == 'undefined'){ return}
                    else {console.log('started') }
                    
                    createHTML(appData, fileName)
                    console.log(`writing file...
                    adding application data...
                    ${index.html} successfully created.`)
                    } 
                else {this.GetType() }
            })
            .catch((err) => new Error(err))
    }
    GetType() {
        inquirer.prompt(this.GetQuestions(EmployeeType))
            .then((data) => {
                let role = ''
                let eQuestions = employeeQuestions
                if(data.role == 'Intern'){ eQuestions = eQuestions.concat(internQuestions); role = 'Intern'}
                else if(data.role == 'Engineer'){ eQuestions = eQuestions.concat(engineerQuestions); role = 'Engineer'}
                else if(data.role == 'Manager'){ eQuestions = eQuestions.concat(managerQuestions); role = 'Manager'}
                else{ console.log('role does not exist')}
                this.GetData(eQuestions, role)
            })
            .catch((err) => new Error(err))
    }
    GetData(type, role) {
        inquirer.prompt(this.GetQuestions(type))
        .then((data) => {
            data.role = role
            appData.push(data)
            this.start()
        })
        .catch((err) => new Error(err))
    }
    GetQuestions(array) {
        let x = []
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (element[2] == 'list') {
                let object = {
                    message: element[0],
                    name: element[1],
                    type: element[2],
                    choices: element[3]
                }
                x.push(object)
            } else {
                let object = {
                    message: element[0],
                    name: element[1],
                    type: element[2],
                }
                x.push(object)
            }
        }
        return x
    }
}

const App = new Application
App.start()


