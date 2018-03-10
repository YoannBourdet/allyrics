import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionSearch from '../../actions/search';
import * as actionHistory from '../../actions/history';
import * as actionHits from '../../actions/hits';

const mapDispatchToProps = dispatch => ({
  actions: {
    search: bindActionCreators(actionSearch, dispatch),
    history: bindActionCreators(actionHistory, dispatch),
    hits: bindActionCreators(actionHits, dispatch),
  },
});

@connect(({ search: { value } }) => ({ value }), mapDispatchToProps)
export default class Filter extends Component {
  componentDidMount() {
    const { value, actions } = this.props;
    actions.history.replace(value);
    actions.history.onPop(({ state: { search } }) => {
      actions.search.update(search);
    });
  }

  handleOnChange(e) {
    const { value } = e.target;
    const { actions } = this.props;
    actions.search.update(value);
    actions.history.push(value);
  }

  render() {
    const { value } = this.props;
    return [
      <div style={{ margin: '30px 0' }} key="filter-1">
        <input
          type="text"
          placeholder="Search"
          onChange={e => this.handleOnChange(e)}
          value={value}
        />
      </div>,
      <hr key="filter-2" />,
    ];
  }
}

Filter.propTypes = {
  actions: PropTypes.shape({
    search: PropTypes.object,
  }),
  value: PropTypes.string,
};
