import fetch from 'cross-fetch';

export const SELECT_CITY = 'SELECT_CITY';
export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const selectCity = city => ({type: SELECT_CITY, payload: city});
export const requestWeather = city => ({type: REQUEST_WEATHER, payload: city});
export const fetchWeatherSuccess = (city, data) =>
  ({type: FETCH_WEATHER_SUCCESS, payload: {city, data}});
export const fetchWeatherFailure = (city, data) =>
  ({type: FETCH_WEATHER_FAILURE, payload: {city, data}, error: true});

// Async actions
const fetchWeather = city => dispatch => {
  dispatch(requestWeather(city));
  return fetch(`api.openweathermap.org/data/2.5/weather?q=${city}`)
    .then(
      response => response.json(),
      error => dispatch(fetchWeatherFailure(city, error))
    )
    .then(data => dispatch(fetchWeatherSuccess(city, data)));
};

const shouldFetchWeather = (state, city) =>
  state.weatherPerCity[city.toLowerCase()];

export const fetchWeatherIfNeeded = city => (dispatch, getState) =>
  shouldFetchWeather(getState(), city) ?
    dispatch(fetchWeather(city)) : Promise.resolve();