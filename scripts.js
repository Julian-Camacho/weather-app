const apiKey = "d68c5e54a4ff6b0e9733837d44be82b3";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const citiName = document.querySelector("#search input");
const btn = document.querySelector("#search button");
const icon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    // console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        icon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        icon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        icon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        icon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        icon.src = "images/mist.png";
    }

}

btn.addEventListener("click", () => {
    checkWeather(citiName.value);
})

citiName.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        checkWeather(citiName.value);
    }
})
