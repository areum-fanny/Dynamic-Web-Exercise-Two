import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faCloud,
    faCloudRain,
    faSun, 
    faSmog,
    faRainbow,
    faCloudMeatball,
    faSnowflake
} from "@fortawesome/free-solid-svg-icons";

function WeatherImage({weatherType}) {
    switch(weatherType){
        case 'clear sky':
            return <FontAwesomeIcon icon={faSun}/>;
        case 'scattered clouds':
            return <FontAwesomeIcon icon={faCloudMeatball}/>;
        case 'light rain ':
            return <FontAwesomeIcon icon={faCloudRain}/>;
        case 'freezing rain':
            return <FontAwesomeIcon icon={faSnowflake}/>;
        case 'light snow':
            return <FontAwesomeIcon icon={faSnowflake}/>;
        default:
            return <FontAwesomeIcon icon={faCloud}/>;
    }
}

export default WeatherImage;