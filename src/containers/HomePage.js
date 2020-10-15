import React, {useState,useMemo, useEffect} from "react";
import axios from "axios";
import Header from '../components/Header';
import {useHistory} from 'react-router-dom';
import WeatherImage from '../components/WeatherImage';
const weatherKey ='de31a0b0a6e1af73ab6b39a400c42684';

function HomePage() {
  const history = useHistory();
  const [weatherData,setWeatherData]=useState(null);
  const [city,setCity]=useState("Amsterdam");
  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`)
    .then(function(response){
      setWeatherData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {

    });
  },[city]);
  useEffect (()=>{
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const city = urlParams.get("city");
    if(city){
      setCity(city);
    }
    console.log("city",city)
  },[history]);
  const { cityName,cloudiness,currentTemp, highTemp,humidity, lowTemp, weatherType, windSpeed } = useMemo(()=>{
    let cloudiness = "";
    let currentTemp = "";
    let highTemp = "";
    let humidity ="";
    let lowTemp = "";
    let weatherType = "";
    let windSpeed = "";
    let cityName = "";
    if(weatherData){
      cityName = `${weatherData.name}`;
      cloudiness = `${weatherData.clouds.all}%`;
      currentTemp = `${weatherData.main.temp}`;
      highTemp = `${weatherData.main.temp_max}`;
      humidity =`${weatherData.main.humidity}%`;
      lowTemp = `${weatherData.main.temp_min}`;
      weatherType = `${weatherData.weather[0].description}`;
      windSpeed = `${weatherData.wind.speed} km/h`;
    }
    return {
      cityName,
      currentTemp,
      highTemp,
      lowTemp,
      weatherType,
      cloudiness,
      windSpeed,
      humidity
    };
  },[weatherData]);

  return (
   
    <div>
      <Header />
      <main className="Home">
      <h2>Weather in <span>{city}</span></h2>
        <div className="WeatherInfo">
          <div className="WeatherInfoBasic">
            <div className="WeatherInfoImage">
                <WeatherImage weatherType={weatherType} />
            </div>
            <p className="WeatherInfoType">{weatherType}</p>
            <h3 className="Label">Current Temperature:</h3>
            <p className="WeatherInfoTemperature">{currentTemp}</p>
          </div>
          <div className="WeatherInfoExtra">
            <div className="WeatherInfoExtra_Column">
              <h3 className="Label">High Temperature:</h3>
              <p className="WeatherInfoTemperature_Small">{highTemp}</p>
              <h3 className="Label">Low Temperature:</h3>
              <p className="WeatherInfoTemperature_Small">{lowTemp}</p>
            </div>
          
          
            <div className="WeatherInfoExtra_Column">
              <h3 className="Label">Cloudiness: </h3>
              <p className="WeatherInfoTemperature_Small">{cloudiness}</p>
              <h3 className="Label">Humidity: </h3>
              <p className="WeatherInfoTemperature_Small">{humidity}</p>
              <h3 className="Label">Wind Speed: </h3>
              <p className="WeatherInfoTemperature_Small">{windSpeed}</p>
            </div>
          
          </div> 
        </div>
      </main>
      
    </div>
  );
}

export default HomePage;
