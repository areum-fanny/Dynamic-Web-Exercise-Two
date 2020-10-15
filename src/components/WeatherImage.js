import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faCloud,
    faCloudRain,
    faSun, 
    faSmog,
    faRainbow,
    faCloudMeatball
} from "@fortawesome/free-solid-svg-icons";

function WeatherImage({weatherType}) {
    switch(weatherType){
        case 'clear sky':
            return <FontAwesomeIcon icon={faSun}/>;
        case 'scattered clouds':
            return <FontAwesomeIcon icon={faCloudRain}/>;
        case 'clouds':
            return <FontAwesomeIcon icon={faCloudRain}/>;
        default:
            return <FontAwesomeIcon icon={faCloudMeatball}/>;
    }
}

export default WeatherImage;