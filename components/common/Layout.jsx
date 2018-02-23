import React, { Component } from 'react';
import Filter from './Filter';
import List from './hits/List';

export default class Layout extends Component {
  render() {
    return [
      <h1 key="layout-1">Search in Genius</h1>,
      <Filter key="layout-2" />,
      <hr key="layout-3" />,
      <List key="layout-4" />,
    ];
  }
}
