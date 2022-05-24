
const apiKey = "33b8e34b33e34700a6d210223222205"
const navbar = document.getElementById("navbar")
const time = document.getElementById("navbar-time")
const city = document.getElementById("navbar-city")
const region = document.getElementById("navbar-region")
const country = document.getElementById("navbar-country")
const weatherText = document.getElementById("weather-text")
const sunWeatherIcon = document.getElementById("sun-weather-icon")
const moonWeatherIcon = document.getElementById("moon-weather-icon")
const cloudyWeatherIcon = document.getElementById("cloudy-weather-icon")
const thunderWeatherIcon = document.getElementById("thunder-weather-icon")
const cloudyNightWeatherIcon = document.getElementById("cloudy-night-weather-icon")
const rainWeatherIcon = document.getElementById("rain-weather-icon")
const showersWeatherIcon = document.getElementById("showers-weather-icon")
const smogWeatherIcon = document.getElementById("smog-weather-icon")
const snowWeatherIcon = document.getElementById("snowflake-weather-icon")
const searchButton = document.getElementById("search-btn")
const searchSection = document.getElementById("search-section")
const inputScreen = document.getElementById("input-screen")
const weatherScreen = document.getElementById("weather-screen")
const dayText = document.getElementById("day-text")
const temperatureText = document.getElementById("temperature-text")
const weatherMarquee = document.getElementById("weather-marquee")
const feelsLikeTemp = document.getElementById("feels-like-temp")
const humidity = document.getElementById("humidity")
const visibility = document.getElementById("visibility")
const windSpeed = document.getElementById("wind-speed")
const gust = document.getElementById("gust")
const windDirection = document.getElementById("wind-direction")
const uv = document.getElementById("uv")
const precipitation = document.getElementById("precipitation")
const pressure = document.getElementById("pressure")
const navbarInput = document.getElementById("navbar-input")
let inputLocation = document.getElementById("weather-input")

sunWeatherIcon.style.display = "none"
moonWeatherIcon.style.display = "none"
cloudyWeatherIcon.style.display = "none"
thunderWeatherIcon.style.display = "none"
cloudyNightWeatherIcon.style.display = "none"
rainWeatherIcon.style.display = "none"
showersWeatherIcon.style.display = "none"
smogWeatherIcon.style.display = "none"
snowWeatherIcon.style.display = "none"
weatherMarquee.style.opacity = "0"

function resetWeatherIcons(){
    sunWeatherIcon.style.display = "none"
    moonWeatherIcon.style.display = "none"
    cloudyWeatherIcon.style.display = "none"
    thunderWeatherIcon.style.display = "none"
    cloudyNightWeatherIcon.style.display = "none"
    rainWeatherIcon.style.display = "none"
    showersWeatherIcon.style.display = "none"
    smogWeatherIcon.style.display = "none"
    snowWeatherIcon.style.display = "none"
}

function navbarSearch(){

    weatherMarquee.style.opacity= "1"
    searchButton.style.position = "relative" 
    searchButton.style.transform = "translateY(-252px) translateX(560px)"
    inputLocation.style.width = "0px"
    inputLocation.style.visibility = "hidden"
    inputScreen.classList.remove("input-screen")
    inputScreen.classList.add("weather-display-screen")
    searchButton.style.transition = "0.7s all"
    inputScreen.style.transition = "0.3s all ease-in"
    weatherScreen.style.display = "flex"
    weatherScreen.style.opacity = "1"
    searchButton.attributes.onclick.nodeValue = "searchFromNavbar(), resetWeatherIcons()"
    searchButton.addEventListener("mouseover", () =>{
        navbarInput.style.width = "300px"
        searchButton.style.borderLeft = "1px solid gray"
        navbarInput.style.opacity = "1"
        navbarInput.style.transition = "0.5s all ease-in"
    })
    navbar.addEventListener("mouseleave", () =>{
        navbarInput.style.width = "0px"
        navbarInput.style.opacity = "0"
        searchButton.style.border = "none"
        navbarInput.style.transition = "0.5s all ease-in"
    })
}

