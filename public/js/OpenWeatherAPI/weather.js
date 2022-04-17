var moment = require('moment'); // http://momentjs.com/docs/
var _ = require('lodash'); // https://lodash.com/docs

// Display Date
let date = moment().format("L");
$("time").text(date);
console.log(moment().format("L"));

// Display weather using OpenWeather API and geolocation
// Weather Variables
let userLocation;
let weather;
let apiKey = "1f56ef55a0f3d4c3bb739f2d664d73f9";

getLocation();

// Gather Location data based on user's IP
function getLocation() {
	if (navigator.geolocation) {
		userLocation = navigator.geolocation.getCurrentPosition(getWeather);
	} else {
		$("span").html("HOWS THE WEATHER?");
	}
}

async function getWeather(position) {
	let [lat, lon] = [position.coords.latitude, position.coords.longitude];
	console.log(lat, lon);
	let queryURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

	await fetch(queryURL)
		.then(function (response) {
			console.log(response.statusText);
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			weather = data;
			return weather;
		});
	postWeather();
}

// Displays weather on page with icons
async function postWeather() {
	console.log(weather);
	let icon = weather.current.weather[0].icon;
	let temp = weather.current.temp;
	console.log(icon, temp);
	// Displays weather icon
	const weatherText = document.querySelector(".realTemp");
	let img = document.createElement("img");
	img.setAttribute(`src`, `http://openweathermap.org/img/wn/${icon}@2x.png`);
	img.setAttribute("alt", "weather-icon");
	img.setAttribute("class", "icon");
	weatherText.appendChild(img);

	// Displays temp (in Fº)
	$(".local").text(`${Math.floor(temp)}º`);

	fiveDay();
}

async function fiveDay() {
	console.log("fiveDay OK");
	console.log(weather);
	let i = 0;
	const weatherObject = [weather.daily.slice(1, 6)];
	console.log(`WeatherObject: ${weatherObject}`);

	weather.daily.slice(1, 6).forEach(function (weatherObject) {
		let icon = weather.daily[i].weather[0].icon;

		let dayIcon = document.createElement("img");
		dayIcon.setAttribute(
			`src`,
			`http://openweathermap.org/img/wn/${icon}@2x.png`
		);
		let dayTemp = document.createElement("p");
		dayTemp.setAttribute("class", "day-temp");

		
		console.log(dayIcon);
		console.log(dayTemp);

		$(".five-day").append(dayIcon);
		$(".five-day").append(dayTemp);
		$(dayTemp).text(`Temp: ${Math.floor(weather.daily[i].temp.day)}`);

		i++;
	});
    let day;
    let dayDates = document.createElement("p");
    dayDates.setAttribute("class", "day-date"); 
    addDate(day);
    dayDates.text(day)
    $(".five-day").append(dayDates);
}

function addDate(collectionsWithDateValues){
  var slots = [];
  var hours = {
    start: 7,   // 7am
    end: 21,    // 9pm
    window: 2   // How long each item should be slotted for.
  };
  var rightNow  = moment().add(0, 'days').hours(hours.start).minute(0).second(0);
  var cutoff    = moment(rightNow).add(5,'days'); // Check the next 2 weeks.
  
  for( rightNow ; rightNow.isBefore(cutoff) ; rightNow.add(hours.window, 'hours') ){
    // Check if we're going beyond the daily cutoff, go to the next day
    if(rightNow.isAfter(moment(rightNow).hour(hours.end))){
      rightNow.add(1, 'days').hour(hours.start);
    }
  
    var foundClash = false;
    _.forEach(collectionsWithDateValues,  function(item){
      // Check if the item is within now and the slotted time 
      foundClash = moment(item.date).isBetween(rightNow, moment(rightNow).add(hours.window, 'hours').subtract(1, 'minutes').seconds(59));
    });
  
    if(!foundClash){
      slots.push(rightNow.toString());
    }
  }
  return slots;
}
