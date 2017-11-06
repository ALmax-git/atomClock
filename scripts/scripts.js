"use strict";

var dateDisplay = document.getElementById("date");
var clockDisplay = document.getElementById("clock");
var locationDisplay = document.getElementById("location");

//Google maps monokutho Key "AIzaSyBPXXCQRHAOyHmb4O-WjY__zOFQ9He6Ouc"

var mapsAPIkey = "AIzaSyBPXXCQRHAOyHmb4O-WjY__zOFQ9He6Ouc";

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

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&key="+mapsAPIkey;
    document.getElementById("location").innerHTML = "<img src='"+img_url+"'>";
}
//To use this code on your website, get a free API key from Google.
//Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("location").innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("location").innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            document.getElementById("location").innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("location").innerHTML = "An unknown error occurred."
            break;
    }
}

function printMapPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
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

function onLoad() {
    printDate();
    printTime();
    printMapPosition();
}

    