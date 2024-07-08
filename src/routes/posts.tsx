import { PostsList } from '../components/posts/PostsList';
import { usePosts } from '../api/queries';
import { Loader } from '../components/layout/Loader';
import { Flex } from 'antd';
import { NavButton } from '../components/ui/NavButton';
import { useOpenNotification } from '../contexts/NotificationContext';

export const Posts = () => {
  const { data, error, isLoading } = usePosts();
  const openNotification = useOpenNotification();

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

  return (
    <Flex vertical gap={16} align="center">
      <NavButton to="create">Create New Post</NavButton>
      <PostsList posts={data} />
    </Flex>
  );
};
