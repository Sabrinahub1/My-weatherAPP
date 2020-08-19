// Your API key is located here                      
var APIKey = "b8ab2125465b75b5f1439d334b396212";

//This is were we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Baltimore,&appid=b8ab2125465b75b5f1439d334b396212";


console.log(queryURL);
appid=
console.log(queryURL);

// Here run your AJAX call to the OpenWeatherMap API
$.ajax({
url: queryURL,
method: "GET"
})


  // We store all of the retrieved data inside of an object called response
.then(function(response) {
    console.log(queryURL);
    console.log(response);

    $(".city").html("<h1>" + response.name + " Current Weather</h1>");
    $(".humidity").text("Humidity: " + response.main.humidity + "%");
    $(".wind").text("Wind Speed: " + response.wind.speed + "mph");

     // Convert the temp to fahrenheit
     var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    

     // add temp content to html
    //  $(".temp").text("Temperature (K) " + response.main.temp);
    $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
    

    var temp = ("Temperature (F) " + tempF.toFixed(2));
    var city = (response.name + " Current Weather");
    var humidity = ("Humidity: " + response.main.humidity);


    console.log(city);
    console.log(temp);
    console.log(humidity);
    
});