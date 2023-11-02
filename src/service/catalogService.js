import data from '../data.json';

const getCatalogs = () => {
  return Promise.resolve(data);
}

export const catalogService = {
  getCatalogs,
};