var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#city-name");
var weathContainerEl = document.querySelector("#weather-container");
var weathDataSearchTerm = document.querySelector("#city-search-term");


var formSubmitHandler = function(event) {
    event.preventDefault();

    var cityName = nameInputEl.value.trim();

    if (cityName) {
        getCityWeath(cityName);

        weathContainerEl.textContent = "";
        nameInputEl.value = "";
    } else {
        alert("Please enter a valid City name");
    }
};

var getCityWeath = function(city) {

    var apiUrl = "api.openweathermap.org/data/2.5/weather?q={" + cityName + "}&appid={4d2f92e4e514173b36848419943a8ee1}";

    fetch(apiUrl)
      .then(function(response) {
          if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
              console.log(data);
              displayWeather(data, city);
          });
      } else {
          alert("Error: " + response.statusText);
      }
    })
    .catch(function(error) {
        alert("Unable to connect to OpenWeather");
    });

};

var displayWeath = function(cityData, searchTerm) {
    if (cityData.length === 0) {
        weathContainerEl.textContent = "No repositories found.";
        return;
    }

    weathDataSearchTerm.textContent = searchTerm;

    for (var i = 0; i <weathdata.length; i++) {
        
        var cityNameEl = cityData[i].name;

        var titleEl = document.createElement("span");
        titleEl.textContent = cityNameEl;

        cityNameEl.appendChild(titleEl)

    }

    var weatherEl = document.createElement("span");

    
}







userFormEl.addEventListener("submit", formSubmitHandler);
languageButtonsEl.addEventListener("click", buttonClickHandler);