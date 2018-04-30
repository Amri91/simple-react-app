import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {Router, Route, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import injectSheet from 'react-jss';
import configureStore from '../../configureStore'
import Home from '../Home'
import WeatherDetail from '../WeatherDetail'
import {WEATHER_PAGE} from '../../globals'

import styles from './styles'
import PropTypes from "prop-types";

const history = createHistory();

const store = configureStore();

@injectSheet(styles)
export default class Root extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className={this.props.classes.app}>
            <Switch>
              <Route path={WEATHER_PAGE} component={WeatherDetail} />
              <Route component={Home} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}
