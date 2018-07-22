import React, { Component } from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import {warped} from 'warped-components';
import styles from './styles'
import Home from '../Home'
import WeatherDetail from '../WeatherDetail'
import {WEATHER_PAGE} from '../../globals'

const history = createHistory();

@injectSheet(styles)
class Root extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <Router history={history}>
        <div className={this.props.classes.app}>
          <Switch>
            <Route path={WEATHER_PAGE} component={WeatherDetail} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default warped({})(Root);
