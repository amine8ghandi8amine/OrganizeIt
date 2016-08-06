
// take this day
var date = new Date();
// the first day of that month
date.setDate(1);
// onload load this day and every day after that 
window.onload = function () {
    createMonth(date.getMonth());
};

function dayOfWeekAsString(dayIndex) {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayIndex];
}

function monthsAsString(monthIndex) {
    return ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][monthIndex];
}
// work for every day
function createCalendarDay(num, day, month) {
    // get the Element
    var currentCalendar = document.getElementById("calendar");
    // creat a div 
    var newDay = document.createElement("div");
    //creat a paragraphe 
    var date = document.createElement("p");
    // inner the day in the paragraphe
    date.innerHTML = num;
    // creat a paragraph and inner the day String
    var dayElement = document.createElement("p");
    dayElement.innerHTML = day;
    // clas for the div
    newDay.className = "calendar-day";
    // actual date
    var dateActual = new Date();
// if actual day
    if (num == dateActual.getDate() && month == dateActual.getMonth()) {
        // p
        var specialElement = document.createElement("p");
        // sat a class for the special element
        specialElement.className = "specialElement";
        // append speial element in the div
        newDay.appendChild(specialElement);
        // set class name div
        newDay.className = "calendar-day special";
    }
// appending the simple day
    newDay.appendChild(date);
    newDay.appendChild(dayElement);
// appending the divs into the calendar
    currentCalendar.appendChild(newDay);
}

// clearing the calendar
function clearCalendar() {
    var currentCalendar = document.getElementById("calendar");

    currentCalendar.innerHTML = "";

}

// whene click display another monther other than that

function monthCreate(i) {

    clearCalendar();
    date.setMonth(i);
    createMonth(date.getMonth());
}

// Generate month
function createMonth(month) {
    //calendar Div
    var currentCalendar = document.getElementById("calendar");
    // this days
    var dateObject = new Date();
    //this day
 dateObject.setDate(date.getDate());

    //this month
    dateObject.setMonth(month);
    //this year
 dateObject.setYear(date.getFullYear());

    // createCalendarDay( this day, ["3letterDay"][indexDay],this month );
    createCalendarDay(dateObject.getDate(), dayOfWeekAsString(dateObject.getDay()), dateObject.getMonth());
    // date + 1
    dateObject.setDate(dateObject.getDate() + 1);
    //get every day after this day
    while (dateObject.getDate() != 1) {

        createCalendarDay(dateObject.getDate(), dayOfWeekAsString(dateObject.getDay()), dateObject.getMonth());
        // set the a day after before
        dateObject.setDate(dateObject.getDate() + 1);
    }

}