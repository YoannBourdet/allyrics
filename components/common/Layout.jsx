import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';

const LayoutCore = Loadable.Map({
  loader: {
    Filter: () => import('./Filter'),
    HitList: () => import('./hits/List'),
  },
  loading: Loading,
  render(loaded) {
    const Filter = loaded.Filter.default;
    const HitList = loaded.HitList.default;
    return [<h1>Search in Genius</h1>, <Filter />, <HitList />];
  },
});

export default () => <LayoutCore />;
