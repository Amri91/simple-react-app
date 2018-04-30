import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';
import styles from './styles'
import cloudyDay from './assets/cloudyDay.svg'
import verticalLine from './assets/verticalLine.svg'

@withRouter
@injectSheet(styles)
@connect(
  // ({citySelected}) => ({citySelected}),
  // dispatch => bindActionCreators({fetchWeatherIfNeeded}, dispatch)
)
export default class WeatherDetail extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
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
              <span>Rotterdam, Netherlands</span>
            </div>
            <div className={date}>
              <span>27 April, 2018</span>
            </div>
          </div>
        </div>
        <div className={body}>
          Body is here
        </div>
      </div>
    )
  }
}
