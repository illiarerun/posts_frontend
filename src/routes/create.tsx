import { Flex, Typography } from 'antd';
import { CreatePostForm } from '../components/forms/CreatePostForm';

export const CreatePost = () => {
  return (
    <Flex vertical align="center" gap={16}>
      <Typography.Title level={3}>Create a Post</Typography.Title>
      <CreatePostForm />
    </Flex>
  );
};
