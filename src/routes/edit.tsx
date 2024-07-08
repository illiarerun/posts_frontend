import { Flex, Typography } from 'antd';
import { Loader } from '../components/layout/Loader';
import { EditPostForm } from '../components/forms/EditPostForm';
import { usePostFromRoute } from '../hooks/usePostFromRoute';

export const EditPost = () => {
  const { data, isLoading } = usePostFromRoute();

  if (isLoading) {
    return <Loader loading />;
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
