import React, { Component } from 'react';

export default class Home extends React.Component{
  render() {
    const { heading } = this.props;

    return (
      <h2>{heading}</h2>
    );
  }
}

Home.defaultProps = {
  heading: 'Hello there'
};