function searchFromNavbar(){
    inputLocation = navbarInput.value
    let location = inputLocation


    document.body.style.backgroundRepeat = "no-repeat";
    
    fetch('http://api.weatherapi.com/v1/current.json?key=33b8e34b33e34700a6d210223222205&q='+location+'&aqi=no'
    )
    .then(res => res.json())
    
    
    .then(data => {
        let dataTime = data.location.localtime.split("").splice(11, 5)
        if(dataTime.length === 4){
            dataTime.unshift("0")
        }
        dataTime = dataTime.join("")
        let continent = data.location.tz_id.split("/")
        time.innerText = dataTime
        city.innerText = data.location.name
        region.innerText = continent[0]
        country.innerText = data.location.country
        weatherText.innerText = data.current.condition.text
        temperatureText.innerText = data.current.temp_c + "\u2103"
        feelsLikeTemp.innerText = "Feels like: " + data.current.feelslike_c
        humidity.innerText = "Humidity: " + data.current.humidity
        visibility.innerText = "Visibility: " + data.current.vis_km
        windSpeed.innerText = "Wind Speed: " + data.current.wind_mph
        pressure.innerText = "Pressure: " + data.current.pressure_in
        precipitation.innerText = "Precipitation: " + data.current.precip_in
        gust.innerText = "Gust: " + data.current.gust_mph
        uv.innerText = "UV: " + data.current.uv
        windDirection.innerText = "Wind Direction: " + data.current.wind_dir
        populateWeatherScreen()
        console.log(data)
        navbarInput.value = ""
        dayOrNight()
    })
}


function getWeather(){
    let location = inputLocation.value

    fetch('http://api.weatherapi.com/v1/current.json?key=33b8e34b33e34700a6d210223222205&q='+location+'&aqi=no'
    )
    .then(res => res.json())
    
    
    .then(data => {
        let dataTime = data.location.localtime.split("").splice(11, 5)
        if(dataTime.length === 4){
            dataTime.unshift("0")
        }
        dataTime = dataTime.join("")
        let continent = data.location.tz_id.split("/")
        time.innerText = dataTime
        city.innerText = data.location.name
        region.innerText = continent[0]
        country.innerText = data.location.country
        weatherText.innerText = data.current.condition.text
        temperatureText.innerText = data.current.temp_c + "\u2103"
        feelsLikeTemp.innerText = "Feels like: " + data.current.feelslike_c
        humidity.innerText = "Humidity: " + data.current.humidity
        visibility.innerText = "Visibility: " + data.current.vis_km
        windSpeed.innerText = "Wind Speed: " + data.current.wind_mph
        pressure.innerText = "Pressure: " + data.current.pressure_in
        precipitation.innerText = "Precipitation: " + data.current.precip_in
        gust.innerText = "Gust: " + data.current.gust_mph
        uv.innerText = "UV: " + data.current.uv
        windDirection.innerText = "Wind Direction: " + data.current.wind_dir
        populateWeatherScreen()
        console.log(data)
        dayOrNight()
    })
}

function dayOrNight(){
    
    switch(time.innerText[0]){
        case "0":
            if(time.innerText[1] === "7" || time.innerText[1] === "8" || time.innerText[1] === "9"){
                dayWeather()
            }else{
                nightWeather()
            }
            break;
            case "1":
                dayWeather()
            break;
        case "2":
            nightWeather()
            break;
    }    
}

