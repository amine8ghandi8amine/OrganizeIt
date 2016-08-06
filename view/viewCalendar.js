var january = document.getElementById("0month");
var febuary = document.getElementById("1month");
var march = document.getElementById("2month");
var april = document.getElementById("3month");
var may = document.getElementById("4month");
var june = document.getElementById("5month");
var july = document.getElementById("6month");
var august = document.getElementById("7month");
var september = document.getElementById("8month");
var october = document.getElementById("9month");
var november = document.getElementById("10month");
var december = document.getElementById("11month");





var handelsCalendar = {
    // onload load this day and every day after that 
    thisDate: (function () {
        window.addEventListener("load", function () {
            calendar.createMonth(calendar.date.getMonth());
        }, false);
    })(),

    clickMonths: (function () {

        january.addEventListener("click", function (event) {
            calendar.monthCreate(Number(event.target.id.replace("month","")));
        }, false);
        febuary.addEventListener("click", function (event) {
            calendar.monthCreate(Number(event.target.id.replace("month","")));
        }, false);
        march.addEventListener("click", function (event) {
            calendar.monthCreate(Number(event.target.id.replace("month","")));
        }, false);

        april.addEventListener("click", function (event) {
            
            calendar.monthCreate(Number(event.target.id.replace("month","")));
        }, false);
        may.addEventListener("click", function (event) {
            
            calendar.monthCreate(Number(event.target.id.replace("month","")));
        }, false);
        june.addEventListener("click", function (event) {
            calendar.monthCreate(Number(event.target.id.replace("month","")));
        }, false);
        july.addEventListener("click", function (event) {
            calendar.monthCreate(Number(event.target.id.replace("month","")));
        }, false);
        august.addEventListener("click", function (event) {
            calendar.monthCreate(Number(event.target.id.replace("month","")));
        }, false);
        september.addEventListener("click", function (event) {
            calendar.monthCreate(Number(event.target.id.replace("month","")));
        }, false);
        october.addEventListener("click", function (event) {
            calendar.monthCreate(Number(event.target.id.replace("month","")));
        }, false);
        november.addEventListener("click", function (event) {
            calendar.monthCreate(Number(event.target.id.replace("month","")));
        }, false);
        december.addEventListener("click", function (event) {
            calendar.monthCreate(Number(event.target.id.replace("month","")));
        }, false);


    })()
};