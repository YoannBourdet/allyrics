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
    return [
      <div style={{ margin: '30px 0' }} key="filter-1">
        <input type="text" placeholder="Search" onChange={e => this.handleOnChange(e)} />
      </div>,
      <hr key="filter-2" />,
    ];
  }
}

Filter.propTypes = {
  actions: PropTypes.shape({
    search: PropTypes.object,
  }),
};
