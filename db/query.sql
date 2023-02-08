SELECT 
roles.id AS role_id,
roles.role_title, 
roles.salary,
department.department_name
FROM roles
JOIN department 
ON roles.department_id = department.id;
