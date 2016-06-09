import $ from 'jquery';

const OPEN_WEATHER_API_KEY = '89bcb1*************06c654a739';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},si`;
    const request = $.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}