import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';

const LoadableLayout = Loadable({
  loader: () => import('./Layout'),
  loading: Loading,
});

export default () => <LoadableLayout />;
