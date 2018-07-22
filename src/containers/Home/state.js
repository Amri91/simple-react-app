import {createReducer, noopAction} from 'warped-reducers';
import {lensProp, compose, set, view, prop, equals, flip} from 'ramda';
import {defaultTo} from '../../reducers/utils';

const APPID = '123';

const appLens = lensProp('App');

const citySelectedState = compose(
  appLens,
  lensProp('citySelected'),
  defaultTo('No city selected')
);

const weatherPerCityState = compose(
  appLens,
  lensProp('weatherPerCity'),
  defaultTo({})
);

export const {types, actions, reducer} = createReducer('App')({
  loadCityWeather: noopAction,
  selectCity: set(citySelectedState),
  setCityWeather: ({city, body}) => flip(set)(body)(compose(weatherPerCityState, lensProp(city)))
});

const isLoadData = compose(equals(types.loadCityWeather), prop('type'));

export const effects = ({action, http}) => ({
  // load actions trigger this
  http: action.filter(isLoadData).map(({payload}) => ({
    url:
      `https://api.openweathermap.org/data/2.5/weather?q=${payload}&APPID=${APPID}`,
    category: types.loadCityWeather,
    city: payload
  })),
  // load responses trigger this
  // TODO: check if action is available
  action: http.select(types.loadCityWeather).flatten().map(
    ({body, request: {city}}) => actions.setCityWeather({city, body})
  )
});

export const selectors = {
  citySelectedState: view(citySelectedState),
  weatherPerCityState: view(weatherPerCityState)
};
