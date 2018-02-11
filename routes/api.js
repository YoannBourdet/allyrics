const express = require('express');
const axios = require('axios');
const reqHttp = require('../services/server/reqHttp');

/* Intercept requests or responses before they are handled by then or catch. */
axios.interceptors.response.use(response => response, error => Promise.reject(error));
const router = express.Router();

router.get('/search', async (req, res) => {
  const { data } = await reqHttp('search', {
    q: req.query.search,
  });

  res.send(data.response.hits);
});

module.exports = router;