function dayWeather(){

    switch(weatherText.innerText){
        case "Clear":
            document.body.style.background = "url(/images/clearday.jpg)"
            sunWeatherIcon.style.display = "initial"
            break;
        case "Sunny":
            document.body.style.background = "url(/images/clearday.jpg)"
            sunWeatherIcon.style.display = "initial"
            break;
        case "Partly cloudy":
            document.body.style.background = "url(/images/partlycloudyday.jpg)"
            cloudyWeatherIcon.style.display = "initial"
            break;
        case "Cloudy":
            document.body.style.background = "url(/images/cloudyday.jpg)"
            cloudyWeatherIcon.style.display = "initial"
            break;
        case "Overcast":
            document.body.style.background = "url(/images/overcastday.jpg)"
            cloudyWeatherIcon.style.display = "initial"
            break;
        case "Patchy rain possible":
            document.body.style.background = "url(/images/lightrainday.jpeg)"
            cloudyWeatherIcon.style.display = "initial"
            break;
        case "Patchy light drizzle":
            document.body.style.background = "url(/images/lightrainday.jpeg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Light drizzle":
            document.body.style.background = "url(/images/lightrainday.jpeg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Freezing drizzle":
            document.body.style.background = "url(/images/lightrainday.jpeg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Heavy freezing drizzle":
            document.body.style.background = "url(/images/lightrainday.jpeg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Patchy light rain":
            document.body.style.background = "url(/images/lightrainday.jpeg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Light rain":
            document.body.style.background = "url(/images/lightrainday.jpeg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Patchy freezing drizzle possible":
            document.body.style.background = "url(/images/lightrainday.jpeg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Moderate or heavy rain with thunder":
            document.body.style.background = "url(/images/thunderday.jpg)"
            thunderWeatherIcon.style.display = "initial"  
            break;
        case "Moderate or heavy snow with thunder":
            document.body.style.background = "url(/images/thunderday.jpg)"
            thunderWeatherIcon.style.display = "initial"
            break;
        case "Thundery outbreaks possible":
            document.body.style.background = "url(/images/thunderday.jpg)"
            thunderWeatherIcon.style.display = "initial"
            break;
        case "Patchy light rain with thunder":
            document.body.style.background = "url(/images/thunderday.jpg)"
            thunderWeatherIcon.style.display = "initial"
            break;
        case "Patchy light snow with thunder":
            document.body.style.background = "url(/images/thunderday.jpg)"
            thunderWeatherIcon.style.display = "initial"
            break;
        case "Light rain shower":
            document.body.style.background = "url(/images/lightrainday.jpeg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Light sleet showers":
            document.body.style.background = "url(/images/lightrainday.jpeg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Patchy sleet possible":
            document.body.style.background = "url(/images/lightrainday.jpeg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Light freezing rain":
            document.body.style.background = "url(/images/lightrainday.jpeg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Moderate rain at times":
            document.body.style.background = "url(/images/heavyrainday.jpg)"
            showersWeatherIcon.style.display = "initial"
            break;
        case "Moderate or heavy rain shower":
            document.body.style.background = "url(/images/heavyrainday.jpg)"
            showersWeatherIcon.style.display = "initial"
            break;
        case "Moderate or heavy sleet showers":
            document.body.style.background = "url(/images/heavyrainday.jpg)"
            showersWeatherIcon.style.display = "initial"
            break;
        case "Moderate rain":
            document.body.style.background = "url(/images/heavyrainday.jpg)"
            showersWeatherIcon.style.display = "initial"
            break;
        case "Heavy rain at times":
            document.body.style.background = "url(/images/heavyrainday.jpg)"
            showersWeatherIcon.style.display = "initial"
            break;
        case "Heavy rain":
            document.body.style.background = "url(/images/heavyrainday.jpg)"
            showersWeatherIcon.style.display = "initial"
            break;
        case "Moderate or heavy freezing rain":
            document.body.style.background = "url(/images/heavyrainday.jpg)"
            showersWeatherIcon.style.display = "initial"
            break;
        case "Torrential rain shower":
            document.body.style.background = "url(/images/heavyrainday.jpg)"
            showersWeatherIcon.style.display = "initial"
            break;
        case "Mist":
            document.body.style.background = "url(/images/mist.jpg)"
            smogWeatherIcon.style.display = "initial"
            break;
        case "Fog":
            document.body.style.background = "url(/images/mist.jpg)"
            smogWeatherIcon.style.display = "initial"
            break;
        case "Freezing fog":
            document.body.style.background = "url(/images/mist.jpg)"
            smogWeatherIcon.style.display = "initial"
            break;
        case "Patchy snow possible":
            document.body.style.background = "url(/images/snowday.jpg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Light sleet":
            document.body.style.background = "url(/images/snowday.jpg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Moderate or heavy sleet":
            document.body.style.background = "url(/images/snowday.jpg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Blowing snow":
            document.body.style.background = "url(/images/snowday.jpg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Light snow":
            document.body.style.background = "url(/images/snowday.jpg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Light snow showers":
            document.body.style.background = "url(/images/snowday.jpg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Patchy moderate snow":
            document.body.style.background = "url(/images/snowday.jpg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Moderate snow":
            document.body.style.background = "url(/images/snowday.jpg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Moderate or heavy snow showers":
            document.body.style.background = "url(/images/snowday.jpg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Patchy heavy snow":
            document.body.style.background = "url(/images/snowday.jpg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Patchy light snow":
            document.body.style.background = "url(/images/snowday.jpg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Heavy snow":
            document.body.style.background = "url(/images/snowday.jpg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Ice pellets":
            document.body.style.background = "url(/images/snowday.jpg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Light showers of ice pellets":
            document.body.style.background = "url(/images/snowday.jpg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Moderate or heavy showers of ice pellets":
            document.body.style.background = "url(/images/snowday.jpg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Blizzard":
            document.body.style.background = "url(/images/snowday.jpg)"
            snowWeatherIcon.style.display = "initial"
            break;
    }
    weatherScreen.style.background = "rgba(105, 154, 167, 0.7)"
    navbar.style.background = "rgb(105, 154, 167, 0.7)"
    navbar.style.color = "white"
    weatherMarquee.style.background = "rgb(105, 154, 167, 0.8)"
    weatherMarquee.style.color = "white"
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "100vh";
    }

