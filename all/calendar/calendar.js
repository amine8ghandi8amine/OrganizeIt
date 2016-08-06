function Calendar() {
    //calendar Div
    this.currentCalendar = document.getElementById("calendar");
    // take this day
    this.date = new Date();
    // set the first day in the month
    this.date.setDate(1);
    // day to string
    this.dayOfWeekAsString = function (dayIndex) {
        return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayIndex];
    };
    // month to string
    this.monthsAsString = function (monthIndex) {
        return ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][monthIndex];
    };
    // work for every day
    this.createCalendarDay = function (num, day, month) {
        // creat a div 
        var newDay = document.createElement("div");
        //creat a paragraphe 
        var dateElement = document.createElement("p");
        // inner the day in the paragraphe
        dateElement.innerHTML = num;
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
        newDay.appendChild(dateElement);
        newDay.appendChild(dayElement);
        // appending the divs into the calendar
        this.currentCalendar.appendChild(newDay);
    };

    // clearing the calendar
    this.clearCalendar = function () {
        this.currentCalendar.innerHTML = "";

    };

    // whene click display another monther other than that

    this.monthCreate = function (i) {

        // empty the html from calendar
        this.clearCalendar();
        this.date.setMonth(i);
        // creath the calendar for the month given
        this.createMonth(this.date.getMonth());
        //this.createMonth(2);

    };

    // Generate month
    this.createMonth = function (month) {

        // this days
        var dateObject = new Date();
         dateObject.setDate(this.date.getDate());
        //month given or clicked
        dateObject.setMonth(month);
        dateObject.setYear(this.date.getFullYear());
        // createCalendarDay( this day, ["3letterDay"][indexDay],this month );
        this.createCalendarDay(dateObject.getDate(), this.dayOfWeekAsString(dateObject.getDay()), dateObject.getMonth());
        // date + 1
        dateObject.setDate(dateObject.getDate() + 1);
        //get every day after this day
        while (dateObject.getDate() != 1) {

            this.createCalendarDay(dateObject.getDate(), this.dayOfWeekAsString(dateObject.getDay()), dateObject.getMonth());
            // set the a day after before
            dateObject.setDate(dateObject.getDate() + 1);
        }

    };

}



Calendar.prototype = Object.create(All.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Calendar,
        writable: true
    }
});

var calendar = new Calendar();