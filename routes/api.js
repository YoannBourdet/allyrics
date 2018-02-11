const express = require('express');
const axios = require('axios');
const config = require('../config');

/* Intercept requests or responses before they are handled by then or catch. */
axios.interceptors.response.use(response => response, error => Promise.reject(error));
const router = express.Router();

router.get('/search', async (req, res) => {
  const { data } = await axios({
    method: 'get',
    baseURL: config.genius.apiUrl,
    url: '/search',
    headers: {
      Authorization: `Bearer ${config.genius.clientAccessToken}`,
    },
    params: {
      q: req.query.search,
    },
  });

  res.send(data.response.hits);
});

module.exports = router;
