import { Loader } from '../components/layout/Loader';
import { Flex } from 'antd';
import { NavButton } from '../components/ui/NavButton';
import { usePostFromRoute } from '../hooks/usePostFromRoute';
import { PostContent } from '../components/posts/PostsContent/PostContent';

export const PostPage = () => {
  const { data, isLoading } = usePostFromRoute();

  if (isLoading) {
    return <Loader loading />;
  }

  return (
    data && (
      <Flex vertical gap={16} align="center">
        <NavButton to="create">Create New Post</NavButton>
        <PostContent post={data} />
      </Flex>
    )
  );
};
