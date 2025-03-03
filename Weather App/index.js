const apiurl = "https://api.openweathermap.org/data/2.5/weather?&appid=3fc9f2960b1e5a69d2f2cd2be4640d7d&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiurl + city);
    var data = await response.json();
    // console.log(data);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }
    else{

        document.querySelector(".city").textContent = data.name;
        document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").textContent = data.main.humidity + "%";
        document.querySelector(".wind").textContent = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src="images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src="images/clear.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src="images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src="images/mist.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src="images/rain.png";
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src="images/snow.png";
        }else if(data.weather[0].main == "Haze"){
            weatherIcon.src="images/haze.png";
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})