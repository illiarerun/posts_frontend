import { CollectionResponse, SingularResponse } from './types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

export const buildUrl = (resourceName: string, id?: number) => {
  return API_URL + `/${resourceName}/${id ? id : ''}`;
};

export const processSingleResponse = <T extends object = object>(response: {
  data: SingularResponse<T>;
}): T => {
  return response.data.data;
};

export const processCollectionResponse = <T extends object = object>(response: {
  data: CollectionResponse<T>;
}): T[] => {
  return response.data.data;
};
