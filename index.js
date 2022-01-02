// Your code here
let timeInEvents = []

function createEmployeeRecord([first, last, title, pay]){
    let employee = {
        firstName: first,
        familyName: last,
        title: title,
        payPerHour: pay
    }
    employee.timeInEvents = []
    employee.timeOutEvents = []
    return employee
}
function createEmployeeRecords(name){
    let array = Array.from(name)
    return array.map(createEmployeeRecord) 
}
function createTimeInEvent(object, date){
    createEmployeeRecord(object)
    timeInEvents.date = date.slice(0,9)
    timeInEvents.hour = date.slice(10)
}