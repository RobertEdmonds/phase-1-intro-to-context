// Your code here

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
function createTimeInEvent(object, time){
    let date = time.split(' ')[0]
    let hour = time.split(' ')[1]
    let inTime = {
        hour: parseInt(hour),
        date: date,
        type: 'TimeIn'
    }
    object.timeInEvents.push(inTime)
    return object
}
function createTimeOutEvent(object, time){
    let date = time.split(' ')[0]
    let hour = time.split(' ')[1]
    let outTime = {
        hour: parseInt(hour),
        date: date,
        type: 'TimeOut'
    }
    object.timeOutEvents.push(outTime)
    return object
}
function hoursWorkedOnDate(object, date){
    let inEvent = object.timeInEvents.find(event=> event.date === date)
    let outEvent = object.timeOutEvents.find(event => event.date ===date)
    return ((outEvent.hour - inEvent.hour)/100)
       
}
function wagesEarnedOnDate(object, date){
    let totalHours = hoursWorkedOnDate(object, date)
    return (totalHours * object.payPerHour)
}
function allWagesFor(object){
    let dates = object.timeInEvents.map(event => event.date)
    let total = dates.reduce((previousValue, currentValue)=> previousValue + wagesEarnedOnDate(object, currentValue), 0)
    return total
}
function calculatePayroll(array){
   let group = array.map(event => event.timeInEvents)
   let dates = group.forEach(event => event[0].date)
   let total = dates.reduce((previous, current)=> previous + wagesEarnedOnDate(array, current))
   console.log(dates)
}