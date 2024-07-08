import { useMutation } from 'react-query';
import { PostFields } from '../types/Post';
import { createPost } from './posts';

export const useCreatePost = () => {
  return useMutation({
    mutationKey: 'createPost',
    mutationFn: (newPost: PostFields) => createPost(newPost),
  });
};
