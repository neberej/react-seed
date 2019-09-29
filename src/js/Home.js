import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Header from '@components/header/Header';
import Content from '@components/content/Content';

class Home extends React.Component{
  render() {
    const { heading } = this.props;

    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default hot(Home);
