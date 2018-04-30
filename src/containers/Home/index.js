import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';
import sunImage from './assets/sun.svg'
import cloudImage from './assets/cloud.svg'
import {fetchWeatherIfNeeded} from '../../actions'
import styles from './styles'
import {WEATHER_PAGE} from '../../globals'

@withRouter
@injectSheet(styles)
@connect(
  ({citySelected}) => ({citySelected}),
  dispatch => bindActionCreators({fetchWeatherIfNeeded}, dispatch)
)
export default class Home extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    fetchWeatherIfNeeded: PropTypes.func.isRequired
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
    this.props.fetchWeatherIfNeeded(this.state.value);
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