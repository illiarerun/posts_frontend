import { FC } from 'react';
import { Post } from '../../types/Post';
import { List } from 'antd';
import { PostItem } from './PostItem';
import './PostsList.css';

interface Props {
  posts?: Post[];
}

export const PostsList: FC<Props> = ({ posts }) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        pageSize: 4,
      }}
      dataSource={posts}
      className="list-container"
      renderItem={(item) => <PostItem post={item} />}
    />
  );
};
