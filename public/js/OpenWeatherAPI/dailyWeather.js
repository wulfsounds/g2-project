let apiKey = "1f56ef55a0f3d4c3bb739f2d664d73f9";

function dailyWeather() {

    // lat/lon for Dallas - hardcoded for now
    let queryURL = `https://api.openweathermap.org/data/2.5/onecall?lat=32.7762719&lon=-96.7968559&units=imperial&appid=${apiKey}`;

    return axios
        .get(queryURL)
        .then(response => {
            // console.log(response.data);

            // extract daily forecast
            const { daily } = response.data;

            // day0 is current day, day1-day-5 is next 5 days
            const [ day0, day1, day2, day3, day4, day5 ]  = daily;

            // return 5-day forecast
            return [ day1, day2, day3, day4, day5 ];
        })
}

dailyWeather();