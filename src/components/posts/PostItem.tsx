import { Button } from 'antd';
import Item, { Meta } from 'antd/es/list/Item';
import { FC } from 'react';
import { Post } from '../../types/Post';

interface Props {
  post: Post;
}

export const PostItem: FC<Props> = ({ post }) => {
  return (
    <Item key={post.id} actions={[<Button>Edit</Button>]}>
      <Meta
        title={post.title}
        description={
          post?.inserted_at ? new Date(post?.inserted_at).toDateString() : null
        }
      />
      {post.body}
    </Item>
  );
};
