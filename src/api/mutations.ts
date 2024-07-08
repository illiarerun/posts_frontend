import { useMutation } from 'react-query';
import { PostFields } from '../types/Post';
import { createPost, deletePost, updatePost } from './posts';

interface UpdateVariables {
  id: number;
  newPostFields: Partial<PostFields>;
}

export const useCreatePost = () => {
  return useMutation({
    mutationKey: 'createPost',
    mutationFn: (newPost: PostFields) => createPost(newPost),
  });
};

export const useEditPost = () => {
  return useMutation({
    mutationKey: 'updatePost',
    mutationFn: ({ id, newPostFields }: UpdateVariables) =>
      updatePost(id, newPostFields),
  });
};

export const useDeletePost = () => {
  return useMutation({
    mutationKey: 'deletePost',
    mutationFn: (id: number) => deletePost(id),
  });
};
