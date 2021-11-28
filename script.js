let weather = {
    'apiKey' : "3be164266abfbbaf73614f0997710133",
    fetchWeather: function(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`)
        .then((response)=> response.json())
        .then((data)=> this.displayWeather(data)) 
    },
    displayWeather: function(data){
        // Using destructuring:
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);

        //Dom manipulation for inserting data into DOM ****************************

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").setAttribute("src", `https://openweathermap.org/img/wn/${icon}.png`);
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = ((temp - 273).toFixed(1))+" ˚C";
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed : " + speed + " km/h";
    }
};

document.querySelector(".search-bar")