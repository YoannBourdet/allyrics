import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as search from '../../actions/search';

const mapDispatchToProps = dispatch => ({
  actions: {
    search: bindActionCreators(search, dispatch),
  },
});

@connect(null, mapDispatchToProps)
export default class Filter extends Component {
  handleOnChange(e) {
    const { actions } = this.props;
    actions.search.makeSearch(e.target.value);
  }

  render() {
    return <input type="text" placeholder="Search" onChange={e => this.handleOnChange(e)} />;
  }
}

Filter.propTypes = {
  actions: PropTypes.shape({
    search: PropTypes.object,
  }),
};
