import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionSearch from '../../actions/search';
import * as actionHistory from '../../actions/history';
import * as actionHits from '../../actions/hits';

import { debounce } from '../../utils';

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
      actions.hits.fetch(search);
    });
  }

  handleOnChange(e) {
    e.persist();
    const { value } = e.target;
    const { actions } = this.props;
    actions.search.update(value);
    this.fetchHits(value);
  }

  // https://stackoverflow.com/questions/23123138/perform-debounce-in-react-js
  fetchHits = debounce(async value => {
    const { actions } = this.props;
    await actions.hits.fetch(value);
    actions.history.push(value);
  }, 300);

  render() {
    const { value } = this.props;
    return (
      <div style={{ margin: '30px 0' }} key="filter-1">
        <input
          type="text"
          placeholder="Search"
          onChange={e => this.handleOnChange(e)}
          value={value}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  actions: PropTypes.shape({
    search: PropTypes.object,
  }),
  value: PropTypes.string,
};
