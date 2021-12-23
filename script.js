var hourOfday = [
    document.getElementById('time-9am'),
    document.getElementById('time-10am'),
    document.getElementById('time-11am'),
    document.getElementById('time-12pm'),
    document.getElementById('time-1pm'),
    document.getElementById('time-2pm'),
    document.getElementById('time-3pm'),
    document.getElementById('time-4pm'),
    document.getElementById('time-5pm'),
];

var userNotes = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
]

var saveBtn = $('.savebtn');

var firstHr = 9;
var lastHR = 17;
var hoursLength = (lastHR-firstHr);

var currentHr = parseInt((moment().format("H")));

function colorClass(i) {
    for (var i = 0; i < hourOfday.length; i++) {
        var hour = parseInt(hourOfday[i].getAttribute("data-hour"));
        // console.log(hourOfday[i].getAttribute("data-hour"));
        // console.log(currentHr)
        if (hour < currentHr) {
            hourOfday[i].classList.add("past");
        } if (hour == currentHr) {
            hourOfday[i].classList.add("present");
        } if (hour > currentHr) {
            hourOfday[i].classList.add("future");
        }
    } 
};
colorClass();