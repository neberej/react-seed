import React, { Component } from 'react';

export default class Content extends React.Component{
  render() {
    const { heading } = this.props;

    return (
      <p>{heading}</p>
    );
  }
}

Content.defaultProps = {
  heading: 'This is a content'
};