<h1 align="center">Employee Database Editor</h1>
<p align="center">Primary Tools</p>
<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/-node.js-green" />
    <img src="https://img.shields.io/badge/-inquirer-red" >
    <img src="https://img.shields.io/badge/mySQL-blue"  />
</p>

## Description

A command line application that allows users to create and modify a employee database.

## Acceptance Critera
<details>
<summary>

```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```
(click for more)
</summary>

```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

</details>
Addtional Features

- Update employee managers.

- View employees by manager.

- View employees by department.

- Delete departments, roles, and employees.

## Instruction/Usage
Steps 
1. Copy the attached code to your perfered text editor
2. Within the downloaded repository, install the dependencies within your packaged json ('npm i' in command line)
3. Make sure your sql files are sourced properly
4. Start using your database with the command "node server.js"!

[Untitled_ Feb 13, 2023 5_28 PM.webm](https://user-images.githubusercontent.com/111401066/218615452-8c189fad-fedd-45ec-acbc-b6e218bf84a0.webm)


