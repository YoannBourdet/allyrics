import React from 'react';
import ReactDOMServer from 'react-dom/server';
import DefaultLayout from '../views/DefaultLayout';

/* eslint no-unused-vars: 0 */
export default function serverRenderer({ clientStats, serverStats }) {
  return (req, res) => {
    const html = ReactDOMServer.renderToString(<DefaultLayout />);
    res.status(200).send(`<!doctype html>${html}`);
  };
}
