import { Flex, Typography } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useOpenNotification } from '../contexts/NotificationContext';
import { usePost } from '../api/queries';
import { Loader } from '../components/layout/Loader';
import { EditPostForm } from '../components/forms/EditPostForm';

export const EditPost = () => {
  const { id } = useParams();
  const openNotification = useOpenNotification();
  const navigate = useNavigate();

  if (!id) {
    openNotification({
      type: 'error',
      message: `Please provide "id" in url, example: /edit/56`,
    });

    navigate('/');
  }

  const { data, isLoading, error } = usePost(Number(id));

  if (isLoading) {
    return <Loader loading />;
  }

  if (error || !data) {
    openNotification({
      type: 'error',
      message: `Post with id:${id} not found!`,
      description: `Details: ${(error as Error).message}`,
    });

    navigate('/');
  }

  return (
    data && (
      <Flex vertical align="center" gap={16}>
        <Typography.Title level={3}>Update a Post</Typography.Title>
        <EditPostForm post={data} />
      </Flex>
    )
  );
};
