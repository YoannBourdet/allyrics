const axios = require('axios');
const config = require('../../config');

module.exports = (path, query, options = {}) =>
  axios(
    Object.assign(
      {},
      {
        method: 'get',
        baseURL: config.genius.apiUrl,
        url: `/${path}`,
        headers: {
          Authorization: `Bearer ${config.genius.clientAccessToken}`,
        },
      },
      {
        params: query,
      },
      options,
    ),
  );
