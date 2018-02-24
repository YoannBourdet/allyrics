import axios from 'axios';

export default async value => {
  const { data } = await axios.get('/api/search', {
    params: {
      search: value,
    },
  });
  return data;
};
