"use strict";

searchButton.addEventListener('click', searchWeather);

function searchWeather() {
  var cityName = searchCity.value;
    if (cityName.trim().length == 0) {
      return alert('Please enter a City Name.');
    }
  var http = new XMLHttprequest();
  var apikey = 'f984d5299e67d58fde0c0531af90567f';
  var url ="http://api.openweathermap.org/data/2.5/weather?q=" + cityName;
  var method = 'GET';

  http.open(method, url);
  http.onreadystatechange = function () {
    if (http.readyState == XMLHttprequest.DONE && http.status === 200) {

    }
  }
}
