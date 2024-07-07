import { PostsList } from '../components/posts/PostsList';
import { usePosts } from '../api/queries';
import { Loader } from '../components/layout/Loader';
import { useNotification } from '../hooks/useNotification';

export const Posts = () => {
  const { data, error, isLoading } = usePosts();
  const { openNotification } = useNotification();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    openNotification({
      message: 'Error',
      type: 'error',
      description: (error as Error).message,
    });
  }

  return <PostsList posts={data} />;
};
