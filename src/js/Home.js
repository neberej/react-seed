import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

class Home extends React.Component{
  render() {
    const { heading } = this.props;

    return (
      <h2>{heading}</h2>
    );
  }
}

export default hot(Home);

Home.defaultProps = {
  heading: 'Hello there'
};