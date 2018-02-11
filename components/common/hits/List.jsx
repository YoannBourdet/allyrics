import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Hit from './Hit';

@connect(({ search: { hits } }) => ({ hits }))
export default class HitsList extends Component {
  render() {
    const { hits } = this.props;
    return hits.length ? (
      hits.map(({ result }) => (
        <Hit key={result.id} title={result.title} picture={result.song_art_image_thumbnail_url} />
      ))
    ) : (
      <p>Please, make search...</p>
    );
  }
}

HitsList.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.object),
};
