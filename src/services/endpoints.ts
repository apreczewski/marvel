import { CancelTokenSource, AxiosResponse } from 'axios';
import api, { CancelToken } from './api';

interface ICharacter {
  nameStartsWith?: string;
  limit?: number;
}

interface ICharacters {
  source: CancelTokenSource;
  call({ nameStartsWith, limit }?: ICharacter): Promise<AxiosResponse>;
}

export const getListToType = (typeCurrent: string): ICharacters => {
  const source = CancelToken.source();

  const call = ({ nameStartsWith, limit }: ICharacter) => {
    return api.get(`/${typeCurrent}`, {
      params: {
        nameStartsWith,
        limit,
      },
      cancelToken: source.token,
    });
  }

  return { source, call };
};

export const getTypeById = (typeCurrent: string, id: string): ICharacters => {
  const source = CancelToken.source();

  function call() {
    return api.get(`/${typeCurrent}/${id}`, {
      cancelToken: source.token,
    });
  }

  return { source, call };
};

export const getListTypeById = (typeCurrent: string, typeSearch: string, id: string): ICharacters => {
  const source = CancelToken.source();

  function call() {
    return api.get(`/${typeCurrent}/${id}/${typeSearch}`, {
      params: {
        limit: 100,
      },
      cancelToken: source.token,
    });
  }

  return { source, call };
};
