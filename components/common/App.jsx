import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';

const Layout = Loadable({
  loader: () => import('./layout'),
  loading: Loading,
});

export default () => <Layout />;
