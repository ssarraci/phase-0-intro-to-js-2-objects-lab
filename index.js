// Write your solution in this file!
const employee = {
    name: 'Storm',
    streetAdress: '5708 Welsh Way'
};
    
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newDeletedEmployee = Object.assign({}, employee, key);
    delete newDeletedEmployee[key];
    return newDeletedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
