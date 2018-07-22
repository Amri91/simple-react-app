import React, { Component } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';
import {warped} from 'warped-components';
import styles from './styles'
import cloudyDay from './assets/cloudyDay.svg'
import verticalLine from './assets/verticalLine.svg'
import {selectors, reducer, actions, effects} from '../Home/state';

@withRouter
@injectSheet(styles)
class WeatherDetail extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    weatherPerCityState: PropTypes.object.isRequired,
    citySelectedState: PropTypes.string.isRequired
  };

  render() {
    const {
      component, header, address, date, left, right, body
    } = this.props.classes;
    return (
      <div className={component}>
        <div className={header}>
          <div className={left}>
            <img src={cloudyDay} alt="Weather icon" />
            <img src={verticalLine} alt="vertical line" />
          </div>
          <div className={right}>
            <div className={address}>
              <span>{this.props.citySelectedState}</span>
            </div>
            <div className={date}>
              <span>27 April, 2018</span>
            </div>
          </div>
        </div>
        <div className={body}>
          {JSON.stringify(this.props.weatherPerCityState)}
        </div>
      </div>
    )
  }
}

export default warped({selectors, reducer, actions, effects})(WeatherDetail);
