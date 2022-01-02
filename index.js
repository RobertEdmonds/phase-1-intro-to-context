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
function hoursWorkedOnDate(object){
    for(let i=0; i< object.timeInEvents.length; i++){
        for(let j=0; j< object.timeOutEvents.length; j++){
            let timeIn = object.timeInEvents[i].date
            let timeOut = object.timeOutEvents[j].date
            let hourIn = object.timeInEvents[i].hour
            let hourOut = object.timeOutEvents[j].hour
            if(timeIn === timeOut){
                return ((hourOut - hourIn)/100)
            }else if(timeIn < timeOut){
                return (((hourIn-2400)+ hourOut)/100)
            }
        }
    }
}
function wagesEarnedOnDate(object){
    let totalHours = hoursWorkedOnDate(object)
    return (totalHours * object.payPerHour)
}
function allWagesFor(object){
    console.log(object.timeInEvents)
    for(let i=0; i< object.timeInEvents.length; i++){
        for(let j=0; j< object.timeOutEvents.length; j++){
            let timeIn = object.timeInEvents[i].date
            let timeOut = object.timeOutEvents[j].date
            let hourIn = object.timeInEvents[i].hour
            let hourOut = object.timeOutEvents[j].hour
            if(timeIn === timeOut){
                return ((hourOut - hourIn)/100)
            }else if(timeIn < timeOut){
                return (((hourIn-2400)+ hourOut)/100)
            }
        }
    }
}