function nightWeather(){

    switch(weatherText.innerText){
        case "Clear":
            document.body.style.background = "url(/images/clearnight.jpeg)"
            moonWeatherIcon.style.display = "initial"
            break;
        case "Partly cloudy":
            document.body.style.background = "url(/images/cloudynight.jpeg)"
            cloudyNightWeatherIcon.style.display = "initial"
            break;
        case "Cloudy":
            document.body.style.background = "url(/images/cloudynight.jpeg)"
            cloudyNightWeatherIcon.style.display = "initial"
            break;
        case "Overcast":
            document.body.style.background = "url(/images/cloudynight.jpeg)"
            cloudyNightWeatherIcon.style.display = "initial"
            break;
        case "Patchy rain possible":
            document.body.style.background = "url(/images/rainynight.jpg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Patchy light drizzle":
            document.body.style.background = "url(/images/rainynight.jpg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Light drizzle":
            document.body.style.background = "url(/images/rainynight.jpg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Freezing drizzle":
            document.body.style.background = "url(/images/rainynight.jpg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Heavy freezing drizzle":
            document.body.style.background = "url(/images/rainynight.jpg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Patchy light rain":
            document.body.style.background = "url(/images/rainynight.jpg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Light rain":
            document.body.style.background = "url(/images/rainynight.jpg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Patchy freezing drizzle possible":
            document.body.style.background = "url(/images/rainynight.jpg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Moderate or heavy rain with thunder":
            document.body.style.background = "url(/images/thundernight.jpg)"
            thunderWeatherIcon.style.display = "initial"
            break;
        case "Moderate or heavy snow with thunder":
            document.body.style.background = "url(/images/thundernight.jpg)"
            thunderWeatherIcon.style.display = "initial"
            break;
        case "Thundery outbreaks possible":
            document.body.style.background = "url(/images/thundernight.jpg)"
            thunderWeatherIcon.style.display = "initial"
            break;
        case "Patchy light rain with thunder":
            document.body.style.background = "url(/images/thundernight.jpg)"
            thunderWeatherIcon.style.display = "initial"
            break;
        case "Patchy light snow with thunder":
            document.body.style.background = "url(/images/thundernight.jpg)"
            thunderWeatherIcon.style.display = "initial"
            break;
        case "Light rain shower":
            document.body.style.background = "url(/images/rainynight.jpg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Light sleet showers":
            document.body.style.background = "url(/images/rainynight.jpg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Patchy sleet possible":
            document.body.style.background = "url(/images/rainynight.jpg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Light freezing rain":
            document.body.style.background = "url(/images/rainynight.jpg)"
            rainWeatherIcon.style.display = "initial"
            break;
        case "Moderate rain at times":
            document.body.style.background = "url(/images/rainynight.jpg)"
            showersWeatherIcon.style.display = "initial"
            break;
        case "Moderate or heavy rain shower":
            document.body.style.background = "url(/images/rainynight.jpg)"
            showersWeatherIcon.style.display = "initial"
            break;
        case "Moderate or heavy sleet showers":
            document.body.style.background = "url(/images/rainynight.jpg)"
            showersWeatherIcon.style.display = "initial"
            break;
        case "Moderate rain":
            document.body.style.background = "url(/images/rainynight.jpg)"
            showersWeatherIcon.style.display = "initial"
            break;
        case "Heavy rain at times":
            document.body.style.background = "url(/images/rainynight.jpg)"
            showersWeatherIcon.style.display = "initial"
            break;
        case "Heavy rain":
            document.body.style.background = "url(/images/rainynight.jpg)"
            showersWeatherIcon.style.display = "initial"
            break;
        case "Moderate or heavy freezing rain":
            document.body.style.background = "url(/images/rainynight.jpg)"
            showersWeatherIcon.style.display = "initial"
            break;
        case "Torrential rain shower":
            document.body.style.background = "url(/images/rainynight.jpg)"
            showersWeatherIcon.style.display = "initial"
            break;
        case "Mist":
            document.body.style.background = "url(/images/mistnight.jpg)"
            smogWeatherIcon.style.display = "initial"
            break;
        case "Fog":
            document.body.style.background = "url(/images/mistnight.jpg)"
            smogWeatherIcon.style.display = "initial"
            break;
        case "Freezing fog":
            document.body.style.background = "url(/images/mistnight.jpg)"
            smogWeatherIcon.style.display = "initial"
            break;
        case "Patchy snow possible":
            document.body.style.background = "url(/images/snownight.jpeg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Light sleet":
            document.body.style.background = "url(/images/snownight.jpeg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Moderate or heavy sleet":
            document.body.style.background = "url(/images/snownight.jpeg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Blowing snow":
            document.body.style.background = "url(/images/snownight.jpeg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Light snow":
            document.body.style.background = "url(/images/snownight.jpeg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Light snow showers":
            document.body.style.background = "url(/images/snownight.jpeg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Patchy moderate snow":
            document.body.style.background = "url(/images/snownight.jpeg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Moderate snow":
            document.body.style.background = "url(/images/snownight.jpeg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Moderate or heavy snow showers":
            document.body.style.background = "url(/images/snownight.jpeg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Patchy heavy snow":
            document.body.style.background = "url(/images/snownight.jpeg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Patchy light snow":
            document.body.style.background = "url(/images/snownight.jpeg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Heavy snow":
            document.body.style.background = "url(/images/snownight.jpeg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Ice pellets":
            document.body.style.background = "url(/images/snownight.jpeg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Light showers of ice pellets":
            document.body.style.background = "url(/images/snownight.jpeg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Moderate or heavy showers of ice pellets":
            document.body.style.background = "url(/images/snownight.jpeg)"
            snowWeatherIcon.style.display = "initial"
            break;
        case "Blizzard":
            document.body.style.background = "url(/images/snownight.jpeg)"
            snowWeatherIcon.style.display = "initial"
            break;
        }
    
    weatherScreen.style.background = "rgb(128, 128, 128, 0.4)"
    weatherMarquee.style.background = "rgb(128, 128, 128, 0.7)"
    weatherMarquee.style.color = "white"
    navbar.style.background = "rgb(128, 128, 128, 0.4)"
    navbar.style.color = "white"
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "100vh";
}

function populateWeatherScreen(){
    const date = new Date();
    let day = date.getDay();

    switch(day){
        case 0:
            dayText.innerText = "Sunday"
            break;
        case 1:
            dayText.innerText = "Monday"
            break;
        case 2:
            dayText.innerText = "Tuesday"
            break;
        case 3:
            dayText.innerText = "Wednesday"
            break;
        case 4:
            dayText.innerText = "Thursday"
            break;
        case 5:
            dayText.innerText = "Friday"
            break;
        case 6:
            dayText.innerText = "Saturday"
            break;
    }
    }

    