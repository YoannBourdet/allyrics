import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';

@connect(({ search }) => ({ search }))
export default class Layout extends Component {
  render() {
    return [<h1 key="title">Search in Genius</h1>, <Filter key="search" />];
  }
}
