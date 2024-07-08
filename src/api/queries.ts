import { useQuery } from 'react-query';
import { getAllPosts, getOnePost } from './posts';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      getAllPosts().then((posts) => {
        return posts.sort((a, b) => {
          const aCreationTime = a.inserted_at
            ? new Date(a.inserted_at)
            : new Date();
          const bCreationTime = b.inserted_at
            ? new Date(b.inserted_at)
            : new Date();

          return bCreationTime.getTime() - aCreationTime.getTime();
        });
      }),
  });
};

export const usePost = (id: number) => {
  return useQuery({
    queryKey: ['post'],
    queryFn: () => getOnePost(id),
  });
};
