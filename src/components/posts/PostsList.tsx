import { FC } from 'react';
import { Post } from '../../types/Post';
import { List } from 'antd';
import { PostItem } from './PostItem';

interface Props {
  posts?: Post[];
}

export const PostsList: FC<Props> = ({ posts }) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        pageSize: 3,
      }}
      dataSource={posts}
      renderItem={(item) => <PostItem post={item} />}
    />
  );
};
