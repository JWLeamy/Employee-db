SELECT 
roles.id AS role_id,
roles.role_title, 
roles.salary,
department.department_name
FROM roles
JOIN department 
ON roles.department_id = department.id;

SELECT 
a.id AS employee_id,
a.first_name,
a.last_name, 
c.role_title,
d.department_name,
c.salary,
b.first_name AS manager_firstname,
b.last_name AS manager_lastname
FROM employee a
LEFT JOIN employee b ON a.manager_id = b.id
INNER JOIN roles c ON a.role_id = c.id
INNER JOIN department d ON d.id = c.department_id;

SELECT 
b.first_name AS manager_firstname,
b.last_name AS manager_lastname,
a.id AS employee_id,
a.first_name,
a.last_name, 
c.role_title,
d.department_name,
c.salary
FROM employee a
LEFT JOIN employee b ON a.manager_id = b.id
INNER JOIN roles c ON a.role_id = c.id
INNER JOIN department d ON d.id = c.department_id
WHERE b.first_name = "John" AND b.last_name = "Doe";