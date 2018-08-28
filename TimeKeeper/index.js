/**
 * TimeKeeper
 * @flow
 */

import React from 'react';
import { connect } from 'react-redux';

import { updateReduxTime } from './services/actions';

type Props = {
  updateFrequency?: number
}

class TimeKeeper extends React.PureComponent<Props> {
  static defaultProps = {
    updateFrequency: 6000 // update every minute unless specified
  };

  componentDidMount() {
    const { updateFrequency, updateTime } = this.props;
    updateTime(this.currentTime());

    this.timerId = setInterval(
      () => updateTime(this.currentTime()),
      updateFrequency
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  currentTime = () => {
    return new Date().toISOString();
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  updateTime: currentTime =>
    dispatch(updateReduxTime(currentTime))
})

export default connect(null, mapDispatchToProps)(TimeKeeper);