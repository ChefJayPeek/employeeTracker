// Set up prompts for inquirer
module.exports = {
    // Inital prompts
    firstPrompt: {
        type: "list",
        name: "task",
        message: "Make a selection:",
        choices: [
            // View choices
            "View Employees",
            "View Employees by Manager",
            "View Employees by Department",
            "View Departmenst",
            "View Roles",
            "Vew Department Budget",
            // Add choices
            "Add Employee",
            "Add Department",
            "Add Role",
            // Update existing
            "Update Employee Role",
            "Update Employee Manager",
            // Remove existing
            "Remove Employee",
            "Remove Department",
            "Remove Role",
            // Or Exit
            "Exit",
        ],
    },

    // View Prompts

    // Prompt for employee by manager
    viewManagerPrompt: (managerChoices) => [
        // Select by manager
        {
            type: "list",
            name: "managerId",
            Message: "Which manager?",
            choices: managerChoices,
        },
    ],
    // Prompt for employee by department
    departmentPrompt: (departmentChoices) => [
        // Select by department
        {
            type: "list",
            name: "departmentId",
            message: "Which department?",
            choices: departmentChoices,
        },
    ],

    // Add Prompts

    // Prompt for add empoloyee
    insertEmployee: (departmentArray, roleArray, managerArray) => [
        {
            name: "firstName",
            type: "input",
            message: "Enter employee's first name",
        },
        {
            name: "lasatName",
            type: "input",
            message: "Enter employee's last name",
        },
        {
            name: "department",
            type: "list",
            message: "Choose employee's job position",
            choices: roleArray,
        },
        {
            name: "manager",
            type: "list",
            message: "Choose the manager of this employee",
            choices: managerArray,
        },
    ],
    // Prompt for add department
    insertDepartment: {
        name: "department",
        type: "input",
        message: "What is the name of the new department?",
    },
    // Prompt for add role
    insertRole: (departmentChoices) => [
        {
            name: "roleTitle",
            type: "input",
            message: "Role Title",
        },
        {
            name: "roleSalary",
            type: "input",
            message: "Role Salary",
        },
        {
            name: "departmentId",
            type: "list",
            message: "Department",
            choices: departmentChoices,
        },
    ],

    // Prompts for updating
    // Update Role
    updateRole: (employees, job) => [
        {
            name: "update",
            type: "list",
            message: "Choose the employee that you wish to update",
            choices: employees,
        },
        {
            name: "role",
            type: "list",
            message: "Choose the employee's job position",
            choices: job,
        },
    ],
    //Update Manager
    updateManager: (empoloyees) => [
        {
            name: "update",
            type: "list",
            message: "Choose the employee that you wish to update",
            choices: employees,
        },
        {
            name: "manager",
            type: "list",
            message: "Choose the employee's new manager",
            choices: employees,
        },
    ],

    // Prompts to remove
    // Remove employee
    deleteEmployeePrompt: (deleteEmployeeChoices) => [
        {
            name: "employeeId",
            type: "list",
            message: "Which employee do you want to remove",
            choices: deleteEmployeeChoices,
        },
    ],

    // Remove department
    deleteDepartmentPrompt: (deleteDepartmentChoices) => [
        {
            name: "departmentId",
            type: "list",
            message: "Which department do you wish to remove",
            choices: deleteDepartmentChoices,
        },
    ],

    // Remove Role
    deleteRolePrompt: (deleteRoleChoices) => [
        {
            name: "roleId",
            type: "list",
            message: "Which role do you want to remove",
            choices: deleteRoleChoices,
        },
    ],
};