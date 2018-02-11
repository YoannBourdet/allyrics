import axios from 'axios';

export default value => {
  const apiResponse = axios.get('/api/search', {
    params: {
      search: value,
    },
  });
  return Promise.resolve(apiResponse).then(({ data }) => data);
};
