import api from '../api/api';

const getMovies = ({ query, pageNumber }) => {
  return api.get('', {
    params: {
      s: query,
      type: 'movie',
      page: pageNumber,
    },
  });
};

export default getMovies;
