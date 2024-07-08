import { Post, PostFields } from '../types/Post';
import { create, deleteRecord, getAll, getOne, update } from './client';

export const getOnePost = async (id: number) => {
  return getOne<Post>('posts', id);
};

export const getAllPosts = async () => {
  return getAll<Post>('posts');
};

export const createPost = async (postData: PostFields) => {
  return create<Post>('posts', { post: postData });
};

export const updatePost = async (id: number, postData: PostFields) => {
  return update<Post>('posts', id, postData);
};

export const deletePost = async (id: number) => {
  return deleteRecord('posts', id);
};
