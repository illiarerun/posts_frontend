import {
  buildUrl,
  processCollectionResponse,
  processSingleResponse,
} from './helpers';
import axios from 'axios';

export const getOne = async <T extends object = object>(
  resourceName: string,
  id: number
): Promise<T> => {
  const response = await axios.get(buildUrl(resourceName, id));

  return processSingleResponse<T>(response);
};

export const getAll = async <T extends object = object>(
  resourceName: string
): Promise<T[]> => {
  const response = await axios.get(buildUrl(resourceName));

  return processCollectionResponse<T>(response);
};

export const create = async <T extends object = object>(
  resourceName: string,
  resource: T
): Promise<T> => {
  const response = await axios.post(buildUrl(resourceName), resource);

  return processSingleResponse<T>(response);
};

export const update = async <T extends object = object>(
  resourceName: string,
  id: number,
  resource: T
): Promise<T> => {
  const response = await axios.post(buildUrl(resourceName, id), resource);

  return processSingleResponse<T>(response);
};

export const deleteRecord = async (
  resourceName: string,
  id: number
): Promise<boolean> => {
  const response = await axios.post(buildUrl(resourceName, id));

  if (response.status !== 204) {
    return false;
  }

  return true;
};
