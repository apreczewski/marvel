import api, { CancelToken } from './api';

export const getList = () => {
  const source = CancelToken.source();

  const call = () => {
    return api.get('');
  }

  return { source, call };
};
