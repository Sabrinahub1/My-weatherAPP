// This is where you would place your API key  
var APIKey = "b8ab2125465b75b5f1439d334b396212";

//This is where we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Atlanta,&appid=b8ab2125465b75b5f1439d334b396212";


console.log(queryURL);
appid=
console.log(queryURL);

// This is where you would run your AJAX call to the OpenWeatherMap API
$.ajax({
url: queryURL,
method: "GET"
})

  // All of the gathered data inside of an object called is response
.then(function(response) {
    console.log(queryURL);
    console.log(response);

    $(".city").html("<h1>" + response.name + " Current Weather</h1>");
    $(".humidity").text("Humidity: " + response.main.humidity + "%");
    $(".wind").text("Wind Speed: " + response.wind.speed + "mph");

     // Convert the temp to fahrenheit
     var tempF = (response.main.temp - 273.15) * 1.80 + 32;
     var feelF = (response.main.feels_like - 273.15) * 1.80 + 32;

     // add temp content to html
    //  $(".temp").text("Temperature (K) " + response.main.temp);
    $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
    $(".feel").text("Feels Like(F): " + feelF.toFixed(2));

    var temp = ("Temperature (F) " + tempF.toFixed(2));
    var city = (response.name + " Current Weather");
    var humidity = ("Humidity: " + response.main.humidity);
    var wind = ("Wind Speed: " + response.wind.speed)

    console.log(city);
    console.log(temp);
    console.log(humidity);
    console.log(wind);
});