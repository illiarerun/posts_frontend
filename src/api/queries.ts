import { useQuery } from 'react-query';
import { getAllPosts } from './posts';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => getAllPosts(),
  });
};
