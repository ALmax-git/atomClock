"use strict";

var dateDisplay = document.getElementById("date");
var clockDisplay = document.getElementById("clock");
var locationDisplay = document.getElementById("location");
//Google maps monokutho Key "AIzaSyDo4lTcOwynRwtoC3ASbGKBgaOeCw_nKts"

var months = [
    "january", "febraury", "march", "april", "may", "june", "july", "august", "september", "october",
    "november", "december"
];

var days = [
    "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"
]


function getFullDate() {
    var dateObj = new Date();
    var fullDate = {};
    
    fullDate.date = dateObj.getDate();
    fullDate.day = dateObj.getDay();
    fullDate.month = dateObj.getMonth();
    fullDate.year= dateObj.getFullYear();
    
    return fullDate;
}

function getCurrentTime() {
    var hourObj = new Date();
    var currentTime = {};
    
    currentTime.seconds = hourObj.getSeconds();
    currentTime.minutes = hourObj.getMinutes();
    currentTime.hours = hourObj.getHours();
    
    return currentTime;
    
}

function getPosition() {

    var position ={};
  
    navigator.geolocation.getCurrentPosition(function (location) {
    position.latitude = location.coords.latitude;
    position.longitude = location.coords.longitude;
    position.accuracy = location.coords.accuracy;
    });
    
    return position;

}

function printDate() {
    var currentDate = getFullDate();
    var currentDateString = days[currentDate.day - 1] + ", " + currentDate.date + " " + months[currentDate.month - 1] 
    + " " + currentDate.year;
    dateDisplay.innerHTML = currentDateString;
}

function printTime() {
    window.setInterval(function(){
        var currentTime = getCurrentTime();
        var currentTimeString = currentTime.hours + ":" + currentTime.minutes + ":" + currentTime.seconds;
        clockDisplay.innerHTML = currentTimeString;
    }, 1000);
}

function printPosition () {
}


function onLoad() {
    printDate();
    printTime()
}

console.log(getPosition(), getFullDate(), dateDisplay);

    