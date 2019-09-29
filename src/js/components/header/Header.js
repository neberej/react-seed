import React, { Component } from 'react';

export default class Header extends React.Component{
  render() {
    const { heading } = this.props;

    return (
      <h2>{heading}</h2>
    );
  }
}

Header.defaultProps = {
  heading: 'Hello there'
};