import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import Loading from '../Loading';

const Item = Loadable({
  loader: () => import('./Item'),
  loading: Loading,
});

@connect(({ hits: { datas } }) => ({ datas }))
export default class HitsList extends Component {
  render() {
    const { datas } = this.props;
    return datas.length ? (
      datas.map(({ result }) => (
        <Item key={result.id} title={result.title} picture={result.song_art_image_thumbnail_url} />
      ))
    ) : (
      <p>Please, make search...</p>
    );
  }
}

HitsList.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object),
};
