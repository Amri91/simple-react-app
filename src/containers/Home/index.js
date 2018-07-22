import React, { Component } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';
import sunImage from './assets/sun.svg'
import cloudImage from './assets/cloud.svg'
import styles from './styles'
import {WEATHER_PAGE} from '../../globals'

import {warped} from 'warped-components';
import {reducer, effects, selectors, actions} from './state';

@withRouter
@injectSheet(styles)
class Home extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    selectCity: PropTypes.func.isRequired,
    weatherPerCityState: PropTypes.object.isRequired,
    loadCityWeather: PropTypes.func.isRequired,
    history: PropTypes.any.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = e => {
    this.setState({value: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    const selectedCity = this.state.value.toLowerCase();
    this.props.selectCity(selectedCity);
    if(!this.props.weatherPerCityState[selectedCity]) {
      this.props.loadCityWeather(selectedCity);
    }
    this.props.history.push(WEATHER_PAGE);
  };

  render() {
    const {component, form, sun, cloud, sunAndCloud} = this.props.classes;
    return (
      <div className={component}>
          <div className={sunAndCloud}>
            <img src={sunImage} alt="The Sun" className={sun} />
            <img src={cloudImage} alt="A cloud" className={cloud} />
          </div>
          <div className={form}>
            <form onSubmit={this.handleSubmit}>
              <span>What's the weather like in </span>
              <input
                type="text" value={this.state.value} onChange={this.handleChange}
                autoFocus={true}
              />
              ?
              <button type="submit" hidden>Submit</button>
            </form>
          </div>
      </div>
    )
  }
}

// TODO warped() produces bad error
export default warped({reducer, effects, selectors, actions})(Home);
