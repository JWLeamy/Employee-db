//import inquireer
const inquirer = require('inquirer');
//Run my sql connection in constant variable
const mysqlConnection = require('../config/connection');
let managersArr = [];
let departmentsArr = [];
let rolesArr = [];
let employeesArr = [];


/*------------------------Question Prompts based of selection------------------------ */
            /* ------------All constants are self explanitory-------------*/

const getManager = [
    {
        type: 'list',
        name: 'manager',
        message: 'Please select a manager:',
        choices: managersArr
    }
];

const getDepartment = [
    {
        type: 'list',
        name: 'department',
        message: 'Please select a department:',
        choices: departmentsArr
    }
];

const addDepartment = [
    {
        type: 'input',
        name: 'department',
        message: 'Please enter name of department:'
    }
];

const addRole = [
    {
        type: 'input',
        name: 'role',
        message: 'Please enter name of role:'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Please enter salary of role:',
        validate: (answer) => {
            if (isNaN(answer)) {
                return "Please enter numbers only:";
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'department',
        message: 'Which department does the role belong to?',
        choices: departmentsArr
    }
];

const addEmployee = [
    {
        type: 'input',
        name: 'fName',
        message: "Please enter employee's first name:"
    },
    {
        type: 'input',
        name: 'lName',
        message: "Please enter employee's last name:"
    },
    {
        type: 'list',
        name: 'role',
        message: "Please select employee's role:",
        choices: rolesArr
    },
    {
        type: 'list',
        name: 'manager',
        message: "Please select employee's manager:",
        choices: managersArr
    }
];

const updateEmployee = [
    {
        type: 'list',
        name: 'employee',
        message: 'Select an employee to update:',
        choices: employeesArr
    },
    {
        type: 'list',
        name: 'role',
        message: "Please select employee's new role:",
        choices: rolesArr
    }
];

const updateEmployeeManager = [
    {
        type: 'list',
        name: 'employee',
        message: 'Select an employee to update:',
        choices: employeesArr
    },
    {
        type: 'list',
        name: 'manager',
        message: "Please select employee's new manager:",
        choices: managersArr
    }
];

const deleteDepartment = [
    {
        type: 'list',
        name: 'department',
        message: 'Select a department to delete:',
        choices: departmentsArr
    }
];


const deleteRole = [
    {
        type: 'list',
        name: 'role',
        message: 'Select a role to delete:',
        choices: rolesArr
    }
];


const deleteEmployee = [
    {
        type: 'list',
        name: 'name',
        message: 'Select an employee to delete:',
        choices: employeesArr
    }
];


function quit () {
    console.table(logo({
        name: "Till next time!",
    }).render());
    process.exit();
}

/* ----------All Employee related functions-----------*/

function deleteEmployee(name) {
    const employeeName = name.split(" ");
    mysqlConnection.query('DELETE FROM employee WHERE first_name = ? AND last_name = ?;', [employeeName[0], employeeName[1]], function (err, results) {
        console.table(results);
        start.start();
    })
}

//will include later on to create full employee name category
function getEmployeesToDelete (){
    mysqlConnection.query('SELECT concat(first_name, " ", last_name) AS employee_name FROM employee;', function (err, results) {
        employeesArr.length = 0;
        for (const person in results) {
            if (employeesArr.indexOf(results[person].employee_name) === -1) {
                employeesArr.push(results[person].employee_name);
            }
        }
        inquirer.prompt(deleteEmployeeQs)
        .then((response) => {
            deleteEmployee(response.name);
        });        
    })
}

/* ----------All Role related functions-----------*/
function deleteRoles(role) {
    mysqlConnection.query('DELETE FROM roles WHERE role_title = ?;', role, function (err, results) {
        console.table(results);
        start.start();
    })
}

//if role is no longer needed, search through database for it's title and remove it
function getRolesToDelete (){
    mysqlConnection.query('SELECT role_title FROM roles', function (err, results) {
        rolesArr.length = 0;
        for (const role in results) {
            if (rolesArr.indexOf(results[role].role_title === -1)) {
                rolesArr.push(results[role].role_title);
            }
        }
        inquirer.prompt(deleteRoleQs)
        .then((response) => {
            deleteRoles(response.role);
        });        
    })
}

/* ----------All Department related functions-----------*/


