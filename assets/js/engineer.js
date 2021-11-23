const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name,email,githubUsername) {
        
        super(name,email)
        this.githubUsername = githubUsername
    }

    getGithub(){
        return this.githubUsername
    }
    
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer