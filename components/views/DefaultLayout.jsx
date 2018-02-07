import React from 'react';
import App from '../common/App';

const DefaultLayout = () => (
  <html lang="fr">
    <head>
      <title>test</title>
    </head>
    <body>
      <div className="main">
        <App />
      </div>
      <script src="/static/client.js" />
    </body>
  </html>
);

export default DefaultLayout;
