const inputbox = document.querySelector(".input-box");
const searchbtn = document.querySelector("button");
const image = document.querySelector(".image");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const windspeed = document.querySelector("#wind-speed");
const loction404 = document.querySelector(".head");


async function checkweather(city){
    const api_key="5d3cabe4a1c8adcdfeaeb4c2e1e2b76b";
    const  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(Response =>Response.json());

    if(weather_data.cod === `404`){
        // console.log("error");
        loction404.style.display = 'flex';
        image.style.display ='none';
        return;
     }
     loction404.style.display = 'none';

     image.style.display ='flex';
     
     temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

     description.innerHTML = `${weather_data.weather[0].description}`;

     humidity.innerHTML = `${weather_data.main.humidity}%`;
     windspeed.innerHTML = `${weather_data.wind.speed}Km/hr`;

     
     
     switch(weather_data.weather[0].main){
        case `Clouds`:
            image.src = "./image/cloud.png";
            break;
        case `Rain`:
            image.src = ".image/rain.png";
            break;
        case `Snow`:
                image.src = ".image/snow.png";
                break;
        case `Clear`:
                    image.src = ".image/clear.png";
        

                    break;
        case `Haze`:
                    image.src = ".image/haze.png";

                    break;
        case `Mist`:
                    image.src = ".image/mist.png";
                    break;
     }

     console.log(weather_data);
}

searchbtn.addEventListener('click',()=>{
    checkweather(inputbox.value);
});

inputbox.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        checkweather(inputbox.value);
    }
});




