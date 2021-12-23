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
];

var savedPlans = Object.keys(localStorage);

var timeDisplayEl = $('#currentDay')

var saveBtn = $('.saveBtn');

var firstHr = 9;
var lastHR = 17;
var hoursLength = (lastHR-firstHr);

var currentHr = parseInt((moment().format("H")));

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000)

function colorClass() {
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

saveBtn.on('click', function() {
    for (var i = 0; i <hourOfday.length; i++) {
        userNotes[i]=(hourOfday[i].description.val);
        localStorage.setItem("agendaItems", JSON.stringify(userNotes));
    }
    storeNotes();
});

function storeNotes() {
    if(localStorage.getItem("agendaItems")) {
        for (var i = 0; i < hourOfday.length; i++)
        userNotes[i] = JSON.parse(userNotes.getItem("agendaItems"))[i];
        if (userNotes[i]) {
            hourOfday[i].description.val = userNotes[i];
        }
    }
};

colorClass();
// storeNotes();

// saveBtn.on("click", function () {
//     // console.log(this);
//     var taskInput = $(this).siblings(".description").val();
//     var timeSlot = $(this).parent().attr("id");
//     localStorage.setItem(timeSlot, taskInput);
// }); // end of saveBtn click event
// for (i = 0; i < savedPlans.length; i++) {
//     var taskInput = localStorage.getItem(savedPlans[i]);
//     var savedText = $("#" + savedPlans[i]).find("textarea")
//     savedText.val(taskInput);
// } // end of for loop